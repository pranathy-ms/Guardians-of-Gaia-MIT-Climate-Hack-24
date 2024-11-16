import { Link } from 'react-router-dom';
import Spacing from '../Spacing';

const EventDetailsSection = ({ data }) => {
  return (
    <>
      <div className="container">
        <div className="row cs_gap_y_80">
          <div className="col-lg-7">
            <div className="cs_details_content">
              <img src={data.image} alt="" />
              <h2>{data.title}</h2>
              <p>{data.description}</p>

              <h3>Agenda:</h3>
              {data.agenda.map((item, index) => (
                <div key={index}>
                  <h4>
                    {index + 1}. {item.title}
                  </h4>
                  <p dangerouslySetInnerHTML={{ __html: item.description }}></p>
                </div>
              ))}

              <h3>Registration Information:</h3>
              <p>
                Registration is free. To secure your spot, please email us at{' '}
                <Link to={`mailto:${data.registration.email}`}>
                  {data.registration.email}
                </Link>{' '}
                or contact us through our contact form.
              </p>

              <h3>
                Join us at Learning Lighthouse Symposium for an inspiring day of
                education!
              </h3>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="cs_info_card cs_gray_bg">
              <h3 className="cs_fs_28 cs_semibold cs_mb_28">Event Details :</h3>
              <ul className="cs_fs_21 cs_medium cs_heading_font cs_mp_0">
                <li>Speakers: {data.eventDetails.speakers}</li>
                <li>Date: {data.eventDetails.date}</li>
                <li>Time: {data.eventDetails.time}</li>
                <li>Location: {data.eventDetails.location}</li>
              </ul>
            </div>
            <Spacing lg={50} md={40} />
            <div className="cs_form_widget cs_gray_bg">
              <h3 className="cs_form_widget_title cs_fs_28 cs_semibold cs_mb_31">
                Contact Us:
              </h3>
              <form action="#">
                <input
                  type="text"
                  className="cs_form_field cs_type_2 cs_mb_20"
                  placeholder="Your Name"
                />
                <input
                  type="text"
                  className="cs_form_field cs_type_2 cs_mb_20"
                  placeholder="Your Email"
                />
                <input
                  type="text"
                  className="cs_form_field cs_type_2 cs_mb_20"
                  placeholder="Mobile Number"
                />
                <textarea
                  rows={4}
                  cols={10}
                  className="cs_form_field cs_type_2 cs_mb_20"
                  placeholder="Type Your Comment"
                />
                <button type="submit" className="cs_btn cs_style_1 w-100">
                  Contact Now
                </button>
              </form>
            </div>
            <Spacing lg={50} md={40} />
            <div className="cs_social_widget cs_gray_bg">
              <h2 className="cs_fs_28 cs_semibold cs_mb_30">
                Share This Opportunity
              </h2>
              <div className="cs_social_widget_list">
                {data.socialLinks.map((social, index) => (
                  <Link key={index} to={social.link} className="cs_center">
                    <i>{social.icon}</i>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventDetailsSection;
