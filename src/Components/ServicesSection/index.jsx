import React from 'react';
import Slider from 'react-slick';
import Button from '../Button';
import SectionHeading from '../Heading';
import Spacing from '../Spacing';

const ServicesSection = ({ data }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    swipeToSlide: true,
    slidesToScroll: 1,
    arrows: false,
    appendDots: dots => (
      <div>
        <ul>{dots}</ul>
      </div>
    ),
    dotsClass: `cs_pagination cs_style_2`,
    responsive: [
      {
        breakpoint: 1550,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <div
        className="cs_half_bg_top cs_accent_bg cs_bg_filed"
        style={{ backgroundImage: `url(${data.backgroundImage})` }}
      />
      <div className="container-fluid">
        <SectionHeading
          subtitle={data.SectionSubtitle}
          title={data.SectionTitle}
          description={data.description}
          color={'cs_white_color'}
          textCenter={'text-center'}
          titleVerint={'cs_mb_9'}
          descriptionVerint={'cs_heading_color mb-0'}
        />
        <Spacing lg={90} md={50} />
        <div className="cs_slider cs_style_1 cs_slider_gap_24 cs_ptb_12">
          <Slider {...settings}>
            {data.sliderData.map((slide, index) => (
              <div className="cs_slide" key={index}>
                <div className="cs_iconbox cs_style_3 cs_shadow_1 cs_white_bg text-center">
                  <div className="cs_iconbox_icon cs_mb_28">
                    <img src={slide.icon} alt={slide.title} />
                  </div>
                  <h2 className="cs_fs_28 cs_semibold cs_mb_25">
                    {slide.title}
                  </h2>
                  <p className="cs_mb_20">
                    {slide.description.length > 100
                      ? `${slide.description.substring(0, 100)}...`
                      : slide.description}
                  </p>
                  <Button
                    btnIcons={true}
                    btnText={slide.btnText}
                    variant={'cs_btn cs_style_2 cs_heading_color'}
                    btnUrl={slide.link}
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default ServicesSection;
