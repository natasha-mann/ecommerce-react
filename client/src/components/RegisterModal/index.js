import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { RiCloseFill } from "react-icons/ri";

import "./RegisterModal.css";

const RegisterModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="modal-header">
        <div className="close-icon" onClick={props.onHide}>
          <RiCloseFill fontSize="2em" />
        </div>
      </Modal.Header>
      <Modal.Body className="subscribe-modal">
        <h4 className=" modal-title text-center">
          Sign up to emails for 20% off your first order!
        </h4>
        <hr />
        <div className="modal-text text-center">
          Don't miss out on our latest releases, new collections and email
          exclusive discounts straight to your inbox.
        </div>
        <div className="modal-form">
          <input
            className="modal-input"
            type="email"
            placeholder="Enter your email"
          />
          <button className="modal-button" type="submit">
            Sign Me Up!
          </button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default RegisterModal;
