import Slider from 'react-slick';
import SectionHeading from '../Heading';
import Spacing from '../Spacing';
import Review from '../Review';

const Testimonial = ({ data }) => {
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
    dotsClass: `cs_pagination cs_style_2 cs_type_4`,
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
          backgroundImage: `url(${data.bgImgUrl})`,
        }}
      />
      <div className="container">
        <div className="cs_slider cs_style_1 cs_slider_gap_24 cs_ptb_12">
          <div className="cs_slider_heading_1">
            <SectionHeading
              subtitle={data.sectionSubtitle}
              title={data.sectionTitle}
            />
          </div>
          <Spacing lg={90} md={50} />
          <Slider {...settings}>
            {data.testimonials.map((testimonial, index) => (
              <div className="cs_slide" key={index}>
                <div className="cs_testimonial cs_style_1 cs_shadow_1 cs_white_bg">
                  <div
                    className="cs_testimonial_avatar cs_mb_42"
                    style={{ alignItems: 'start' }}
                  >
                    <img src={testimonial.image} alt={testimonial.name} />
                    <div className="cs_testimonial_avatar_right">
                      <h3 className="cs_fs_21 cs_semibold cs_mb_2">
                        {testimonial.name}
                      </h3>
                      <p className="cs_mb_20">
                        {testimonial.role.length > 100
                          ? `${testimonial.role.substring(0, 100)}...`
                          : testimonial.role}
                      </p>
                    </div>
                  </div>
                  <blockquote className="cs_fs_18 cs_mb_45">
                    {testimonial.feedback}
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

export default Testimonial;
