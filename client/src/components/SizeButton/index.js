import "./SizeButton.css";

const SizeButton = ({ size, onClick, stock, activeButton, sizeId }) => {
  return (
    <button
      id={size}
      type="button"
      className={`size-button ${activeButton === size ? "active-color" : ""}`}
      onClick={onClick}
      data-stock={stock}
      data-sizeid={sizeId}
    >
      {size}
    </button>
  );
};

export default SizeButton;
