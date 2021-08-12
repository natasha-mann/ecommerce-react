import "./SideDrawer.css";

const SideDrawer = ({ show }) => {
  let drawerClasses = "side-drawer";
  if (show) {
    drawerClasses = "side-drawer open";
  }

  return (
    <nav className={drawerClasses}>
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
