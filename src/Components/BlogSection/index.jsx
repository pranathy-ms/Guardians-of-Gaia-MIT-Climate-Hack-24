import Button from '../Button';
import { Link } from 'react-router-dom';
import SectionHeading from '../Heading';
import { FaUserPen, FaTag } from 'react-icons/fa6';
import Spacing from '../Spacing';

const BlogSection = ({ data }) => {
  return (
    <>
      <div className="cs_shape cs_shape_position_4">
        <img src={data.rightImgUrl} alt="" />
      </div>
      <div className="cs_shape cs_shape_position_5">
        <img src={data.leftImgUrl} alt="" />
      </div>
      <div className="container">
        {data.SectionSubtitle && data.SectionTitle && (
          <SectionHeading
            subtitle={data.SectionSubtitle}
            title={data.SectionTitle}
            textCenter={'text-center'}
          />
        )}
        <Spacing lg={90} md={50} />
        <div className="row cs_gap_y_40">
          {data.posts.map((post, index) => (
            <div className="col-lg-4" key={index}>
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
    </>
  );
};

export default BlogSection;
