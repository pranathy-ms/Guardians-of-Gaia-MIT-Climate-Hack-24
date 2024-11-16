import AboutSection from '../../Components/AboutSection';
import BlogSection from '../../Components/BlogSection';
import CTASection from '../../Components/CTASection';
import DonationSection from '../../Components/DonationSection';
import FaqSection from '../../Components/FaqSection';
import FeatureSection from '../../Components/FeatureSection';
import FunFact from '../../Components/FunFact';
import HeroSection from '../../Components/HeroSection';
import Section from '../../Components/Section';
import ServicesSection from '../../Components/ServicesSection';
import TeamSection from '../../Components/TeamSection';
import Testimonial from '../../Components/TestimonialSection';
import { pageTitle } from '../../helper';

const heroData = {
  rotateBg: '/assets/img/nature/hero_rotate_text_bg.svg',
  rotateText: '/assets/img/nature/hero_rotate_text.svg',
  leftImage: '/assets/img/nature/hero_img_1.jpg',
  rightImage: '/assets/img/nature/hero_img_2.jpg',
  slides: [
    {
      title: 'B2B Energy Optimization Platform',
      subtitle:
        'Energy Maximizer for Commercial Real Estate',
      btnText: 'Learn More',
      btnUrl: '/about',
    },
    {
      title: 'Taking Small Strides to Preserve Our Planet',
      subtitle:
        'Ecology, as a field of science, investigates the interconnections between living organisms and their surroundings, encompassing both the physical and chemical aspects.',
      btnText: 'Learn More',
      btnUrl: '/about',
    },
    {
      title: 'Small Changes, Big Impact on Our Planet',
      subtitle:
        'Making small changes in everyday life can have a significant impact on preserving natural resources and maintaining ecological balance.',
      btnText: 'Explore More',
      btnUrl: '/services',
    },
  ],
};

// Dynamic data object
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

  btnUrl: '/about',
  btnText: 'learn-more',
};

const serviceData = {
  SectionSubtitle: 'Service',
  SectionTitle: 'Our Environmental Services',
  description:
    ' Discover a range of services aimed at promoting environmental <br/>awareness, sustainability, and positive action.',
  backgroundImage: '/assets/img/nature/service_bg.svg',
  sliderData: [
    {
      icon: '/assets/img/nature/service_icon_1.svg',
      title: 'Eco-Friendly Product',
      description:
        'Share reviews and recommendations for eco-friendly products, from energy-efficient appliances to sustainable clothing.',
      link: '/services/service-details',
      btnText: 'Learn More',
    },
    {
      icon: '/assets/img/nature/service_icon_2.svg',
      title: 'Advocacy and Campaigns',
      description:
        'Organize and promote environmental campaigns and advocacy efforts, encouraging visitors to take action on important issues.',
      link: '/services/service-details',
      btnText: 'Learn More',
    },
    {
      icon: '/assets/img/nature/service_icon_3.svg',
      title: 'Sustainable Gardening',
      description:
        'Offer guidance on sustainable gardening practices, including organic gardening, and water conservation in gardens.',
      link: '/services/service-details',
      btnText: 'Learn More',
    },
    {
      icon: '/assets/img/nature/service_icon_4.svg',
      title: 'Wildlife Saving',
      description:
        'Promote and support wildlife conservation programs and encourage donations or volunteer participation.',
      link: '/services/service-details',
      btnText: 'Learn More',
    },
    {
      icon: '/assets/img/nature/service_icon_2.svg',
      title: 'Advocacy and Campaigns',
      description:
        'Organize and promote environmental campaigns and advocacy efforts, encouraging visitors to take action on important issues.',
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
      progress: 50,

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
      progress: 48,

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
      progress: 73,

      btnText: 'Donate Now',
      btnUrl: '/contact',
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

const teamSectionData = {
  SectionSubtitle: 'Our Team',
  SectionTitle: 'Meet Our Dedicated Environmental <br /> Advocates and Experts',
  bgRightImhUrl: '/assets/img/nature/about_shape_1.svg',
  bgLeftImhUrl2: '/assets/img/nature/about_shape_2.svg',
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
export default function Nature() {
  pageTitle('Nature');
  return (
    <>
      <HeroSection data={heroData} />
      <Section topSpaceMd="80" topSpaceLg="150">
        <FeatureSection data={featureData} />
      </Section>
      <Section
        className={'cs_shape_wrap'}
        topSpaceMd="70"
        topSpaceLg="140"
        bottomSpaceMd="80"
        bottomSpaceLg="150"
      >
        <AboutSection data={aboutData} />
      </Section>
      <Section className={'cs_half_bg_wrap'} topSpaceMd="75" topSpaceLg="145">
        <ServicesSection data={serviceData} />
      </Section>
      <Section topSpaceMd="70" topSpaceLg="132">
        <FunFact data={funData} />
      </Section>
      <Section className={'cs_gray_bg_2'}>
        <FaqSection data={fqaData} reverseOrder={false} />
      </Section>
      <Section topSpaceMd="75" topSpaceLg="145">
        <DonationSection data={donationData} />
      </Section>
      <Section
        className={'cs_half_bg_wrap'}
        topSpaceMd="75"
        topSpaceLg="145"
        bottomSpaceMd="80"
        bottomSpaceLg="150"
      >
        <Testimonial data={testimonialData} />
      </Section>
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
        className={'cs_bg_filed text-center'}
        topSpaceMd="75"
        topSpaceLg="140"
        bottomSpaceMd="80"
        bottomSpaceLg="150"
        backgroundImage="/assets/img/nature/cta_bg.jpg"
      >
        <CTASection data={ctaData} />
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
}
