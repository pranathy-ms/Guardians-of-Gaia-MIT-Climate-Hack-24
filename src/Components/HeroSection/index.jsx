import Slider from "react-slick";
import Button from "../Button";

const HeroSection = ({ data }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    swipeToSlide: true,
    arrows: false,
    appendDots: (dots) => (
      <div>
        <ul>{dots}</ul>
      </div>
    ),
    dotsClass: `cs_pagination cs_style_1`,
  };

  return (
    <>
      <section
        className="cs_hero cs_style_1 cs_heading_bg cs_center cs_bg_filed"
        style={{ backgroundImage: `url(/assets/img/nature/hero_bg.jpg)` }}
      >
        <div className="container">
          <div className="cs_hero_thumb" data-aos="fade-in">
            <div className="cs_hero_thumb_left">
              <img src={data.leftImage} alt="Thumb" />
            </div>
            <div className="cs_hero_thumb_right">
              <img src={data.rightImage} alt="Thumb" />
            </div>
            <div
              className="cs_rotate_text_box cs_bg_filed cs_center"
              style={{
                backgroundImage: `url(${data.rotateBg})`,
              }}
            >
              <img src={data.rotateText} alt="" />
            </div>
          </div>
          <div className="cs_slider cs_style_1 cs_slider_gap_24">
            <div>
              <div className="cs_slider_wrapper" data-aos="fade-left">
                <Slider {...settings}>
                  {data.slides.map((slide, index) => (
                    <div className="cs_slide" key={index}>
                      <div className="cs_hero_text">
                        <h1 className="cs_hero_title cs_fs_70 cs_white_color cs_mb_30">
                          {slide.title}
                        </h1>
                        <p className="cs_hero_subtitle cs_white_color cs_mb_37">
                          {slide.subtitle}
                        </p>
                        <Button
                          btnText={slide.btnText}
                          btnUrl={slide.btnUrl}
                          variant={"cs_btn cs_style_1"}
                          btnIcons={true}
                        />
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
