import React from 'react';
import HeroSection2 from '../../Components/HeroSection/HeroSection2';
import Section from '../../Components/Section';
import VideoBlock from '../../Components/VideoSection';
import ServiceSection2 from '../../Components/ServicesSection/ServiceSection2';
import FunFact from '../../Components/FunFact';
import FaqSection from '../../Components/FaqSection';
import FeatureSection2 from '../../Components/FeatureSection/FeatureSection2';
import DonationSection2 from '../../Components/DonationSection/DonationSection2';
import CTASection from '../../Components/CTASection';
import TestimonialSection2 from '../../Components/TestimonialSection/TestimonialSection2';
import DonateSection3 from '../../Components/DonationSection/DonateSection3';
import BlogSection2 from '../../Components/BlogSection/BlogSection2';
import { pageTitle } from '../../helper';
import AboutSection5 from '../../Components/AboutSection/AboutSection5';
const heroData = {
  heroBgPattern: '/assets/img/animal/hero_bg_pattern.svg',
  heroBgImage: 'assets/img/animal/hero_bg.jpg',
  videoUrl: 'https://www.youtube.com/embed/rRid6GCJtgc',
  videoBgImage: 'assets/img/animal/hero_img.jpg',
  heroTitle: 'Advocating for Animals and Nature',
  heroSubtitle: 'Wildlife Warriors',
  heroDescription:
    'Ecology, as a field of science, investigates the interconnections between living organisms and their surroundings, encompassing both the physical and chemical aspects.',
  buttonText: 'Learn More',
  buttonUrl: '/about',
  linkDinLink: '/',
  youTubLink: '/',
  facebookLink: '/',
};

const aboutData = {
  sectionImgUrl: '/assets/img/animal/about_img_1.jpg',
  sectionImgUrl2: '/assets/img/animal/about_img_2.jpg',

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

  learnMoreUrl: '/about',
  btnText: 'Learn-more',
};

const videoBlockData = {
  videoUrl: 'https://www.youtube.com/embed/rRid6GCJtgc',
  videoBgImage: '/assets/img/animal/video_block_bg.jpg',
  videoBlockImage: '/assets/img/animal/video_block_img.svg',
};

const serviceData = {
  sectionSubtitle: 'What We Do',
  sectionTitle: 'Our Environmental Services',
  description:
    ' Discover a range of services aimed at promoting environmental  <br />awareness, sustainability, and positive action.',
  sliderData: [
    {
      imgSrc: '/assets/img/animal/service_img_1.jpg',
      title: 'Wildlife Conservation Initiatives',
      link: '/services/service-details',
      btnText: 'Learn More',
    },
    {
      imgSrc: '/assets/img/animal/service_img_2.jpg',
      title: 'Animal Rescue and Rehabilitation',
      link: '/services/service-details',
      btnText: 'Learn More',
    },
    {
      imgSrc: '/assets/img/animal/service_img_3.jpg',
      title: 'Eco-Friendly Pet Products',
      link: '/services/service-details',
      btnText: 'Learn More',
    },
    {
      imgSrc: '/assets/img/animal/service_img_4.jpg',
      title: 'Community Outreach and Advocacy',
      link: '/services/service-details',
      btnText: 'Learn More',
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

const fqaData = {
  SectionSubtitle: 'FAQ',
  SectionTitle: 'Have Any Questions?',
  rightImgUrl: '/assets/img/animal/faq_bg.jpg',
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

const featureData = {
  sectionSubtitle: "Let's Save Planet Together",
  sectionTitle: 'Quenching Thirst, Saving Lives with Support',
  backgroundImage: '/assets/img/animal/feature_bg.jpg',
  features: [
    {
      title: 'Donate',
      description:
        'Help us protect wildlife, advocate for animal welfare, and promote environmental sustainability.',
    },
    {
      title: 'Fundraisers',
      description:
        'Join our fundraising efforts and be a catalyst for positive change.',
    },
    {
      title: 'Volunteer',
      description:
        'Join our passionate community of volunteers dedicated to making a positive impact on wildlife.',
    },
  ],
};

const donationData = {
  sectionSubtitle: 'Donation',
  sectionTitle: 'Supporting Our Environmental <br />Fundraising Initiatives',
  campaigns: [
    {
      image: '/assets/img/animal/card_img_1.jpg',
      title: 'Harvesting Hope: Ensuring Food Security for All',
      description:
        'Deforestation poses a significant threat to our environment...',
      progress: 60,
      goal: 4000,
      raised: 2800,
      link: '/contact',
      btnText: 'Donate Now',
    },
    {
      image: '/assets/img/animal/card_img_2.jpg',
      title: 'Nourish to Flourish: Promoting Nutrition Education',
      description:
        'Deforestation poses a significant threat to our environment...',
      progress: 42,
      goal: 4000,
      raised: 2800,
      link: '/contact',
      btnText: 'Donate Now',
    },
    {
      image: '/assets/img/animal/card_img_3.jpg',
      title: 'Water for Life, Food for All: Ensuring Access to Clean Water',
      description:
        'Deforestation poses a significant threat to our environment...',
      progress: 83,
      goal: 4000,
      raised: 2800,
      link: '/contact',
      btnText: 'Donate Now',
    },
  ],
};

const ctaData = {
  heading:
    'Enter the Realm of Environmental Preservation Together, We Make a Difference',
  button: {
    text: 'Become A Volunteer',
    url: '/contact',
    hasIcons: true,
    variant: 'cs_btn cs_style_1',
  },
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
    // Add more testimonials as needed
  ],
};

const donateSectionData = {
  headingText:
    "Gratitude to your support! Together, we've achieved a remarkable $100K across all our congregations.",
  defaultAmount: 50,
  fixedAmounts: [10, 50, 100, 500],
  buttonText: 'Donate Now',
};

const blogData = {
  sectionSubtitle: 'Blog Post',
  sectionTitle: 'Our Latest News &amp; Updates',
  blogPosts: [
    {
      id: 1,
      image: '/assets/img/animal/post_img_1.jpg',
      author: 'Bob marline',
      category: 'Environment',
      title: 'How Reforestation Can Save Our Planet',
      subtitle:
        'Discover the incredible impact of reforest on our environment and the critical role trees play in mitigating climate...',
      link: '/blog/blog-details-1',
      btnText: 'Learn More',
    },
    {
      id: 2,
      image: '/assets/img/animal/post_img_2.jpg',
      author: 'Bob marline',
      category: 'Environment',
      title: 'Unmasking the Hidden Threat to Our Oceans',
      subtitle:
        'Dive into the disturbing reality of plastic pollution in our oceans. This blog sheds light on the consequences of single...',
      link: '/blog/blog-details-2',
      btnText: 'Learn More',
    },
    {
      id: 3,
      image: '/assets/img/animal/post_img_3.jpg',
      author: 'Bob marline',
      category: 'Environment',
      title: 'Stylish Choices for a Planet Friendly Wardrobe',
      subtitle:
        'Discover the incredible impact of reforest on our environment and the critical role trees play in mitigating climate...',
      link: '/blog/blog-details-3',
      btnText: 'Learn More',
    },
    {
      id: 4,
      image: '/assets/img/animal/post_img_4.jpg',
      author: 'Bob marline',
      category: 'Urban',
      title: 'Tips for Sustainable Green Spaces in Home',
      subtitle:
        'Discover the incredible impact of reforest on our environment and the critical role trees play in mitigating climate...',
      link: '/blog/blog-details-4',
      btnText: 'Learn More',
    },
  ],
};

const Animal = () => {
  pageTitle('Animal');
  return (
    <>
      <HeroSection2 data={heroData} />
      <Section
        className={'cs_shape_wrap'}
        topSpaceMd="70"
        topSpaceLg="140"
        bottomSpaceMd="80"
        bottomSpaceLg="150"
      >
        <AboutSection5 data={aboutData} />
      </Section>
      <VideoBlock data={videoBlockData} />
      <Section className={'cs_shape_wrap'} topSpaceMd="75" topSpaceLg="145">
        <ServiceSection2 data={serviceData} />
      </Section>
      <Section topSpaceMd="70" topSpaceLg="132">
        <FunFact data={funData} />
      </Section>
      <Section className={'cs_gray_bg_2'}>
        <FaqSection data={fqaData} />
      </Section>
      <Section className={'cs_gray_bg_2'}>
        <FeatureSection2 data={featureData} />
      </Section>
      <Section
        topSpaceMd="75"
        topSpaceLg="145"
        bottomSpaceMd="80"
        bottomSpaceLg="150"
      >
        <DonationSection2 data={donationData} />
      </Section>
      <Section
        className={'cs_bg_filed text-center'}
        topSpaceMd="75"
        topSpaceLg="140"
        bottomSpaceMd="80"
        bottomSpaceLg="150"
        backgroundImage="assets/img/animal/cta_bg.jpg"
      >
        <CTASection data={ctaData} />
      </Section>
      <Section
        className={'cs_half_bg_wrap cs_shape_wrap'}
        topSpaceMd="75"
        topSpaceLg="145"
        bottomSpaceMd="80"
        bottomSpaceLg="150"
      >
        <TestimonialSection2 data={testmonialData} />
      </Section>
      <Section
        className={'cs_heading_bg cs_bg_filed'}
        topSpaceMd="75"
        topSpaceLg="135"
        bottomSpaceMd="80"
        bottomSpaceLg="150"
        backgroundImage="/assets/img/animal/donate_section_bg.jpg"
      >
        <DonateSection3 data={donateSectionData} />
      </Section>
      <Section
        className={'cs_shape_wrap'}
        topSpaceMd="75"
        topSpaceLg="145"
        bottomSpaceMd="80"
        bottomSpaceLg="150"
      >
        <BlogSection2 data={blogData} />
      </Section>
    </>
  );
};

export default Animal;
