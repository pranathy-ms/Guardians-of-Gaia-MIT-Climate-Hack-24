import Section from '../../Components/Section';
import PageHeading from '../../Components/Heading/PageHeading';
import FeatureSection4 from '../../Components/FeatureSection/FeatureSection4';
import { pageTitle } from '../../helper';
const headingData = {
  title: 'Services',
};

const featureData = {
  features: [
    {
      icon: '/assets/img/nature/service_icon_1.svg',
      title: 'Climate Change',
      description:
        'Address the impacts of climate change on oceans by supporting initiatives aimed at reducing greenhouse gas emissions and',
      link: '/services/service-details',
      btnText: 'Learn More',
    },
    {
      icon: '/assets/img/nature/service_icon_2.svg',
      title: 'Sustainable Fishing',
      description:
        'Promote and support sustainable fishing practices to prevent overfishing and preserve the balance of marine ecosystems.',
      link: '/services/service-details',
      btnText: 'Learn More',
    },
    {
      icon: '/assets/img/nature/service_icon_3.svg',
      title: 'Marine Awareness',
      description:
        'Raise awareness about the importance of marine conservation and the critical role oceans play in sustaining life on Earth.',
      link: '/services/service-details',
      btnText: 'Learn More',
    },
    {
      icon: '/assets/img/nature/service_icon_4.svg',
      title: 'Marine Awareness',
      description:
        'Raise awareness about the importance of marine conservation and the critical role oceans play in sustaining life on Earth.',
      link: '/services/service-details',
      btnText: 'Learn More',
    },
    {
      icon: '/assets/img/nature/service_icon_5.svg',
      title: 'Marine Awareness',
      description:
        'Raise awareness about the importance of marine conservation and the critical role oceans play in sustaining life on Earth.',
      link: '/services/service-details',
      btnText: 'Learn More',
    },
    {
      icon: '/assets/img/nature/service_icon_6.svg',
      title: 'Marine Awareness',
      description:
        'Raise awareness about the importance of marine conservation and the critical role oceans play in sustaining life on Earth.',
      link: '/services/service-details',
      btnText: 'Learn More',
    },
  ],
};
const Services = () => {
  pageTitle('Service');
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
        topSpaceMd="75"
        topSpaceLg="145"
        bottomSpaceMd="80"
        bottomSpaceLg="150"
      >
        <FeatureSection4 data={featureData} variant={true} />
      </Section>
    </>
  );
};

export default Services;
