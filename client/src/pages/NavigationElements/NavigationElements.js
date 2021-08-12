import { useState } from "react";

import Backdrop from "../../components/Backdrop";
import NavigationBar from "../../components/NavigationBar";
import SideDrawer from "../../components/SideDrawer";

const NavigationElements = () => {
  const [isSideDrawer, setIsSideDrawer] = useState(false);

  const drawerToggleClickHandler = () => {
    if (isSideDrawer) {
      return setIsSideDrawer(false);
    } else {
      return setIsSideDrawer(true);
    }
  };

  const backdropClickHandler = () => {
    return setIsSideDrawer(false);
  };

  return (
    <>
      <NavigationBar drawerClickHandler={drawerToggleClickHandler} />
      <SideDrawer show={isSideDrawer} setShow={setIsSideDrawer} />
      {isSideDrawer && (
        <>
          <Backdrop click={backdropClickHandler} />
        </>
      )}
    </>
  );
};

export default NavigationElements;
