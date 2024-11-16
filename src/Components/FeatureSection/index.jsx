const FeatureSection = ({ data }) => {
  return (
    <>
      <div className="container">
        <div className="row cs_row_gap_50 cs_gap_y_50">
          {data?.map((feature, index) => (
            <div className="col-lg-4" key={index}>
              <div className="cs_iconbox cs_style_1">
                <div className="cs_iconbox_icon cs_mb_26 cs_mb_lg_20">
                  <img src={feature.icon} alt={feature.title} />
                </div>
                <h2 className="cs_fs_38 cs_semibold cs_mb_22 cs_mb_lg_15">
                  {feature.title}
                </h2>
                <p className="mb-0">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FeatureSection;
