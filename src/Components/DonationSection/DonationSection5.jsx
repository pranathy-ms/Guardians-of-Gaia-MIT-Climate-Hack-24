import { useRef } from 'react';
import SectionHeading from '../Heading';
import Spacing from '../Spacing';
import Slider from 'react-slick';
import Button from '../Button';

const DonationSection5 = ({ data }) => {
  const slidRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    swipeToSlide: true,
    arrows: false,

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
          textCenter={'text-center'}
        />
        <Spacing lg={90} md={50} />
      </div>
      <div className="cs_slider cs_style_1 cs_slider_gap_24 cs_ptb_12">
        <div className="container">
          <Slider {...settings} ref={slidRef}>
            {data.sliderData.map((slide, index) => (
              <div className="cs_slide" key={index}>
                <div className="cs_card cs_style_2 cs_type_1 cs_shadow_1">
                  <div className="cs_card_thumb">
                    <img
                      src={slide.imgSrc}
                      alt={slide.title}
                      className="w-100"
                    />
                  </div>
                  <div className="cs_card_info">
                    <div>
                      <h2 className="cs_fs_28 cs_mb_11 cs_semibold">
                        {slide.title}
                      </h2>
                      <p className="mb-0">{slide.description}</p>
                    </div>
                    <div>
                      <div className="cs_progress_wrap">
                        <div
                          className="cs_progress"
                          data-progress={slide.progress}
                        >
                          <div
                            className="cs_progress_in cs_accent_bg"
                            style={{ width: `${slide.progress}%` }}
                          >
                            <span>{slide.progress}%</span>
                          </div>
                        </div>
                      </div>
                      <div className="cs_progress_heading cs_mb_24">
                        <h3 className="cs_fs_21 cs_semibold mb-0">
                          Goal: ${slide.goal}
                        </h3>
                        <h3 className="cs_fs_21 cs_semibold mb-0">
                          Raised: ${slide.raised}
                        </h3>
                      </div>
                      <Button
                        btnIcons={true}
                        btnText={slide.btnText}
                        btnUrl={slide.donateLink}
                        variant={'cs_btn cs_style_1 w-100'}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="cs_slider_arrows cs_style_1">
          <div
            className="cs_arrow_wrap cs_arrow_wrap_left cs_center"
            onClick={() => slidRef.current.slickPrev()}
            style={{ cursor: 'pointer' }}
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
            onClick={() => slidRef.current.slickNext()}
            style={{ cursor: 'pointer' }}
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
      </div>
    </>
  );
};

export default DonationSection5;
