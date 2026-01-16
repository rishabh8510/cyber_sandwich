import React, { useState, useEffect } from 'react';
import { 
  Card, 
  Form, 
  Input, 
  InputNumber, 
  Button, 
  message, 
  Divider, 
  Typography, 
  Steps, 
  Modal,
  Space,
  Badge,
  Tag,
  Alert,
  Result,
  Row,
  Col,
  Progress
} from 'antd';
import { 
  PhoneOutlined, 
  UserOutlined, 
  DollarOutlined, 
  IdcardOutlined, 
  KeyOutlined, 
  LockOutlined,
  SafetyCertificateOutlined,
  RocketOutlined,
  CheckCircleOutlined,
  ClockCircleOutlined,
  LogoutOutlined,
  ReloadOutlined,
  ExclamationCircleOutlined,
  ArrowRightOutlined,
  LoadingOutlined
} from '@ant-design/icons';

const { Title, Text } = Typography;
const { Step } = Steps;
const { TextArea } = Input;

export const PaymentDrive = ({ onClose }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [authLoading, setAuthLoading] = useState(false);
  const [paymentUrl, setPaymentUrl] = useState('');
  const [orderDetails, setOrderDetails] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const [tokenExpiry, setTokenExpiry] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [timeLeft, setTimeLeft] = useState(null);
  const [paymentStatus, setPaymentStatus] = useState(null);
  const [processStage, setProcessStage] = useState('auth'); 

  const apiUrl = import.meta.env.VITE_API_URL;


  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const status = urlParams.get('payment_status');
    const orderId = urlParams.get('order_id');
    
    if (status === 'success') {
      setPaymentStatus('success');
      setCurrentStep(3);
      setProcessStage('success');
      message.success('Payment completed successfully!');
      
      // Clear URL parameters
      window.history.replaceState({}, document.title, window.location.pathname);
    } else if (status === 'failed') {
      setPaymentStatus('failed');
      message.error('Payment failed. Please try again.');
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, []);

  // Token expiry countdown
  useEffect(() => {
    let interval;
    if (tokenExpiry) {
      interval = setInterval(() => {
        const now = Date.now();
        const remaining = tokenExpiry - now;
        
        if (remaining <= 0) {
          handleTokenExpiry();
          clearInterval(interval);
        } else {
          setTimeLeft(remaining);
        }
      }, 1000);
    }
    
    return () => clearInterval(interval);
  }, [tokenExpiry]);

  // Load token from localStorage on component mount
  useEffect(() => {
    const savedToken = localStorage.getItem('phonepe_access_token');
    const savedExpiry = localStorage.getItem('phonepe_token_expiry');
    
    if (savedToken && savedExpiry) {
      const expiryTime = parseInt(savedExpiry);
      if (Date.now() < expiryTime) {
        setAccessToken(savedToken);
        setTokenExpiry(expiryTime);
        setCurrentStep(1);
        setProcessStage('form');
      } else {
        handleTokenExpiry();
      }
    }
  }, []);

  const handleTokenExpiry = () => {
    setAccessToken(null);
    setTokenExpiry(null);
    setTimeLeft(null);
    localStorage.removeItem('phonepe_access_token');
    localStorage.removeItem('phonepe_token_expiry');
    setCurrentStep(0);
    setProcessStage('auth');
    message.warning('Session expired. Please authenticate again.');
  };

  const formatTimeLeft = (ms) => {
    if (!ms || ms <= 0) return '00:00';
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleAuth = async () => {
    setAuthLoading(true);
    try {
      const authResponse = await fetch(`${apiUrl}/auth`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          clientId: import.meta.env.VITE_PHONEPE_CLIENT_ID,
          clientSecret: import.meta.env.VITE_PHONEPE_CLIENT_SECRET
        })
      });

      const authResult = await authResponse.json();

      if (authResult.data?.access_token) {
        const token = authResult.data.access_token;
        const expiryTime = Date.now() + (59 * 60 * 1000);
        
        setAccessToken(token);
        setTokenExpiry(expiryTime);
        localStorage.setItem('phonepe_access_token', token);
        localStorage.setItem('phonepe_token_expiry', expiryTime.toString());
        
        setCurrentStep(1);
        setProcessStage('form');
        message.success('Authentication successful! Session valid for 1 hour.');
        setShowAuthModal(false);
      } else {
        message.error(`Authentication failed: ${authResult.message}`);
      }
    } catch (error) {
      console.error('Auth error:', error);
      message.error('Authentication failed. Please try again.');
    } finally {
      setAuthLoading(false);
    }
  };

  const onFinish = async (values) => {
    if (!accessToken) {
      message.error('Please authenticate first!');
      setShowAuthModal(true);
      return;
    }

    setLoading(true);
    try {
      const orderId = `ORD_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      
      const successRedirectUrl = `${window.location.origin}/payment?payment_status=success&order_id=${orderId}`;
      const failedRedirectUrl = `${window.location.origin}/payment?payment_status=failed&order_id=${orderId}`;

      const paymentData = {
        tokk: accessToken,
        merchantOrderId: orderId,
        amount: values.amount * 100,
        currency: "INR",
        expireAfter: 1800,
        metaInfo: {
          udf1: `Customer: ${values.customerName}`,
          udf2: `Email: ${values.customerEmail}`,
          udf3: `Mobile: ${values.customerPhone}`,
          udf4: `Product: ${values.productName}`,
          udf5: `Notes: ${values.notes || 'No notes'}`,
          udf6: "Payment via PhonePe",
          udf11: "WEB",
          udf12: "ONLINE"
        },
        paymentFlow: {
          type: "PG_CHECKOUT",
          message: `Payment for ${values.productName}`,
          merchantUrls: {
            redirectUrl: successRedirectUrl,
            callbackUrl: `${window.location.origin}/api/webhook`
          }
        },
        paymentMethods: ["UPI", "CARD", "NETBANKING", "WALLET"],
        customer: {
          id: `CUST_${values.customerPhone}`,
          email: values.customerEmail,
          phone: values.customerPhone,
          name: values.customerName
        }
      };

      const response = await fetch(`${apiUrl}/create-payment`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        },
        body: JSON.stringify(paymentData)
      });

      const result = await response.json();
      
      if (result.success) {
        setOrderDetails({
          orderId: orderId,
          amount: values.amount,
          customerName: values.customerName,
          productName: values.productName,
          customerEmail: values.customerEmail,
          customerPhone: values.customerPhone,
          transactionId: result.data?.data?.transactionId || result.data?.data?.txnId || null,
          timestamp: new Date().toLocaleString()
        });

        const redirectUrl = result.data?.redirectUrl || result.data?.data?.redirect_url || result.data?.data?.deeplink;
        if (redirectUrl) {
          setPaymentUrl(redirectUrl);
          setCurrentStep(2);
          setProcessStage('payment');
          setPaymentStatus('pending');
          message.success('Payment initiated successfully!');
        } else {
          message.warning('Payment initiated but no redirect URL received');
        }
      } else {
        if (result.code === 'UNAUTHORIZED' || result.code === 'INVALID_TOKEN') {
          handleTokenExpiry();
          setShowAuthModal(true);
        } else {
          message.error(`Payment failed: ${result.message}`);
        }
      }
    } catch (error) {
      console.error('Payment error:', error);
      message.error('Payment initiation failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleProceedToPay = () => {
    if (paymentUrl) {
      window.location.href = paymentUrl;
    } else {
      message.warning('No payment URL available');
    }
  };

  const resetForm = () => {
    form.resetFields();
    setPaymentUrl('');
    setOrderDetails(null);
    setPaymentStatus(null);
    setCurrentStep(1);
    setProcessStage('form');
  };

  const handleLogout = () => {
    setAccessToken(null);
    setTokenExpiry(null);
    setTimeLeft(null);
    localStorage.removeItem('phonepe_access_token');
    localStorage.removeItem('phonepe_token_expiry');
    setCurrentStep(0);
    setProcessStage('auth');
    resetForm();
    message.success('Logged out successfully');
    if (onClose) onClose();
  };

  const refreshToken = () => {
    handleTokenExpiry();
    setShowAuthModal(true);
  };

  const startNewPayment = () => {
    resetForm();
    setPaymentStatus(null);
    setProcessStage('form');
  };

  // Render different stages based on processStage
  const renderAuthStage = () => (
    <Card 
      style={{ 
        borderRadius: '16px',
        border: 'none',
        background: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
        marginBottom: '24px'
      }}
    >
      <div style={{ textAlign: 'center', padding: '60px 20px' }}>
        <div style={{ fontSize: '80px', marginBottom: '24px' }}>🔐</div>
        <Title level={2} style={{ color: '#d46b08', marginBottom: '16px' }}>Secure Authentication Required</Title>
        <Text style={{ fontSize: '16px', color: '#8c5c2c', marginBottom: '32px', display: 'block' }}>
          Authenticate with PhonePe to start processing secure payments
        </Text>

        <Button 
          type="primary" 
          size="large" 
          onClick={() => setShowAuthModal(true)} 
          icon={<KeyOutlined />} 
          style={{ 
            width: '300px', 
            marginBottom: '40px',
            height: '60px',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
            border: 'none',
            fontSize: '18px',
            fontWeight: 'bold'
          }}
        >
          Start Authentication
        </Button>

        <Row gutter={[16, 16]} style={{ maxWidth: '500px', margin: '0 auto' }}>
          <Col span={12}>
            <Card size="small" style={{ textAlign: 'center', borderRadius: '12px' }}>
              <SafetyCertificateOutlined style={{ fontSize: '24px', color: '#1890ff', marginBottom: '8px' }} />
              <Text strong>OAuth 2.0</Text>
            </Card>
          </Col>
          <Col span={12}>
            <Card size="small" style={{ textAlign: 'center', borderRadius: '12px' }}>
              <LockOutlined style={{ fontSize: '24px', color: '#52c41a', marginBottom: '8px' }} />
              <Text strong>Encrypted</Text>
            </Card>
          </Col>
          <Col span={12}>
            <Card size="small" style={{ textAlign: 'center', borderRadius: '12px' }}>
              <ClockCircleOutlined style={{ fontSize: '24px', color: '#faad14', marginBottom: '8px' }} />
              <Text strong>1 Hour Session</Text>
            </Card>
          </Col>
          <Col span={12}>
            <Card size="small" style={{ textAlign: 'center', borderRadius: '12px' }}>
              <CheckCircleOutlined style={{ fontSize: '24px', color: '#52c41a', marginBottom: '8px' }} />
              <Text strong>Auto Refresh</Text>
            </Card>
          </Col>
        </Row>
      </div>
    </Card>
  );

  const renderFormStage = () => (
    <Row gutter={[32, 32]}>
      <Col xs={24} lg={14}>
        <Card 
          title={
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <IdcardOutlined style={{ color: '#1890ff' }} />
              <span>Payment Details</span>
            </div>
          } 
          style={{ 
            borderRadius: '16px',
            border: 'none',
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
          }} 
          loading={loading}
          extra={
            <Space>
              <Tag icon={<SafetyCertificateOutlined />} color="green">
                Authenticated
              </Tag>
              {timeLeft && (
                <Button 
                  size="small" 
                  icon={<ReloadOutlined />}
                  onClick={refreshToken}
                >
                  Refresh
                </Button>
              )}
            </Space>
          }
        >
          <Form form={form} name="payment-form" onFinish={onFinish} layout="vertical" autoComplete="off">
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item 
                  label="Customer Name" 
                  name="customerName" 
                  rules={[{ required: true, message: 'Please enter customer name!' }]}
                >
                  <Input 
                    prefix={<UserOutlined style={{ color: '#1890ff' }} />} 
                    placeholder="Full name" 
                    size="large"
                    style={{ borderRadius: '8px' }}
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item 
                  label="Phone Number" 
                  name="customerPhone" 
                  rules={[
                    { required: true, message: 'Please enter phone number!' }, 
                    { pattern: /^[6-9]\d{9}$/, message: 'Please enter valid 10-digit phone number!' }
                  ]}
                >
                  <Input 
                    prefix={<PhoneOutlined style={{ color: '#1890ff' }} />} 
                    placeholder="9876543210" 
                    size="large" 
                    maxLength={10}
                    style={{ borderRadius: '8px' }}
                  />
                </Form.Item>
              </Col>
            </Row>

            <Form.Item 
              label="Email Address" 
              name="customerEmail" 
              rules={[
                { required: true, message: 'Please enter email!' }, 
                { type: 'email', message: 'Please enter valid email!' }
              ]}
            >
              <Input 
                prefix={<UserOutlined style={{ color: '#1890ff' }} />} 
                placeholder="customer@example.com" 
                size="large"
                style={{ borderRadius: '8px' }}
              />
            </Form.Item>

            <Form.Item 
              label="Product/Service Name" 
              name="productName" 
              rules={[{ required: true, message: 'Please enter product name!' }]}
            >
              <Input 
                prefix={<IdcardOutlined style={{ color: '#1890ff' }} />} 
                placeholder="e.g., Premium Subscription" 
                size="large"
                style={{ borderRadius: '8px' }}
              />
            </Form.Item>

            <Form.Item 
              label="Amount (₹)" 
              name="amount" 
              rules={[
                { required: true, message: 'Please enter amount!' }, 
                { type: 'number', min: 1, message: 'Amount must be at least ₹1!' }
              ]}
            >
              <InputNumber
                prefix={<DollarOutlined style={{ color: '#1890ff' }} />}
                placeholder="Enter amount"
                size="large"
                style={{ width: '100%', borderRadius: '8px' }}
                min={1}
                max={100000}
                formatter={value => `₹ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                parser={value => String(value).replace(/₹\s?|(,*)/g, '')}
              />
            </Form.Item>

            <Form.Item label="Additional Notes (Optional)" name="notes">
              <TextArea 
                placeholder="Any additional information about this payment..." 
                rows={3}
                style={{ borderRadius: '8px' }}
              />
            </Form.Item>

            <Form.Item>
              <Button 
                type="primary" 
                htmlType="submit" 
                size="large" 
                loading={loading} 
                style={{ 
                  width: '100%', 
                  height: '50px',
                  borderRadius: '8px',
                  fontSize: '16px',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  border: 'none'
                }} 
                icon={<RocketOutlined />}
              >
                {loading ? 'Creating Payment...' : 'Generate Payment Link'}
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Col>

      <Col xs={24} lg={10}>
        <Card 
          title="📋 Process Overview" 
          style={{
            borderRadius: '16px',
            border: 'none',
            background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'
          }}
        >
          <Space direction="vertical" style={{ width: '100%' }} size="large">
            <div style={{ textAlign: 'center', padding: '20px 0' }}>
              <CheckCircleOutlined style={{ fontSize: '48px', color: '#52c41a', marginBottom: '16px' }} />
              <Title level={4} style={{ color: '#1890ff' }}>Step 1: Authentication</Title>
              <Text type="secondary">✓ Completed</Text>
            </div>

            <Progress 
              percent={50} 
              status="active" 
              strokeColor={{
                '0%': '#108ee9',
                '100%': '#87d068',
              }}
            />

            <div style={{ textAlign: 'center', padding: '20px 0' }}>
              <LoadingOutlined style={{ fontSize: '48px', color: '#1890ff', marginBottom: '16px' }} />
              <Title level={4} style={{ color: '#1890ff' }}>Step 2: Payment Details</Title>
              <Text type="secondary">Fill the form to proceed</Text>
            </div>

            <Divider />

            <Alert
              message="Next Steps"
              description="After submitting the form, you'll get a secure payment link to share with your customer."
              type="info"
              showIcon
            />
          </Space>
        </Card>
      </Col>
    </Row>
  );

  const renderPaymentStage = () => (
    <Row gutter={[32, 32]}>
      <Col xs={24} lg={14}>
        <Card 
          title="🚀 Payment Ready" 
          style={{
            borderRadius: '16px',
            border: 'none',
            background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
          }}
        >
          <Space direction="vertical" style={{ width: '100%' }} size="large">
            <Alert
              message="Payment Link Generated Successfully!"
              description="Share this secure link with your customer or proceed to payment."
              type="success"
              showIcon
              style={{ borderRadius: '8px' }}
            />

            {orderDetails && (
              <Card size="small" style={{ borderRadius: '8px' }}>
                <Space direction="vertical" style={{ width: '100%' }} size="small">
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Text strong>Order ID:</Text>
                    <Text code>{orderDetails.orderId}</Text>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Text strong>Amount:</Text>
                    <Text strong style={{ color: '#1890ff', fontSize: '18px' }}>₹{orderDetails.amount}</Text>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Text strong>Customer:</Text>
                    <Text>{orderDetails.customerName}</Text>
                  </div>
                </Space>
              </Card>
            )}

            <Button 
              type="primary" 
              size="large" 
              onClick={handleProceedToPay} 
              style={{ 
                width: '100%', 
                height: '50px',
                borderRadius: '8px',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                border: 'none',
                fontSize: '16px'
              }}
              icon={<ArrowRightOutlined />}
            >
              Proceed to PhonePe Payment
            </Button>

            <Button 
              onClick={startNewPayment} 
              style={{ 
                width: '100%',
                borderRadius: '8px',
                height: '40px'
              }}
            >
              Create New Payment
            </Button>

            <Divider />

            <div style={{ textAlign: 'center' }}>
              <SafetyCertificateOutlined style={{ color: '#1890ff', marginRight: '8px' }} />
              <Text type="secondary" style={{ fontSize: '12px' }}>
                Secure payment processed by PhonePe. You will be redirected to PhonePe's secure payment page.
              </Text>
            </div>
          </Space>
        </Card>
      </Col>

      <Col xs={24} lg={10}>
        <Card 
          title="📊 Process Status" 
          style={{
            borderRadius: '16px',
            border: 'none',
            background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'
          }}
        >
          <Space direction="vertical" style={{ width: '100%' }} size="large">
            <div style={{ textAlign: 'center' }}>
              <Progress 
                type="circle" 
                percent={75} 
                strokeColor={{
                  '0%': '#108ee9',
                  '100%': '#87d068',
                }}
              />
            </div>
            
            <Steps direction="vertical" current={2} size="small">
              <Step title="Authentication" description="Completed" icon={<CheckCircleOutlined />} />
              <Step title="Order Created" description="Completed" icon={<CheckCircleOutlined />} />
              <Step title="Payment Processing" description="In progress" icon={<LoadingOutlined />} />
              <Step title="Completion" description="Pending" icon={<ClockCircleOutlined />} />
            </Steps>

            <Alert
              message="Ready for Payment"
              description="Your payment link is ready. Click the button to proceed."
              type="info"
              showIcon
            />
          </Space>
        </Card>
      </Col>
    </Row>
  );

  const renderSuccessStage = () => (
    <Card style={{ marginBottom: '24px', borderRadius: '16px', border: 'none' }}>
      <Result
        status="success"
        title="Payment Completed Successfully!"
        subTitle={`Order ${orderDetails?.orderId} has been processed successfully. Amount: ₹${orderDetails?.amount}`}
        extra={[
          <Button 
            type="primary" 
            key="new-payment" 
            onClick={startNewPayment}
            size="large"
            icon={<RocketOutlined />}
          >
            Create New Payment
          </Button>,
          <Button 
            key="close" 
            onClick={onClose}
            size="large"
          >
            Close
          </Button>,
        ]}
      />
    </Card>
  );

  return (
    <div style={{ 
      padding: '24px', 
      maxWidth: '1200px', 
      margin: '0 auto',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      minHeight: '100vh'
    }}>
      <div style={{ 
        background: 'white', 
        borderRadius: '20px', 
        padding: '32px',
        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
        minHeight: 'calc(100vh - 48px)'
      }}>
        {/* Header */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'flex-start', 
          marginBottom: '32px',
          borderBottom: '2px solid #f0f0f0',
          paddingBottom: '24px'
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
              <div style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                padding: '12px',
                borderRadius: '12px',
                fontSize: '24px'
              }}>
                📱
              </div>
              <div>
                <Title level={2} style={{ margin: 0, color: '#1a1a1a' }}>PhonePe Payment Gateway</Title>
                <Text type="secondary" style={{ fontSize: '16px' }}>Secure and fast payments powered by PhonePe</Text>
              </div>
            </div>
          </div>
          
          {accessToken && (
            <Space direction="vertical" align="end">
              <Button 
                onClick={handleLogout} 
                icon={<LogoutOutlined />}
                type="primary"
                danger
                size="large"
              >
                Logout
              </Button>
              {timeLeft && (
                <Badge 
                  count={`Expires in: ${formatTimeLeft(timeLeft)}`} 
                  style={{ 
                    backgroundColor: timeLeft < 300000 ? '#ff4d4f' : '#52c41a',
                    fontSize: '12px'
                  }} 
                />
              )}
            </Space>
          )}
        </div>

        {/* Progress Steps */}
        <Card 
          style={{ 
            marginBottom: '32px',
            borderRadius: '16px',
            border: 'none',
            background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'
          }}
          bodyStyle={{ padding: '24px' }}
        >
          <Steps current={currentStep} size="default">
            <Step 
              title="Authentication" 
              description="Secure token access" 
              icon={<SafetyCertificateOutlined />}
            />
            <Step 
              title="Order Details" 
              description="Enter payment information" 
              icon={<IdcardOutlined />}
            />
            <Step 
              title="Payment" 
              description="Complete transaction" 
              icon={<RocketOutlined />}
            />
            <Step 
              title="Complete" 
              description="Payment result" 
              icon={<CheckCircleOutlined />}
            />
          </Steps>
        </Card>

        {/* Authentication Modal */}
        <Modal
          title={
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <SafetyCertificateOutlined style={{ color: '#1890ff' }} />
              <span>PhonePe Authentication Required</span>
            </div>
          }
          open={showAuthModal}
          onOk={handleAuth}
          onCancel={() => setShowAuthModal(false)}
          confirmLoading={authLoading}
          okText="Authenticate Securely"
          cancelText="Cancel"
          width={500}
        >
          <div style={{ textAlign: 'center', padding: '20px 0' }}>
            <div style={{ fontSize: '64px', marginBottom: '16px' }}>🔐</div>
            <Title level={4} style={{ color: '#1890ff' }}>Secure Authentication</Title>
            <Text>You need to authenticate with PhonePe to process secure payments.</Text>
          </div>
        </Modal>

        <Divider />

        {/* Main Content Based on Process Stage */}
        {processStage === 'auth' && renderAuthStage()}
        {processStage === 'form' && renderFormStage()}
        {processStage === 'payment' && renderPaymentStage()}
        {processStage === 'success' && renderSuccessStage()}
      </div>
    </div>
  );
};

export default PaymentDrive;