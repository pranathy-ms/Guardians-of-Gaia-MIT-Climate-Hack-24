import SectionHeading from '../Heading';
import Button from '../Button';
import Spacing from '../Spacing';
import { Link } from 'react-router-dom';

const EventsSection2 = ({ data }) => {
  return (
    <>
      <div className="container">
        <SectionHeading
          subtitle={data.sectionSubtitle}
          title={data.sectionTitle}
          textCenter={'text-center'}
        />
        <Spacing lg={90} md={50} />
        <div className="cs_event_card cs_style_2">
          <div className="cs_event_card_info">
            <div className="cs_event_card_meta cs_mb_15 cs_heading_font cs_fs_21">
              <span>Time: {data.event.time}</span>
              <span>Date: {data.event.date}</span>
            </div>
            <h2 className="cs_event_card_title cs_fs_38 cs_semibold cs_mb_21">
              <Link to={data.btnUrl}>{data.event.title}</Link>
            </h2>
            <p className="cs_event_card_posted_by cs_mb_42 cs_mb_lg_30 cs_fs_21 cs_semibold cs_heading_font">
              By <span>{data.event.postedBy}</span> {data.event.position}
            </p>
            <p className="cs_mb_45 cs_mb_lg_35">{data.event.description}</p>
            <h4 className="cs_event_location cs_fs_21 cs_semibold cs_body_color cs_mb_50 cs_mb_lg_40">
              Location: {data.event.location}
            </h4>
            <Button
              variant={'cs_btn cs_style_1'}
              btnIcons={true}
              btnText={data.btnText}
              btnUrl={data.btnUrl}
            />
          </div>
          <div className="cs_event_card_thumb">
            <img
              src={data.event.thumbImg}
              alt="Event Thumbnail"
              className="cs_event_card_thumb_img"
            />
            <img
              src={data.event.shapeImg}
              alt="Event Shape"
              className="cs_event_card_shape"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default EventsSection2;
