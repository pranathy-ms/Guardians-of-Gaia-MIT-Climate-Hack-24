import React from 'react';
import HeroSection6 from '../../Components/HeroSection/HeroSection6';
import Section from '../../Components/Section';
import DonationSection2 from '../../Components/DonationSection/DonationSection2';
import FeatureSection5 from '../../Components/FeatureSection/FeatureSection5';
import TestimonialSection3 from '../../Components/TestimonialSection/TestimonialSection3';
import EventsSection2 from '../../Components/EventSection/EventsSection2';
import CTASection from '../../Components/CTASection';
import TeamSection2 from '../../Components/TeamSection/TeamSection2';
import BrandSection from '../../Components/BrandSection';
import GallerySection from '../../Components/GallerySection';
import BlogSection4 from '../../Components/BlogSection/BlogSection4';
import { pageTitle } from '../../helper';
import AboutSection6 from '../../Components/AboutSection/AboutSection6';
const heroData = {
  title: 'Nourishing Hope: Food Donations for a Cause',
  subtitle:
    "Your food donations play a pivotal role in supporting local charities and communities in need. Together, let's create a positive impact by providing nourishment and sustenance to those who need it most.",
  backgroundImage: '/assets/img/charity/hero_bg.jpg',
  defaultAmount: 50,
  fixedAmounts: [10, 50, 100, 500],
};

const donationData = {
  campaigns: [
    {
      image: '/assets/img/charity/card_img_1.jpg',
      title: 'Harvesting Hope: Ensuring Food Security for All',
      description:
        'Deforestation poses a significant threat to our environment...',
      progress: 49,
      goal: 4000,
      raised: 2800,
      link: '/contact',
      btnText: 'Donate Now',
    },
    {
      image: '/assets/img/charity/card_img_2.jpg',
      title: 'Nourish to Flourish: Promoting Nutrition',
      description:
        'Deforestation poses a significant threat to our environment...',
      progress: 60,
      goal: 4000,
      raised: 2800,
      link: '/contact',
      btnText: 'Donate Now',
    },
    {
      image: '/assets/img/charity/card_img_3.jpg',
      title: 'Water for Life, Food for All: Ensuring Access to Clean',
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

const aboutData = {
  videoUrl: 'https://www.youtube.com/embed/rRid6GCJtgc',
  videoImageUrl: '/assets/img/ocean-life/video_block_bg.jpg',
  SectionTitle: 'Creating a Lasting Alliance for a Greener Future',
  SectionSubtitle: 'About Us',
  description:
    "We are passionate advocates for environmental awareness and moral sustainability. Our mission is to empower individuals and community to make positive changes for our planet. We believe that small actions can lead to big transformations, and we're dedicated to providing the knowledge, resources, and inspiration needed.",

  funFactsData: [
    { countTo: 500, unit: '', title: 'Local Volunteers' },
    { countTo: 110, unit: 'M', title: 'Total Fund Raised' },
    { countTo: 200, unit: '+', title: 'Project Completed' },
    { countTo: 2, unit: 'K', title: 'World Wide Members' },
  ],

  btnUrl: '/about',
  btnText: 'learn-more',
};

const featureData = {
  sectionSubtitle: 'What We Do',
  sectionTitle: 'Building a Nourished and <br />Resilient World',
  iconBoxes: [
    {
      icon: '/assets/img/charity/featuer_icon_1.svg',
      title: 'Food Redistribution',
      description:
        'Rescuing surplus food and redistributing it to those in need, we combat hunger while reducing food waste.',
    },
    {
      icon: '/assets/img/charity/featuer_icon_2.svg',
      title: 'Emergency Relief in Crisis',
      description:
        'Swiftly responding to crises, we provide emergency food relief to ensure immediate assistance for those facing hardships.',
    },
    {
      icon: '/assets/img/charity/featuer_icon_3.svg',
      title: 'Community Empowerment',
      description:
        'Supporting local communities in cultivating their own food, fostering self-sufficiency, and promoting sustainability.',
    },
    {
      icon: '/assets/img/charity/featuer_icon_4.svg',
      title: 'Local Farmers Support',
      description:
        'Championing local farmers by promoting and supporting their produce for a sustainable and thriving local economy.',
    },
    {
      icon: '/assets/img/charity/featuer_icon_5.svg',
      title: 'Child Nutrition Education',
      description:
        'Empowering individuals through programs that provide essential nutrition education for informed, healthy choices.',
    },
    {
      icon: '/assets/img/charity/featuer_icon_6.svg',
      title: 'Hunger-Free Holidays Initiative',
      description:
        'Organizing campaigns and programs to ensure everyone can enjoy festive seasons without facing hunger, joy, and abundance.',
    },
  ],
};

const testimonialData = {
  sectionSubtitle: 'Testimonial',
  sectionTitle: 'What People Think About Us',
  testimonials: [
    {
      avatar: '/assets/img/charity/avatar_img_1.png',
      name: 'Angrew Bolar',
      role: 'Volunteer',
      quote:
        'The resources have been a tremendous help in making my lifestyle more eco-friendly. Plus, the campaigns are a fantastic way to get involved. Keep up the excellent work!',
      rating: 5,
    },
    {
      avatar: '/assets/img/charity/avatar_img_2.png',
      name: 'Milisa Geui',
      role: 'Volunteer',
      quote:
        "I particularly appreciate the emphasis on practical tips for sustainable living. It's refreshing to find a place that not only highlights the issues but also provides solutions.",
      rating: 5,
    },
    {
      avatar: '/assets/img/charity/avatar_img_3.png',
      name: 'Michaku',
      role: 'Volunteer',
      quote:
        'I love being part of a community that cares about the planet, and this website has been instrumental in connecting me with like-minded individuals. Thank you!',
      rating: 4.5,
    },
  ],
};

const eventData = {
  sectionSubtitle: 'Events',
  sectionTitle: 'Our Upcoming Events',
  btnText: 'See Details',
  btnUrl: '/event/event-details',
  event: {
    time: '08:00 - 09:00',
    date: '11 Dec 2024',
    title: 'Sustainable Farming For Better Life',
    postedBy: 'Kerua Zoshua',
    position: 'Environment Activist',
    description:
      "Embark on a journey of enlightenment with our Learning Lighthouse symposium. This educational event brings together passionate speakers and experts to illuminate the path of knowledge. Join us for insightful discussions, workshops, and interactive sessions designed to empower minds and inspire a lifelong love for learning. Together, let's build a brighter future through education!",
    location: 'Arm Stadium, London, UK',
    thumbImg: '/assets/img/charity/event_card_img_1.png',
    shapeImg: '/assets/img/charity/event_card_shape.svg',
  },
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

const galleryData = {
  sectionSubtitle: 'Photo Gallery',
  sectionTitle: 'A Visual Journey through Marine <br />Life Conservation',
  galleyItems: [
    {
      imageUrl: '/assets/img/charity/gallery_img_1.jpg',
      altText: 'Ocean Life 1',
    },
    {
      imageUrl: '/assets/img/charity/gallery_img_2.jpg',
      altText: 'Ocean Life 2',
    },
    {
      imageUrl: '/assets/img/charity/gallery_img_3.jpg',
      altText: 'Ocean Life 3',
    },
    {
      imageUrl: '/assets/img/charity/gallery_img_4.jpg',
      altText: 'Ocean Life 4',
    },
    {
      imageUrl: '/assets/img/charity/gallery_img_5.jpg',
      altText: 'Ocean Life 5',
    },
    {
      imageUrl: '/assets/img/charity/gallery_img_6.jpg',
      altText: 'Ocean Life 5',
    },
  ],
};

const blogsData = {
  sectionTitle: 'Our Latest News & Updates',
  sectionSubtitle: 'Blog Post',
  posts: {
    title: 'How Reforestation Can Save Our Planet',
    subtitle:
      'Discover the incredible impact of reforest on our environment...',
    author: 'Bob Marline',
    category: 'Environment',
    imageUrl: '/assets/img/charity/post_img_1.jpg',
    link: '/blog-details',
    btnText: 'Learn More',
    title1: 'Stylish Choices for a Planet Friendly Wardrobe',
    subtitle1:
      'Discover the incredible impact of reforest on our environment...',
    author1: 'Bob Marline',
    category1: 'Environment',
    imageUrl1: '/assets/img/charity/post_img_3.jpg',
    link1: '/blog-details',
    title2: 'Unmasking the Hidden Threat to Our Oceans',
    subtitle2:
      'Dive into the disturbing reality of plastic pollution in our oceans...',
    author2: 'Bob Marline',
    category2: 'Environment',
    imageUrl2: '/assets/img/charity/post_img_2.jpg',
    link2: '/blog-details',
  },
};
const Charity = () => {
  pageTitle('Charity');
  return (
    <>
      <HeroSection6 data={heroData} />
      <Section
        className={'cs_negative_box_110'}
        bottomSpaceMd="80"
        bottomSpaceLg="150"
      >
        <DonationSection2 data={donationData} />
      </Section>
      <Section
        className={'cs_accent_bg'}
        topSpaceMd="80"
        topSpaceLg="0"
        bottomSpaceMd="80"
        bottomSpaceLg="0"
      >
        <AboutSection6
          data={aboutData}
          variant={'about_style_4'}
          color={'cs_body_color'}
          btnStyle={'cs_btn cs_style_1 cs_color_1'}
          about_content_style_2={true}
        />
      </Section>
      <Section
        topSpaceMd="75"
        topSpaceLg="145"
        bottomSpaceMd="80"
        bottomSpaceLg="150"
        className={'cs_gray_bg cs_shape_wrap'}
      >
        <FeatureSection5 data={featureData} />
      </Section>
      <Section
        topSpaceMd="75"
        topSpaceLg="145"
        bottomSpaceMd="80"
        bottomSpaceLg="150"
        className={'cs_half_bg_wrap'}
      >
        <TestimonialSection3 data={testimonialData} />
      </Section>
      <Section
        topSpaceMd="75"
        topSpaceLg="145"
        bottomSpaceMd="80"
        bottomSpaceLg="150"
      >
        <EventsSection2 data={eventData} />
      </Section>
      <Section
        className={'cs_bg_filed text-center'}
        topSpaceMd="75"
        topSpaceLg="140"
        bottomSpaceMd="80"
        bottomSpaceLg="150"
        backgroundImage="/assets/img/charity/cta_bg.jpg"
      >
        <CTASection data={ctaData} />
      </Section>
      <Section
        topSpaceMd="75"
        topSpaceLg="145"
        bottomSpaceMd="70"
        bottomSpaceLg="140"
      >
        <TeamSection2 data={teamData} />
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
      <Section topSpaceMd="75" topSpaceLg="145">
        <GallerySection data={galleryData} />
      </Section>
      <Section
        topSpaceMd="75"
        topSpaceLg="145"
        bottomSpaceMd="80"
        bottomSpaceLg="150"
      >
        <BlogSection4
          data={blogsData}
          variant={true}
          btnStyle={'cs_btn cs_style_2 cs_white_color'}
        />
      </Section>
    </>
  );
};

export default Charity;
