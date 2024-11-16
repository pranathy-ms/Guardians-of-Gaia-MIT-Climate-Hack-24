import SectionHeading from '../Heading';
import Button from '../Button';

const AboutSection2 = ({ data }) => {
  return (
    <>
      <div className="container">
        <div className="row align-items-center cs_gap_y_50">
          <div className="col-lg-6">
            <div className="cs_layer_img_box cs_type_1">
              <div className="cs_layer_img_1">
                <img src={data.images.img1} alt="" className="cs_shadow_1" />
              </div>
              <div className="cs_layer_img_2">
                <img src={data.images.img2} alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="cs_pl_100">
              <SectionHeading
                subtitle={data.subtitle}
                title={data.title}
                titleVerint="cs_mb_31"
              />
              <div className="cs_experience_box">
                <div className="cs_experience_box_left">
                  <h3 className="cs_accent_color cs_fs_70 cs_mb_7">
                    {data.experience.years}
                  </h3>
                  <h3 className="cs_fs_21 cs_semibold mb-0">
                    {data.experience.text}
                  </h3>
                </div>
                <div className="cs_experience_box_right">
                  <p className="cs_mb_45 cs_mb_lg_35">{data.description}</p>
                  <Button
                    btnIcons={true}
                    btnText={data.button.text}
                    btnUrl={data.button.url}
                    variant={'cs_btn cs_style_1'}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection2;
