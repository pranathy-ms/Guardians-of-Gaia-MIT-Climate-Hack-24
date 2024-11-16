import Section from '../../Components/Section';
import PageHeading from '../../Components/Heading/PageHeading';
import ServiceDetailsSection from '../../Components/ServicesSection/ServiceDetailsSection';
import { pageTitle } from '../../helper';
const headingData = {
  title: 'Service Details',
};

const serviceDetailsData = {
  servicesData: {
    title: 'Our Services',
    services: [
      { name: 'Eco-Friendly Product', link: '/services/service-details' },
      { name: 'Advocacy and Campaigns', link: '/services/service-details' },
      { name: 'Sustainable Gardening', link: '/services/service-details' },
      { name: 'Wildlife Saving', link: '/services/service-details' },
      { name: 'Environmental Literature', link: '/services/service-details' },
      { name: 'Membership and Donations', link: '/services/service-details' },
    ],
  },
  contactData: {
    title: 'Have Any Query Feel Free Contact',
    buttonText: 'Contact Now',
    link: '/contact',
    icon: '/assets/img/others/contact_icon.svg',
    backgroundImage: '/assets/img/others/contact_bg.jpg',
  },
  formData: {
    title: 'Request a Quote',
    fields: [
      { type: 'text', placeholder: 'Your Name' },
      { type: 'text', placeholder: 'Your Email' },
      { type: 'textarea', placeholder: 'Message' },
    ],
    buttonText: 'Subscribe',
  },
  data: {
    title: "Related FAQ's",
    services: [
      { title: 'Eco-Friendly Product', link: '/services/service-details' },
      { title: 'Advocacy and Campaigns', link: '/services/service-details' },
      { title: 'Sustainable Gardening', link: '/services/service-details' },
      { title: 'Wildlife Saving', link: '/services/service-details' },
      { title: 'Environmental Literature', link: '/services/service-details' },
      { title: 'Membership and Donations', link: '/services/service-details' },
    ],
    details: [
      {
        title: 'Product Range',
        description:
          'Explore our diverse range of eco-friendly products, including but not limited to reusable bags, biodegradable cutlery, sustainable home goods, organic clothing, and energy-efficient devices. Each product is carefully chosen to meet our high standards for environmental impact.',
      },
      {
        title: 'Sustainability Standards',
        description:
          'We prioritize products that are made from recycled or renewable materials, are energy-efficient, and have minimal environmental footprints.',
      },
      {
        title: 'Educational Resources',
        description:
          'Find informative guides, tips, and resources on our website to help you make informed choices about sustainable living and using our products.',
      },
      {
        title: 'Community Engagement',
        description:
          'Join our community of environmentally conscious consumers. Connect with like-minded individuals and participate in discussions about sustainable living.',
      },
    ],
    headImg: '/assets/img/others/service_details_1.jpg',
    lastImg: '/assets/img/others/service_details_2.jpg',
    lastImg2: '/assets/img/others/service_details_3.jpg',
    faqs: [
      {
        question: 'What is the primary goal of this website?',
        answer:
          'Our primary goal is to raise awareness about environmental issues and inspire positive environmental action.',
      },
      {
        question: "How can I support your website's mission?",
        answer:
          'You can support by raising awareness, donating, and participating in eco-friendly activities.',
      },
      {
        question: 'How do you ensure the sustainability of the website?',
        answer:
          'We ensure sustainability by minimizing resource use and prioritizing environmentally friendly tools and hosting services.',
      },
      {
        question: 'How can I get involved in environmental initiatives?',
        answer:
          'You can get involved by joining our campaigns and participating in local eco-friendly events.',
      },
    ],
  },
};

const ServiceDetails = () => {
  pageTitle('Service Details');
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
      <ServiceDetailsSection data={serviceDetailsData} />
    </>
  );
};

export default ServiceDetails;
