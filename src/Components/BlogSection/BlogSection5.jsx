import { useRef } from 'react';
import SectionHeading from '../Heading';
import Slider from 'react-slick';
import Button from '../Button';
import { FaUserPen } from 'react-icons/fa6';
import { FaTag } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Spacing from '../Spacing';

const BlogSection5 = ({ data }) => {
  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4, // Default slides to show
    swipeToSlide: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1550,
        settings: {
          slidesToShow: 3, // 4 slides for screens larger than 1400px
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2, // 4 slides for screens larger than 1400px
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1, // 2 slides for screens between 767px and 1400px
        },
      },
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 1, // 1 slide for screens smaller than 767px
        },
      },
    ],
  };

  return (
    <>
      <div className="cs_slider cs_style_1 cs_slider_gap_24 cs_ptb_12">
        <div className="container">
          <div className="cs_slider_heading_1">
            <SectionHeading
              subtitle={data.sectionSubtitle}
              title={data.sectionTitle}
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
        </div>
        <div className="container-fluid">
          <Slider {...settings} ref={sliderRef}>
            {data.blogPosts.map((post, index) => (
              <div className="cs_slide" key={index}>
                <div className="cs_post cs_style_1">
                  <Link to={post.postUrl} className="cs_post_thumb">
                    <img src={post.imageUrl} alt="Post" />
                  </Link>
                  <div className="cs_post_info cs_shadow_1">
                    <ul className="cs_post_meta cs_mp_0">
                      <li>
                        <i>
                          <FaUserPen />
                        </i>
                        {post.author}
                      </li>
                      <li>
                        <i>
                          <FaTag />
                        </i>
                        {post.category}
                      </li>
                    </ul>
                    <h2 className="cs_post_title cs_semibold cs_fs_28 cs_mb_22">
                      <Link to={post.postUrl}>{post.title}</Link>
                    </h2>
                    <p className="cs_post_subtitle cs_mb_16">{post.subtitle}</p>
                    <Button
                      btnIcons={true}
                      btnText={post.btnText}
                      btnUrl={post.postUrl}
                      variant={'cs_btn cs_style_2 cs_heading_color'}
                    />
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

export default BlogSection5;
