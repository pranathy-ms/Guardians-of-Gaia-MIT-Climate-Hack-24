import SectionHeading from '../Heading';
import Spacing from '../Spacing';

const FeatureSection2 = ({ data, reverseOrder }) => {
  return (
    <>
      <div className="container">
        <div className="row cs_col_reverse_lg">
          {reverseOrder ? (
            <>
              <div className="col-lg-6">
                <div className="cs_half_screen_left">
                  <div
                    className="cs_half_screen_thumb cs_bg_filed"
                    style={{
                      backgroundImage: `url(${data.backgroundImage})`,
                    }}
                  />
                </div>
              </div>
              <div className="col-lg-6" data-aos="fade-left">
                <div className="cs_pl_95">
                  <Spacing lg={93} md={50} />
                  <SectionHeading
                    subtitle={data.sectionSubtitle}
                    title={data.sectionTitle}
                  />
                  <Spacing lg={50} md={50} />
                  <ul className="cs_list cs_style_2 cs_mp_0">
                    {data.features.map((feature, index) => (
                      <li key={index}>
                        <span className="cs_list_number cs_fs_70 cs_bold cs_heading_font">
                          {`0${index + 1}`}
                        </span>
                        <div className="cs_list_right">
                          <h3 className="cs_fs_28 cs_semibold cs_mb_10">
                            {feature.title}
                          </h3>
                          <p className="mb-0">{feature.description}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <Spacing lg={100} md={70} />
                </div>
              </div>
            </>
          ) : (
            <>
              {' '}
              <div className="col-lg-6">
                <div className="cs_pr_95" data-aos="fade-right">
                  <Spacing lg={93} md={50} />
                  <SectionHeading
                    subtitle={data.sectionSubtitle}
                    title={data.sectionTitle}
                  />
                  <Spacing lg={50} md={50} />
                  <ul className="cs_list cs_style_2 cs_mp_0">
                    {data.features.map((feature, index) => (
                      <li key={index}>
                        <span className="cs_list_number cs_fs_70 cs_bold cs_heading_font">
                          {`0${index + 1}`}
                        </span>
                        <div className="cs_list_right">
                          <h3 className="cs_fs_28 cs_semibold cs_mb_10">
                            {feature.title}
                          </h3>
                          <p className="mb-0">{feature.description}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <Spacing lg={100} md={70} />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="cs_half_screen_right">
                  <div
                    className="cs_half_screen_thumb cs_bg_filed"
                    style={{
                      backgroundImage: `url(${data.backgroundImage})`,
                    }}
                  />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default FeatureSection2;
