import Button from "../Button";
const HeroSection7 = ({ data }) => {
  return (
    <>
      <section
        className="cs_hero cs_style_1 cs_type_1 cs_heading_bg cs_center"
        style={{
          backgroundImage: `url(${data.backgroundImage})`,
        }}
      >
        <div className="container">
          <div className="cs_hero_text" data-aos="fade-left">
            <h1 className="cs_hero_title cs_fs_70 cs_white_color cs_mb_30">
              {data.title}
            </h1>
            <p className="cs_hero_subtitle cs_white_color cs_mb_37">
              {data.subtitle}
            </p>
            <Button
              btnIcons={true}
              btnText={data.buttonText}
              variant={"cs_btn cs_style_1"}
              btnUrl={data.buttonUrl}
            />
          </div>
        </div>
        <div
          className="cs_rotate_text_box cs_bg_filed cs_center"
          style={{
            backgroundImage: `url(${data.rotateTextBg})`,
          }}
        >
          <img src={data.rotateTextImg} alt="" />
        </div>
      </section>
    </>
  );
};
export default HeroSection7;
