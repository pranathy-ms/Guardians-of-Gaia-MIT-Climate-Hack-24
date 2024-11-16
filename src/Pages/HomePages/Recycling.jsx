import React from 'react';
import HeroSection3 from '../../Components/HeroSection/HeroSection3';
import ServiceSection3 from '../../Components/ServicesSection/ServiceSection3';
import Section from '../../Components/Section';
import VideoBlock from '../../Components/VideoSection';
import AboutSection2 from '../../Components/AboutSection/AboutSection2';
import FeatureSection3 from '../../Components/FeatureSection/FeatureSection3';
import FunFact from '../../Components/FunFact';
import DonationSection4 from '../../Components/DonationSection/DonationSection4';
import TeamSection from '../../Components/TeamSection';
import Testimonial from '../../Components/TestimonialSection';
import EventSection from '../../Components/EventSection';
import CTASection from '../../Components/CTASection';
import BlogsSection3 from '../../Components/BlogSection/BlogsSection3';
import { pageTitle } from '../../helper';

const heroData = {
  slides: [
    {
      backgroundImage: '/assets/img/recycling/hero_bg_1.jpg',
      subtitle: 'Recycling For Future',
      title: 'Recycle for a Better Tomorrow, Join the Green Revolution',
      description:
        'Welcome to our recycling hub, where every action counts towards a sustainable future. Join us in the journey to reduce, reuse, and recycle for a greener planet.',
      buttons: [
        { text: 'Learn More', url: '/about', variant: 'cs_btn cs_style_1' },
        {
          text: 'Contact Us',
          url: '/contact',
          variant: 'cs_btn cs_style_1 cs_color_1',
        },
      ],
    },
    {
      backgroundImage: '/assets/img/recycling/hero_bg_2.jpg',
      subtitle: 'Recycling for Tomorrow',
      title: 'Embrace Sustainability Today, Be Part of the Eco-Friendly Future',
      description:
        "Welcome to our eco-center, where each step brings us closer to a sustainable world. Let's work together to reduce, reuse, and recycle for a healthier Earth.",
      buttons: [
        { text: 'Learn More', url: '/about', variant: 'cs_btn cs_style_1' },
        {
          text: 'Contact Us',
          url: '/contact',
          variant: 'cs_btn cs_style_1 cs_color_1',
        },
      ],
    },
    {
      backgroundImage: '/assets/img/recycling/hero_bg_3.jpg',
      subtitle: 'Preserving Future Recycling',
      title:
        'Go Green for a Brighter Future, Together We Can Make a Difference',
      description:
        'Step into our green hub, where every effort contributes to a sustainable tomorrow. Join us in the mission to reduce, reuse, and recycle for a cleaner planet.',
      buttons: [
        { text: 'Learn More', url: '/about', variant: 'cs_btn cs_style_1' },
        {
          text: 'Contact Us',
          url: '/contact',
          variant: 'cs_btn cs_style_1 cs_color_1',
        },
      ],
    },
  ],
};

const serviceData = {
  sectionSubTitle: 'What We Do',
  sectionTitle: 'Our Environmental Services',
  description:
    'Discover a range of services aimed at promoting environmental <br />awareness, sustainability, and positive action.',

  sliderData: [
    {
      imgSrc: '/assets/img/recycling/service_img_1.jpg',
      title: 'Recycling Locator',
      url: '/services/service-details',
      btnText: 'Learn More',
    },
    {
      imgSrc: '/assets/img/recycling/service_img_2.jpg',
      title: 'Educational Workshops',
      url: '/services/service-details',
      btnText: 'Learn More',
    },
    {
      imgSrc: '/assets/img/recycling/service_img_3.jpg',
      title: 'Recycling Campaigns',
      url: '/services/service-details',
      btnText: 'Learn More',
    },
    {
      imgSrc: '/assets/img/recycling/service_img_4.jpg',
      title: 'DIY Recycling Projects',
      url: '/services/service-details',
      btnText: 'Learn More',
    },
  ],
};

const videoBlockData = {
  videoUrl: 'https://www.youtube.com/embed/rRid6GCJtgc',
  videoBgImage: 'assets/img/recycling/video_block_bg.jpg',
};

const aboutData = {
  subtitle: 'About Us',
  title: 'Creating a Lasting Alliance for a Planet Future',
  images: {
    img1: '/assets/img/recycling/about_img_1.jpg',
    img2: '/assets/img/recycling/about_img_2.jpg',
  },
  experience: {
    years: '10+',
    text: 'Years Experience',
  },
  description:
    "Together, let's make a lasting impact on our environment. It's time to embrace a world where waste becomes a resource, and recycling is a collective commitment to a brighter tomorrow.",
  button: {
    text: 'Learn More',
    url: '/about',
  },
};

const featureData = {
  subtitle: 'What We Are Doing',
  title: 'Our Pledge to Recycling Excellence & Beyond',
  description:
    "Together, let's make a lasting impact on our environment. It's time to embrace a world where waste becomes a resource, and recycling is a collective commitment to a brighter tomorrow.",
  features: [
    'Comprehensive Recycling Solutions',
    'Eco-Friendly Product Recommendations',
    'Innovative Recycling Campaigns',
    'Educational Workshops and Resources',
  ],
  backgroundImage: '/assets/img/recycling/feature_bg.jpg',
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

const testimonialData = {
  sectionTitle: 'What People Think About Us',
  sectionSubtitle: 'Testimonial',
  bgImgUrl: '/assets/img/nature/testimonial_bg.svg',
  testimonials: [
    {
      name: 'Angrew Bolar',
      role: 'Volunteer',
      image: '/assets/img/nature/avatar_img_1.png',
      feedback:
        'The resources have been a tremendous help in making my lifestyle more eco-friendly. Plus, the campaigns are a fantastic way to get involved. Keep up the excellent work!',
      rating: 5,
    },
    {
      name: 'Milisa Geui',
      role: 'Volunteer',
      image: '/assets/img/nature/avatar_img_2.png',
      feedback:
        "I particularly appreciate the emphasis on practical tips for sustainable living. It's refreshing to find a place that not only highlights the issues but also provides solutions.",
      rating: 5,
    },
    {
      name: 'Michaku',
      role: 'Volunteer',
      image: '/assets/img/nature/avatar_img_3.png',
      feedback:
        'I love being part of a community that cares about the planet, and this website has been instrumental in connecting me with like-minded individuals. Thank you!',
      rating: 4.5,
    },
  ],
};

const eventData = {
  sectionSubtitle: 'Events',
  sectionTitle: 'Our Upcoming Events',
  eventsData: [
    {
      id: 1,
      time: '08:00 - 09:00',
      date: '11 Dec 2024',
      title: 'Plastic Free Living Workshop',
      postedBy: 'Kerua Zoshua',
      role: 'Environment Activist',
      imgSrc: '/assets/img/recycling/event_card_img_1.jpg',
      detailsUrl: '/event-details',
      btnText: 'See Details',
    },
    {
      id: 2,
      time: '09:00 - 10:00',
      date: '10 Dec 2024',
      title: 'E-Waste Recycling Drive',
      postedBy: 'Mili Zadeja',
      role: 'Biologist',
      imgSrc: '/assets/img/recycling/event_card_img_2.jpg',
      detailsUrl: '/event-details',
      btnText: 'See Details',
    },
    {
      id: 3,
      time: '08:00 - 09:00',
      date: '08 Dec 2024',
      title: 'Green Community Cleanup Day',
      postedBy: 'Kerua Zoshua',
      role: 'Environment Activist',
      imgSrc: '/assets/img/recycling/event_card_img_3.jpg',
      detailsUrl: '/event-details',
      btnText: 'See Details',
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

const donationData = {
  sectionSubtitle: 'Donation',
  sectionTitle: 'Supporting Our Environmental <br />Fundraising Initiatives',
  campaignData: [
    {
      id: 1,
      image: 'assets/img/recycling/card_img_1.jpg',
      title: 'Harvesting Hope: Ensuring Food Security for All',
      description:
        'Deforestation poses a significant threat to our environment, contributing to climate change and the loss of crucial habitats for...',
      progress: 70,
      goal: 4000,
      raised: 2800,
    },
    {
      id: 2,
      image: '/assets/img/recycling/card_img_2.jpg',
      title: 'Nourish to Flourish: Promoting Nutrition Education',
      description:
        'Deforestation poses a significant threat to our environment, contributing to climate change and the loss of crucial habitats for...',
      progress: 70,
      goal: 4000,
      raised: 2800,
    },
    {
      id: 3,
      image: '/assets/img/recycling/card_img_3.jpg',
      title: 'Water for Life, Food for All: Ensuring Access to Clean',
      description:
        'Deforestation poses a significant threat to our environment, contributing to climate change and the loss of crucial habitats for...',
      progress: 50,
      goal: 4000,
      raised: 2800,
    },
  ],
};

const blogsData = {
  sectionSubtitle: 'Blog Post',
  sectionTitle: 'Our Latest News &amp; Updates',
  blogPosts: [
    {
      id: 1,
      image: '/assets/img/nature/post_img_1.jpg',
      author: 'Bob Marline',
      category: 'Environment',
      title: 'How Reforestation Can Save Our Planet',
      subtitle:
        'Discover the incredible impact of reforestation on our environment...',
      link: '/blog/blog-details',
      btnText: 'Learn More',
    },
    {
      id: 2,
      image: '/assets/img/nature/post_img_2.jpg',
      author: 'Bob Marline',
      category: 'Environment',
      title: 'Unmasking the Hidden Threat to Our Oceans',
      subtitle: 'Dive into the disturbing reality of plastic pollution...',
      link: '/blog/blog-details',
      btnText: 'Learn More',
    },
    {
      id: 3,
      image: '/assets/img/nature/post_img_3.jpg',
      author: 'Bob Marline',
      category: 'Environment',
      title: 'Tips for Sustainable Green Spaces in Home',
      subtitle: 'Discover the incredible impact of reforestation...',
      link: '/blog/blog-details',
      btnText: 'Learn More',
    },
  ],
};

const Recycling = () => {
  pageTitle('Recycling');

  return (
    <>
      <HeroSection3 data={heroData} />
      <Section
        topSpaceMd="75"
        topSpaceLg="145"
        bottomSpaceMd="80"
        bottomSpaceLg="150"
      >
        <ServiceSection3 data={serviceData} />
      </Section>
      <VideoBlock data={videoBlockData} />
      <Section
        topSpaceMd="70"
        topSpaceLg="150"
        bottomSpaceMd="80"
        bottomSpaceLg="150"
      >
        <AboutSection2 data={aboutData} />
      </Section>
      <FeatureSection3 data={featureData} />
      <Section topSpaceMd="70" topSpaceLg="132">
        <FunFact data={funData} />
      </Section>
      <Section
        className={'cs_gray_bg_2'}
        topSpaceMd="75"
        topSpaceLg="145"
        bottomSpaceMd="80"
        bottomSpaceLg="150"
      >
        <DonationSection4 data={donationData} />
      </Section>
      <Section className={'cs_shape_wrap'} topSpaceMd="75" topSpaceLg="145">
        <TeamSection data={teamSectionData} />
      </Section>
      <Section
        className={'cs_half_bg_wrap'}
        bottomSpaceMd="80"
        bottomSpaceLg="150"
        topSpaceMd="75"
        topSpaceLg="145"
      >
        <Testimonial data={testimonialData} />
      </Section>
      <Section
        className={'cs_gray_bg_2 cs_shape_wrap'}
        topSpaceMd="75"
        topSpaceLg="145"
        bottomSpaceMd="80"
        bottomSpaceLg="150"
      >
        <EventSection data={eventData} />
      </Section>
      <Section
        className={'cs_bg_filed text-center'}
        topSpaceMd="75"
        topSpaceLg="140"
        bottomSpaceMd="80"
        bottomSpaceLg="150"
        backgroundImage="assets/img/nature/cta_bg.jpg"
      >
        <CTASection data={ctaData} />
      </Section>
      <Section
        topSpaceMd="75"
        topSpaceLg="145"
        bottomSpaceMd="80"
        bottomSpaceLg="150"
      >
        <BlogsSection3 data={blogsData} />
      </Section>
    </>
  );
};

export default Recycling;
