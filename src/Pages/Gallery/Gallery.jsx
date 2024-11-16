import Section from '../../Components/Section';
import PageHeading from '../../Components/Heading/PageHeading';
import GallerySection from '../../Components/GallerySection';
import { pageTitle } from '../../helper';
const headingData = {
  title: 'Gallery',
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
      altText: 'Ocean Life 6',
    },
    {
      imageUrl: '/assets/img/ocean-life/gallery_img_7.jpg',
      altText: 'Ocean Life 7',
    },
    {
      imageUrl: '/assets/img/ocean-life/gallery_img_8.jpg',
      altText: 'Ocean Life 7',
    },
    {
      imageUrl: '/assets/img/ocean-life/gallery_img_9.jpg',
      altText: 'Ocean Life 9',
    },
  ],
};
const Gallery = () => {
  pageTitle('Gallery');
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
        <GallerySection data={galleryData} />
      </Section>
    </>
  );
};

export default Gallery;
