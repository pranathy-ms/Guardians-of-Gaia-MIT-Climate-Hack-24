import Section from '../../Components/Section';
import PageHeading from '../../Components/Heading/PageHeading';
import Button from '../../Components/Button';
import { Link } from 'react-router-dom';
import { pageTitle } from '../../helper';
import Spacing from '../../Components/Spacing';
const headingData = {
  title: 'Contact Us',
};

const contactData = {
  title: 'Get in Touch with Our Team',
  description:
    "Feel free to reach out to us via the contact form below, and we'll do our best to respond promptly.",
  imageUrl: '/assets/img/others/contact_img.jpg',
  formFields: [
    { type: 'text', placeholder: 'Full name *' },
    { type: 'text', placeholder: 'Email Address *' },
    { type: 'text', placeholder: 'Mobile Number *' },
    { type: 'textarea', placeholder: 'Write your comment *' },
  ],
  buttonText: 'Send message',
};

const contactInfo = [
  {
    icon: '/assets/img/others/contact_icon_1.svg',
    title: 'Office Location',
    description: '452 15th Street, Office 741, Ohio, De 47754, USA',
    link: null,
  },
  {
    icon: '/assets/img/others/contact_icon_2.svg',
    title: 'Email Address',
    description: 'info@ecozone.com',
    link: 'mailto:info@ecozone.com',
  },
  {
    icon: '/assets/img/others/contact_icon_3.svg',
    title: 'Office Location',
    description: '+21 454 451 2009',
    link: 'tel:+214544512009',
  },
];

const mapData = {
  mapUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96652.27317354927!2d-74.33557928194516!3d40.79756494697628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3a82f1352d0dd%3A0x81d4f72c4435aab5!2sTroy+Meadows+Wetlands!5e0!3m2!1sen!2sbd!4v1563075599994!5m2!1sen!2sbd',
};
const Contact = () => {
  pageTitle('Contact');
  return (
    <>
      <Section
        className={
          'cs_page_heading cs_bg_filed cs_center text-center cs_heading_bg'
        }
        backgroundImage="/assets/img/page_heading_bg.jpg"
      >
        <PageHeading data={headingData} />
      </Section>
      <section>
        <Spacing lg={150} md={80} />
        <div className="container">
          <div className="row align-items-center cs_gap_y_40">
            <div className="col-lg-6">
              <img src={contactData.imageUrl} alt="Contact" className="w-100" />
            </div>
            <div className="col-lg-6">
              <div className="cs_pl_75">
                <h3 className="cs_fs_38 cs_semibold cs_mb_14">
                  {contactData.title}
                </h3>
                <p className="cs_mb_46">{contactData.description}</p>
                <form action="#" className="cs_contact_form">
                  {contactData.formFields.map((field, index) =>
                    field.type === 'textarea' ? (
                      <textarea
                        key={index}
                        className="cs_form_field cs_mb_25"
                        cols={30}
                        rows={4}
                        placeholder={field.placeholder}
                      />
                    ) : (
                      <input
                        key={index}
                        type={field.type}
                        className="cs_form_field cs_mb_25"
                        placeholder={field.placeholder}
                      />
                    ),
                  )}
                  <button className="cs_btn cs_style_1" type="submit">
                    Send message
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
          </div>
        </div>
        <Spacing lg={145} md={75} />
      </section>
      <section>
        <div className="container">
          <div className="row cs_gap_y_30">
            {contactInfo.map((info, index) => (
              <div className="col-lg-4" key={index}>
                <div className="cs_iconbox cs_style_7">
                  <div className="cs_iconbox_icon cs_center">
                    <img src={info.icon} alt={info.title} />
                  </div>
                  <div className="cs_iconbox_info">
                    <h3 className="cs_fs_28 cs_semibold cs_mb_10">
                      {info.title}
                    </h3>
                    <p className="mb-0">
                      {info.link ? (
                        <Link to={info.link}>{info.description}</Link>
                      ) : (
                        info.description
                      )}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Spacing lg={150} md={80} />
      </section>
      <div className="cs_map">
        <iframe
          id="map"
          src={mapData.mapUrl}
          allowFullScreen=""
          loading="lazy"
        />
      </div>
    </>
  );
};

export default Contact;
