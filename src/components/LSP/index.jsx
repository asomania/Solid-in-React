import React from "react";

const Button = ({ label, onClick }) => {
  return <button onClick={onClick}>{label}</button>;
};

const SubmitButton = ({ label, onClick }) => {
  const handleSubmit = () => {
    alert("Form submitted!");
    if (onClick) onClick();
  };

  return <Button label={label} onClick={handleSubmit} />;
};

export default function CleanCodeLSP() {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <div>
      <h1>Normal Button</h1>
      <Button label="Click Me" onClick={handleClick} />

      <h1>Submit Button</h1>
      <SubmitButton label="Submit" onClick={handleClick} />
    </div>
  );
}
