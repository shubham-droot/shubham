import React from "react";
import classes from "./QueryForm.module.css";
import { useForm } from "react-hook-form";

function QueryForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
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
          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <div className={classes.form_container}>
              <div className={classes.name_input}>
                <div className={classes.first_name}>
                  <label className={classes.label_text} htmlFor="first_name">
                    First Name
                    <span className={classes.form_span}>*</span>
                  </label>
                  <input
                    type="text"
                    {...register("fname", {
                      required: true,
                      pattern: /^[a-zA-Z]+$/i,
                      minLength: 3,
                      maxLength: 48,
                    })}
                    id="first_name"
                    placeholder="Enter your first name"
                    className={`form-control ${classes.form_input} ${
                      errors.fname && classes.error_content
                    }`}
                  />
                </div>
                <div className={classes.last_name}>
                  <label htmlFor="last_name">Last Name</label>
                  <input
                    type="text"
                    {...register("lname", {
                      pattern: /^[a-zA-Z]+$/i,
                      minLength: 3,
                      maxLength: 48,
                    })}
                    id="last_name"
                    placeholder="Enter your last name"
                    className={`form-control ${classes.form_input} ${
                      errors.lname && classes.error_content
                    }`}
                  />
                </div>
              </div>
              <div className={classes.contact_details_input}>
                <div className={classes.email}>
                  <label className={classes.label_text} htmlFor="email">
                    Email
                    <span className={classes.form_span}>*</span>
                  </label>
                  <input
                    // type="email"
                    {...register("email", {
                      required: true,
                      pattern: /.*@[a-z0-9.-]*/i,
                      maxLength: 48,
                    })}
                    id="email"
                    placeholder="Enter your email"
                    className={`form-control ${classes.form_input} ${
                      errors.email && classes.error_content
                    }`}
                  />
                </div>
                <div className={classes.phone_number}>
                  <label htmlFor="number">
                    Phone Number
                    <span className={classes.form_span}>*</span>
                  </label>
                  <input
                    type="tel"
                    {...register("phone_number", {
                      required:true,
                      pattern: /^[0-9]+$/i,
                      minLength: 10,
                      maxLength: 10,
                    })}
                    id="number"
                    placeholder="9876543210"
                    className={`form-control ${classes.form_input} ${
                      errors.phone_number && classes.error_content
                    }`}
                  />
                </div>
              </div>
              <div className={classes.query_container}>
                <label htmlFor="query" className={classes.label_text}>
                  Your Query
                </label>
                <textarea
                  type="text"
                  {...register("query")}
                  id="query"
                  placeholder="Enter your message"
                  className={classes.query_textarea}
                />
              </div>
            </div>
            <div className={classes.submit_btn}>
              <button className={classes.btn} type="submit">
                Submit
              </button>
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
