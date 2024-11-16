import { useState } from 'react';
import Button from '../Button';
import { FaArrowRightLong, FaAngleDown } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import Spacing from '../Spacing';

const ServiceDetailsSection = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section>
      <Spacing lg={150} md={80} />
      <div className="container">
        <div className="row cs_gap_y_80">
          <div className="col-xl-4 col-lg-5">
            <div className="cs_nav_widget cs_shadow_1">
              <h3 className="cs_nav_widget_title cs_accent_bg cs_white_color cs_fs_28 cs_semibold mb-0">
                {data.servicesData.title}
              </h3>
              <ul className="cs_mp_0">
                {data.servicesData.services.map((service, index) => (
                  <li key={index}>
                    <Link to={service.link}>
                      {service.name}
                      <i>
                        <FaArrowRightLong />
                      </i>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <Spacing lg={50} md={40} />
            <div
              className="cs_contact_widget cs_bg_filed text-center"
              style={{
                backgroundImage: `url(${data.contactData.backgroundImage})`,
              }}
            >
              <div className="cs_contact_widget_in cs_center">
                <div className="cs_contact_widget_icon cs_accent_bg cs_center cs_mb_24">
                  <img src={data.contactData.icon} alt="Contact Icon" />
                </div>
                <h3 className="cs_contact_widget_title cs_white_color cs_fs_38 cs_semibold cs_mb_40">
                  {data.contactData.title}
                </h3>
                <Button
                  btnIcons={true}
                  btnText={data.contactData.buttonText}
                  btnUrl={data.contactData.link}
                  variant={'cs_btn cs_style_1'}
                />
              </div>
            </div>
            <Spacing lg={50} md={40} />
            <div className="cs_form_widget cs_shadow_1">
              <h3 className="cs_form_widget_title cs_fs_28 cs_semibold cs_mb_31">
                {data.formData.title}
              </h3>
              <form action="#">
                {data.formData.fields.map((field, index) => {
                  if (field.type === 'textarea') {
                    return (
                      <textarea
                        key={index}
                        rows={4}
                        cols={10}
                        className="cs_form_field cs_type_1 cs_mb_20"
                        placeholder={field.placeholder}
                      />
                    );
                  }
                  return (
                    <input
                      key={index}
                      type={field.type}
                      className="cs_form_field cs_type_1 cs_mb_20"
                      placeholder={field.placeholder}
                    />
                  );
                })}
                <button type="submit" className="cs_btn cs_style_1 w-100">
                  {data.formData.buttonText}
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

          <div className="col-xl-8 col-lg-7">
            <div className="cs_details_content">
              <img src={data.data.headImg} alt="Service Details" />
              {data.data.details.map((detail, index) => (
                <div key={index}>
                  <h4>
                    {index + 1}. {detail.title}
                  </h4>
                  <p>{detail.description}</p>
                </div>
              ))}
              <div className="row">
                <div className="col-sm-6">
                  <img src={data.data.lastImg} alt="Service Detail" />
                </div>
                <div className="col-sm-6">
                  <img src={data.data.lastImg2} alt="Service Detail" />
                </div>
              </div>
            </div>
            <Spacing lg={80} md={60} />
            <h2 className="cs_fs_51 cs_mb_40">{data.data.title}</h2>
            <div className="cs_accordians cs_style_1">
              {data.data.faqs.map((faq, index) => (
                <div
                  className={`cs_accordian cs_accordian_border ${
                    activeIndex === index && 'active'
                  }`}
                  key={index}
                >
                  <div
                    className="cs_accordian_head"
                    onClick={() => setActiveIndex(index)}
                  >
                    <h2 className="cs_accordian_title cs_fs_21 cs_semibold">
                      {index + 1}. {faq.question}
                    </h2>
                    <span className="cs_accordian_toggle">
                      <i>
                        <FaAngleDown />
                      </i>
                    </span>
                  </div>
                  <div
                    className="cs_accordian_body"
                    style={{
                      display: activeIndex === index ? 'block' : 'none',
                    }}
                  >
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Spacing lg={140} md={80} />
    </section>
  );
};

export default ServiceDetailsSection;
