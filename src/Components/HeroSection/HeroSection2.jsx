import { useState } from "react";
import Button from "../Button";
import { Link } from "react-router-dom";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { TfiLinkedin } from "react-icons/tfi";
import VideoModal from "../VideoModal";

const HeroSection2 = ({ data }) => {
  const [toggle, setToggle] = useState(false);
  const [iframeSrc, setIframeSrc] = useState("about:blank");
  const handelClick = () => {
    setIframeSrc(`${data.videoUrl}`);
    setToggle(!toggle);
  };
  const handelClose = () => {
    setIframeSrc("about:blank");
    setToggle(!toggle);
  };

  return (
    <>
      <section className="cs_hero cs_style_2 cs_heading_bg cs_center">
        <div
          className="cs_hero_bg_left cs_bg_filed cs_accent_bg"
          style={{
            backgroundImage: `url(${data.heroBgPattern})`,
          }}
        />
        <div
          className="cs_hero_bg_right cs_bg_filed cs_accent_bg"
          style={{
            backgroundImage: `url(${data.heroBgImage})`,
          }}
        />
        <div className="container">
          <div className="cs_hero_in">
            <Link
              onClick={handelClick}
              data-aos="fade-in"
              to={"#"}
              className="cs_video_block cs_style_1 cs_bg_filed cs_video_open"
              style={{
                backgroundImage: `url(${data.videoBgImage})`,
              }}
            >
              <span className="cs_player_btn cs_white_color">
                <svg
                  width={70}
                  height={70}
                  viewBox="0 0 70 70"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M35 0C15.7004 0 0 15.7004 0 35C0 54.2996 15.7004 70 35 70C54.2996 70 70 54.2996 70 35C70 15.7004 54.2996 0 35 0ZM35 64.1667C18.9175 64.1667 5.83333 51.0825 5.83333 35C5.83333 18.9175 18.9175 5.83333 35 5.83333C51.0825 5.83333 64.1667 18.9175 64.1667 35C64.1667 51.0825 51.0825 64.1667 35 64.1667ZM23.3333 51.4704L52.6167 35L23.3333 18.5296V51.4733V51.4704ZM29.1667 28.5017L40.7167 35L29.1667 41.4983V28.5017Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
            </Link>
            <div className="cs_hero_text" data-aos="fade-left">
              <h2 className="cs_accent_color cs_fs_21 cs_mb_16">
                {data.heroSubtitle}
              </h2>
              <h1 className="cs_hero_title cs_fs_70 cs_white_color cs_mb_30">
                {data.heroTitle}
              </h1>
              <p className="cs_hero_subtitle cs_white_color cs_mb_37">
                {data.heroDescription}
              </p>

              <Button
                btnIcons={true}
                btnText={data.buttonText}
                btnUrl={data.buttonUrl}
                variant={"cs_btn cs_style_1"}
              />
            </div>
          </div>
        </div>
        <div className="cs_social_btns cs_style_1">
          <Link to={data.linkDinLink} className="cs_center">
            <i>
              <TfiLinkedin />
            </i>
          </Link>
          <Link to={data.youTubLink} className="cs_center">
            <i>
              <FaYoutube />
            </i>
          </Link>
          <Link to={data.facebookLink} className="cs_center">
            <i>
              <FaFacebookF />
            </i>
          </Link>
        </div>
      </section>
      <VideoModal
        isTrue={toggle}
        iframeSrc={iframeSrc}
        handelClose={handelClose}
      />
    </>
  );
};

export default HeroSection2;
