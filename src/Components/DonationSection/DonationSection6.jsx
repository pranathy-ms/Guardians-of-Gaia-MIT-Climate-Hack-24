import Button from '../Button';
import SectionHeading from '../Heading';
import Spacing from '../Spacing';

const DonationSection6 = ({ data }) => {
  return (
    <>
      <div className="container">
        <SectionHeading
          subtitle={data.sectionSubtitle}
          title={data.sectionTitle}
          textCenter={'text-center'}
        />
        <Spacing lg={90} md={50} />
      </div>

      <div className="container">
        <div className="row cs_gap_y_50">
          {data.donationCampaigns.map(campaign => (
            <div key={campaign.id} className="col-lg-6">
              <div className="cs_card cs_style_2 cs_type_2 cs_shadow_1 cs_white_bg">
                <div className="cs_card_thumb">
                  <img
                    src={campaign.imageUrl}
                    alt={campaign.title}
                    className="w-100"
                  />
                </div>
                <div className="cs_card_info">
                  <h2 className="cs_fs_38 cs_mb_20 cs_semibold">
                    {campaign.title}
                  </h2>
                  <p className="cs_mb_14">{campaign.description}</p>
                  <div className="cs_progress_wrap">
                    <div
                      className="cs_progress"
                      data-progress={campaign.progress}
                    >
                      <div
                        className="cs_progress_in cs_accent_bg"
                        style={{ width: `${campaign.progress}%` }}
                      >
                        <span>{campaign.progress}%</span>
                      </div>
                    </div>
                  </div>
                  <div className="cs_progress_heading cs_mb_28">
                    <h3 className="cs_fs_21 cs_semibold mb-0">
                      Goal: ${campaign.goal}
                    </h3>
                    <h3 className="cs_fs_21 cs_semibold mb-0">
                      Raised: ${campaign.raised}
                    </h3>
                  </div>
                  <Button
                    btnIcons={true}
                    btnText={campaign.btnText}
                    btnUrl={campaign.donateUrl}
                    variant={'cs_btn cs_style_1 w-100'}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DonationSection6;
