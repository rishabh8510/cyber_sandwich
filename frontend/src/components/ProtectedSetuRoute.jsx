import React, { useState } from "react";
import CodePopup from "./CodePopup";

export default function ProtectedSetuRoute({ children }) {
  const [verified, setVerified] = useState(false);

  return (
    <>
      {!verified && <CodePopup onVerify={(status) => setVerified(status)} />}
      {verified && children}
    </>
  );
}
