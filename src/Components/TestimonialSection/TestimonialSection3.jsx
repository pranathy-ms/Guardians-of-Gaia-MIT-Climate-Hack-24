import Slider from 'react-slick';
import SectionHeading from '../Heading';
import Spacing from '../Spacing';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Review from '../Review';

const TestimonialSection3 = ({ data }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    swipeToSlide: true,
    arrows: false,
    appendDots: dots => (
      <div>
        <ul>{dots}</ul>
      </div>
    ),
    dotsClass: `cs_pagination cs_style_2 cs_type_3 cs_hide_lg`,
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
        className="cs_half_bg_bottom cs_accent_bg cs_bg_filed"
        style={{
          backgroundImage: `url(assets/img/nature/testimonial_bg.svg)`,
        }}
      />
      <div className="container">
        <SectionHeading
          subtitle={data.sectionSubtitle}
          title={data.sectionTitle}
          textCenter={'text-center'}
        />
        <Spacing lg={90} md={50} />
        <div className="cs_slider cs_style_1 cs_slider_gap_24 cs_ptb_12">
          <Slider {...settings}>
            {data.testimonials.map((testimonial, index) => (
              <div className="cs_slide" key={index}>
                <div className="cs_testimonial cs_style_1 cs_type_2 cs_shadow_1 cs_white_bg">
                  <div className="cs_testimonial_avatar cs_mb_32">
                    <img src={testimonial.avatar} alt="Avatar" />
                    <div className="cs_testimonial_avatar_right">
                      <h3 className="cs_fs_21 cs_semibold cs_mb_2">
                        {testimonial.name}
                      </h3>
                      <p className="mb-0 cs_accent_color">{testimonial.role}</p>
                    </div>
                  </div>
                  <blockquote className="cs_fs_18 cs_mb_45">
                    {testimonial.quote}
                  </blockquote>
                  <Review reviewNumber={testimonial.rating} />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default TestimonialSection3;
