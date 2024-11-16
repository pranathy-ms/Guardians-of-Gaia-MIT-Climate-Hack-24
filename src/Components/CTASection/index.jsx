import Button from "../Button";

const CTASection = ({ data }) => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-xl-10 offset-xl-1">
            <h2
              className="cs_white_color cs_fs_51 cs_mb_50 cs_mb_lg_40"
              dangerouslySetInnerHTML={{ __html: data.heading }}
            />
            <Button
              btnText={data.button.text}
              btnIcons={data.button.hasIcons}
              variant={data.button.variant}
              btnUrl={data.button.url}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CTASection;
