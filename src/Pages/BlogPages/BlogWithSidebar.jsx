import Section from '../../Components/Section';
import PageHeading from '../../Components/Heading/PageHeading';
import { Link } from 'react-router-dom';
import { pageTitle } from '../../helper';
import Spacing from '../../Components/Spacing';
import Button from '../../Components/Button';
import { FaUserPen } from 'react-icons/fa6';
import { FaTag } from 'react-icons/fa';
const headingData = {
  title: 'Blog With Sidebar',
};

const blogData = {
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
      link: '/blog-details',
      btnText: 'Learn More',
    },
    {
      imgSrc: '/assets/img/nature/post_img_2.jpg',
      author: 'Bob Marline',
      category: 'Environment',
      title: 'Unmasking the Hidden Threat to Our Oceans',
      description:
        'Dive into the disturbing reality of plastic pollution in our oceans. This blog sheds light on the consequences of single...',
      link: '/blog-details',
      btnText: 'Learn More',
    },
    {
      imgSrc: '/assets/img/nature/post_img_3.jpg',
      author: 'Bob Marline',
      category: 'Environment',
      title: 'Tips for Sustainable Green Spaces in Home',
      description:
        'Discover the incredible impact of reforest on our environment and the critical role trees play in mitigating climate...',
      link: '/blog-details',
      btnText: 'Learn More',
    },
    {
      imgSrc: '/assets/img/nature/post_img_5.jpg',
      author: 'Bob Marline',
      category: 'Environment',
      title: 'Tips for Sustainable Green Spaces in Home',
      description:
        'Discover the incredible impact of reforest on our environment and the critical role trees play in mitigating climate...',
      link: '/blog-details',
      btnText: 'Learn More',
    },
    {
      imgSrc: '/assets/img/nature/post_img_6.jpg',
      author: 'Bob Marline',
      category: 'Environment',
      title: 'Tips for Sustainable Green Spaces in Home',
      description:
        'Discover the incredible impact of reforest on our environment and the critical role trees play in mitigating climate...',
      link: '/blog-details',
      btnText: 'Learn More',
    },
    {
      imgSrc: '/assets/img/nature/post_img_7.jpg',
      author: 'Bob Marline',
      category: 'Environment',
      title: 'Tips for Sustainable Green Spaces in Home',
      description:
        'Discover the incredible impact of reforest on our environment and the critical role trees play in mitigating climate...',
      link: '/blog-details',
      btnText: 'Learn More',
    },
  ],
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
      link: '/blog/blog-details',
    },
    {
      title: 'Unmasking the hidden threat to our oceans',
      date: 'Sep 7, 2023',
      imgSrc: '/assets/img/nature/post_img_5.jpg',
      link: '/blog/blog-details',
    },
    {
      title: 'Tips for sustainable green space in home',
      date: 'July 1, 2023',
      imgSrc: '/assets/img/nature/post_img_6.jpg',
      link: '/blog/blog-details',
    },
    {
      title: 'Unveiling beauty of upcycled and recycled',
      date: 'Oct 21, 2024',
      imgSrc: '/assets/img/nature/post_img_7.jpg',
      link: '/blog/blog-details',
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
const BlogWithSidebar = () => {
  pageTitle('Blog With SideBar');
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
        <div className="cs_shape cs_shape_position_4">
          <img src="/assets/img/nature/blog_shape_1.png" alt="" />
        </div>
        <div className="cs_shape cs_shape_position_5">
          <img src="/assets/img/nature/blog_shape_2.png" alt="" />
        </div>
        <div className="container">
          <div className="cs_section_heading cs_style_1 text-center">
            <h3 className="cs_fs_21 cs_semibold cs_accent_color cs_mb_13">
              Blog Post
            </h3>
            <h2 className="cs_fs_51 mb-0">Our Latest News &amp; Updates</h2>
          </div>
          <Spacing lg={90} md={50} />
          <div className="row cs_gap_y_50">
            <div className="col-xl-8">
              <div className="row cs_gap_y_40">
                {blogData?.posts?.map((post, index) => (
                  <div className="col-lg-6" key={index}>
                    <div className="cs_post cs_style_1">
                      <Link to={post.link} className="cs_post_thumb">
                        <img src={post.imgSrc} alt="Post" />
                      </Link>
                      <div className="cs_post_info cs_shadow_1">
                        <ul className="cs_post_meta cs_mp_0">
                          <li>
                            <FaUserPen />
                            {post.author}
                          </li>
                          <li>
                            <FaTag />
                            {post.category}
                          </li>
                        </ul>
                        <h2 className="cs_post_title cs_semibold cs_fs_28 cs_mb_22">
                          <Link to={post.link}>{post.title}</Link>
                        </h2>
                        <p className="cs_post_subtitle cs_mb_16">
                          {post.description}
                        </p>

                        <Button
                          btnUrl={post.link}
                          btnIcons={true}
                          btnText={post.btnText}
                          variant={'cs_btn cs_style_2 cs_heading_color'}
                        />
                      </div>
                    </div>
                  </div>
                ))}
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
                      <Link href="#" key={index} className="tag-cloud-link">
                        {tag}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default BlogWithSidebar;
