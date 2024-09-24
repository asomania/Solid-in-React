import React from "react";

const ManageNotifications = () => {
  const manageNotifications = (preference) => {
    setNotifications(preference);
    console.log(`Email notifications: ${preference ? "On" : "Off"}`);
  };

  return (
    <div>
      <button onClick={() => manageNotifications(!notifications)}>
        Toggle Notifications
      </button>
    </div>
  );
};

export default ManageNotifications;
