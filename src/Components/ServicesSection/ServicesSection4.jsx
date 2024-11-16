import React, { useState } from 'react';
import SectionHeading from '../Heading';
import Spacing from '../Spacing';

const ServicesSection4 = ({ data }) => {
  const [selectedAmount, setSelectedAmount] = useState(1000);
  const [isCustomAmount, setIsCustomAmount] = useState(false);

  const handleAmountChange = amount => {
    setIsCustomAmount(false);
    setSelectedAmount(amount);
  };

  const handleCustomAmountClick = () => {
    setIsCustomAmount(true);
    setSelectedAmount('');
  };

  const handleCustomInputChange = e => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    setSelectedAmount(value);
  };

  return (
    <>
      <div
        className="cs_half_bg_top cs_type_1 cs_accent_bg cs_bg_filed"
        style={{ backgroundImage: `url(${data.backgroundImageUrl})` }}
      />
      <div className="container">
        <SectionHeading
          subtitle={data.sectionHeading.subtitle}
          title={data.sectionHeading.title}
          textCenter={data.sectionHeading.textCenter}
          color={data.sectionHeading.color}
          titleColor={data.sectionHeading.titleColor}
        />
        <Spacing lg={90} md={50} />
        <div className="row">
          <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
            <form
              action={data.formAction}
              className="cs_donate_form_1 cs_gray_bg"
            >
              <input
                className="cs_input_amount"
                type="text"
                value={isCustomAmount ? selectedAmount : `$${selectedAmount}`}
                placeholder="Amount"
                readOnly={!isCustomAmount} // Only allow input when custom amount mode is enabled
                onChange={isCustomAmount ? handleCustomInputChange : null} // Handle typing when custom mode is on
              />
              <div className="cs_fixed_amount_wrap">
                {data.fixedAmounts.map((amount, index) => (
                  <div className="cs_fixed_amount_item" key={index}>
                    <input
                      className="cs_fixed_amount_check"
                      type="radio"
                      name="fixed_amount"
                      id={`fixed_amount_${amount}`}
                      value={amount}
                      checked={selectedAmount == amount && !isCustomAmount}
                      onChange={() => handleAmountChange(amount)}
                    />
                    <label
                      className="cs_center cs_white_bg"
                      htmlFor={`fixed_amount_${index + 1}`}
                    >
                      ${amount}
                    </label>
                  </div>
                ))}
              </div>
              <button
                className="cs_custom_amount_btn"
                type="button"
                onClick={handleCustomAmountClick}
              >
                Custom Amount
              </button>
              <button className="cs_btn cs_style_1 w-100" type="submit">
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
      </div>
    </>
  );
};

export default ServicesSection4;
