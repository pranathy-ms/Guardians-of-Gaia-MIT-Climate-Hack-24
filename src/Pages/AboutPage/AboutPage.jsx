import Section from '../../Components/Section';
import PageHeading from '../../Components/Heading/PageHeading';
import AboutSection from '../../Components/AboutSection';
import FeatureSection6 from '../../Components/FeatureSection/FeatureSection6';
import FunFact from '../../Components/FunFact';
import AboutSection4 from '../../Components/AboutSection/AboutSection4';
import TestimonialSection4 from '../../Components/TestimonialSection/TestimonialSection4';
import { pageTitle } from '../../helper';
const headingData = {
  title: 'About Us',
};

const aboutData = {
  videoUrl: 'https://www.youtube.com/embed/rRid6GCJtgc',
  videoImageUrl: '/assets/img/nature/video_block_bg.jpg',
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

  btnUrl: '',
  btnText: '',
};

const featureData = {
  sectionSubtitle: 'What We Do',
  sectionTitle: 'Our Initiatives and Impact',
  features: [
    {
      icon: '/assets/img/others/feature_icon_1.svg',
      title: 'Environmental Education',
      description:
        'We provide educational resources, articles, and guides on various environmental topics to raise awareness and empower individuals to make informed choices.',
    },
    {
      icon: '/assets/img/others/feature_icon_2.svg',
      title: 'Advocacy and <br>Action',
      description:
        'We provide educational resources, articles, and guides on various environmental topics to raise awareness and empower individuals to make informed choices.',
    },
    {
      icon: '/assets/img/others/feature_icon_3.svg',
      title: 'Community <br> Building',
      description:
        'We provide educational resources, articles, and guides on various environmental topics to raise awareness and empower individuals to make informed choices.',
    },
    {
      icon: '/assets/img/others/feature_icon_4.svg',
      title: 'Promoting Sustainability',
      description:
        'We provide educational resources, articles, and guides on various environmental topics to raise awareness and empower individuals to make informed choices.',
    },
  ],
};

const funData = [
  {
    countTo: 5,
    suffix: 'K',
    titleLine1: 'Local',
    titleLine2: 'Volunteers',
  },
  {
    countTo: 110,
    suffix: 'M',
    titleLine1: 'World Fund',
    titleLine2: 'Raised',
  },
  {
    countTo: 200,
    suffix: '+',
    titleLine1: 'Project',
    titleLine2: 'Completed',
  },
  {
    countTo: 2,
    suffix: 'K',
    titleLine1: 'World Wide',
    titleLine2: 'Members',
  },
];

const aboutData4 = {
  sectionSubtitle: 'Lets Save Planet Together',
  sectionTitle: 'Quenching Thirst, Saving Lives with Support',
  description:
    'We are passionate advocates for environmental awareness and moral sustainability. Our mission is to empower individuals and community to make positive changes for our planet.',
  progress1: {
    title: 'Donation Collection',
    value: 70,
  },
  progress2: {
    title: 'Project Success',
    value: 80,
  },
  backgroundImage: '/assets/img/others/funfact_bg.jpg',
  funfact: {
    icon: '/assets/img/others/funfact_icon.svg',
    amount: '$250041+',
    text: 'Total Fund Rising',
  },
};

const testimonialData = {
  sectionSubtitle: 'Our Volunteers',
  sectionTitle: 'What People Think About Us',
  testimonials: [
    {
      image: '/assets/img/nature/avatar_img_1.png',
      name: 'Angrew Bolar',
      role: 'Volunteer',
      feedback:
        'The resources have been a tremendous help in making my lifestyle more eco-friendly. Plus, the campaigns are a fantastic way to get involved. Keep up the excellent work!',
      rating: 5,
    },
    {
      image: '/assets/img/nature/avatar_img_2.png',
      name: 'Milisa Geui',
      role: 'Volunteer',
      feedback:
        "I particularly appreciate the emphasis on practical tips for sustainable living. It's refreshing to find a place that not only highlights the issues but also provides solutions.",
      rating: 5,
    },
    {
      image: '/assets/img/nature/avatar_img_3.png',
      name: 'Michaku',
      role: 'Volunteer',
      feedback:
        'I love being part of a community that cares about the planet, and this website has been instrumental in connecting me with like-minded individuals. Thank you!',
      rating: 4.5,
    },
  ],
};

export default function AboutPage() {
  pageTitle('About');
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
        className={'cs_shape_wrap'}
        topSpaceMd="70"
        topSpaceLg="140"
        bottomSpaceMd="80"
        bottomSpaceLg="150"
      >
        <AboutSection data={aboutData} variant={'about_style_1'} />
      </Section>
      <Section
        className={'cs_gray_bg_2'}
        topSpaceMd="75"
        topSpaceLg="145"
        bottomSpaceMd="80"
        bottomSpaceLg="150"
      >
        <FeatureSection6 data={featureData} />
      </Section>
      <Section topSpaceMd="70" topSpaceLg="132">
        <FunFact data={funData} />
      </Section>
      <AboutSection4 data={aboutData4} />
      <Section
        topSpaceMd="75"
        topSpaceLg="145"
        bottomSpaceMd="80"
        bottomSpaceLg="150"
      >
        <TestimonialSection4 data={testimonialData} />
      </Section>
    </>
  );
}
