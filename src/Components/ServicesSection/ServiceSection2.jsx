import { useRef } from 'react';
import Slider from 'react-slick';
import SectionHeading from '../Heading';
import Spacing from '../Spacing';
import Button from '../Button';
import { Link } from 'react-router-dom';

const ServiceSection2 = ({ data }) => {
  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    swipeToSlide: true,
    arrows: false,
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
      <div className="container">
        <SectionHeading
          subtitle={data.sectionSubtitle}
          title={data.sectionTitle}
          description={data.description}
          textCenter={'text-center'}
          titleVerint="cs_mb_9"
          descriptionVerint="mb-0"
        />
        <Spacing lg={90} md={50} />
      </div>
      <div className="cs_slider cs_style_1 cs_slider_gap_24 cs_ptb_12">
        <div className="container">
          <Slider {...settings} ref={sliderRef}>
            {data.sliderData.map((service, index) => (
              <div className="cs_slide" key={index}>
                <div className="cs_card cs_style_3 text-center cs_heading_bg">
                  <img
                    src={service.imgSrc}
                    alt={service.title}
                    className="cs_card_thumb"
                  />
                  <h3 className="cs_card_title mb-0 cs_white_color cs_semibold cs_fs_28">
                    <Link to={service.link}>{service.title}</Link>
                  </h3>
                  <Button
                    btnUrl={service.link}
                    btnIcons={true}
                    btnText={service.btnText}
                    variant={'cs_btn cs_style_2 cs_white_color'}
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="cs_slider_arrows cs_style_1 cs_type_1">
          <div
            className="cs_arrow_wrap cs_arrow_wrap_left cs_center"
            onClick={() => sliderRef.current.slickPrev()}
          >
            <div className="cs_left_arrow rounded-circle cs_center">
              <svg
                width={31}
                height={16}
                viewBox="0 0 31 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.292892 7.29289C-0.0976315 7.68342 -0.0976315 8.31658 0.292892 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292892 7.29289ZM31 7L1 7V9L31 9V7Z"
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
                width={31}
                height={16}
                viewBox="0 0 31 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M30.7071 8.70711C31.0976 8.31658 31.0976 7.68342 30.7071 7.29289L24.3431 0.928932C23.9526 0.538408 23.3195 0.538408 22.9289 0.928932C22.5384 1.31946 22.5384 1.95262 22.9289 2.34315L28.5858 8L22.9289 13.6569C22.5384 14.0474 22.5384 14.6805 22.9289 15.0711C23.3195 15.4616 23.9526 15.4616 24.3431 15.0711L30.7071 8.70711ZM0 9H30V7H0V9Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceSection2;
