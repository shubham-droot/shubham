import React from "react";
import classes from "./Carousel.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Carousel = () => {
  return (
    <>
      <div className={classes.main_container}>
        <Swiper
          className={classes.swiper}
          pagination={{
            clickable: true,
            renderBullet: function (index, className) {
              console.log(index, className);
              return '<span class="' + className + '">' + "</span>";
            },
          }}
          modules={[Pagination]}
        >
          <SwiperSlide className={classes.swiper_page}>
            <div className={classes.carousel_container}>
              <div className={classes.carousel_img}>
                <img
                  className={classes.carousel_imge}
                  src="https://negliadesign.com/wordpress/assets/Website-Development-Info-graphic-2.jpg?x69495"
                  alt=""
                />
              </div>
              <div className={classes.carousel_text}>
                <div className={classes.text_container}>
                  <p className={classes.title}>Easing the Medication Process</p>
                  <h4 className={classes.subtitle}>
                    You can either take your medications on time and feel
                    better, or you can miss a dose and risk your health. Which
                    will it be?
                  </h4>
                </div>
                <div className={classes.sub_title}>
                  Taking your medications on time has never been easier. Here
                  our app that supports you in your busy schedule by providing
                  timely remainders for on-time medications. You can setup
                  personalized reminders to ensure you never miss a dose again.
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={classes.swiper_page}>
            <div className={classes.carousel_container}>
              <div className={classes.carousel_img}>
                <img
                  className={classes.carousel_imge}
                  src="https://negliadesign.com/wordpress/assets/Website-Development-Info-graphic-2.jpg?x69495"
                  alt=""
                />
              </div>
              <div className={classes.carousel_text}>
                <div className={classes.text_container}>
                  <h1 className={classes.title}>
                    Easing the Medication Process
                  </h1>
                  <h4 className={classes.subtitle}>
                    You can either take your medications on time and feel
                    better, or you can miss a dose and risk your health. Which
                    will it be?
                  </h4>
                </div>
                <div className={classes.sub_title}>
                  Taking your medications on time has never been easier. Here
                  our app that supports you in your busy schedule by providing
                  timely remainders for on-time medications. You can setup
                  personalized reminders to ensure you never miss a dose again.
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={classes.swiper_page}>
            <div className={classes.carousel_container}>
              <div className={classes.carousel_img}>
                <img
                  className={classes.carousel_imge}
                  src="https://negliadesign.com/wordpress/assets/Website-Development-Info-graphic-2.jpg?x69495"
                  alt=""
                />
              </div>
              <div className={classes.carousel_text}>
                <div className={classes.text_container}>
                  <h1 className={classes.title}>
                    Easing the Medication Process
                  </h1>
                  <h4 className={classes.subtitle}>
                    You can either take your medications on time and feel
                    better, or you can miss a dose and risk your health. Which
                    will it be?
                  </h4>
                </div>
                <div className={classes.sub_title}>
                  Taking your medications on time has never been easier. Here
                  our app that supports you in your busy schedule by providing
                  timely remainders for on-time medications. You can setup
                  personalized reminders to ensure you never miss a dose again.
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={classes.swiper_page}>
            <div className={classes.carousel_container}>
              <div className={classes.carousel_img}>
                <img
                  className={classes.carousel_imge}
                  src="https://negliadesign.com/wordpress/assets/Website-Development-Info-graphic-2.jpg?x69495"
                  alt=""
                />
              </div>
              <div className={classes.carousel_text}>
                <div className={classes.text_container}>
                  <h1 className={classes.title}>
                    Easing the Medication Process
                  </h1>
                  <h4 className={classes.subtitle}>
                    You can either take your medications on time and feel
                    better, or you can miss a dose and risk your health. Which
                    will it be?
                  </h4>
                </div>
                <div className={classes.sub_title}>
                  Taking your medications on time has never been easier. Here
                  our app that supports you in your busy schedule by providing
                  timely remainders for on-time medications. You can setup
                  personalized reminders to ensure you never miss a dose again.
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Carousel;
