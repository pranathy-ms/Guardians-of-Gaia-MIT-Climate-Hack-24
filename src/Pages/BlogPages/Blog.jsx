import Section from '../../Components/Section';
import PageHeading from '../../Components/Heading/PageHeading';
import BlogSection from '../../Components/BlogSection';
import { pageTitle } from '../../helper';

const headingData = {
  title: 'Our Blog',
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
    {
      imgSrc: '/assets/img/nature/post_img_5.jpg',
      author: 'Bob Marline',
      category: 'Environment',
      title: 'Tips for Sustainable Green Spaces in Home',
      description:
        'Discover the incredible impact of reforest on our environment and the critical role trees play in mitigating climate...',
      link: '/blog/blog-details',
      btnText: 'Learn More',
    },
    {
      imgSrc: '/assets/img/nature/post_img_6.jpg',
      author: 'Bob Marline',
      category: 'Environment',
      title: 'Tips for Sustainable Green Spaces in Home',
      description:
        'Discover the incredible impact of reforest on our environment and the critical role trees play in mitigating climate...',
      link: '/blog/blog-details',
      btnText: 'Learn More',
    },
    {
      imgSrc: '/assets/img/nature/post_img_7.jpg',
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
const Blog = () => {
  pageTitle('Blog');
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
};

export default Blog;
