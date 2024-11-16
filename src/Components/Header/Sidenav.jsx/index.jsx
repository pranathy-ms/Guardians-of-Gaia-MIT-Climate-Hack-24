import {
  FaEnvelope,
  FaFacebookF,
  FaPhoneAlt,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { TfiLinkedin } from 'react-icons/tfi';
import { Link } from 'react-router-dom';

const Sidenav = ({
  data,
  toggleSideHeader,
  isSideHeaderOpen,
  closeSideHeader,
}) => {
  return (
    <>
      <div className={`cs_side_header ${isSideHeaderOpen ? 'active' : ''}`}>
        <button className="cs_close" onClick={toggleSideHeader} />
        <div className="cs_side_header_overlay" onClick={closeSideHeader} />
        <div className="cs_side_header_in">
          <div className="cs_side_header_shape" />
          <Link className="cs_site_branding" to="index">
            <img src={data.logoSrc} alt="Logo" />
          </Link>
          <div className="cs_side_header_box">
            <h2
              className="cs_side_header_heading"
              dangerouslySetInnerHTML={{ __html: data.projectHeading }}
            />
          </div>
          <div className="cs_side_header_box">
            <h3 className="cs_side_header_title cs_heading_color">
              Contact Us
            </h3>
            <ul className="cs_side_header_contact_info cs_mp_0">
              <li>
                <i>
                  <FaPhoneAlt />
                </i>
                <span>
                  <Link to={data.url1}>{data.phone}</Link>
                </span>
              </li>
              <li>
                <i>
                  <FaEnvelope />
                </i>
                <span>
                  <Link to={data.url2}>{data.email}</Link>
                </span>
              </li>
              <li>
                <i>
                  <FaLocationDot />
                </i>
                <span dangerouslySetInnerHTML={{ __html: data.content }}></span>
              </li>
            </ul>
          </div>
          <div className="cs_side_header_box">
            <h3 className="cs_side_header_title cs_heading_color">Subscribe</h3>
            <div className="cs_newsletter cs_style_1">
              <form action="#" className="cs_newsletter_form">
                <input
                  type="email"
                  className="cs_newsletter_input"
                  placeholder={data.subscriptionPlaceholder}
                />
                <button type="submit" className="cs_btn cs_style_1 w-100">
                  {data.buttonText}
                  <i>
                    <svg
                      width={9}
                      height={10}
                      viewBox="0 0 9 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.5 9L8.5 1M8.5 1L0.5 1M8.5 1L8.5 9"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <svg
                      width={9}
                      height={10}
                      viewBox="0 0 9 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.5 9L8.5 1M8.5 1L0.5 1M8.5 1L8.5 9"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </i>
                </button>
              </form>
            </div>
          </div>
          <div className="cs_side_header_box">
            <h3 className="cs_side_header_title cs_heading_color">Follow Us</h3>
            <div className="cs_social_btns cs_style_1">
              <Link to="/" className="cs_center">
                <i>
                  <TfiLinkedin />
                </i>
              </Link>
              <Link to="/" className="cs_center">
                <i>
                  {' '}
                  <FaTwitter />
                </i>
              </Link>
              <Link to="/" className="cs_center">
                <i>
                  <FaYoutube />
                </i>
              </Link>
              <Link to="/" className="cs_center">
                <i>
                  <FaFacebookF />
                </i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidenav;
