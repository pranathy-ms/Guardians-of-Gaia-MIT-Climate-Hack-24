import SectionHeading from '../Heading';
import Spacing from '../Spacing';

const AboutSection4 = ({ data }) => {
  return (
    <>
      <div className="container">
        <div className="row cs_gap_y_50 cs_col_reverse_lg">
          <div className="col-lg-6 d-flex align-items-center">
            <div className="cs_pr_75">
              <Spacing lg={66} md={0} />
              <SectionHeading
                subtitle={data.sectionSubtitle}
                title={data.sectionTitle}
                description={data.description}
                titleVerint="cs_mb_29"
                descriptionVerint="cs_mb_46 cs_mb_lg_30"
              />
              <p className="cs_progress_wrap_title cs_heading_color">
                {data?.progress1.title}
              </p>
              <div className="cs_progress_wrap">
                <div
                  className="cs_progress"
                  data-progress={data?.progress1.value}
                >
                  <div
                    className="cs_progress_in cs_accent_bg"
                    style={{ width: `${data?.progress1.value}%` }}
                  >
                    <span>{data?.progress1.value}%</span>
                  </div>
                </div>
              </div>
              <Spacing lg={33} md={33} />
              <p className="cs_progress_wrap_title cs_heading_color">
                {data?.progress2.title}
              </p>
              <div className="cs_progress_wrap">
                <div
                  className="cs_progress"
                  data-progress={data?.progress2.value}
                >
                  <div
                    className="cs_progress_in cs_accent_bg"
                    style={{ width: `${data?.progress2.value}%` }}
                  >
                    <span>{data?.progress2.value}%</span>
                  </div>
                </div>
              </div>
              <Spacing lg={70} md={0} />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="cs_half_screen_right">
              <div
                className="cs_half_screen_thumb cs_bg_filed position-relative overflow-hidden"
                style={{
                  backgroundImage: `url(${data.backgroundImage})`,
                }}
              >
                <div className="cs_funfact cs_style_3 cs_center">
                  <img src={data?.funfact.icon} alt="" className="cs_mb_11" />
                  <h3 className="cs_fs_38 cs_semibold cs_accent_color cs_mb_6">
                    {data?.funfact.amount}
                  </h3>
                  <h4 className="cs_fs_21 cs_semibold mb-0">
                    {data?.funfact.text}
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection4;
