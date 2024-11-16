import SectionHeading from '../Heading';
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/scss/lightgallery.scss';
import 'lightgallery/scss/lg-zoom.scss';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import GalleryItems from '../Widget/GalleryItems';
import Spacing from '../Spacing';
const GallerySection = ({ data }) => {
  return (
    <>
      <div className="container">
        <SectionHeading
          subtitle={data.sectionSubtitle}
          title={data.sectionTitle}
          textCenter={'text-center'}
        />
        <Spacing lg={90} md={50} />
      </div>
      <div className="container-fluid p-0">
        <LightGallery
          speed={500}
          plugins={[lgThumbnail, lgZoom]}
          elementClassNames="cs_gallery_list cs_style_1"
        >
          {data.galleyItems.map((item, index) => (
            <GalleryItems
              key={index}
              imageUrl={item.imageUrl}
              altText={item.altText}
            />
          ))}
        </LightGallery>
      </div>
    </>
  );
};

export default GallerySection;
