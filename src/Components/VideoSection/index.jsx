import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import VideoModal from '../VideoModal';

const VideoBlock = ({ data }) => {
  const { videoUrl, videoBgImage, videoBlockImage } = data;
  const [toggle, setToggle] = useState(false);
  const [iframeSrc, setIframeSrc] = useState('about:blank');
  const handelClick = () => {
    setIframeSrc(`${data.videoUrl}`);
    setToggle(!toggle);
  };
  const handelClose = () => {
    setIframeSrc('about:blank');
    setToggle(!toggle);
  };

  return (
    <>
      <Link
        to={'#'}
        className="cs_video_block cs_style_1 cs_type_1 cs_bg_filed cs_video_open cs_center"
        style={{ backgroundImage: `url(${videoBgImage})` }}
      >
        {videoBlockImage && <img src={videoBlockImage} alt="Video Block" />}
        <span className="cs_player_btn cs_white_color" onClick={handelClick}>
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
      <VideoModal
        isTrue={toggle}
        iframeSrc={iframeSrc}
        handelClose={handelClose}
      />
    </>
  );
};

export default VideoBlock;
