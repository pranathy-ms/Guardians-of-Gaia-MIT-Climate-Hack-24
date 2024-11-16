const ProjectDetailsSection = ({ data }) => {
  return (
    <>
      <div className="container">
        <div className="cs_details_content">
          <img src={data.mainImage} alt="" className="cs_mb_40" />
          <h2>{data.title}</h2>
          <p>{data.description}</p>
          <h2 className="cs_details_content_title">{data.objectivesTitle}</h2>
          <div className="row cs_mb_40">
            {data.objectives.map((objective, index) => (
              <div className="col-lg-6" key={index}>
                <ul className="cs_list cs_style_2 cs_mp_0">
                  <li>
                    <span className="cs_list_number cs_fs_70 cs_bold cs_heading_font">
                      {objective.id}
                    </span>
                    <div className="cs_list_right">
                      <h3 className="cs_fs_28 cs_semibold cs_mb_10">
                        {objective.title}
                      </h3>
                      <p className="mb-0">{objective.description}</p>
                    </div>
                  </li>
                </ul>
              </div>
            ))}
          </div>

          <div className="row">
            {data.images.map((image, index) => (
              <div className="col-sm-6" key={index}>
                <img src={image} alt="" />
              </div>
            ))}
          </div>

          <h2 className="cs_details_content_title">{data.progressTitle}</h2>
          <ul>
            {data.progress.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h2 className="cs_details_content_title">{data.involvementTitle}</h2>
          <p>{data.involvementDescription}</p>
          <ul>
            {data.involvementActions.map((action, index) => (
              <li key={index}>{action}</li>
            ))}
          </ul>
          <p>{data.closingText}</p>
        </div>
      </div>
    </>
  );
};

export default ProjectDetailsSection;
