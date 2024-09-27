const LargeButton = ({ label, onClick, color, icon, size, disabled }) => {
  return (
    <button onClick={onClick} style={{ color }} disabled={disabled}>
      {icon && <span>{icon}</span>} {label}
    </button>
  );
};

export default LargeButton;
