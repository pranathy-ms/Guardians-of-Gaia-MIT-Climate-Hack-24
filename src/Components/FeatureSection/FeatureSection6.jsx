import SectionHeading from '../Heading';
import Spacing from '../Spacing';

const FeatureSection6 = ({ data }) => {
  return (
    <>
      <div className="container">
        <SectionHeading
          subtitle={data.sectionSubtitle}
          title={data.sectionTitle}
          textCenter={'text-center'}
        />
        <Spacing lg={90} md={50} />
      </div>
      <div className="container">
        <div className="row cs_gap_y_40">
          {data.features.map((feature, index) => (
            <div className="col-xl-3 col-md-6" key={index}>
              <div className="cs_iconbox cs_style_6 cs_shadow_1 text-center cs_white_bg">
                <div className="cs_iconbox_icon cs_accent_bg cs_mb_30 cs_center">
                  <img src={feature.icon} alt={feature.title} />
                </div>
                <h3
                  className="cs_iconbox_title cs_fs_28 cs_semibold cs_mb_24"
                  dangerouslySetInnerHTML={{ __html: feature.title }}
                />
                <p className="mb-0">
                  {feature.description.length > 100
                    ? `${feature.description.substring(0, 200)}...`
                    : feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FeatureSection6;
