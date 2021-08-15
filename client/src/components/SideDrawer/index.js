import { AiOutlineClose } from "react-icons/ai";

import "./SideDrawer.css";

const SideDrawer = ({ show, setShow }) => {
  let drawerClasses = "side-drawer";
  if (show) {
    drawerClasses = "side-drawer open";
  }

  return (
    <nav className={drawerClasses}>
      <button className="side-drawer-close">
        <AiOutlineClose fontSize="2em" />
      </button>
      <ul>
        <li>
          <a href="/womens">WOMEN</a>
        </li>
        <li>
          <a href="/mens">MEN</a>
        </li>
        <li>
          <a href="/childrens">CHILDREN</a>
        </li>
        <li>
          <a href="/trainers">TRAINERS</a>
        </li>
        <li>
          <a href="/sale">SALE</a>
        </li>
        <li>
          <a href="/account">ACCOUNT</a>
        </li>
      </ul>
    </nav>
  );
};
export default SideDrawer;
