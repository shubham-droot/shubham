import React, { useRef } from "react";
import { ReactComponent as ArrowIcon } from "../arrow-icon.svg";
import classes from "./Accordion.module.css";

export const AccordionItem = ({ faqItem, onClick, isOpen }) => {
  const itemRef = useRef(null);

  return (
    <>
      <li className={`${classes.main_container}`}>
        <button className={classes.accordion_btn} onClick={() => onClick()}>
          {faqItem.q}
          <ArrowIcon
            className={`${classes.accordion_arrow} ${isOpen ? "active" : ""}`}
          />
        </button>
        <div
          className={classes.accordion_collapse}
          style={
            isOpen
              ? { height: itemRef.current.scrollHeight }
              : { height: "0px" }
          }
        >
          <div className={classes.accordion_body} ref={itemRef}>
            {faqItem.a}
          </div>
        </div>
      </li>
    </>
  );
};
