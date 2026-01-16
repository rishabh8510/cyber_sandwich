import upstoxLogo from "../assets/logo/upstox.png";
import angelLogo from "../assets/logo/angle.png";
import kotakLogo from "../assets/logo/kotakneo.png";
import dhanLogo from "../assets/logo/dhan.png";
import zerodhaLogo from "../assets/logo/zerodha.png";

export default function TradingIntegrationSection() {
    const logos = [
        upstoxLogo,
        angelLogo,
        kotakLogo,
        dhanLogo,
        zerodhaLogo,
    ];

    return (
        <div className=" py-20 px-4">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                    Seamless Integration with Leading <br /> Seturithmic Trading Platforms
                </h2>

                <p className="text-gray-600 mt-6 leading-relaxed">
                    Unlock the potential of automated trading with Fintech Technologies. 
                    Our advanced API integration offers unparalleled connectivity to top-tier 
                    Seturithmic trading platforms, enabling efficient and real-time performance.
                </p>

                <p className="text-gray-600 mt-4 leading-relaxed">
                    Whether you are leveraging Seturithmic trading software, automated trading 
                    tools, or proprietary trading apps, our seamless integration empowers you 
                    with instant access to critical metrics such as account balance, trade volume, 
                    profitability, and real-time market data.
                </p>

                <p className="text-gray-600 mt-4 leading-relaxed">
                    With Fintech Technologies, you can trust that all trades are executed securely 
                    through our robust platform, safeguarding your data and maintaining the integrity 
                    of your trades at all times.
                </p>
            </div>

            <div className="marquee max-w-7xl mx-auto mt-16 overflow-hidden">
                <div className="marquee-track">
                    {logos.map((logo, i) => (
                        <img
                            key={i}
                            src={logo}
                            className="h-24 w-24 mx-16 object-contain"
                            alt="logo"
                        />
                    ))}
                    {logos.map((logo, i) => (
                        <img
                            key={i + "copy"}
                            src={logo}
                            className="h-24 w-24 mx-16 object-contain"
                            alt="logo"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
