import SectionHeading from '../Heading';
import Spacing from '../Spacing';
import { FaUserPen } from 'react-icons/fa6';
import { FaTag } from 'react-icons/fa';
import Button from '../Button';
import { Link } from 'react-router-dom';

const BlogSection2 = ({ data }) => {
  return (
    <>
      <div className="cs_shape cs_shape_position_4">
        <img src="assets/img/nature/blog_shape_1.png" alt="" />
      </div>
      <div className="cs_shape cs_shape_position_5">
        <img src="assets/img/nature/blog_shape_2.png" alt="" />
      </div>
      <div className="container">
        <SectionHeading
          subtitle={data.sectionSubtitle}
          title={data.sectionTitle}
          textCenter={'text-center'}
        />
        <Spacing lg={90} md={50} />
        <div className="row cs_gap_y_50">
          {data.blogPosts.map(post => (
            <div key={post.id} className="col-lg-6">
              <div className="cs_post cs_style_1 cs_type_1">
                <Link to={post.link} className="cs_post_thumb">
                  <img src={post.image} alt="Post" />
                </Link>
                <div className="cs_post_info">
                  <ul className="cs_post_meta cs_mp_0">
                    <li>
                      <i>
                        <FaUserPen />
                      </i>
                      {post.author}
                    </li>
                    <li>
                      <i>
                        <FaTag />
                      </i>
                      {post.category}
                    </li>
                  </ul>
                  <h2 className="cs_post_title cs_semibold cs_fs_28 cs_mb_22">
                    <Link to={post.link}>{post.title}</Link>
                  </h2>
                  <p className="cs_post_subtitle cs_mb_16">{post.subtitle}</p>
                  <Button
                    btnIcons={true}
                    btnText={post.btnText}
                    variant={'cs_btn cs_style_2 cs_heading_color'}
                    btnUrl={post.link}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogSection2;
