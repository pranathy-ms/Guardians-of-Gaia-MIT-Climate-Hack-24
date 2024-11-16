import SectionHeading from '../Heading';
import Spacing from '../Spacing';

const FeatureSection5 = ({ data }) => {
  return (
    <div className="container poistion-relative">
      <div className="cs_shape cs_shape_position_8" data-aos="fade-left">
        <img src="/assets/img/charity/feature_shape.png" alt="" />
      </div>
      <SectionHeading
        subtitle={data.sectionSubtitle}
        title={data.sectionTitle}
      />
      <Spacing lg={90} md={50} />
      <div className="row cs_gap_y_40">
        {data.iconBoxes.map((box, index) => (
          <div className="col-lg-6" key={index}>
            <div className="cs_iconbox cs_style_4">
              <div className="cs_iconbox_icon">
                <img src={box.icon} alt={box.title} />
              </div>
              <div className="cs_iconbox_info">
                <h3 className="cs_fs_28 cs_semibold cs_mb_10">{box.title}</h3>
                <p className="mb-0">{box.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection5;
