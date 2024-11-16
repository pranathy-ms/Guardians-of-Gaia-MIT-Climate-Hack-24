import { useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';
import Spacing from '../Spacing';
import SectionHeading from '../Heading';

const FaqSection = ({ data, reverseOrder = true }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <div className="container">
        <div className="row">
          {reverseOrder ? (
            <>
              <div className="col-lg-6">
                <div className="cs_half_screen_left">
                  <div
                    className="cs_half_screen_thumb cs_bg_filed"
                    style={{ backgroundImage: `url(${data.rightImgUrl})` }}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="cs_pl_95">
                  <Spacing lg={93} md={80} />

                  <SectionHeading
                    subtitle={data.SectionSubtitle}
                    title={data.SectionTitle}
                  />

                  <Spacing lg={50} md={50} />
                  {/* .cs_accordian */}
                  <div
                    className="cs_accordians cs_style_1"
                    data-aos="fade-left"
                  >
                    {data?.faqData.map((items, index) => (
                      <div
                        className={`cs_accordian ${
                          activeIndex === index && 'active'
                        }`}
                        key={index}
                      >
                        <div
                          className="cs_accordian_head"
                          onClick={() => setActiveIndex(index)}
                        >
                          <h2
                            className="cs_accordian_title cs_fs_21 cs_semibold"
                            dangerouslySetInnerHTML={{ __html: items.question }}
                          />
                          <span className="cs_accordian_toggle">
                            <i>
                              <FaAngleDown />
                            </i>
                          </span>
                        </div>
                        <div className="cs_accordian_body_wrap">
                          <div
                            className="cs_accordian_body"
                            style={{
                              display: activeIndex === index ? 'block' : 'none',
                            }}
                          >
                            <p
                              dangerouslySetInnerHTML={{ __html: items.answer }}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Spacing lg={100} md={53} />
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="col-lg-6">
                <div className="cs_pr_95">
                  <Spacing lg={93} md={80} />

                  <SectionHeading
                    subtitle={data.SectionSubtitle}
                    title={data.SectionTitle}
                  />

                  <Spacing lg={50} md={50} />
                  {/* .cs_accordian */}
                  <div className="cs_accordians cs_style_1">
                    {data?.faqData.map((items, index) => (
                      <div
                        className={`cs_accordian cs_shadow_1 ${
                          activeIndex === index && 'active'
                        }`}
                        key={index}
                      >
                        <div
                          className="cs_accordian_head"
                          onClick={() => setActiveIndex(index)}
                        >
                          <h2
                            className="cs_accordian_title cs_fs_21 cs_semibold"
                            dangerouslySetInnerHTML={{ __html: items.question }}
                          />
                          <span className="cs_accordian_toggle">
                            <i>
                              <FaAngleDown />
                            </i>
                          </span>
                        </div>
                        <div
                          className="cs_accordian_body"
                          style={{
                            display: activeIndex === index ? 'block' : 'none',
                          }}
                        >
                          <p
                            dangerouslySetInnerHTML={{ __html: items.answer }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  <Spacing lg={100} md={50} />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="cs_half_screen_right">
                  <div
                    className="cs_half_screen_thumb cs_bg_filed"
                    style={{ backgroundImage: `url(${data.rightImgUrl})` }}
                  />
                </div>
                <Spacing lg={125} md={60} />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default FaqSection;
