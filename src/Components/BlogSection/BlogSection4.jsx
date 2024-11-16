import SectionHeading from '../Heading';
import Spacing from '../Spacing';
import { FaTag } from 'react-icons/fa';
import { FaUserPen } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import Button from '../Button';

const BlogSection4 = ({ data, variant }) => {
  return (
    <>
      <div className="container">
        <SectionHeading
          subtitle={data?.sectionSubtitle}
          title={data?.sectionTitle}
          textCenter={'text-center'}
        />
        <Spacing lg={90} md={50} />
        <div className="row cs_gap_y_50">
          {variant ? (
            <>
              <div className="col-lg-6">
                <div className="cs_post cs_style_1 cs_type_2">
                  <Link to="/blog-details" className="cs_post_thumb">
                    <img src={data?.posts?.imageUrl2} alt="Post" />
                  </Link>
                  <div className="cs_post_info">
                    <ul className="cs_post_meta cs_mp_0 cs_white_color">
                      <li>
                        <i>
                          <FaUserPen />
                        </i>
                        {data?.posts?.author2}
                      </li>
                      <li>
                        <i>
                          <FaTag />
                        </i>
                        {data?.posts?.category2}
                      </li>
                    </ul>
                    <h2 className="cs_post_title cs_semibold cs_fs_28 cs_mb_22 cs_white_color">
                      <Link to={data?.posts?.link2}>{data?.posts?.title2}</Link>
                    </h2>
                    <p className="cs_post_subtitle cs_mb_16 cs_white_color">
                      {data?.posts?.subtitle2}
                    </p>
                    <Button
                      btnIcons={true}
                      btnText={data?.posts?.btnText}
                      variant={'cs_btn cs_style_2 cs_white_color'}
                      btnUrl={data?.posts?.link}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="cs_post cs_style_1 cs_type_1">
                  <Link to="/blog-details" className="cs_post_thumb">
                    <img src={data?.posts?.imageUrl} alt="Post" />
                  </Link>
                  <div className="cs_post_info">
                    <ul className="cs_post_meta cs_mp_0">
                      <li>
                        <i>
                          <FaUserPen />
                        </i>
                        {data?.posts?.author}
                      </li>
                      <li>
                        <i>
                          <FaTag />
                        </i>
                        {data?.posts?.category}
                      </li>
                    </ul>
                    <h2 className="cs_post_title cs_semibold cs_fs_28 cs_mb_22">
                      <Link to={'/blog-details'}>{data?.posts?.title}</Link>
                    </h2>
                    <p className="cs_post_subtitle cs_mb_16">
                      {data?.posts?.subtitle}
                    </p>
                    <Button
                      btnIcons={true}
                      btnText={data?.posts?.btnText}
                      variant={'cs_btn cs_style_2 cs_heading_color'}
                      btnUrl={data?.posts?.link1}
                    />
                  </div>
                </div>
                <Spacing lg={25} md={25} />
                <div className="cs_post cs_style_1 cs_type_1">
                  <Link to="/blog-details" className="cs_post_thumb">
                    <img src={data?.posts?.imageUrl1} alt="Post" />
                  </Link>
                  <div className="cs_post_info">
                    <ul className="cs_post_meta cs_mp_0">
                      <li>
                        <i>
                          <FaUserPen />
                        </i>
                        {data?.posts?.author1}
                      </li>
                      <li>
                        <i>
                          <FaTag />
                        </i>
                        {data?.posts?.category1}
                      </li>
                    </ul>
                    <h2 className="cs_post_title cs_semibold cs_fs_28 cs_mb_22">
                      <Link to={data?.posts?.link1}>{data?.posts?.title1}</Link>
                    </h2>
                    <p className="cs_post_subtitle cs_mb_16">
                      {data?.posts?.subtitle1}
                    </p>
                    <Button
                      btnIcons={true}
                      btnText={data?.posts?.btnText}
                      variant={'cs_btn cs_style_2 cs_heading_color'}
                      btnUrl={data?.posts?.link}
                    />
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="col-lg-6">
                <div className="cs_post cs_style_1 cs_type_1">
                  <Link to="/blog-details" className="cs_post_thumb">
                    <img src={data?.posts?.imageUrl} alt="Post" />
                  </Link>
                  <div className="cs_post_info">
                    <ul className="cs_post_meta cs_mp_0">
                      <li>
                        <i>
                          <FaUserPen />
                        </i>
                        {data?.posts?.author}
                      </li>
                      <li>
                        <i>
                          <FaTag />
                        </i>
                        {data?.posts?.category}
                      </li>
                    </ul>
                    <h2 className="cs_post_title cs_semibold cs_fs_28 cs_mb_22">
                      <Link to={'/blog-details'}>{data?.posts?.title}</Link>
                    </h2>
                    <p className="cs_post_subtitle cs_mb_16">
                      {data?.posts?.subtitle}
                    </p>
                    <Button
                      btnIcons={true}
                      btnText={data?.posts?.btnText}
                      variant={'cs_btn cs_style_2 cs_heading_color'}
                      btnUrl={data?.posts?.link}
                    />
                  </div>
                </div>
                <Spacing lg={25} md={25} />
                <div className="cs_post cs_style_1 cs_type_1">
                  <Link to="blog-details" className="cs_post_thumb">
                    <img src={data?.posts?.imageUrl1} alt="Post" />
                  </Link>
                  <div className="cs_post_info">
                    <ul className="cs_post_meta cs_mp_0">
                      <li>
                        <i>
                          <FaUserPen />
                        </i>
                        {data?.posts?.author1}
                      </li>
                      <li>
                        <i>
                          <FaTag />
                        </i>
                        {data?.posts?.category1}
                      </li>
                    </ul>
                    <h2 className="cs_post_title cs_semibold cs_fs_28 cs_mb_22">
                      <Link to={data?.posts?.link1}>{data?.posts?.title1}</Link>
                    </h2>
                    <p className="cs_post_subtitle cs_mb_16">
                      {data?.posts?.subtitle1}
                    </p>
                    <Button
                      btnIcons={true}
                      btnText={data?.posts?.btnText}
                      variant={'cs_btn cs_style_2 cs_heading_color'}
                      btnUrl={data?.posts?.link}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="cs_post cs_style_1 cs_type_2">
                  <Link to="blog-details" className="cs_post_thumb">
                    <img src={data?.posts?.imageUrl2} alt="Post" />
                  </Link>
                  <div className="cs_post_info">
                    <ul className="cs_post_meta cs_mp_0 cs_white_color">
                      <li>
                        <i>
                          <FaUserPen />
                        </i>
                        {data?.posts?.author2}
                      </li>
                      <li>
                        <i>
                          <FaTag />
                        </i>
                        {data?.posts?.category2}
                      </li>
                    </ul>
                    <h2 className="cs_post_title cs_semibold cs_fs_28 cs_mb_22 cs_white_color">
                      <Link to={data?.posts?.link2}>{data?.posts?.title2}</Link>
                    </h2>
                    <p className="cs_post_subtitle cs_mb_16 cs_white_color">
                      {data?.posts?.subtitle2}
                    </p>
                    <Button
                      btnIcons={true}
                      btnText={data?.posts?.btnText}
                      variant={'cs_btn cs_style_2 cs_white_color'}
                      btnUrl={data?.posts?.link}
                    />
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default BlogSection4;
