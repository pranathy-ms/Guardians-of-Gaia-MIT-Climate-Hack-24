import Slider from 'react-slick';

const BrandSection = ({ data }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    swipeToSlide: true,
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
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 350,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="container">
        <div className="cs_slider cs_style_1 cs_slider_gap_24">
          <Slider {...settings}>
            {data.map((brand, index) => (
              <div key={index} className="cs_slide">
                <div className="cs_brand cs_style_1">
                  <img src={brand} alt={`Brand ${index + 1}`} />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default BrandSection;
