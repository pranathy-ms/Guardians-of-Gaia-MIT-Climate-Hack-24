import SectionHeading from '../Heading';
import Button from '../Button';
import { Link } from 'react-router-dom';
import Spacing from '../Spacing';

const EventsSection3 = ({ data }) => {
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
        <div className="row cs_gap_y_40">
          {data.eventData.map((event, index) => (
            <div className="col-lg-6" key={index}>
              <div className="cs_event_card cs_style_3 cs_shadow_1 cs_white_bg">
                <Link
                  to={event.detailsLink}
                  className="cs_event_card_thumb cs_mb_25"
                >
                  <img src={event.imgSrc} alt={event.title} />
                </Link>
                <div className="cs_event_card_info">
                  <div className="cs_event_card_meta cs_mb_15 cs_heading_font cs_fs_21">
                    <span>Time : {event.time}</span>
                    <span>Date : {event.date}</span>
                  </div>
                  <h2 className="cs_event_card_title cs_fs_38 cs_semibold cs_mb_21">
                    <Link to={event.detailsLink}>{event.title}</Link>
                  </h2>
                  <p className="cs_event_card_posted_by cs_mb_40 cs_fs_21 cs_semibold cs_heading_font">
                    By <span>{event.organizer}</span> {event.role}
                  </p>
                  <Button
                    btnIcons={true}
                    btnText={'See Details'}
                    variant={'cs_btn cs_style_1'}
                    btnUrl={event.detailsLink}
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

export default EventsSection3;
