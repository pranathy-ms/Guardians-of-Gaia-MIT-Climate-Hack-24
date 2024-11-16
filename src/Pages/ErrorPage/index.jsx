import Button from '../../Components/Button';
import Footer from '../../Components/Footer';
import PageHeading from '../../Components/Heading/PageHeading';
import Section from '../../Components/Section';
import { pageTitle } from '../../helper';

const Error404 = () => {
  const headingData = {
    title: '404 Error',
  };
  const data = {
    title: '404',
    subtitle: 'Oops! Page Not Found!',
    message:
      "Sorry, the page you're seeking isn't here. It could have been relocated or removed.",
    buttonText: 'Return Home',
    buttonLink: '/',
  };
  pageTitle('404 Error');
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
        <div className="container">
          <div className="cs_error text-center">
            <h2 className="cs_fs_150 cs_accent_color">{data.title}</h2>
            <h2 className="cs_fs_53 cs_normal">{data.subtitle}</h2>
            <p className="cs_mb_25">{data.message}</p>
            <Button
              btnText={data.buttonText}
              variant={
                'cs_btn cs_style_1 cs_type_2 cs_white_color cs_primary_bg'
              }
              btnUrl={data.buttonUrl}
            />
          </div>
        </div>
      </Section>
      <Footer />
    </>
  );
};

export default Error404;
