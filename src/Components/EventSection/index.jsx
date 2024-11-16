import SectionHeading from '../Heading';
import Button from '../Button';
import { Link } from 'react-router-dom';
import Spacing from '../Spacing';

const EventSection = ({ data }) => {
  return (
    <>
      <div className="cs_shape cs_shape_position_4">
        <img src="assets/img/nature/blog_shape_1.png" alt="" />
      </div>
      <div className="cs_shape cs_shape_position_5">
        <img src="assets/img/nature/blog_shape_2.png" alt="" />
      </div>
      <div className="container">
        <SectionHeading
          subtitle={data.sectionSubtitle}
          title={data.sectionTitle}
          textCenter={'text-center'}
        />

        <Spacing lg={90} md={50} />
        <div className="cs_event_card_1_list">
          {data.eventsData.map(event => (
            <div
              key={event.id}
              className="cs_event_card cs_style_1 cs_shadow_1 cs_white_bg"
            >
              <div className="cs_event_card_in">
                <Link to={event.detailsUrl} className="cs_event_card_thumb">
                  <img src={event.imgSrc} alt="" />
                </Link>
                <div className="cs_event_card_info">
                  <div className="cs_event_card_meta cs_mb_15 cs_heading_font cs_fs_21">
                    <span>Time : {event.time}</span>
                    <span>Date : {event.date}</span>
                  </div>
                  <h2 className="cs_event_card_title cs_fs_38 cs_semibold cs_mb_20">
                    <Link to={event.detailsUrl}>{event.title}</Link>
                  </h2>
                  <p className="cs_event_card_posted_by mb-0 cs_fs_21 cs_semibold cs_heading_font">
                    By <span>{event.postedBy}</span> {event.role}
                  </p>
                </div>
              </div>
              <div className="cs_event_card_btn">
                <Button
                  btnIcons={true}
                  variant={
                    'cs_btn cs_style_2 cs_type_1 cs_heading_color cs_fs_21 cs_semibold cs_heading_font'
                  }
                  btnUrl={event.detailsUrl}
                  btnText={event.btnText}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default EventSection;
