import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import { TfiLinkedin } from "react-icons/tfi";
import { Link } from "react-router-dom";
const data = {
  logo: "/assets/img/footer_logo.svg",
  backgroundImageUrl: "/assets/img/nature/footer_bg.jpg",
};

const Footer = () => {
  return (
    <>
      <footer
        className="cs_footer cs_style_1 cs_heading_bg cs_bg_filed"
        style={{ backgroundImage: `url(${data.backgroundImageUrl})` }}
      >
      </footer>
    </>
  );
};

export default Footer;
