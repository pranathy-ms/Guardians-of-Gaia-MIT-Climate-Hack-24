const NewsletterSection = ({ data }) => {
  return (
    <>
      <div className="container">
        <div
          className="cs_newsletter cs_style_2 cs_accent_bg cs_bg_filed"
          style={{
            backgroundImage: `url(${data.overlayBg})`,
          }}
        >
          <div className="cs_newsletter_left">
            <h2 className="cs_fs_28 cs_mb_9 cs_semibold">{data.title}</h2>
            <p className="mb-0 cs_heading_color">{data.description}</p>
          </div>
          <form action="#" className="cs_newsletter_form">
            <input
              type="text"
              className="cs_newsletter_input"
              placeholder={data.placeholder}
            />
            <button type="submit" className="cs_btn cs_style_1 cs_color_1">
              {data.buttonText}
              <i>
                <svg
                  width={9}
                  height={10}
                  viewBox="0 0 9 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.5 9L8.5 1M8.5 1L0.5 1M8.5 1L8.5 9"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <svg
                  width={9}
                  height={10}
                  viewBox="0 0 9 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.5 9L8.5 1M8.5 1L0.5 1M8.5 1L8.5 9"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </i>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default NewsletterSection;
