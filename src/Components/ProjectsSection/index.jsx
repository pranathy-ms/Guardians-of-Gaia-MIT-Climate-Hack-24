import { useRef } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import Spacing from '../Spacing';

const ProjectsSection = ({ data }) => {
  const slideRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
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
    ],
  };

  return (
    <>
      <section className="cs_gray_bg_2">
        <Spacing lg={145} md={75} />
        <div className="cs_slider cs_style_1 cs_slider_gap_24 cs_ptb_12">
          <div className="container">
            <div className="cs_slider_heading_1">
              <div className="cs_section_heading cs_style_1">
                <h3 className="cs_fs_21 cs_semibold cs_accent_color cs_mb_13">
                  Our Projects
                </h3>
                <h2 className="cs_fs_51 mb-0">
                  Pioneering Sustainable Solutions for a Changing Climate
                </h2>
              </div>
              <div className="cs_slider_arrows cs_style_3 cs_hide_lg">
                <div
                  className="cs_left_arrow rounded-circle cs_center"
                  onClick={() => slideRef.current.slickPrev()}
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
                  onClick={() => slideRef.current.slickNext()}
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
          </div>
          <div className="container-fluid">
            <Slider {...settings} ref={slideRef}>
              {data.projects.map((project, index) => (
                <div className="cs_slide" key={index}>
                  <div className="cs_card cs_style_4 cs_shadow_1 cs_white_bg">
                    <Link to={project.link} className="cs_card_thumb">
                      <img
                        src={project.imgSrc}
                        alt={project.title}
                        className="w-100"
                      />
                    </Link>
                    <div className="cs_card_info">
                      <p className="cs_mb_4">{project.category}</p>
                      <h3 className="cs_card_title mb-0 cs_fs_21 cs_semibold">
                        <Link to={project.link}>{project.title}</Link>
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
            <div className="cs_slider_arrows cs_style_1 cs_show_lg">
              <div
                className="cs_left_arrow rounded-circle cs_center"
                onClick={() => slideRef.current.slickPrev()}
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
                onClick={() => slideRef.current.slickNext()}
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
        <Spacing lg={150} md={80} />
      </section>
    </>
  );
};

export default ProjectsSection;
