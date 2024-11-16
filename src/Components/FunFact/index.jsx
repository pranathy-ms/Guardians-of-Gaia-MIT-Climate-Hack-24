import Spacing from '../Spacing';
const FunFact = ({ data }) => {
  return (
    <>
      <div className="container">
        <div className="cs_funfact_1_list">
          {data.map((item, index) => (
            <div className="cs_funfact cs_style_1" key={index}>
              <h2 className="cs_funfact_number cs_fs_70 mb-0">
                {item.countTo}
                {item.suffix}
              </h2>
              <p className="cs_funfact_title mb-0">
                {item.titleLine1} <br />
                {item.titleLine2}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Spacing lg={125} md={60} />
    </>
  );
};

export default FunFact;
