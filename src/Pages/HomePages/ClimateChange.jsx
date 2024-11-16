import HeroSection7 from '../../Components/HeroSection/HeroSection7';
import Section from '../../Components/Section';
import FeatureSection from '../../Components/FeatureSection';
import ServiceSection5 from '../../Components/ServicesSection/ServiceSection5';
import FaqSection from '../../Components/FaqSection';
import ProjectsSection from '../../Components/ProjectsSection';
import TeamSection from '../../Components/TeamSection';
import TestimonialSection2 from '../../Components/TestimonialSection/TestimonialSection2';
import BrandSection from '../../Components/BrandSection';
import EventsSection3 from '../../Components/EventSection/EventsSection3';
import NewsletterSection from '../../Components/NewsletterSection';
import BlogSection5 from '../../Components/BlogSection/BlogSection5';
import { pageTitle } from '../../helper';
import AboutSection5 from '../../Components/AboutSection/AboutSection5';

const heroData = {
  backgroundImage: '/assets/img/climate-change/hero_bg.jpg',
  videoUrl: 'https://www.youtube.com/watch?v=Lcb4I_-CCT0',
  title: 'Climate Action Now: Uniting for a Sustainable Future',

  subtitle:
    'Welcome to Ecozone, your hub for climate change awareness and action. Together, we strive to address the urgent challenges posed by climate change and create a sustainable future for our planet.',
  buttonText: 'Learn More',
  buttonUrl: '/about',
  rotateTextBg: '/assets/img/climate-change/hero_rotate_text_bg.svg',
  rotateTextImg: '/assets/img/climate-change/hero_rotate_text.svg',
};

const featureData = [
  {
    icon: '/assets/img/nature/climate_change_icon.svg',
    title: 'Climate Change',
    description:
      'Discuss the science, impacts, and solutions related to climate change, including global warming, extreme weather events, and the transition to renewable energy sources.',
  },
  {
    icon: '/assets/img/nature/sustainable_living.png',
    title: 'Sustainable Living',
    description:
      'Provide tips and information on sustainable practices in areas such as energy conservation, waste reduction, and eco-friendly lifestyle choices.',
  },
  {
    icon: '/assets/img/nature/deforestation.svg',
    title: 'Deforestation',
    description:
      'Discuss the impact of deforestation on ecosystems, climate, and biodiversity, as well as reforestation and afforestation efforts.',
  },
];

const serviceData = {
  sectionSubtitle: 'What We Do',
  sectionTitle: 'Our Environmental Services',
  description:
    'Discover a range of services aimed at promoting environmental <br />awareness, sustainability, and positive action.',
  sliderData: [
    {
      icon: '/assets/img/climate-change/feature_icon_1.svg',
      title: 'Carbon Footprint Assessment',
      link: '/services/service-details',
      btnText: 'Learn More',
    },
    {
      icon: '/assets/img/climate-change/feature_icon_2.svg',
      title: 'Renewable Energy Consultation',
      link: '/services/service-details',
      btnText: 'Learn More',
    },
    {
      icon: '/assets/img/climate-change/feature_icon_3.svg',
      title: 'Sustainable Lifestyle Coaching',
      link: '/services/service-details',
      btnText: 'Learn More',
    },
    {
      icon: '/assets/img/climate-change/feature_icon_4.svg',
      title: 'Green Buildings Certification',
      link: '/services/service-details',
      btnText: 'Learn More',
    },
  ],
};

const fqaData = {
  SectionSubtitle: 'FAQ',
  SectionTitle: 'Have Any Questions?',
  rightImgUrl: '/assets/img/nature/faq_bg.jpg',
  faqData: [
    {
      question: 'What is the primary goal of this website?',
      answer:
        'Our primary goal is to raise awareness about environmental issues, provide educational resources, and inspire positive environmental action.',
    },
    {
      question: "How can I support your website's mission?",
      answer:
        'We ensure sustainability by partnering with like-minded organizations, focusing on eco-friendly operations, and continuous funding efforts.',
    },
    {
      question: 'How do you ensure the sustainability of the website?',
      answer:
        'We ensure sustainability by partnering with like-minded organizations, focusing on eco-friendly operations, and continuous funding efforts.',
    },
    {
      question: 'How can I get involved in environmental initiatives?',
      answer:
        'You can get involved by joining our volunteer programs, attending events, or making donations to support our causes.',
    },
  ],
};

const aboutData = {
  sectionImgUrl: '/assets/img/climate-change/about_img_1.jpg',
  sectionImgUrl2: '/assets/img/climate-change/about_img_2.jpg',

  SectionTitle: 'Creating a Lasting Alliance for a Greener Future',
  SectionSubtitle: 'About Us',
  description:
    "We are passionate advocates for environmental awareness and moral sustainability. Our mission is to empower individuals and community to make positive changes for our planet. We believe that small actions can lead to big transformations, and we're dedicated to providing the knowledge, resources, and inspiration needed.",

  option: [
    {
      optionTitle: 'Our Mission',
      optionDescription:
        'Explain the core purpose of your website, which may be to raise awareness, educate, or inspire positive environmental change.',
    },
    {
      optionTitle: 'Our Values',
      optionDescription:
        'Outline the principles and values that guide your work, such as sustainability, scientific accuracy, inclusivity, and the promotion of positive action.',
    },
  ],

  learnMoreUrl: '/',
  btnText: 'Learn-more',
};

const projectData = {
  sectionTitle: 'Our Projects',
  sectionSubtitle: 'Pioneering Sustainable Solutions for a Changing Climate',
  projects: [
    {
      category: 'Climate',
      title: 'Transforming Urban Landscapes',
      imgSrc: '/assets/img/climate-change/project_1.jpg',
      link: '/project/project-details',
    },
    {
      category: 'Ocean',
      title: 'Marine Conservation Initiative',
      imgSrc: '/assets/img/climate-change/project_2.jpg',
      link: '/project/project-details',
    },
    {
      category: 'Energy',
      title: 'Advancing Green Energy Solutions',
      imgSrc: '/assets/img/climate-change/project_3.jpg',
      link: '/project/project-details',
    },
    {
      category: 'Climate',
      title: 'Protecting Freshwater Ecosystems',
      imgSrc: '/assets/img/climate-change/project_4.jpg',
      link: '/project/project-details',
    },
  ],
};

const teamSectionData = {
  SectionSubtitle: 'Our Team',
  SectionTitle: 'Meet Our Dedicated Environmental <br /> Advocates and Experts',
  teamData: [
    {
      name: 'Jhon Beboral',
      role: 'CEO FOUNDER',
      image: '/assets/img/nature/team_member_1.jpg',
      description:
        'Team component built to improve trust and culture within your.',
      facebookUrl: '/',
      instagramUrl: '/',
      linkedinUrl: '/',
    },
    {
      name: 'Peter Dobar',
      role: 'VOLUNTEER',
      image: '/assets/img/nature/team_member_2.jpg',
      description:
        'Team component built to improve trust and culture within your.',
      facebookUrl: '/',
      instagramUrl: '/',
      linkedinUrl: '/',
    },
    {
      name: 'Peter Dobar',
      role: 'VOLUNTEER',
      image: '/assets/img/nature/team_member_3.jpg',
      description:
        'Team component built to improve trust and culture within your.',
      facebookUrl: '/',
      instagramUrl: '/',
      linkedinUrl: '/',
    },
    {
      name: 'Peter Dobar',
      role: 'VOLUNTEER',
      image: '/assets/img/nature/team_member_4.jpg',
      description:
        'Team component built to improve trust and culture within your.',
      facebookUrl: '/',
      instagramUrl: '/',
      linkedinUrl: '/',
    },
  ],
};

const testmonialData = {
  sectionSubtitle: ' Testimonial',
  sectionTitle: 'What People Think About Us',
  bgImgUrl: '/assets/img/animal/testimonial_shape_1.svg',
  testimonials: [
    {
      avatar: '/assets/img/nature/avatar_img_1.png',
      bgImgUrl2: '/assets/img/animal/testimonial_pattern.svg',
      name: 'Angrew Bolar',
      role: 'Volunteer',
      quote:
        'The resources have been a tremendous help in making my lifestyle more eco-friendly. Plus, the campaigns are a fantastic way to get involved. Keep up the excellent work!',
      rating: 5,
    },
    {
      avatar: '/assets/img/nature/avatar_img_4.png',
      bgImgUrl2: '/assets/img/animal/testimonial_pattern.svg',
      name: 'Milisa Geui',
      role: 'Volunteer',
      quote:
        "I particularly appreciate the emphasis on practical tips for sustainable living. It's refreshing to find a place that not only highlights the issues but also provides solutions.",
      rating: 4.5,
    },
  ],
};

const brandData = [
  '/assets/img/charity/brand_1.svg',
  '/assets/img/charity/brand_3.svg',
  '/assets/img/charity/brand_2.svg',
  '/assets/img/charity/brand_4.svg',
  '/assets/img/charity/brand_5.svg',
  '/assets/img/charity/brand_1.svg',
  '/assets/img/charity/brand_3.svg',
  '/assets/img/charity/brand_2.svg',
  '/assets/img/charity/brand_4.svg',
  '/assets/img/charity/brand_5.svg',
];

const eventData = {
  sectionSubtitle: 'Events',
  sectionTitle: 'Our Upcoming Events',
  eventData: [
    {
      title: 'Sustainable Farming For Better',
      time: '08:00 - 09:00',
      date: '11 Dec 2024',
      organizer: 'Kerua Zoshua',
      role: 'Environment Activist',
      imgSrc: '/assets/img/climate-change/event_card_img_1.jpg',
      detailsLink: '/event/event-details',
    },
    {
      title: 'Empowering Farmers Worldwide',
      time: '09:00 - 10:00',
      date: '10 Dec 2024',
      organizer: 'Mili Zadeja',
      role: 'Biologist',
      imgSrc: '/assets/img/climate-change/event_card_img_2.jpg',
      detailsLink: '/event/event-details',
    },
  ],
};

const newsletterData = {
  overlayBg: 'assets/img/cta_bg.svg',
  title: 'Subscribe Our Newsletter',
  description: 'Join the style revolution and subscribe to our fashion shop',
  placeholder: 'Enter your email address ...',
  buttonText: 'Subscribe',
};

const blogsData = {
  sectionSubtitle: 'Blog Post',
  sectionTitle: 'Our Latest News &amp; Updates',
  blogPosts: [
    {
      imageUrl: '/assets/img/nature/post_img_1.jpg',
      author: 'Bob Marline',
      category: 'Environment',
      title: 'How Reforestation Can Save Our Planet',
      subtitle:
        'Discover the incredible impact of reforest on our environment and the critical role trees play in mitigating climate...',
      postUrl: '/blog/blog-details',
      btnText: 'Learn More',
    },
    {
      imageUrl: '/assets/img/nature/post_img_2.jpg',
      author: 'Bob Marline',
      category: 'Environment',
      title: 'Unmasking the Hidden Threat to Our Oceans',
      subtitle:
        'Dive into the disturbing reality of plastic pollution in our oceans. This blog sheds light on the consequences of single...',
      postUrl: '/blog/blog-details',
      btnText: 'Learn More',
    },
    {
      imageUrl: '/assets/img/nature/post_img_3.jpg',
      author: 'Bob Marline',
      category: 'Environment',
      title: 'Tips for Sustainable Green Spaces in Home',
      subtitle:
        'Discover the incredible impact of reforest on our environment and the critical role trees play in mitigating climate...',
      postUrl: '/blog/blog-details',
      btnText: 'Learn More',
    },
    {
      imageUrl: '/assets/img/nature/post_img_4.jpg',
      author: 'Bob Marline',
      category: 'Environment',
      title: 'Tips for Sustainable Green Spaces in Home',
      subtitle:
        'Discover the incredible impact of reforest on our environment and the critical role trees play in mitigating climate...',
      postUrl: '/blog/blog-details',
      btnText: 'Learn More',
    },
  ],
};
const ClimateChange = () => {
  pageTitle('Climate Change');
  return (
    <>
      <HeroSection7 data={heroData} />
      <Section
        topSpaceMd="80"
        topSpaceLg="150"
        bottomSpaceMd="80"
        bottomSpaceLg="150"
      >
        <FeatureSection data={featureData} />
      </Section>
      <Section
        className={'cs_shape_wrap'}
        bottomSpaceMd="80"
        bottomSpaceLg="150"
      >
        <AboutSection5 data={aboutData} variant={true} />
      </Section>
      <Section
        topSpaceMd="75"
        topSpaceLg="145"
        bottomSpaceMd="80"
        bottomSpaceLg="150"
        className={'cs_bg_filed cs_bg_fixed'}
        backgroundImage="assets/img/climate-change/feature_bg.jpg"
      >
        <ServiceSection5 data={serviceData} />
      </Section>
      <Section
        topSpaceMd="75"
        topSpaceLg="145"
        bottomSpaceMd="80"
        bottomSpaceLg="150"
      >
        <FaqSection data={fqaData} reverseOrder={false} />
      </Section>
      <ProjectsSection data={projectData} />
      <Section
        className={'cs_shape_wrap'}
        topSpaceMd="75"
        topSpaceLg="145"
        bottomSpaceMd="80"
        bottomSpaceLg="150"
      >
        <TeamSection data={teamSectionData} />
      </Section>
      <Section
        className={'cs_shape_wrap cs_accent_bg'}
        topSpaceMd="75"
        topSpaceLg="145"
        bottomSpaceMd="80"
        bottomSpaceLg="150"
      >
        <TestimonialSection2 data={testmonialData} bgColor={true} />
      </Section>
      <Section
        topSpaceMd="80"
        topSpaceLg="100"
        bottomSpaceMd="80"
        bottomSpaceLg="100"
        className={'cs_gray_bg_2'}
      >
        <BrandSection data={brandData} />
      </Section>
      <Section
        className={'cs_shape_wrap'}
        topSpaceMd="75"
        topSpaceLg="145"
        bottomSpaceMd="80"
        bottomSpaceLg="150"
      >
        <EventsSection3 data={eventData} />
      </Section>
      <Section
        topSpaceMd="80"
        topSpaceLg="150"
        bottomSpaceMd="80"
        bottomSpaceLg="150"
        backgroundImage="/assets/img/climate-change/newsletter_bg.jpg"
      >
        <NewsletterSection data={newsletterData} />
      </Section>
      <Section
        topSpaceMd="75"
        topSpaceLg="150"
        bottomSpaceMd="80"
        bottomSpaceLg="150"
      >
        <BlogSection5 data={blogsData} />
      </Section>
    </>
  );
};

export default ClimateChange;
