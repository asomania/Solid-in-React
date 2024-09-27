const ColorButton = ({ label, onClick, color }) => {
  return (
    <button onClick={onClick} style={{ color }}>
      {label}
    </button>
  );
};
export default ColorButton;
