import { Link } from "react-router-dom";

const Button = ({ btnUrl = "/", btnText, variant, btnIcons }) => {
  return (
    <>
      <div data-aos="fade-up">
        <Link to={btnUrl} className={variant}>
          <span>{btnText}</span>
          {btnIcons && (
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
          )}
        </Link>
      </div>
    </>
  );
};

export default Button;
