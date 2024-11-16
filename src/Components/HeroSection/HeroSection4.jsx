import React from "react";
import Slider from "react-slick";
import Button from "../Button";

const HeroSection4 = ({ data }) => {
  const settings = {
    dots: true,
    infinite: true,
    fade: true,
    speed: 1000,
    slidesToShow: 1,
    swipeToSlide: true,
    arrows: false,
    appendDots: (dots) => (
      <div>
        <ul>{dots}</ul>
      </div>
    ),
    dotsClass: `cs_pagination cs_style_2 cs_type_1`,
  };

  return (
    <>
      <section className="cs_slider cs_style_1 cs_heading_bg">
        <Slider {...settings}>
          {data.sliderData.map((slide, index) => (
            <div className="cs_slide" key={index}>
              <div className="cs_hero cs_style_4 cs_heading_bg cs_center">
                <div
                  className="cs_hero_bg cs_bg_filed"
                  style={{ backgroundImage: `url(${slide.backgroundImage})` }}
                />
                <div className="container">
                  <div className="cs_hero_text">
                    <h1 className="cs_hero_title cs_fs_70 cs_white_color cs_mb_60 cs_mb_lg_40">
                      {slide.title}
                    </h1>
                    <Button
                      btnIcons={true}
                      btnText={slide.buttonText}
                      btnUrl={slide.buttonUrl}
                      variant={"cs_btn cs_style_1"}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>
      <div className="container">
        <div className="cs_hero_4_iconbox cs_shadow_1 cs_white_bg">
          {data.iconBoxData.map((iconBox, index) => (
            <div className="cs_iconbox cs_style_2" key={index}>
              <div className="cs_iconbox_icon">
                <img src={iconBox.imgSrc} alt={iconBox.title} />
              </div>
              <h3 className="cs_iconbox_title mb-0 cs_fs_28 cs_semibold">
                {iconBox.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HeroSection4;
