import { useState } from "react";
import DonationWidget from "../Widget/DonationWidget";

const HeroSection6 = ({ data }) => {
  const { title, subtitle, backgroundImage, fixedAmounts } = data;

  return (
    <>
      <section
        className="cs_hero cs_style_6 cs_heading_bg cs_center cs_ripple_activate"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="container">
          <div className="row cs_gap_y_40">
            <div className="col-lg-7">
              <div className="cs_hero_text" data-aos="fade-right">
                <h1 className="cs_hero_title cs_fs_70 cs_white_color cs_mb_38 cs_mb_lg_25">
                  {title}
                </h1>
                <p className="cs_hero_subtitle cs_white_color mb-0">
                  {subtitle}
                </p>
                <span className="cs_accent_color cs_hero_shape">
                  <svg
                    width={84}
                    height={77}
                    viewBox="0 0 84 77"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.6366 15.0076C22.4931 17.106 25.7716 20.1709 29.492 22.4975C33.1396 24.7755 36.5395 27.5247 39.8471 30.235C46.5547 35.7188 52.6793 42.1594 56.8126 49.8047C57.3615 50.8198 56.0209 51.9224 55.1855 51.0578C49.2794 44.9037 43.213 38.9148 37.0447 33.0376C34.043 30.1686 30.9993 27.3369 27.9135 24.5423C24.6496 21.594 20.9049 19.1994 17.6847 16.2414C17.0144 15.6197 17.8741 14.5899 18.6366 15.0076Z"
                      fill="currentColor"
                    />
                    <path
                      d="M1.09196 43.7784C5.4822 43.7558 9.83247 44.8587 14.2137 45.1017C18.5077 45.3373 22.8121 46.1051 27.0168 46.8834C35.5376 48.4507 44.0094 51.1374 51.3181 55.84C52.2886 56.4644 51.6463 58.077 50.4974 57.7227C42.3552 55.1816 34.1524 52.8624 25.914 50.6903C21.9008 49.6255 17.8686 48.6135 13.8175 47.6544C9.53626 46.6466 5.10093 46.3558 0.853263 45.3183C-0.0337717 45.0971 0.222502 43.7804 1.09196 43.7784Z"
                      fill="currentColor"
                    />
                    <path
                      d="M51.1749 0.725824C53.2884 4.57411 54.3935 8.92399 56.2693 12.891C58.1099 16.7778 59.4877 20.9275 60.8088 24.9946C63.4946 33.2319 65.1732 41.9599 64.5253 50.6269C64.4393 51.7777 62.7157 51.9821 62.4792 50.8033C60.8299 42.4345 58.9565 34.1181 56.9369 25.8408C55.959 21.8053 54.9256 17.7784 53.8367 13.7601C52.6808 9.51622 50.8214 5.47884 49.7076 1.25038C49.479 0.365176 50.7585 -0.0374784 51.1749 0.725824Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
              </div>
            </div>
            <div className="col-lg-5">
              <DonationWidget fixedAmounts={fixedAmounts} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection6;
