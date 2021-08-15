import "./SizeButton.css";

const SizeButton = ({ size, onClick, stock, activeButton }) => {
  return (
    <button
      id={size}
      type="button"
      className={`size-button ${activeButton === size ? "active-color" : ""}`}
      onClick={onClick}
      data-stock={stock}
    >
      {size}
    </button>
  );
};

export default SizeButton;
