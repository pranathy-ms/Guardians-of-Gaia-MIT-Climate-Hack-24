import SectionHeading from '../Heading';
import Button from '../Button';
import Spacing from '../Spacing';

const FeatureSection4 = ({ data, variant }) => {
  const { sectionTitle, sectionSubtitle, sectionDescription, features } = data;

  return (
    <>
      <div className="container">
        {sectionSubtitle && sectionTitle && (
          <>
            <SectionHeading
              subtitle={sectionTitle}
              title={sectionSubtitle}
              description={sectionDescription}
              textCenter={'text-center'}
              titleVerint="cs_mb_9"
              descriptionVerint="mb-0"
            />
            <Spacing lg={90} md={50} />
          </>
        )}
        <div className="row cs_gap_y_30">
          {features.map((feature, index) => (
            <div className="col-lg-4" key={index}>
              <div
                className={`cs_iconbox cs_style_3 text-center   ${
                  variant ? 'cs_shadow_1 cs_white_bg' : 'cs_accent_bg'
                }`}
              >
                {/* cs_accent_bg */}
                <div className="cs_iconbox_icon cs_mb_26">
                  <img src={feature.icon} alt="" />
                </div>
                <h3 className="cs_fs_38 cs_semibold">{feature.title}</h3>
                <p className={`cs_mb_21 ${variant ? '' : 'cs_white_color'}`}>
                  {feature.description}
                </p>{' '}
                {/* cs_white_color */}
                <Button
                  btnIcons={true}
                  btnText={feature.btnText}
                  btnUrl={feature.link}
                  variant={'cs_btn cs_style_2 cs_heading_color'}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FeatureSection4;
