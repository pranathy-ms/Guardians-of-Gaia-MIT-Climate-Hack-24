import Section from '../../Components/Section';
import PageHeading from '../../Components/Heading/PageHeading';
import EventDetailsSection from '../../Components/EventSection/EventDetailsSection';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaWhatsapp,
} from 'react-icons/fa';
import { pageTitle } from '../../helper';

const headingData = {
  title: 'Event Details',
};

const eventsData = {
  title: 'A Beacon of Knowledge Symposium',
  image: '/assets/img/others/event_details_1.jpg',
  description: `Embark on a journey of enlightenment with our Learning Lighthouse symposium. This educational event brings together passionate speakers and experts to illuminate the path of knowledge. Join us for insightful discussions, workshops, and interactive sessions designed to empower minds and inspire a lifelong love for learning. Together, let's build a brighter future through education!`,
  agenda: [
    {
      title: 'Keynote Address: "Navigating the Seas of Knowledge"',
      description: `An inspiring talk by <a href="#">Kerua Zoshua</a> on the importance of education as a guiding force in personal and societal development.`,
    },
    {
      title: 'Interactive Workshops',
      description:
        'Engage in hands-on workshops covering a range of subjects, from STEM activities to arts and literature, tailored for various age groups.',
    },
    {
      title: 'Panel Discussions: "Shaping Minds, Shaping Futures"',
      description:
        'Thought-provoking discussions featuring educators, scholars, and industry leaders exploring the role of education in shaping the future of individuals and communities.',
    },
    {
      title: 'Innovative Teaching Methods Showcase',
      description:
        'Learn about and experience cutting-edge teaching methods and technologies that enhance the learning experience.',
    },
    {
      title: 'Student Spotlight: Showcasing Talent and Creativity',
      description:
        'A platform for students to showcase their talents, projects, and creative endeavors, fostering a sense of achievement and confidence.',
    },
    {
      title: 'Networking Lunch: Connecting Minds over Meals',
      description:
        'A casual lunch session providing opportunities for attendees to connect, share ideas, and build networks within the educational community.',
    },
    {
      title: 'Resource Fair: Explore the Tools of Learning',
      description:
        'An exhibition featuring educational resources, tools, and technologies aimed at enhancing teaching and learning experiences.',
    },
    {
      title: 'Closing Ceremony: "Igniting Sparks, Building Futures"',
      description:
        'A closing ceremony acknowledging participants, highlighting key takeaways, and inspiring a collective commitment to the ongoing journey of education.',
    },
  ],
  eventDetails: {
    speakers: 'Kerua Zoshua',
    date: '11 Dec 2024',
    time: '08:00 - 09:00',
    location: 'Arm Stadium, London, UK',
  },
  registration: {
    email: 'event@ecozone.com',
  },
  socialLinks: [
    { platform: 'Facebook', icon: <FaFacebookF />, link: '#' },
    { platform: 'Instagram', icon: <FaInstagram />, link: '#' },
    { platform: 'LinkedIn', icon: <FaLinkedinIn />, link: '#' },
    { platform: 'Twitter', icon: <FaTwitter />, link: '#' },
    { platform: 'WhatsApp', icon: <FaWhatsapp />, link: '#' },
  ],
};
const EventDetails = () => {
  pageTitle('Event Details');
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
      <Section
        topSpaceMd="80"
        topSpaceLg="150"
        bottomSpaceMd="70"
        bottomSpaceLg="140"
      >
        <EventDetailsSection data={eventsData} />
      </Section>
    </>
  );
};

export default EventDetails;
