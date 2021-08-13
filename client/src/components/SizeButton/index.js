import "./SizeButton.css";

const SizeButton = (props) => {
  return (
    <button type="button" className="size-button">
      <span>{props.size}</span>
    </button>
  );
};

export default SizeButton;
