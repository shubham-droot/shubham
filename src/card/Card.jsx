import React from "react";
import classes from "./Card.module.css";

const Card = () => {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.card} style={{ width: "18rem" }}>
          <div className={classes.img_container}>
            <img
              className={classes.card_img}
              src="https://images.pexels.com/photos/3857215/pexels-photo-3857215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Card image cap"
            />
            <p className={classes.img_text}>
              Embracing Minimalism: The Power of Simplicity
            </p>
          </div>
          <div className={classes.card_body}>
            <p className={classes.card_text}>
              Explore how minimalist design is reshaping user experiences,
              creating clean and focused interfaces that engage users in
              profound ways.
            </p>
          </div>
          <div className={` ${classes.arrow_icon}`}>
          <button className={classes.arrow_icon_btn}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="8"
              viewBox="0 0 56 12"
              fill="none"
            >
              <path
                d="M48.93 1L55 6.10958L48.93 11.2192M1 6.10958H54.83"
                stroke="black"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
