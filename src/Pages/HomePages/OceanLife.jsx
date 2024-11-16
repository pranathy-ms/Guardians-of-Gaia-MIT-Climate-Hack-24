import React from 'react';
import HeroSection5 from '../../Components/HeroSection/HeroSection5';
import FeatureSection4 from '../../Components/FeatureSection/FeatureSection4';
import Section from '../../Components/Section';
import FunFact from '../../Components/FunFact';
import DonationSection from '../../Components/DonationSection';
import CTASection from '../../Components/CTASection';
import TestimonialSection2 from '../../Components/TestimonialSection/TestimonialSection2';
import GallerySection from '../../Components/GallerySection';
import TeamSection2 from '../../Components/TeamSection/TeamSection2';
import ServicesSection4 from '../../Components/ServicesSection/ServicesSection4';
import BlogSection from '../../Components/BlogSection';
import { pageTitle } from '../../helper';
import AboutSection6 from '../../Components/AboutSection/AboutSection6';
const heroData = {
  bgImageUrl: '/assets/img/ocean-life/hero_bg.jpg',
  bgImageUrl1: '/assets/img/ocean-life/hero_video_bg.jpg',
  heroData: [
    {
      title: 'Advocating for Marine Life Conservation',
      subtitle:
        "Dive into the mission of marine conservation with us. As 'Guardians of the Sea,' we are dedicated to protecting and preserving marine life.",
      buttonText: 'Our Mission',
      buttonUrl: '/about',
    },
    {
      title: 'Taking Small Strides to Preserve Our Planet',
      subtitle:
        'Ecology, as a field of science, investigates the interconnections between living organisms and their surroundings, encompassing.',
      buttonText: 'About Us',
      buttonUrl: '/about',
    },
    {
      title: 'Taking Small Strides to Preserve Our Planet',
      subtitle:
        'Ecology, as a field of science, investigates the interconnections between living organisms and their surroundings, encompassing.',
      buttonText: 'Contact Us',
      buttonUrl: '/contact',
    },
  ],
};

const featureData = {
  sectionTitle: 'What We Do',
  sectionSubtitle: 'Time to Go Back Our Root Farming',
  sectionDescription:
    'Discover a range of services aimed at promoting environmental <br> awareness, sustainability, and positive action.',
  features: [
    {
      icon: '/assets/img/ocean-life/feature_icon_1.svg',
      title: 'Climate Change',
      description:
        'Address the impacts of climate change on oceans by supporting initiatives aimed at reducing greenhouse gas emissions and',
      link: '/services/service-details',
      btnText: 'Learn More',
    },
    {
      icon: '/assets/img/ocean-life/feature_icon_2.svg',
      title: 'Sustainable Fishing',
      description:
        'Promote and support sustainable fishing practices to prevent overfishing and preserve the balance of marine.',
      link: '/services/service-details',
      btnText: 'Learn More',
    },
    {
      icon: '/assets/img/ocean-life/feature_icon_3.svg',
      title: 'Marine Awareness',
      description:
        'Raise awareness about the importance of marine conservation and the critical role oceans play in sustaining life on Earth.',
      link: '/services/service-details',
      btnText: 'Learn More',
    },
  ],
};

const aboutData = {
  videoUrl: 'https://www.youtube.com/embed/rRid6GCJtgc',
  videoImageUrl: '/assets/img/ocean-life/video_block_bg.jpg',
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

  btnUrl: '/about',
  btnText: 'learn-more',
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

const donationData = {
  SectionSubtitle: 'Donation',
  SectionTitle: 'Supporting Our Environmental <br /> Fundraising Initiatives',
  slider: [
    {
      title: 'Reforestation and Tree Planting Campaign 2024',
      description:
        'Deforestation poses a significant threat to our environment, contributing to climate change and the loss of crucial habitats for countless species. Our campaign focuses on reversing this trend by planting trees...',
      imgSrc: '/assets/img/nature/donation_img_1.jpg',
      goal: 4000,
      raised: 2800,
      progress: 70,

      btnText: 'Donate Now',
      btnUrl: '/contact',
    },
    {
      title: 'Protecting Endangered Species and Their Habitats',
      description:
        'Deforestation poses a significant threat to our environment, contributing to climate change and the loss of crucial habitats for countless species. Our campaign focuses on reversing this trend by planting trees...',
      imgSrc: '/assets/img/nature/donation_img_2.jpg',
      goal: 5000,
      raised: 4500,
      progress: 80,

      btnText: 'Donate Now',
      btnUrl: '/contact',
    },
    {
      title: 'Supporting Sustainable Agriculture and Food Security',
      description:
        'Deforestation poses a significant threat to our environment, contributing to climate change and the loss of crucial habitats for countless species. Our campaign focuses on reversing this trend by planting trees...',
      imgSrc: '/assets/img/nature/donation_img_3.jpg',
      goal: 5000,
      raised: 1400,
      progress: 40,

      btnText: 'Donate Now',
      btnUrl: '/contact',
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
  bgImgUrl: 'assets/img/animal/testimonial_shape_1.svg',
  testimonials: [
    {
      avatar: 'assets/img/nature/avatar_img_1.png',
      bgImgUrl2: '/assets/img/animal/testimonial_pattern.svg',
      name: 'Angrew Bolar',
      role: 'Volunteer',
      quote:
        'The resources have been a tremendous help in making my lifestyle more eco-friendly. Plus, the campaigns are a fantastic way to get involved. Keep up the excellent work!',
      rating: 4,
    },
    {
      avatar: 'assets/img/nature/avatar_img_4.png',
      bgImgUrl2: '/assets/img/animal/testimonial_pattern.svg',
      name: 'Milisa Geui',
      role: 'Volunteer',
      quote:
        "I particularly appreciate the emphasis on practical tips for sustainable living. It's refreshing to find a place that not only highlights the issues but also provides solutions.",
      rating: 2,
    },
    // Add more testimonials as needed
  ],
};

const galleryData = {
  sectionSubtitle: 'Photo Gallery',
  sectionTitle: 'A Visual Journey through Marine <br />Life Conservation',
  galleyItems: [
    {
      imageUrl: '/assets/img/ocean-life/gallery_img_1.jpg',
      altText: 'Ocean Life 1',
    },
    {
      imageUrl: '/assets/img/ocean-life/gallery_img_2.jpg',
      altText: 'Ocean Life 2',
    },
    {
      imageUrl: '/assets/img/ocean-life/gallery_img_3.jpg',
      altText: 'Ocean Life 3',
    },
    {
      imageUrl: '/assets/img/ocean-life/gallery_img_4.jpg',
      altText: 'Ocean Life 4',
    },
    {
      imageUrl: '/assets/img/ocean-life/gallery_img_5.jpg',
      altText: 'Ocean Life 5',
    },
    {
      imageUrl: '/assets/img/ocean-life/gallery_img_6.jpg',
      altText: 'Ocean Life 5',
    },
  ],
};

const teamData = {
  sectionSubtitle: 'Our Team',
  sectionTitle: 'Meet Our Dedicated Environmental <br />Advocates and Experts',
  teamMembers: [
    {
      id: 1,
      name: 'Jhon Beboral',
      designation: 'CEO FOUNDER',
      image: '/assets/img/ocean-life/team_member_1.jpg',
      socialLinks: {
        linkedin: '/',
        twitter: '/',
        facebook: '/',
      },
    },
    {
      id: 2,
      name: 'Jubena Lili',
      designation: 'MANAGER',
      image: '/assets/img/ocean-life/team_member_2.jpg',
      socialLinks: {
        linkedin: '/',
        twitter: '/',
        facebook: '/',
      },
    },
    {
      id: 3,
      name: 'Zixan Bony',
      designation: 'VOLUNTEER',
      image: '/assets/img/ocean-life/team_member_3.jpg',
      socialLinks: {
        linkedin: '/',
        twitter: '/',
        facebook: '/',
      },
    },
  ],
};

const serviceData = {
  backgroundImageUrl: '/assets/img/nature/service_bg.svg',
  sectionHeading: {
    subtitle: 'Support',
    title: 'Support Marine Life Protection <br />with Your Donation',
    textCenter: 'text-center',
    color: '--heading-color',
    titleColor: 'cs_white_color',
  },
  defaultAmount: '$50',
  fixedAmounts: [10, 50, 100, 500],
  formAction: '#',
  buttonText: 'Donate Now',
};

const blogData = {
  SectionSubtitle: 'Blog Post',
  SectionTitle: 'Our Latest News & Updates',
  rightImgUrl: '/assets/img/nature/blog_shape_1.png',
  leftImgUrl: '/assets/img/nature/blog_shape_2.png',
  posts: [
    {
      imgSrc: '/assets/img/nature/post_img_1.jpg',
      author: 'Bob Marline',
      category: 'Environment',
      title: 'How Reforestation Can Save Our Planet',
      description:
        'Discover the incredible impact of reforest on our environment and the critical role trees play in mitigating climate...',
      link: '/blog/blog-details',
      btnText: 'Learn More',
    },
    {
      imgSrc: '/assets/img/nature/post_img_2.jpg',
      author: 'Bob Marline',
      category: 'Environment',
      title: 'Unmasking the Hidden Threat to Our Oceans',
      description:
        'Dive into the disturbing reality of plastic pollution in our oceans. This blog sheds light on the consequences of single...',
      link: '/blog/blog-details',
      btnText: 'Learn More',
    },
    {
      imgSrc: '/assets/img/nature/post_img_3.jpg',
      author: 'Bob Marline',
      category: 'Environment',
      title: 'Tips for Sustainable Green Spaces in Home',
      description:
        'Discover the incredible impact of reforest on our environment and the critical role trees play in mitigating climate...',
      link: '/blog/blog-details',
      btnText: 'Learn More',
    },
  ],
};
const OceanLife = () => {
  pageTitle('Ocean Life');
  return (
    <>
      <HeroSection5 data={heroData} />
      <Section
        topSpaceMd="75"
        topSpaceLg="145"
        bottomSpaceMd="80"
        bottomSpaceLg="150"
      >
        <FeatureSection4 data={featureData} />
      </Section>
      <Section
        className={'cs_gray_bg_2'}
        topSpaceMd="80"
        topSpaceLg="0"
        bottomSpaceMd="80"
        bottomSpaceLg="0"
      >
        <AboutSection6 data={aboutData} />
      </Section>
      <Section topSpaceMd="70" topSpaceLg="132">
        <FunFact data={funData} />
      </Section>
      <Section bottomSpaceMd="80" bottomSpaceLg="145">
        <DonationSection data={donationData} variant={true} />
      </Section>
      <Section
        className={'cs_bg_filed text-center'}
        topSpaceMd="75"
        topSpaceLg="140"
        bottomSpaceMd="80"
        bottomSpaceLg="150"
        backgroundImage="/assets/img/ocean-life/cta_bg.jpg"
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
      <GallerySection data={galleryData} />
      <Section
        topSpaceMd="75"
        topSpaceLg="145"
        bottomSpaceMd="70"
        bottomSpaceLg="140"
      >
        <TeamSection2 data={teamData} />
      </Section>
      <Section topSpaceMd="75" topSpaceLg="145" className={'cs_half_bg_wrap'}>
        <ServicesSection4 data={serviceData} />
      </Section>
      <Section
        className="cs_shape_wrap"
        topSpaceMd="75"
        topSpaceLg="145"
        bottomSpaceMd="80"
        bottomSpaceLg="150"
      >
        <BlogSection data={blogData} />
      </Section>
    </>
  );
};

export default OceanLife;
