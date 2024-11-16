import Section from '../../Components/Section';
import PageHeading from '../../Components/Heading/PageHeading';
import ProjectDetailsSection from '../../Components/ProjectsSection/ProjectDetailsSection';
import { pageTitle } from '../../helper';
const headingData = {
  title: 'Project Details',
};

const projectData = {
  mainImage: '/assets/img/others/project_details_1.jpg',
  title: 'Sustainable Cities Blueprint - Transforming Urban Landscapes',
  description: `Welcome to our groundbreaking initiative, "Sustainable Cities Blueprint." In the face of urbanization and climate challenges, we are committed to redefining the future of cities. This project is a comprehensive strategy to transform urban landscapes into sustainable, resilient, and eco-friendly hubs.`,
  objectivesTitle: 'Objectives',
  objectives: [
    {
      id: '01',
      title: 'Green Infrastructure Development',
      description:
        'Implementing green roofs, urban forests, and sustainable public spaces to enhance biodiversity and improve air quality.',
    },
    {
      id: '02',
      title: 'Renewable Energy Integration',
      description:
        'Advancing the use of renewable energy sources within urban areas, with a focus on solar, wind, and innovative technologies.',
    },
    {
      id: '03',
      title: 'Sustainable Transportation Solutions',
      description:
        'Promoting eco-friendly modes of transportation, such as cycling lanes, electric vehicles, and efficient public transit systems.',
    },
    {
      id: '04',
      title: 'Waste Management Innovation',
      description:
        'Introducing cutting-edge waste reduction and recycling programs to minimize urban waste and promote a circular economy.',
    },
    {
      id: '05',
      title: 'Educational Programs',
      description:
        'Launching educational programs to raise awareness about sustainable practices in urban development.',
    },
  ],
  images: [
    '/assets/img/others/project_details_2.jpg',
    '/assets/img/others/project_details_3.jpg',
  ],
  progressTitle: 'Progress and Achievements',
  progress: [
    'Successfully implemented green spaces in Ohio, resulting in a [percentage] increase in urban greenery.',
    'Installed 500 solar panels, contributing to a 30% reduction in carbon emissions within the city.',
    "Initiated the 'Green Commute' campaign, leading to a 40% increase in the use of eco-friendly transportation options.",
  ],
  involvementTitle: 'Get Involved',
  involvementDescription: `Join us in building a sustainable future for our cities! Whether you're a resident, business owner, or city planner, there are various ways to contribute:`,
  involvementActions: [
    'Participate in community events and workshops.',
    'Share your ideas for sustainable urban development.',
    'Support our initiatives through volunteering or donations.',
  ],
  closingText: `Together, we can create cities that thrive in harmony with nature, setting an example for a sustainable and resilient future. Thank you for being a part of the Sustainable Cities Blueprint project!`,
};
const ProjectDetails = () => {
  pageTitle('Project Details');
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
        topSpaceMd="80"
        topSpaceLg="150"
        bottomSpaceMd="70"
        bottomSpaceLg="140"
      >
        <ProjectDetailsSection data={projectData} />
      </Section>
    </>
  );
};

export default ProjectDetails;
