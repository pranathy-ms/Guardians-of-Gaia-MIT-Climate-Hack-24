import DonationWidget from '../Widget/DonationWidget';
import Spacing from '../Spacing';

const DonateSection3 = ({ data }) => {
  const { headingText, fixedAmounts } = data;

  return (
    <>
      <div className="container">
        <h2 className="cs_fs_51 cs_white_color text-center mb-0">
          {headingText}
        </h2>
        <Spacing lg={90} md={50} />
        <div className="row">
          <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
            <DonationWidget fixedAmounts={fixedAmounts} />
          </div>
        </div>
      </div>
    </>
  );
};

export default DonateSection3;
