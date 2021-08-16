import { BiSearch, BiUser, BiShoppingBag } from "react-icons/bi";

import "bootstrap/dist/js/bootstrap";

import { useBasketContext } from "../../contexts/BasketProvider";
import ToggleButton from "../ToggleButton";
import "./NavigationBar.css";

const NavigationBar = (props) => {
  const { dispatch } = useBasketContext();

  const handleOnMouseEnter = () => {
    dispatch({
      type: "TOGGLE_CART",
      payload: true,
    });
  };

  return (
    <header className="nav-container">
      <div className="container-fluid">
        <div className="row align-items-center pt-3 pb-1">
          <div className="col-4 nav-bar-toggler">
            <ToggleButton click={props.drawerClickHandler} />
          </div>
          <div className="col-4 nav-search">
            <div className="justify-content-start">
              <div className="search-div">
                <input
                  className="me-2 search-bar"
                  type="text"
                  placeholder="Search..."
                />
                <button className="search-button" type="submit">
                  <BiSearch />
                </button>
              </div>
            </div>
          </div>
          <div className="col-4 text-center logo-div">
            <div className="nav-logo">
              <a href="/">GOLDEN SHOE</a>
            </div>
          </div>

          <div className="col-4 actions-div">
            <div className="justify-content-end nav-actions">
              <div className="nav-search-div">
                <a className="nav-search-icon" href="/account">
                  <BiSearch color="black" fontSize="1.5em" />
                </a>
              </div>
              <div>
                <a className="nav-account-icon" href="/account">
                  <BiUser color="black" fontSize="1.5em" />
                </a>
              </div>
              <div>
                <button
                  className="nav-basket-icon"
                  href="/basket"
                  onMouseEnter={handleOnMouseEnter}
                >
                  <BiShoppingBag color="black" fontSize="1.5em" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <nav className="lower-nav">
        <div className="nav-items">
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
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavigationBar;
