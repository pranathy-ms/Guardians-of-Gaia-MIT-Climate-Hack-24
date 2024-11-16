import { useState } from 'react';
import SectionHeading from '../Heading';
import Button from '../Button';
import { Link } from 'react-router-dom';
import VideoModal from '../VideoModal';
import Spacing from '../Spacing';

const AboutSection3 = ({ data }) => {
  const [toggle, setToggle] = useState(false);

  const [iframeSrc, setIframeSrc] = useState('about:blank');

  const handelClick = () => {
    setIframeSrc(`${data.videoBlock.videoUrl}`);
    setToggle(!toggle);
  };
  const handelClose = () => {
    setIframeSrc('about:blank');
    setToggle(!toggle);
  };
  return (
    <>
      <div className="container">
        <div className="row cs_gap_y_50 align-items-center">
          <div className="col-lg-6">
            <div className="cs_pr_75">
              <SectionHeading
                subtitle={data.sectionSubtitle}
                title={data.sectionTitle}
                description={data.description}
                titleVerint="cs_mb_29"
                descriptionVerint="cs_mb_30"
              />

              <div className="cs_funfact_2_list">
                {data.funFacts.map((fact, index) => (
                  <div className="cs_funfact cs_style_2" key={index}>
                    <p className="cs_funfact_number cs_fs_70 mb-0 cs_bold">
                      <span>{fact.number}</span>
                    </p>
                    <p className="cs_funfact_title mb-0 cs_fs_18">
                      {fact.title}
                    </p>
                  </div>
                ))}
              </div>
              <Spacing lg={45} md={30} />
              <Button
                btnIcons={true}
                btnText={data.button.text}
                btnUrl={data.button.url}
                variant={data.button.variant}
              />
            </div>
          </div>
          <div className="col-lg-6">
            <Link
              onClick={handelClick}
              to={'#'}
              className="cs_video_block cs_style_1 cs_bg_filed cs_video_open cs_center"
              style={{
                backgroundImage: `url(${data.videoBlock.bgImage})`,
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
          </div>
          <VideoModal
            isTrue={toggle}
            iframeSrc={iframeSrc}
            handelClose={handelClose}
          />
        </div>
      </div>
    </>
  );
};

export default AboutSection3;
