import { HiPlus } from 'react-icons/hi';
import Spacing from '../Spacing';

const FeatureSection3 = ({ data }) => {
  return (
    <>
      <div className="container">
        <div className="row cs_col_reverse_lg">
          <div className="col-lg-6">
            <div className="cs_pr_95">
              <Spacing lg={35} md={35} />
              <div className="cs_section_heading cs_style_1">
                <h3 className="cs_fs_21 cs_semibold cs_accent_color cs_mb_13">
                  {data.subtitle}
                </h3>
                <h2 className="cs_fs_51 cs_mb_30 cs_mb_lg_20">{data.title}</h2>
                <p className="mb-0">{data.description}</p>
              </div>
              <Spacing lg={45} md={35} />
              <ul className="cs_list cs_style_3 cs_mp_0 cs_heading_font cs_heading_color cs_semibold cs_fs_21">
                {data.features.map((feature, index) => (
                  <li key={index}>
                    <i>
                      <HiPlus />
                    </i>
                    {feature}
                  </li>
                ))}
              </ul>
              <Spacing lg={35} md={0} />
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
        </div>
      </div>
    </>
  );
};

export default FeatureSection3;
