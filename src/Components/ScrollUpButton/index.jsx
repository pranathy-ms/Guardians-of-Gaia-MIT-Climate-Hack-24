import { useEffect, useState } from "react";

const ScrollUpButton = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 350) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      {showScrollButton && (
        <span
          className={`cs_scrollup "${
            showScrollButton ? "cs_scrollup_show" : ""
          }`}
          onClick={scrollToTop}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5em"
            height="1.5em"
            viewBox="0 0 16 16"
          >
            <path
              fill="currentColor"
              d="M7.5 13.022V14.5a.5.5 0 0 0 1 0v-1.478a4.886 4.886 0 0 0 2.775-8.486l-2.437-2.2a1.25 1.25 0 0 0-1.676 0l-2.437 2.2A4.886 4.886 0 0 0 7.5 13.022Zm3.105-7.744A3.886 3.886 0 0 1 8.5 12.015V7.501a.5.5 0 0 0-1 0v4.514a3.886 3.886 0 0 1-2.105-6.737l2.437-2.2a.25.25 0 0 1 .336 0l2.437 2.2Z"
            ></path>
          </svg>
        </span>
      )}
    </>
  );
};

export default ScrollUpButton;
