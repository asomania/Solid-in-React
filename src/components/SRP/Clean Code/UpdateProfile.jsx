import { useState } from "react";

const UpdateProfile = () => {
  const [name, setName] = useState("Ali");
  const [email, setEmail] = useState("ali@com");

  const updateProfile = (newName, newEmail) => {
    setName(newName);
    setEmail(newEmail);
  };
  return (
    <>
      <h1>{name}</h1>
      <p>{email}</p>

      <button onClick={() => updateProfile("Jane Doe", "jane@example.com")}>
        Update Profile
      </button>
    </>
  );
};

export default UpdateProfile;
