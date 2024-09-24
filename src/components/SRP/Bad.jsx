import React, { useState } from "react";

const UserProfile = () => {
  const [name, setName] = useState("Ali");
  const [email, setEmail] = useState("ali@com");
  const [notifications, setNotifications] = useState(true);

  const updateProfile = (newName, newEmail) => {
    setName(newName);
    setEmail(newEmail);
  };

  const sendVerificationEmail = () => {
    console.log(`Verification email sent to ${email}`);
  };

  const manageNotifications = (preference) => {
    setNotifications(preference);
    console.log(`Email notifications: ${preference ? "On" : "Off"}`);
  };

  return (
    <div>
      <h1>{name}</h1>
      <p>{email}</p>
      <button onClick={() => updateProfile("Eren", "eren@com")}>
        Update Profile
      </button>
      <button onClick={sendVerificationEmail}>Send Verification Email</button>
      <button onClick={() => manageNotifications(!notifications)}>
        Toggle Notifications
      </button>
    </div>
  );
};

export default UserProfile;
