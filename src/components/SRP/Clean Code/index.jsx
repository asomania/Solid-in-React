import React from "react";
import UpdateProfile from "./UpdateProfile";
import SendVerificationEmail from "./SendVerificationEmail";
const CleanCodeSRP = () => {
  return (
    <>
      <UpdateProfile />
      <SendVerificationEmail />
      <ManageNotifications />
    </>
  );
};

export default CleanCodeSRP;
