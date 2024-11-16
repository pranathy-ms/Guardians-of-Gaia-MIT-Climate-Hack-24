import { useRef } from 'react';
import SectionHeading from '../Heading';
import Slider from 'react-slick';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Spacing from '../Spacing';
import Review from '../Review';

const TestimonialSection2 = ({ data, bgColor }) => {
  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    swipeToSlide: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1550,
        settings: {
          slidesToShow: 2,
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
      <div className="cs_shape cs_shape_position_6">
        <img src={data.bgImgUrl} alt="" />
      </div>
      <div className="container">
        <div className="cs_slider cs_style_1 cs_slider_gap_24 cs_ptb_12">
          <div className="cs_slider_heading_1">
            <SectionHeading
              color={bgColor ? 'cs_primary_color' : ''}
              subtitle={data.sectionSubtitle}
              title={data.sectionTitle}
              titleColor={bgColor ? 'cs_white_color' : ''}
            />

            <div className="cs_slider_arrows cs_style_3 cs_hide_lg">
              <div
                className="cs_left_arrow rounded-circle cs_center"
                onClick={() => sliderRef.current.slickPrev()}
                style={{ cursor: 'pointer' }}
              >
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
              <div
                className="cs_right_arrow rounded-circle cs_center"
                onClick={() => sliderRef.current.slickNext()}
                style={{ cursor: 'pointer' }}
              >
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
          <Spacing lg={90} md={50} />
          <Slider {...settings} ref={sliderRef}>
            {data.testimonials.map((testimonial, index) => (
              <div className="cs_slide" key={index}>
                <div
                  className={`cs_testimonial cs_style_1 cs_type_1 ${
                    bgColor ? 'cs_white_bg' : 'cs_accent_bg'
                  }  cs_bg_filed`}
                  style={{
                    backgroundImage: `url(${testimonial.bgImgUrl2})`,
                  }}
                >
                  <div className="cs_testimonial_avatar cs_mb_42">
                    <img src={testimonial.avatar} alt="Avatar" />
                    <div className="cs_testimonial_avatar_right">
                      <h3
                        className={`cs_fs_21 cs_semibold cs_mb_2 ${
                          !bgColor && 'cs_white_color'
                        }`}
                      >
                        {testimonial.name}
                      </h3>
                      <p className="mb-0 cs_heading_color">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <blockquote
                    className={`cs_fs_18 cs_mb_45 ${
                      !bgColor && 'cs_white_color'
                    }`}
                  >
                    {testimonial.quote}
                  </blockquote>
                  <Review reviewNumber={testimonial.rating} />
                  <div className="cs_quote_icon">
                    <svg
                      width="50"
                      height="60"
                      viewBox="0 0 50 60"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M26.5059 49.7918C25.4104 49.7918 24.4303 49.8492 23.4646 49.7774C16.8201 49.3467 11.2277 46.6762 6.67305 41.8377C3.22825 38.1766 1.08066 33.8406 0.316748 28.8729C-0.576881 23.0725 0.374402 17.5592 3.3868 12.4623C6.60098 7.02079 11.2133 3.21605 17.2381 1.29215C24.3583 -0.976337 31.2479 -0.287177 37.6906 3.54628C44.3784 7.5233 48.3565 13.4099 49.6826 21.0481C50.1582 23.7616 50.0717 26.5039 49.6681 29.2175C48.4574 37.2577 44.9117 44.1924 39.55 50.2512C36.0331 54.2283 31.8965 57.4156 27.1256 59.7559C26.9815 59.8277 26.8518 59.8995 26.7076 59.9713C26.6788 59.9856 26.6356 59.9856 26.5203 60C26.5059 56.6403 26.5059 53.295 26.5059 49.7918ZM19.1118 26.4178C18.1173 28.3991 17.166 30.2943 16.1715 32.2756C17.6272 32.2756 18.9388 32.29 20.2504 32.2613C20.4378 32.2613 20.6828 32.0316 20.7837 31.8593C21.6341 30.2082 22.4701 28.557 23.2773 26.8916C23.4214 26.5901 23.5079 26.2311 23.5079 25.8866C23.5223 23.3453 23.5223 20.804 23.5223 18.2771C23.5223 18.0904 23.5079 17.8894 23.4935 17.6884C20.5531 17.6884 17.6416 17.6884 14.759 17.6884C14.759 20.6173 14.759 23.5032 14.759 26.4321C16.2003 26.4178 17.5984 26.4178 19.1118 26.4178ZM27.9328 32.2756C29.2876 32.2756 30.5272 32.2613 31.7523 32.29C32.1847 32.3044 32.4153 32.1751 32.6027 31.7731C33.3954 30.1364 34.2314 28.5283 35.0242 26.8916C35.1683 26.5901 35.2692 26.2311 35.2692 25.8866C35.2836 23.3453 35.2836 20.804 35.2836 18.2771C35.2836 18.0761 35.2836 17.8607 35.2836 17.6597C32.3 17.6597 29.4174 17.6597 26.5059 17.6597C26.5059 20.5743 26.5059 23.4601 26.5059 26.4178C27.9472 26.4178 29.3597 26.4178 30.8587 26.4178C29.8642 28.4135 28.9273 30.2799 27.9328 32.2756Z"
                        fill="#191919"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
          <div className="cs_slider_arrows cs_style_1 cs_show_lg">
            <div
              className="cs_left_arrow rounded-circle cs_center"
              onClick={() => sliderRef.current.slickPrev()}
              style={{ cursor: 'pointer' }}
            >
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
            <div
              className="cs_right_arrow rounded-circle cs_center"
              onClick={() => sliderRef.current.slickNext()}
              style={{ cursor: 'pointer' }}
            >
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

export default TestimonialSection2;
