import { useRef } from "react";
import Slider from "react-slick";
import Button from "../Button";

const HeroSection3 = ({ data }) => {
  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    swipeToSlide: true,
    arrows: false,
  };

  return (
    <>
      <section className="cs_slider cs_style_1">
        <Slider {...settings} ref={sliderRef}>
          {data.slides.map((slide, index) => (
            <div className="cs_slide" key={index}>
              <div className="cs_hero cs_style_3 text-center cs_heading_bg cs_center">
                <div
                  className="cs_hero_bg cs_bg_filed"
                  style={{
                    backgroundImage: `url(${slide.backgroundImage})`,
                  }}
                />
                <div className="container">
                  <div className="cs_hero_text">
                    <h3 className="cs_hero_title_up cs_fs_21 cs_accent_color cs_semibold cs_mb_19">
                      <span>{slide.subtitle}</span>
                    </h3>
                    <h1 className="cs_hero_title cs_fs_70 cs_white_color cs_mb_30">
                      {slide.title}
                    </h1>
                    <p className="cs_hero_subtitle cs_white_color cs_mb_37">
                      {slide.description}
                    </p>
                    <div className="cs_hero_btns">
                      {slide.buttons.map((btn, btnIndex) => (
                        <Button
                          key={btnIndex}
                          btnIcons={true}
                          btnText={btn.text}
                          btnUrl={btn.url}
                          variant={btn.variant}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <div className="cs_slider_arrows cs_style_2">
          <div
            className="cs_arrow_wrap cs_arrow_wrap_left cs_center"
            onClick={() => sliderRef.current.slickPrev()}
          >
            <div className="cs_left_arrow rounded-circle cs_center">
              <svg
                width={22}
                height={16}
                viewBox="0 0 22 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.292892 7.29289C-0.0976315 7.68342 -0.0976315 8.31658 0.292892 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292892 7.29289ZM22 7L1 7V9L22 9V7Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>
          <div
            className="cs_arrow_wrap cs_arrow_wrap_right cs_center"
            onClick={() => sliderRef.current.slickNext()}
          >
            <div className="cs_right_arrow rounded-circle cs_center">
              <svg
                width={22}
                height={16}
                viewBox="0 0 22 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.7071 8.70711C22.0976 8.31658 22.0976 7.68342 21.7071 7.29289L15.3431 0.928932C14.9526 0.538408 14.3195 0.538408 13.9289 0.928932C13.5384 1.31946 13.5384 1.95262 13.9289 2.34315L19.5858 8L13.9289 13.6569C13.5384 14.0474 13.5384 14.6805 13.9289 15.0711C14.3195 15.4616 14.9526 15.4616 15.3431 15.0711L21.7071 8.70711ZM0 9L21 9V7L0 7L0 9Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection3;
