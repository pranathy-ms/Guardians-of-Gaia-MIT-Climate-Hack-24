import { useState, useEffect } from 'react';

const DonationWidget = ({ fixedAmounts, defaultAmount, variant }) => {
  const [selectedAmount, setSelectedAmount] = useState(defaultAmount || 50);
  const [isCustomAmount, setIsCustomAmount] = useState(false);
  useEffect(() => {
    setSelectedAmount(defaultAmount || fixedAmounts[1]);
  }, [defaultAmount, fixedAmounts]);
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
      <form action="#" className="cs_donate_form_1 cs_gray_bg ">
        <input
          className="cs_input_amount"
          type="text"
          value={isCustomAmount ? selectedAmount : `$${selectedAmount}`}
          placeholder="Amount"
          readOnly={!isCustomAmount}
          onChange={isCustomAmount ? handleCustomInputChange : null}
          on
        />
        <div className="cs_fixed_amount_wrap">
          {fixedAmounts.map((amount, index) => (
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
                htmlFor={`fixed_amount_${index}`}
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
        {!variant && (
          <button className="cs_btn cs_style_1 w-100" type="submit">
            Donate Now
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
            </i>
          </button>
        )}
      </form>
    </>
  );
};

export default DonationWidget;
