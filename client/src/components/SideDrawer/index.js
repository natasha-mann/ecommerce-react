import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

import "./SideDrawer.css";

const SideDrawer = ({ show, setShow }) => {
  let drawerClasses = "side-drawer";
  if (show) {
    drawerClasses = "side-drawer open";
  }

  // const closeSideDrawerHandler = () => {
  //   return setIsSideDrawer(false);
  // };

  return (
    <nav className={drawerClasses}>
      <button className="side-drawer-close">
        <AiOutlineClose fontSize="2em" />
      </button>
      <ul>
        <li>
          <a>WOMEN</a>
        </li>
        <li>
          <a>MEN</a>
        </li>
        <li>
          <a>CHILDREN</a>
        </li>
        <li>
          <a>TRAINERS</a>
        </li>
        <li>
          <a>SALE</a>
        </li>
        <li>
          <a>ACCOUNT</a>
        </li>
      </ul>
    </nav>
  );
};
export default SideDrawer;
