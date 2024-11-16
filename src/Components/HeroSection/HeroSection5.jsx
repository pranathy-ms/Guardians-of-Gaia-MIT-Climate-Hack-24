import Slider from "react-slick";
import Button from "../Button";
import ReactPlayer from "react-player";

const HeroSection5 = ({ data }) => {
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
    dotsClass: `cs_pagination cs_style_2 cs_type_2`,
  };

  return (
    <>
      <section
        className="cs_hero cs_style_5 cs_heading_bg cs_center cs_bg_fixed"
        style={{
          backgroundImage: `url(${data.bgImageUrl})`,
        }}
      >
        <div className="container">
          <div
            className="cs_slider cs_style_1 cs_slider_gap_24"
            data-aos="fade-left"
          >
            <Slider {...settings}>
              {data.heroData.map((slide, index) => (
                <div className="cs_slide" key={index}>
                  <div className="cs_hero_text">
                    <h1 className="cs_hero_title cs_fs_70 cs_white_color cs_mb_30">
                      {slide.title}
                    </h1>
                    <p className="cs_hero_subtitle cs_white_color cs_mb_37">
                      {slide.subtitle}
                    </p>
                    <Button
                      btnIcons={true}
                      btnText={slide.buttonText}
                      btnUrl={slide.buttonUrl}
                      variant={"cs_btn cs_style_1"}
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <div
          className="cs_hero_video_block cs_bg_filed "
          style={{
            backgroundImage: `url(${data.bgImageUrl1})`,
          }}
        >
          <div className="new_youtube_bg">
            <div className="mbYTP_wrapper">
              <div className="new_cs_hero_video_block">
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=Q2zZ2S5esu8"
                  className="react-player"
                  playing={true}
                  loop={true}
                  muted={true}
                  controls={false}
                  width="100%"
                  height="100%"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection5;
