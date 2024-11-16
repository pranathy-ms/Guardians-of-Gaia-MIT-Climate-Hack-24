import { useRef } from 'react';
import Slider from 'react-slick';
import SectionHeading from '../Heading';
import Button from '../Button';
import Spacing from '../Spacing';

const DonationSection = ({ data, variant }) => {
  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    swipeToSlide: true,
    arrows: false,
  };

  return (
    <>
      <div className="container">
        <SectionHeading
          subtitle={data.SectionSubtitle}
          title={data.SectionTitle}
          textCenter={'text-center'}
        />

        <Spacing lg={90} md={50} />
      </div>
      <div className="cs_slider cs_style_1 cs_slider_gap_24 cs_ptb_12">
        <div className="container">
          <Slider {...settings} ref={sliderRef}>
            {data?.slider.map((campaign, index) => (
              <div className="cs_slide" key={index}>
                <div className="cs_card cs_style_1 cs_shadow_1">
                  {variant ? (
                    <>
                      <div className="cs_card_info">
                        <h2 className="cs_fs_38 cs_mb_20 cs_semibold">
                          {campaign.title}
                        </h2>
                        <p className="cs_mb_15">{campaign.description}</p>

                        <div className="cs_progress_wrap">
                          <div
                            className="cs_progress"
                            data-progress={campaign.progress}
                          >
                            <div
                              className="cs_progress_in cs_accent_bg"
                              style={{ width: `${campaign.progress}%` }}
                            >
                              <span>{campaign.progress}%</span>
                            </div>
                          </div>
                        </div>
                        <div className="cs_progress_heading cs_mb_28">
                          <h3 className="cs_fs_21 cs_semibold mb-0">
                            Goal: ${campaign.goal}
                          </h3>
                          <h3 className="cs_fs_21 cs_semibold mb-0">
                            Raised: ${campaign.raised}
                          </h3>
                        </div>
                        <Button
                          btnIcons={true}
                          btnText={campaign.btnText}
                          btnUrl={campaign.btnUrl}
                          variant={'cs_btn cs_style_1 w-100'}
                        />
                      </div>
                      <div className="cs_card_thumb">
                        <img src={campaign.imgSrc} alt={campaign.title} />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="cs_card_thumb">
                        <img src={campaign.imgSrc} alt={campaign.title} />
                      </div>
                      <div className="cs_card_info">
                        <h2 className="cs_fs_38 cs_mb_20 cs_semibold">
                          {campaign.title}
                        </h2>
                        <p className="cs_mb_15">{campaign.description}</p>
                        <div className="cs_progress_wrap">
                          <div
                            className="cs_progress"
                            data-progress={campaign.progress}
                          >
                            <div
                              className="cs_progress_in cs_accent_bg"
                              style={{ width: `${campaign.progress}%` }}
                            >
                              <span>{campaign.progress}%</span>
                            </div>
                          </div>
                        </div>
                        <div className="cs_progress_heading cs_mb_28">
                          <h3 className="cs_fs_21 cs_semibold mb-0">
                            Goal: ${campaign.goal}
                          </h3>
                          <h3 className="cs_fs_21 cs_semibold mb-0">
                            Raised: ${campaign.raised}
                          </h3>
                        </div>
                        <Button
                          btnIcons={true}
                          btnText={campaign.btnText}
                          btnUrl={campaign.btnUrl}
                          variant={'cs_btn cs_style_1 w-100'}
                        />
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="cs_slider_arrows cs_style_1">
          <div
            className="cs_arrow_wrap cs_arrow_wrap_left cs_center"
            onClick={() => sliderRef.current.slickPrev()}
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
            onClick={() => sliderRef.current.slickNext()}
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

export default DonationSection;
