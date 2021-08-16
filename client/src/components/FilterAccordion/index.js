import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

import "./FilterAccordion.css";

const FilterAccordion = ({ handleFilter, handleSort }) => {
  return (
    <Accordion allowZeroExpanded>
      <AccordionItem className="accordion-option accordion-option-top">
        <AccordionItemHeading>
          <AccordionItemButton>+ SORT</AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel className="accordion-body">
          <div className="sorts" onClick={handleSort} data-sort="highest">
            Price: Highest
          </div>
          <div className="sorts" onClick={handleSort} data-sort="lowest">
            Price: Lowest
          </div>
        </AccordionItemPanel>
      </AccordionItem>

      <AccordionItem className="accordion-option">
        <AccordionItemHeading>
          <AccordionItemButton>+ BRAND</AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel className="accordion-body">
          <ul className="filters-list">
            <li data-filter="Nike" onClick={handleFilter}>
              Nike
            </li>
            <li data-filter="Adidas" onClick={handleFilter}>
              Adidas
            </li>
            <li data-filter="Reebok" onClick={handleFilter}>
              Reebok
            </li>
            <li data-filter="all" onClick={handleFilter}>
              All
            </li>
          </ul>
        </AccordionItemPanel>
      </AccordionItem>

      <AccordionItem className="accordion-option">
        <AccordionItemHeading>
          <AccordionItemButton>+ COLOUR</AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel className="accordion-body">
          <ul className="filters-list">
            <li data-key="color" data-value="black" onClick={handleFilter}>
              Black
            </li>
            <li data-key="color" data-value="red" onClick={handleFilter}>
              Red
            </li>
            <li data-key="color" data-value="orange" onClick={handleFilter}>
              Orange
            </li>
            <li data-key="color" data-value="white" onClick={handleFilter}>
              White
            </li>
            <li data-key="color" data-value="multi" onClick={handleFilter}>
              Multi
            </li>
            <li onClick={handleFilter}>All</li>
          </ul>
        </AccordionItemPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default FilterAccordion;
