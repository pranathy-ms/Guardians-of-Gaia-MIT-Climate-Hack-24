import Button from "../Button";

const HeroSection = ({ data }) => {
  return (
    <>
      <section
        className="cs_hero cs_style_1 cs_heading_bg cs_center cs_bg_filed"
        style={{ backgroundImage: `url(/assets/img/nature/hero_bg.jpg)` }}
      >
        <div className="container">
          <div className="cs_hero_text">
            <h1 className="cs_hero_title cs_fs_70 cs_white_color cs_mb_30">
              {data.slides[0]?.title}
            </h1>
            <p className="cs_hero_subtitle cs_white_color cs_mb_37">
              {data.slides[0]?.subtitle}
            </p>
            <Button
              btnText={data.slides[0]?.btnText}
              btnUrl={data.slides[0]?.btnUrl}
              variant={"cs_btn cs_style_1"}
              btnIcons={true}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
