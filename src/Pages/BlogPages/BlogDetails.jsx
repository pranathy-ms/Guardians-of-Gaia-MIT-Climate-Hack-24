import { useState } from 'react';
import Section from '../../Components/Section';
import PageHeading from '../../Components/Heading/PageHeading';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa6';
import { pageTitle } from '../../helper';
import VideoModal from '../../Components/VideoModal';
import Spacing from '../../Components/Spacing';
const headingData = {
  title: 'Blog Details',
};

const blogData = {
  title: 'Ocean pollution is every corner around the world',
  author: {
    name: 'Anthony Kuber',
    avatar: '/assets/img/others/avatar.png',
    description:
      'Hi, my name is Ahon Bentham. I am environmental activist and ocean lover. I love to travel and writing blogging.',
  },
  categories: ['Motion', 'Graphic', 'Video'],

  content: [
    {
      type: 'image',
      src: '/assets/img/others/blog_details_1.jpg',
      alt: 'Blog',
    },
    {
      type: 'paragraph',
      text: 'A Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Tortor posuere ac ut consequat semper viverra nam libero justo...',
    },
    {
      type: 'heading',
      text: 'Ocean pollution is every corner around the world',
    },
    {
      type: 'paragraph',
      text: 'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment...',
    },
    {
      type: 'blockquote',
      text: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account...',
      author: 'Andrew Hobar',
    },
    {
      type: 'heading',
      text: 'Stop now throwing plastic on ocean',
    },
    {
      type: 'paragraph',
      text: 'We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment...',
    },
    {
      type: 'video',
      src: 'https://www.youtube.com/embed/rRid6GCJtgc',
      thumbnail: '/assets/img/others/blog_details_2.jpg',
      videoUrl: 'https://www.youtube.com/embed/rRid6GCJtgc',
      icon: 'fa fa-play',
    },
    {
      type: 'paragraph',
      text: 'So, blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will...',
    },
    {
      type: 'list',
      items: [
        'An intuitive and visually appealing website design.',
        'Seamless integration of a booking system, allowing customers to schedule appointments effortlessly.',
        'Responsive design for optimal user experiences across various devices.',
        'Rigorous testing to ensure the website and booking system perform flawlessly.',
        'A content management system for easy updates and maintenance.',
        'Search engine optimization strategies to enhance online visibility.',
      ],
    },
  ],
  commentSection: {
    title: 'Write your opinion',
    subtitle:
      'Your email address will not be published. Required fields are marked *',
    formFields: {
      comment: {
        type: 'textarea',
        placeholder: 'Write Your Comment*',
      },
      name: {
        type: 'text',
        placeholder: 'Your Name*',
      },
      email: {
        type: 'text',
        placeholder: 'Your Email*',
      },
    },
    submitButton: {
      text: 'Post Comment',
      className: 'cs_btn cs_style_1 cs_type_2 cs_primary_bg cs_white_color',
    },
  },
};

const sidebarData = {
  categories: [
    { name: 'Charity', link: '#' },
    { name: 'Environment', link: '#' },
    { name: 'Planet', link: '#' },
    { name: 'Pollution', link: '#' },
    { name: 'Ocean', link: '#' },
    { name: 'Donation', link: '#' },
  ],
  latestPosts: [
    {
      title: 'How reforestation can save our planet',
      date: 'Apr 10, 2024',
      imgSrc: '/assets/img/nature/post_img_4.jpg',
      link: '/blog-details',
    },
    {
      title: 'Unmasking the hidden threat to our oceans',
      date: 'Sep 7, 2023',
      imgSrc: '/assets/img/nature/post_img_5.jpg',
      link: '/blog-details',
    },
    {
      title: 'Tips for sustainable green space in home',
      date: 'July 1, 2023',
      imgSrc: '/assets/img/nature/post_img_6.jpg',
      link: '/blog-details',
    },
    {
      title: 'Unveiling beauty of upcycled and recycled',
      date: 'Oct 21, 2024',
      imgSrc: '/assets/img/nature/post_img_7.jpg',
      link: '/blog-details',
    },
  ],
  tags: [
    'Business',
    'Environment',
    'Marketing',
    'Clean Water',
    'Research',
    'Pollution',
    'Charity',
  ],
};
const BlogDetails = () => {
  const [toggle, setToggle] = useState(false);

  const [iframeSrc, setIframeSrc] = useState('about:blank');

  const handelClick = () => {
    setIframeSrc(`https://www.youtube.com/embed/rRid6GCJtgc`);
    setToggle(!toggle);
  };
  const handelClose = () => {
    setIframeSrc('about:blank');
    setToggle(!toggle);
  };
  pageTitle('Blog Details');
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
      {/* Start Blog Details Section */}
      <section>
        <Spacing lg={145} md={75} />
        <div className="container">
          <div className="row cs_gap_y_80">
            <div className="col-xl-8">
              <div className="cs_blog_details">
                <img
                  src={blogData.content[0].src}
                  alt={blogData.content[0].alt}
                />
                {blogData.content.map((section, index) => {
                  if (section.type === 'paragraph') {
                    return <p key={index}>{section.text}</p>;
                  }
                  if (section.type === 'heading') {
                    return <h2 key={index}>{section.text}</h2>;
                  }
                  if (section.type === 'blockquote') {
                    return (
                      <blockquote key={index}>
                        <svg
                          className="cs_accent_color"
                          width={41}
                          height={37}
                          viewBox="0 0 41 37"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M37.0872 18.5001H30.707V13.3959C30.707 10.5806 32.9959 8.29175 35.8112 8.29175H36.4492C37.5099 8.29175 38.3633 7.4384 38.3633 6.37769V2.54956C38.3633 1.48885 37.5099 0.635498 36.4492 0.635498H35.8112C28.7611 0.635498 23.0508 6.34578 23.0508 13.3959V32.5365C23.0508 34.65 24.7655 36.3647 26.8789 36.3647H37.0872C39.2007 36.3647 40.9154 34.65 40.9154 32.5365V22.3282C40.9154 20.2148 39.2007 18.5001 37.0872 18.5001ZM14.1185 18.5001H7.73828V13.3959C7.73828 10.5806 10.0272 8.29175 12.8424 8.29175H13.4805C14.5412 8.29175 15.3945 7.4384 15.3945 6.37769V2.54956C15.3945 1.48885 14.5412 0.635498 13.4805 0.635498H12.8424C5.79232 0.635498 0.0820312 6.34578 0.0820312 13.3959V32.5365C0.0820312 34.65 1.79671 36.3647 3.91016 36.3647H14.1185C16.2319 36.3647 17.9466 34.65 17.9466 32.5365V22.3282C17.9466 20.2148 16.2319 18.5001 14.1185 18.5001Z"
                            fill="currentColor"
                          />
                        </svg>
                        <p>{section.text}</p>
                        <small>{section.author}</small>
                      </blockquote>
                    );
                  }
                  if (section.type === 'video') {
                    return (
                      <div key={index}>
                        <Link
                          to="#"
                          className="cs_video_block cs_style_1 cs_bg_filed cs_video_open cs_center"
                          style={{
                            backgroundImage: `url(${section.thumbnail})`,
                          }}
                        >
                          <span
                            className="cs_player_btn cs_white_color"
                            onClick={handelClick}
                          >
                            <svg
                              width={70}
                              height={70}
                              viewBox="0 0 70 70"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M35 0C15.7004 0 0 15.7004 0 35C0 54.2996 15.7004 70 35 70C54.2996 70 70 54.2996 70 35C70 15.7004 54.2996 0 35 0ZM35 64.1667C18.9175 64.1667 5.83333 51.0825 5.83333 35C5.83333 18.9175 18.9175 5.83333 35 5.83333C51.0825 5.83333 64.1667 18.9175 64.1667 35C64.1667 51.0825 51.0825 64.1667 35 64.1667ZM23.3333 51.4704L52.6167 35L23.3333 18.5296V51.4733V51.4704ZM29.1667 28.5017L40.7167 35L29.1667 41.4983V28.5017Z"
                                fill="currentColor"
                              />
                            </svg>
                          </span>
                        </Link>
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
              <VideoModal
                isTrue={toggle}
                iframeSrc={iframeSrc}
                handelClose={handelClose}
              />

              <Spacing lg={50} md={50} />
              <div className="cs_post_share">
                <div className="cs_categories">
                  {blogData.categories.map((category, index) => (
                    <Link to="#" className="cs_category" key={index}>
                      {category}
                    </Link>
                  ))}
                </div>
                <div className="text-center">
                  <div className="cs_social_share_btns">
                    <Link to={'/'}>
                      <i>
                        <FaTwitter />
                      </i>
                    </Link>
                    <Link to={'/'}>
                      <i>
                        <FaFacebookF />
                      </i>
                    </Link>
                    <Link to={'/'}>
                      <i>
                        <FaLinkedinIn />
                      </i>
                    </Link>
                  </div>
                </div>
              </div>
              <Spacing lg={50} md={50} />
              <div className="cs_author_card">
                <img src={blogData.author.avatar} alt="Author" />
                <div>
                  <h3 className="cs_fs_21 cs_semibold">
                    {blogData.author.name}
                  </h3>
                  <p>{blogData.author.description}</p>
                  <div className="cs_social_btns cs_style_1">
                    <Link className="cs_center" to={'/'}>
                      <i>
                        <FaTwitter />
                      </i>
                    </Link>
                    <Link className="cs_center" to={'/'}>
                      <i>
                        <FaFacebookF />
                      </i>
                    </Link>
                    <Link className="cs_center" to={'/'}>
                      <i>
                        <FaLinkedinIn />
                      </i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="cs_sidebar cs_right_sidebar">
                {/* Search Form */}
                <div className="cs_sidebar_item widget_search">
                  <form className="cs_sidebar_search" action="#">
                    <input type="text" placeholder="Search..." />
                    <button className="cs_sidebar_search_btn">
                      <svg
                        width={22}
                        height={22}
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.83334 19.1667C7.98738 19.1667 6.18287 18.6193 4.64802 17.5937C3.11316 16.5682 1.91688 15.1105 1.21046 13.4051C0.504044 11.6996 0.319213 9.82298 0.679342 8.0125C1.03947 6.20201 1.92838 4.53896 3.23367 3.23367C4.53896 1.92838 6.20201 1.03947 8.0125 0.679342C9.82298 0.319213 11.6996 0.504044 13.4051 1.21046C15.1105 1.91688 16.5682 3.11316 17.5937 4.64802C18.6193 6.18287 19.1667 7.98738 19.1667 9.83334C19.1639 12.3078 18.1797 14.6802 16.4299 16.4299C14.6802 18.1797 12.3078 19.1639 9.83334 19.1667ZM9.83334 2.83334C8.44887 2.83334 7.09549 3.24388 5.94435 4.01305C4.7932 4.78222 3.89599 5.87547 3.36618 7.15455C2.83637 8.43364 2.69774 9.8411 2.96784 11.199C3.23794 12.5568 3.90462 13.8041 4.88359 14.7831C5.86256 15.7621 7.10984 16.4287 8.46771 16.6988C9.82557 16.9689 11.233 16.8303 12.5121 16.3005C13.7912 15.7707 14.8845 14.8735 15.6536 13.7223C16.4228 12.5712 16.8333 11.2178 16.8333 9.83334C16.8315 7.97739 16.0934 6.19799 14.781 4.88564C13.4687 3.57328 11.6893 2.83519 9.83334 2.83334Z"
                          fill="currentColor"
                        />
                        <path
                          d="M20.3346 21.5001C20.0252 21.5 19.7285 21.377 19.5098 21.1582L14.8431 16.4916C14.6306 16.2715 14.513 15.9768 14.5157 15.6709C14.5183 15.365 14.641 15.0724 14.8573 14.8561C15.0736 14.6398 15.3663 14.5171 15.6722 14.5144C15.9781 14.5118 16.2728 14.6294 16.4928 14.8419L21.1595 19.5086C21.3226 19.6717 21.4336 19.8796 21.4786 20.1059C21.5236 20.3321 21.5005 20.5667 21.4122 20.7798C21.324 20.993 21.1745 21.1752 20.9827 21.3034C20.7908 21.4316 20.5653 21.5 20.3346 21.5001Z"
                          fill="currentColor"
                        />
                      </svg>
                    </button>
                  </form>
                </div>

                {/* Categories */}
                <div className="cs_sidebar_item widget_categories">
                  <h4 className="cs_sidebar_widget_title">Categories</h4>
                  <ul>
                    {sidebarData.categories.map((category, index) => (
                      <li className="cat-item" key={index}>
                        <Link to={category.link}>{category.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Latest Posts */}
                <div className="cs_sidebar_item">
                  <h4 className="cs_sidebar_widget_title">Latest post</h4>
                  <ul className="cs_recent_posts">
                    {sidebarData.latestPosts.map((post, index) => (
                      <li key={index}>
                        <Link to={post.link} className="cs_recent_post_thumb">
                          <img src={post.imgSrc} alt={post.title} />
                        </Link>
                        <div className="cs_recent_post">
                          <h3 className="cs_recent_post_title">
                            <Link to={post.link}>{post.title}</Link>
                          </h3>
                          <p className="cs_recent_post_date mb-0">
                            {post.date}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Popular Tags */}
                <div className="cs_sidebar_item widget_tag_cloud">
                  <h4 className="cs_sidebar_widget_title">Popular tags</h4>
                  <div className="tagcloud">
                    {sidebarData.tags.map((tag, index) => (
                      <Link to="#" key={index} className="tag-cloud-link">
                        {tag}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Spacing lg={150} md={80} />
      </section>
      {/* End Blog Details Section */}
    </>
  );
};

export default BlogDetails;
