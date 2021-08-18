import "./Success.css";

const Success = () => {
  return (
    <div className="success-main text-center">
      <div className="success-div text-center">
        <h4> Your purchase has been completed successfully!</h4>

        <p className="pt-4">
          You will shortly receive a confirmation email with your order details.
        </p>
      </div>
    </div>
  );
};

export default Success;
