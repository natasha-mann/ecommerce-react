import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

const MobileFilters = ({ handleFilter, handleSort }) => {
  return (
    <div className="mobile-filters-div">
      <div className="mobile-filters-strip">
        <DropdownButton
          menuvariant="dark"
          variant="secondary"
          className="filter-button-mobile"
          id="dropdown-item-button"
          title="+ Sort By"
        >
          <Dropdown.Item as="button" onClick={handleSort} data-sort="highest">
            Price: Highest
          </Dropdown.Item>
          <Dropdown.Item as="button" onClick={handleSort} data-sort="lowest">
            Price: Lowest
          </Dropdown.Item>
        </DropdownButton>
        <DropdownButton
          menuvariant="dark"
          variant="secondary"
          drop="down"
          className="filter-button-mobile"
          id="dropdown-item-button"
          title="+ Colour"
        >
          <Dropdown.Item
            as="button"
            data-key="color"
            data-value="black"
            onClick={handleFilter}
          >
            Black
          </Dropdown.Item>
          <Dropdown.Item
            as="button"
            data-key="color"
            data-value="red"
            onClick={handleFilter}
          >
            Red
          </Dropdown.Item>
          <Dropdown.Item
            as="button"
            data-key="color"
            data-value="orange"
            onClick={handleFilter}
          >
            Orange
          </Dropdown.Item>
          <Dropdown.Item
            as="button"
            data-key="color"
            data-value="white"
            onClick={handleFilter}
          >
            White
          </Dropdown.Item>

          <Dropdown.Item as="button" onClick={handleFilter}>
            All
          </Dropdown.Item>
        </DropdownButton>
        <DropdownButton
          menuvariant="dark"
          variant="secondary"
          className="filter-button-mobile"
          id="dropdown-item-button"
          title="+ Brands"
        >
          <Dropdown.Item
            as="button"
            data-key="brand"
            data-value="nike"
            onClick={handleFilter}
          >
            Nike
          </Dropdown.Item>
          <Dropdown.Item
            as="button"
            data-key="brand"
            data-value="adidas"
            onClick={handleFilter}
          >
            Adidas
          </Dropdown.Item>

          <Dropdown.Item
            as="button"
            data-key="brand"
            data-value="reebok"
            onClick={handleFilter}
          >
            Reebok
          </Dropdown.Item>

          <Dropdown.Item
            as="button"
            data-key="brand"
            data-value="kurtGeiger"
            onClick={handleFilter}
          >
            Kurt Geiger
          </Dropdown.Item>

          <Dropdown.Item
            as="button"
            data-key="brand"
            data-value="converse"
            onClick={handleFilter}
          >
            UGG
          </Dropdown.Item>
          <Dropdown.Item
            as="button"
            data-key="brand"
            data-value="converse"
            onClick={handleFilter}
          >
            Converse
          </Dropdown.Item>
          <Dropdown.Item as="button" onClick={handleFilter}>
            All
          </Dropdown.Item>
        </DropdownButton>
      </div>
    </div>
  );
};

export default MobileFilters;
