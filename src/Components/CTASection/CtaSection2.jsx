import Button from '../Button';
import Spacing from '../Spacing';

const CtaSection2 = ({ data }) => {
  return (
    <>
      {data.images.map((image, index) => (
        <div
          data-aos="zoom-in"
          key={index}
          className={`cs_cta_img cs_cta_img_position_${index + 1}`}
        >
          <img src={image} alt={`CTA Image ${index + 1}`} />
        </div>
      ))}
      <div className="cs_moving_text_wrap cs_fs_70 text-uppercase cs_heading_font cs_bold">
        <div className="cs_moving_text_in">
          <div className="cs_moving_text">{data.movingText}</div>
          <div className="cs_moving_text">{data.movingText}</div>
        </div>
      </div>
      <Spacing lg={68} md={40} />
      <div className="container">
        <h2 className="cs_fs_70 mb-0">{data.heading}</h2>
        <Spacing lg={76} md={40} />
        <Button
          btnIcons={true}
          btnText={data.buttonText}
          btnUrl={data.buttonUrl}
          variant={'cs_btn cs_style_1'}
        />
      </div>
    </>
  );
};

export default CtaSection2;
