import "./Footer.css";
import payment from "../../images/payment-methods.JPG";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-container-inner">
        <div className="tables-container">
          <div>
            <div className="list-title">HELP AND INFO</div>
            <ul className="table-item mt-3">
              <li>Contact Us</li>
              <li>Delivery & Returns</li>
              <li>Store Locations</li>
              <li>Student Discount</li>
              <li>Gift Cards</li>
              <li>FAQs</li>
            </ul>
          </div>
          <div>
            <div className="list-title">ABOUT GOLDEN SHOE</div>
            <ul className="table-item mt-3">
              <li>About Us</li>
              <li>Join Us!</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div></div>
        </div>
        <div className="newsletter-container">
          <div>
            Sign up for our newsletter and be the first to hear about our
            exclusive deals!
          </div>
          <div className="newsletter-container-inner">
            <input
              className="newsletter-input"
              type="email"
              placeholder="Enter your email"
            />
            <button type="submit">Sign Me Up!</button>
          </div>
        </div>
      </div>
      <div className="payment-icons">
        <img src={payment} alt="list of payment methods" />
      </div>
    </div>
  );
};

export default Footer;
