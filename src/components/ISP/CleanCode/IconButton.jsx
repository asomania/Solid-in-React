const IconButton = ({ label, onClick, icon }) => {
  return (
    <button onClick={onClick}>
      {icon && <span>{icon}</span>} {label}
    </button>
  );
};
export default IconButton;
