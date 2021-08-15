import "./SizeButton.css";

const SizeButton = ({ size, onClick, stock }) => {
  return (
    <button
      type="button"
      className="size-button"
      onClick={onClick}
      data-stock={stock}
    >
      {size}
    </button>
  );
};

export default SizeButton;
