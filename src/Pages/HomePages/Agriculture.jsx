import HeroSection4 from '../../Components/HeroSection/HeroSection4';
import AboutSection3 from '../../Components/AboutSection/AboutSection3';
import DonationSection5 from '../../Components/DonationSection/DonationSection5';
import Section from '../../Components/Section';
import FeatureSection2 from '../../Components/FeatureSection/FeatureSection2';
import EventSection from '../../Components/EventSection';
import TestimonialSection2 from '../../Components/TestimonialSection/TestimonialSection2';
import CtaSection2 from '../../Components/CTASection/CtaSection2';
import DonateSection3 from '../../Components/DonationSection/DonateSection3';
import BlogSection4 from '../../Components/BlogSection/BlogSection4';
import { pageTitle } from '../../helper';
const heroData = {
  sliderData: [
    {
      backgroundImage: '/assets/img/agriculture/hero_bg_1.jpg',
      title: 'Forging an Improved Food System, Hand in Hand',
      buttonText: 'Learn More',
      buttonUrl: '/about',
    },
    {
      backgroundImage: '/assets/img/agriculture/hero_bg_2.jpg',
      title: "Let's Build a Better Food System, Together.",
      buttonText: 'Learn More',
      buttonUrl: '/about',
    },
    {
      backgroundImage: '/assets/img/agriculture/hero_bg_3.jpg',
      title: 'Creating a Stronger Food Network, Side by Side.',
      buttonText: 'Learn More',
      buttonUrl: '/about',
    },
  ],

  iconBoxData: [
    {
      imgSrc: '/assets/img/agriculture/support_local_farmers.svg',
      title: 'Support Local Farmers',
    },
    {
      imgSrc: '/assets/img/agriculture/provide_organic_farming.svg',
      title: 'Produce Organic Farming',
    },
    {
      imgSrc: '/assets/img/agriculture/stop_chemicals_pesticide.svg',
      title: 'Stop Chemicals Pesticide',
    },
  ],
};

const aboutData = {
  sectionSubtitle: 'About Us',
  sectionTitle: 'Creating a Lasting Alliance for a Greener Future',
  description:
    "We are passionate advocates for environmental awareness and moral sustainability. Our mission is to empower individuals and communities to make positive changes for our planet. We believe that small actions can lead to big transformations, and we're dedicated to providing the knowledge, resources, and inspiration needed.",
  funFacts: [
    { number: 500, title: 'Local Volunteers' },
    { number: '110M', title: 'Total Fund Raised' },
    { number: '200+', title: 'Project Completed' },
    { number: '2K', title: 'World Wide Members' },
  ],
  videoBlock: {
    videoUrl: 'https://www.youtube.com/embed/rRid6GCJtgc',
    bgImage: '/assets/img/agriculture/video_block_bg.jpg',
  },
  button: {
    text: 'Learn More',
    url: '/about',
    variant: 'cs_btn cs_style_1',
  },
};

const donationData = {
  sectionSubtitle: 'Donation',
  sectionTitle: 'Supporting Our Environmental <br /> Fundraising Initiatives',
  sliderData: [
    {
      imgSrc: '/assets/img/agriculture/card_img_1.jpg',
      title: 'Harvesting Hope: Ensuring Food Security for All',
      description:
        'Deforestation poses a significant threat to our environment, contributing to climate change and the loss of crucial habitats for...',
      progress: 70,
      goal: 4000,
      raised: 2800,
      donateLink: '/contact',
      btnText: 'Donate Now',
    },
    {
      imgSrc: '/assets/img/agriculture/card_img_2.jpg',
      title: 'Nourish to Flourish: Promoting Nutrition Education',
      description:
        'Deforestation poses a significant threat to our environment, contributing to climate change and the loss of crucial habitats for...',
      progress: 80,
      goal: 4000,
      raised: 3500,
      donateLink: '/contact',
      btnText: 'Donate Now',
    },
    {
      imgSrc: '/assets/img/agriculture/card_img_3.jpg',
      title: 'Water for Life, Food for All: Ensuring Access to Clean Water',
      description:
        'Deforestation poses a significant threat to our environment, contributing to climate change and the loss of crucial habitats for...',
      progress: 70,
      goal: 4000,
      raised: 2800,
      donateLink: '/contact',
      btnText: 'Donate Now',
    },
  ],
};

const featureData = {
  sectionSubtitle: "Let's Save Planet Together",
  sectionTitle: 'Quenching Thirst, Saving Lives with Support',
  backgroundImage: '/assets/img/agriculture/feature_bg.jpg',
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
      detailsUrl: '/event/event-details',
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
      detailsUrl: '/event/event-details',
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
      detailsUrl: '/event/event-details',
      btnText: 'See Details',
    },
  ],
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
      rating: 5,
    },
    {
      avatar: 'assets/img/nature/avatar_img_4.png',
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

const ctaData = {
  images: [
    'assets/img/agriculture/cta_img_1.jpg',
    'assets/img/agriculture/cta_img_2.jpg',
    'assets/img/agriculture/cta_img_3.jpg',
    'assets/img/agriculture/cta_img_4.jpg',
  ],
  movingText: 'ECOZONE - ECOZONE - ECOZONE - ECOZONE - ECOZONE - ECOZONE -',
  heading:
    'We offer contemporary farming expertise, embracing pesticide-free practices and relying solely on organic fertilizers for enhanced food quality.',
  buttonUrl: '/contact',
  buttonText: 'Join Our Team',
};

const donateSectionData = {
  headingText:
    "Gratitude to your support! Together, we've achieved a remarkable $100K across all our congregations.",
  defaultAmount: 50,
  fixedAmounts: [10, 50, 100, 500],
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
    imageUrl: '/assets/img/animal/post_img_1.jpg',
    link: '/blog/blog-details',
    btnText: 'Learn More',
    title1: 'Stylish Choices for a Planet Friendly Wardrobe',
    subtitle1:
      'Discover the incredible impact of reforest on our environment...',
    author1: 'Bob Marline',
    category1: 'Environment',
    imageUrl1: '/assets/img/animal/post_img_3.jpg',
    link1: '/blog/blog-details',
    title2: 'Unmasking the Hidden Threat to Our Oceans',
    subtitle2:
      'Dive into the disturbing reality of plastic pollution in our oceans...',
    author2: 'Bob Marline',
    category2: 'Environment',
    imageUrl2: '/assets/img/animal/post_img_2.jpg',
    link2: '/blog/blog-details',
  },
};
const Agriculture = () => {
  pageTitle('Agriculture');
  return (
    <>
      <HeroSection4 data={heroData} />
      <Section topSpaceMd="70" topSpaceLg="140" className={'cs_shape_wrap'}>
        <AboutSection3 data={aboutData} />
      </Section>
      <Section
        topSpaceMd="75"
        topSpaceLg="145"
        bottomSpaceMd="80"
        bottomSpaceLg="150"
      >
        <DonationSection5 data={donationData} />
      </Section>
      <Section className={'cs_gray_bg_2'}>
        <FeatureSection2 data={featureData} reverseOrder={true} />
      </Section>
      <Section
        className={'cs_shape_wrap'}
        topSpaceMd="75"
        topSpaceLg="145"
        bottomSpaceMd="80"
        bottomSpaceLg="150"
      >
        <EventSection data={eventData} />
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
      <Section className={'cs_cta cs_style_2 text-center'}>
        <CtaSection2 data={ctaData} />
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
        topSpaceMd="75"
        topSpaceLg="145"
        bottomSpaceMd="80"
        bottomSpaceLg="150"
      >
        <BlogSection4 data={blogsData} />
      </Section>
    </>
  );
};

export default Agriculture;
