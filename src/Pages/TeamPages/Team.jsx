import Section from '../../Components/Section';
import PageHeading from '../../Components/Heading/PageHeading';
import TeamSection from '../../Components/TeamSection';
import { pageTitle } from '../../helper';
const headingData = {
  title: 'Our Team Members',
};

const teamSectionData = {
  SectionSubtitle: 'Our Team',
  SectionTitle: 'Meet Our Dedicated Environmental<br> Advocates and Experts',
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
    {
      name: 'Peter Dobar',
      role: 'VOLUNTEER',
      image: '/assets/img/nature/team_member_5.jpg',
      description:
        'Team component built to improve trust and culture within your.',
      facebookUrl: '/',
      instagramUrl: '/',
      linkedinUrl: '/',
    },
    {
      name: 'Peter Dobar',
      role: 'VOLUNTEER',
      image: '/assets/img/nature/team_member_6.jpg',
      description:
        'Team component built to improve trust and culture within your.',
      facebookUrl: '/',
      instagramUrl: '/',
      linkedinUrl: '/',
    },
  ],
};
const Team = () => {
  pageTitle('Team');
  return (
    <>
      {/* Start Hero Section */}
      <Section
        className={
          'cs_page_heading cs_bg_filed cs_center text-center cs_heading_bg'
        }
        backgroundImage="/assets/img/page_heading_bg.jpg"
      >
        <PageHeading data={headingData} />
      </Section>
      {/* End Hero Section */}
      {/* Start Team Section */}

      <Section
        className={'cs_shape_wrap'}
        topSpaceMd="75"
        topSpaceLg="145"
        bottomSpaceMd="80"
        bottomSpaceLg="150"
      >
        <TeamSection data={teamSectionData} />
      </Section>
      {/* End Team Section */}
    </>
  );
};

export default Team;
