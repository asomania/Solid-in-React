import React from "react";

const SendVerificationEmail = () => {
  const sendVerificationEmail = () => {
    console.log(`Verification email sent to ${email}`);
  };

  return (
    <div>
      <button onClick={sendVerificationEmail}>Send Verification Email</button>
    </div>
  );
};

export default SendVerificationEmail;
