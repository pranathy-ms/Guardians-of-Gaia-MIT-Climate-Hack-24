import Button from '../Button';
import SectionHeading from '../Heading';
import Spacing from '../Spacing';

const AboutSection5 = ({ data, variant }) => {
  return (
    <>
      <div className="container">
        <div className="row align-items-center cs_gap_y_50">
          {variant && (
            <div className="col-lg-6">
              <div className="cs_layer_img_box cs_type_2">
                <div className="cs_layer_img_1">
                  <img
                    src={data.sectionImgUrl}
                    alt=""
                    className="cs_shadow_1"
                  />
                </div>
                <div className="cs_layer_img_2">
                  <img src={data.sectionImgUrl2} alt="" />
                </div>
              </div>
            </div>
          )}
          <div className="col-lg-6">
            <div className={`${variant ? 'cs_pl_75' : 'cs_pr_75'}`}>
              <SectionHeading
                subtitle={data.SectionSubtitle}
                title={data.SectionTitle}
                description={data.description}
                titleVerint={'cs_mb_29'}
                descriptionVerint={'cs_mb_37'}
              />
              <ul className="cs_list cs_style_1 cs_mp_0">
                {data?.option.map((items, index) => (
                  <li key={index}>
                    <i className="cs_list_icon cs_accent_color">
                      <svg
                        width={18}
                        height={17}
                        viewBox="0 0 18 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 9.62275C0.0320847 8.83012 0.390363 8.2499 1.11227 7.93388C1.84487 7.61269 2.54004 7.73702 3.1443 8.25508C4.06406 9.0477 4.96777 9.85587 5.87684 10.6589C6.04796 10.8091 6.21908 10.9645 6.39554 11.1148C6.65757 11.3427 6.88751 11.3323 7.12279 11.0733C9.096 8.91819 11.0639 6.75789 13.0371 4.5976C14.3686 3.13668 15.7054 1.68094 17.037 0.220014C17.2027 0.0386945 17.3952 -0.0493752 17.6412 0.0283334C17.8498 0.0956808 18.0102 0.277001 17.9995 0.494585C17.9941 0.608557 17.946 0.732891 17.8819 0.831322C16.3685 3.19884 14.8552 5.56118 13.3419 7.92352C11.5986 10.6433 9.85534 13.3631 8.11207 16.0881C7.80727 16.5647 7.39551 16.8859 6.81264 16.974C6.15491 17.0776 5.60947 16.8704 5.19237 16.3782C3.69508 14.6116 2.20849 12.8399 0.716557 11.0681C0.433143 10.7469 0.133686 10.4257 0.0534744 9.98539C0.0267372 9.85587 0.0160423 9.73154 0 9.62275Z"
                          fill="currentColor"
                        />
                      </svg>
                    </i>
                    <h3
                      className="cs_fs_28 cs_semibold cs_mb_15"
                      dangerouslySetInnerHTML={{
                        __html: items.optionTitle,
                      }}
                    />
                    <p
                      className="mb-0"
                      dangerouslySetInnerHTML={{
                        __html: items.optionDescription,
                      }}
                    />
                  </li>
                ))}
              </ul>
              <Spacing lg={45} md={30} />
              <Button
                btnIcons={true}
                btnUrl={data.btnUrl}
                btnText={data.btnText}
                variant={'cs_btn cs_style_1'}
              />
            </div>
          </div>
          {!variant && (
            <div className="col-lg-6">
              <div className="cs_layer_img_box">
                <div className="cs_layer_img_1">
                  <img
                    src={data.sectionImgUrl}
                    alt=""
                    className="cs_shadow_1"
                  />
                </div>
                <div className="cs_layer_img_2">
                  <img src={data.sectionImgUrl2} alt="" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AboutSection5;
