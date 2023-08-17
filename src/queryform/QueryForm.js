import React from "react";
import classes from "./QueryForm.module.css";

function QueryForm() {
  return (
    <>
      <div className={classes.main_container}>
        <div className={classes.left_container}>
          <div className={classes.upper_container}>
            allow us to be your trusted partner.
          </div>
          <div className={classes.lower_container}>
            Let's work together! We are committed to your success via trust,
            excellence, and seamless collaboration.
          </div>
        </div>
        <div className={classes.right_container}>
          <form action="">
            <div className={classes.form_container}>
              <div className={classes.name_input}>
                <div className={classes.first_name}>
                  <label className={classes.label_text} htmlFor="first_name">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    placeholder="Enter your first name"
                    className={classes.form_input}
                  />
                </div>
                <div className={classes.last_name}>
                  <label htmlFor="last_name">Last Name</label>
                  <input
                    type="text"
                    id="last_name"
                    placeholder="Enter your last name"
                    className={classes.form_input}
                  />
                </div>
              </div>
              <div className={classes.contact_details_input}>
                <div className={classes.email}>
                  <label className={classes.label_text} htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    className={classes.form_input}
                  />
                </div>
                <div className={classes.phone_number}>
                  <label htmlFor="number">Phone Number</label>
                  <input
                    type="number"
                    id="number"
                    placeholder="+919876543210"
                    className={classes.form_input}
                  />
                </div>
              </div>
              <div className={classes.query_container}>
                <label htmlFor="query" className={classes.label_text}>
                  Your Query
                </label>
                <textarea
                  type="text"
                  id="query"
                  placeholder="Enter your message"
                  className={classes.query_textarea}
                />
              </div>
            </div>
            <div className={classes.submit_btn}>
              <button className={classes.btn}>Submit</button>
              {/* <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="32"
                  viewBox="0 0 17 32"
                  fill="none"
                >
                  <path
                    d="M1.99995 1.80945L13.6816 13.4911C15.0612 14.8707 15.0612 17.1282 13.6816 18.5078L1.99995 30.1895"
                    stroke="#0088C4"
                    stroke-width="3"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span> */}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default QueryForm;
