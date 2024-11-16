import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { TfiLinkedin } from 'react-icons/tfi';
import { Link } from 'react-router-dom';
import SectionHeading from '../Heading';
import Spacing from '../Spacing';

const TeamSection = ({ data }) => {
  return (
    <>
      {data.bgRightImhUrl && (
        <div className="cs_shape cs_shape_position_2">
          <img src={data.bgRightImhUrl} alt="" />
        </div>
      )}
      {data.bgLeftImhUrl2 && (
        <div className="cs_shape cs_shape_position_3">
          <img src={data.bgLeftImhUrl2} alt="" />
        </div>
      )}
      <div className="container">
        <SectionHeading
          subtitle={data.SectionSubtitle}
          title={data.SectionTitle}
          textCenter={'text-center'}
        />
        <Spacing lg={90} md={50} />
        <div className="row cs_gap_y_50 cs_row_gap_60">
          {data.teamData.map((member, index) => (
            <div className="col-lg-6" key={index}>
              <div className="cs_team cs_style_1">
                <div className="cs_team_thumb">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="cs_team_right">
                  <p className="text-uppercase cs_accent_color cs_mb_1">
                    {member.role}
                  </p>
                  <h3 className="cs_fs_38 cs_mb_18">{member.name}</h3>
                  <hr className="cs_mb_12" />
                  <p className="cs_mb_20">{member.description}</p>
                  <div className="cs_team_social_list cs_heading_color">
                    <Link to={member.FaFacebookF} className="cs_center">
                      <i>
                        <FaFacebookF />
                      </i>
                    </Link>
                    <Link to={member.linkedinUrl} className="cs_center">
                      <i>
                        <TfiLinkedin />
                      </i>
                    </Link>
                    <Link to={member.instagramUrl} className="cs_center">
                      <i>
                        <FaInstagram />
                      </i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TeamSection;
