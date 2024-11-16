import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Sidenav from './Sidenav.jsx';
const data = {
  link: '/',
  menuData: [
    {
      label: 'Home',
      link: '/',
      isMagaMenu: true,
      submenu: [
        {
          link: '/',
          imgSrc: '/assets/img/demo/home-1.jpg',
          label: 'Nature',
        },
      ],
    },
    {
      label: 'About',
      link: '/about',
    },
    {
      label: 'Pages',
      link: '#',
      submenu: [
        { link: '/services', label: 'Services' },
        { link: '/services/service-details', label: 'Service Details' },
        { link: '/team', label: 'Team' },
        { link: '/event/event-details', label: 'Event Details' },
        { link: '/project/project-details', label: 'Project Details' },
        { link: '/gallery', label: 'Gallery' },
        { link: '/error', label: '404 Error' },
      ],
    },
    {
      label: 'Contact',
      link: '/contact',
    },
  ],
};

const sidenavData = {
  logoSrc: '/assets/img/logo_dark.svg',
  projectHeading: 'Do you have a project in your <br> mind? Keep connect us.',
  phone: '+44 454 7800 112',
  url1: 'tel:+444547800112',
  email: 'example@gmail.com',
  url2: 'mailto:example@gmail.com',
  content: '50 Wall Street Suite, 44150 <br> Ohio, United States',
  subscriptionPlaceholder: 'Email address',
  buttonText: 'Subscribe Now',
};

const Header = ({ isHamburger, variant, logo, bottomBorder }) => {
  const [isSticky, setIsSticky] = useState(false);
  // const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isSideHeaderOpen, setIsSideHeaderOpen] = useState(false);
  const [isShowMobileMenu, setIsShowMobileMenu] = useState(false);
  const [openMobileSubmenuIndex, setOpenMobileSubmenuIndex] = useState([]);

  const toggleSideHeader = () => {
    setIsSideHeaderOpen(!isSideHeaderOpen);
    if (!isSideHeaderOpen) {
      document.querySelector('html').classList.add('cs_hamburger_active');
    } else {
      document.querySelector('html').classList.remove('cs_hamburger_active');
    }
  };

  const closeSideHeader = () => {
    setIsSideHeaderOpen(false);
    document.querySelector('html').classList.remove('cs_hamburger_active');
  };

  const handleOpenMobileSubmenu = index => {
    if (openMobileSubmenuIndex.includes(index)) {
      setOpenMobileSubmenuIndex(prev => prev.filter(f => f !== index));
    } else {
      setOpenMobileSubmenuIndex(prev => [...prev, index]);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 10) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`cs_site_header cs_style_1 cs_primary_color cs_sticky_header${
          variant ? ' cs_white_bg cs_heading_color' : ''
        }${isSticky ? ' cs_sticky_active' : ''}${
          bottomBorder ? ' cs_with_border' : ''
        }`}
      >
        <div className="cs_main_header">
          <div className="container">
            <div className="cs_main_header_in">
              <div className="cs_main_header_left">
                <Link className="cs_site_branding" to={data.link}>
                  <strong>B2B</strong>
                </Link>
              </div>
              <div
                className={`${
                  variant ? 'cs_main_header_right' : 'cs_main_header_center '
                }`}
              >
                <div className="cs_nav">
                  <nav
                    className={`cs_nav_list_wrap${
                      isShowMobileMenu ? ' cs_active' : ''
                    }`}
                  >
                    <ul className="cs_nav_list">
                      {data.menuData.map((menu, index) => (
                        <li
                          key={index}
                          className={`${
                            menu.submenu?.length ? 'menu-item-has-children' : ''
                          } ${menu.isMagaMenu ? 'cs_mega_menu' : ''}`}
                        >
                          <Link
                            to={menu.link}
                            onClick={() =>
                              setIsShowMobileMenu(!isShowMobileMenu)
                            }
                          >
                            {menu.label}
                          </Link>
                          {menu.submenu?.length && (
                            <ul
                              className={`${
                                menu.isMagaMenu
                                  ? 'cs_mega_wrapper cs_with_thumb'
                                  : ''
                              }`}
                              style={{
                                display: openMobileSubmenuIndex.includes(index)
                                  ? 'block'
                                  : 'none',
                              }}
                            >
                              {menu.submenu?.map((item, index) => (
                                <li key={index}>
                                  <Link
                                    to={item.link}
                                    onClick={() =>
                                      setIsShowMobileMenu(!isShowMobileMenu)
                                    }
                                  >
                                    {item.imgSrc && (
                                      <img src={item.imgSrc} alt="" />
                                    )}
                                    {item.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                          {menu.submenu?.length && (
                            <span
                              className={`cs_munu_dropdown_toggle ${
                                openMobileSubmenuIndex.includes(index)
                                  ? 'active'
                                  : ''
                              }`}
                              onClick={() => handleOpenMobileSubmenu(index)}
                            >
                              <span></span>
                            </span>
                          )}
                        </li>
                      ))}
                    </ul>
                  </nav>
                  <span
                    className={`cs_menu_toggle${
                      isShowMobileMenu ? ' cs_toggle_active' : ''
                    }`}
                    onClick={() => setIsShowMobileMenu(!isShowMobileMenu)}
                  >
                    <span></span>
                  </span>
                </div>

                {variant && (
                  <div className="cs_main_header_right">
                    {isHamburger && (
                      <button
                        className="cs_hamburger_btn"
                        onClick={toggleSideHeader}
                      >
                        <svg
                          width="26"
                          height="26"
                          viewBox="0 0 26 26"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0 0.873006C0.21661 0.229944 0.676907 -0.0137425 1.34028 -0.000204399C2.66024 0.0268719 3.98021 0.00656467 5.30018 0.00656467C6.05832 0.00656467 6.49831 0.446554 6.49831 1.20469C6.49831 2.57204 6.49831 3.94616 6.49831 5.31352C6.49831 6.07165 6.05832 6.50487 5.30018 6.51164C3.98021 6.51164 2.66024 6.49133 1.34028 6.51841C0.676907 6.52518 0.21661 6.28826 0 5.6452C0 4.05447 0 2.46374 0 0.873006Z"
                            fill="currentColor"
                          />
                          <path
                            d="M0 10.6207C0.21661 9.97761 0.676907 9.74069 1.34028 9.74746C2.66024 9.77454 3.98021 9.75423 5.30018 9.75423C6.05832 9.75423 6.49831 10.1942 6.49831 10.9456C6.49831 12.3129 6.49831 13.6871 6.49831 15.0544C6.49831 15.8125 6.05832 16.2458 5.30018 16.2525C3.98021 16.2525 2.66024 16.2322 1.34028 16.2593C0.676907 16.2728 0.21661 16.0359 0 15.3929C0 13.8021 0 12.2114 0 10.6207Z"
                            fill="currentColor"
                          />
                          <path
                            d="M0 20.3681C0.21661 19.7251 0.676907 19.4882 1.34028 19.4949C2.66024 19.522 3.98021 19.5017 5.30018 19.5017C6.05832 19.5017 6.49831 19.9417 6.49831 20.6998C6.49831 22.0198 6.478 23.3398 6.50508 24.6597C6.51861 25.3299 6.27493 25.7834 5.63187 26C4.04113 26 2.4504 26 0.859672 26C0.426451 25.8578 0.14215 25.5735 0 25.1403C0 23.5496 0 21.9589 0 20.3681Z"
                            fill="currentColor"
                          />
                          <path
                            d="M10.614 26C9.97092 25.7766 9.72723 25.3231 9.74077 24.6597C9.76784 23.3398 9.74754 22.0198 9.74754 20.6998C9.74754 19.9417 10.1875 19.5017 10.9389 19.5017C12.3062 19.5017 13.6804 19.5017 15.0477 19.5017C15.8059 19.5017 16.2391 19.9417 16.2391 20.6998C16.2391 22.0198 16.2188 23.3398 16.2458 24.6597C16.2594 25.3299 16.0157 25.7834 15.3726 26C13.7954 26 12.2047 26 10.614 26Z"
                            fill="currentColor"
                          />
                          <path
                            d="M20.3615 26C19.7185 25.7766 19.4748 25.3231 19.4883 24.6597C19.5154 23.3398 19.4951 22.0198 19.4951 20.6998C19.4951 19.9417 19.9351 19.5017 20.6865 19.5017C22.0538 19.5017 23.4279 19.5017 24.7953 19.5017C25.5534 19.5017 25.9866 19.9417 25.9866 20.6998C25.9866 22.0198 25.9663 23.3398 25.9934 24.6597C26.0069 25.3299 25.7633 25.7834 25.1202 26C23.543 26 21.9523 26 20.3615 26Z"
                            fill="currentColor"
                          />
                          <path
                            d="M0 25.1403C0.14215 25.5735 0.426451 25.8646 0.866441 26.0068C0.575371 26.0068 0.29107 26.0068 0 26.0068C0 25.7157 0 25.4246 0 25.1403Z"
                            fill="currentColor"
                          />
                          <path
                            d="M16.2456 3.25592C16.2456 3.95991 16.2456 4.65712 16.2456 5.3611C16.2456 6.05155 15.7921 6.50508 15.1017 6.50508C13.7005 6.50508 12.2925 6.50508 10.8913 6.50508C10.2144 6.50508 9.7541 6.05155 9.7541 5.37464C9.74733 3.95991 9.74733 2.55194 9.7541 1.1372C9.7541 0.460297 10.2144 0.00676977 10.8845 0.00676977C12.2993 0.00676977 13.7072 6.97095e-07 15.122 0.00676977C15.7921 0.00676977 16.2456 0.467067 16.2456 1.14397C16.2456 1.84796 16.2456 2.55194 16.2456 3.25592Z"
                            fill="currentColor"
                          />
                          <path
                            d="M19.4951 3.25592C19.4951 2.55194 19.4951 1.85473 19.4951 1.15074C19.4951 0.460297 19.9486 0.0135384 20.6459 0.0135384C22.0403 0.0135384 23.4347 0.0135384 24.8359 0.0135384C25.5467 0.0135384 25.9934 0.460297 25.9934 1.17105C25.9934 2.56548 25.9934 3.95991 25.9934 5.3611C25.9934 6.06509 25.5399 6.51185 24.8291 6.51185C23.4415 6.51185 22.0538 6.51185 20.6662 6.51185C19.9419 6.51185 19.4951 6.06509 19.4951 5.3408C19.4951 4.64358 19.4951 3.94637 19.4951 3.25592Z"
                            fill="currentColor"
                          />
                          <path
                            d="M12.9967 16.2525C12.2927 16.2525 11.5955 16.2525 10.8915 16.2525C10.2011 16.2525 9.74756 15.799 9.74756 15.1018C9.74756 13.7006 9.74756 12.2926 9.74756 10.8914C9.74756 10.2145 10.2011 9.75423 10.878 9.75423C12.2927 9.74746 13.7007 9.74746 15.1154 9.75423C15.7856 9.75423 16.2459 10.2145 16.2459 10.8914C16.2459 12.3062 16.2526 13.7141 16.2459 15.1289C16.2459 15.7855 15.7856 16.2458 15.129 16.2525C14.4182 16.2593 13.7075 16.2525 12.9967 16.2525Z"
                            fill="currentColor"
                          />
                          <path
                            d="M22.7709 9.75423C23.4614 9.75423 24.1586 9.75423 24.849 9.75423C25.5395 9.75423 25.9862 10.2078 25.993 10.905C25.993 12.3062 25.993 13.7141 25.993 15.1153C25.993 15.7922 25.5327 16.2458 24.8626 16.2525C23.4478 16.2593 22.0399 16.2593 20.6251 16.2525C19.955 16.2525 19.4947 15.7922 19.4947 15.1153C19.4947 13.7006 19.4879 12.2926 19.4947 10.8779C19.4947 10.2145 19.955 9.761 20.6116 9.75423C21.3291 9.75423 22.0534 9.75423 22.7709 9.75423Z"
                            fill="currentColor"
                          />
                        </svg>
                      </button>
                    )}
                  </div>
                )}
              </div>
              {!variant && (
                <div className="cs_main_header_right">
                  {isHamburger && (
                    <button
                      className="cs_hamburger_btn"
                      onClick={toggleSideHeader}
                    >
                      <svg
                        width="26"
                        height="26"
                        viewBox="0 0 26 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 0.873006C0.21661 0.229944 0.676907 -0.0137425 1.34028 -0.000204399C2.66024 0.0268719 3.98021 0.00656467 5.30018 0.00656467C6.05832 0.00656467 6.49831 0.446554 6.49831 1.20469C6.49831 2.57204 6.49831 3.94616 6.49831 5.31352C6.49831 6.07165 6.05832 6.50487 5.30018 6.51164C3.98021 6.51164 2.66024 6.49133 1.34028 6.51841C0.676907 6.52518 0.21661 6.28826 0 5.6452C0 4.05447 0 2.46374 0 0.873006Z"
                          fill="currentColor"
                        />
                        <path
                          d="M0 10.6207C0.21661 9.97761 0.676907 9.74069 1.34028 9.74746C2.66024 9.77454 3.98021 9.75423 5.30018 9.75423C6.05832 9.75423 6.49831 10.1942 6.49831 10.9456C6.49831 12.3129 6.49831 13.6871 6.49831 15.0544C6.49831 15.8125 6.05832 16.2458 5.30018 16.2525C3.98021 16.2525 2.66024 16.2322 1.34028 16.2593C0.676907 16.2728 0.21661 16.0359 0 15.3929C0 13.8021 0 12.2114 0 10.6207Z"
                          fill="currentColor"
                        />
                        <path
                          d="M0 20.3681C0.21661 19.7251 0.676907 19.4882 1.34028 19.4949C2.66024 19.522 3.98021 19.5017 5.30018 19.5017C6.05832 19.5017 6.49831 19.9417 6.49831 20.6998C6.49831 22.0198 6.478 23.3398 6.50508 24.6597C6.51861 25.3299 6.27493 25.7834 5.63187 26C4.04113 26 2.4504 26 0.859672 26C0.426451 25.8578 0.14215 25.5735 0 25.1403C0 23.5496 0 21.9589 0 20.3681Z"
                          fill="currentColor"
                        />
                        <path
                          d="M10.614 26C9.97092 25.7766 9.72723 25.3231 9.74077 24.6597C9.76784 23.3398 9.74754 22.0198 9.74754 20.6998C9.74754 19.9417 10.1875 19.5017 10.9389 19.5017C12.3062 19.5017 13.6804 19.5017 15.0477 19.5017C15.8059 19.5017 16.2391 19.9417 16.2391 20.6998C16.2391 22.0198 16.2188 23.3398 16.2458 24.6597C16.2594 25.3299 16.0157 25.7834 15.3726 26C13.7954 26 12.2047 26 10.614 26Z"
                          fill="currentColor"
                        />
                        <path
                          d="M20.3615 26C19.7185 25.7766 19.4748 25.3231 19.4883 24.6597C19.5154 23.3398 19.4951 22.0198 19.4951 20.6998C19.4951 19.9417 19.9351 19.5017 20.6865 19.5017C22.0538 19.5017 23.4279 19.5017 24.7953 19.5017C25.5534 19.5017 25.9866 19.9417 25.9866 20.6998C25.9866 22.0198 25.9663 23.3398 25.9934 24.6597C26.0069 25.3299 25.7633 25.7834 25.1202 26C23.543 26 21.9523 26 20.3615 26Z"
                          fill="currentColor"
                        />
                        <path
                          d="M0 25.1403C0.14215 25.5735 0.426451 25.8646 0.866441 26.0068C0.575371 26.0068 0.29107 26.0068 0 26.0068C0 25.7157 0 25.4246 0 25.1403Z"
                          fill="currentColor"
                        />
                        <path
                          d="M16.2456 3.25592C16.2456 3.95991 16.2456 4.65712 16.2456 5.3611C16.2456 6.05155 15.7921 6.50508 15.1017 6.50508C13.7005 6.50508 12.2925 6.50508 10.8913 6.50508C10.2144 6.50508 9.7541 6.05155 9.7541 5.37464C9.74733 3.95991 9.74733 2.55194 9.7541 1.1372C9.7541 0.460297 10.2144 0.00676977 10.8845 0.00676977C12.2993 0.00676977 13.7072 6.97095e-07 15.122 0.00676977C15.7921 0.00676977 16.2456 0.467067 16.2456 1.14397C16.2456 1.84796 16.2456 2.55194 16.2456 3.25592Z"
                          fill="currentColor"
                        />
                        <path
                          d="M19.4951 3.25592C19.4951 2.55194 19.4951 1.85473 19.4951 1.15074C19.4951 0.460297 19.9486 0.0135384 20.6459 0.0135384C22.0403 0.0135384 23.4347 0.0135384 24.8359 0.0135384C25.5467 0.0135384 25.9934 0.460297 25.9934 1.17105C25.9934 2.56548 25.9934 3.95991 25.9934 5.3611C25.9934 6.06509 25.5399 6.51185 24.8291 6.51185C23.4415 6.51185 22.0538 6.51185 20.6662 6.51185C19.9419 6.51185 19.4951 6.06509 19.4951 5.3408C19.4951 4.64358 19.4951 3.94637 19.4951 3.25592Z"
                          fill="currentColor"
                        />
                        <path
                          d="M12.9967 16.2525C12.2927 16.2525 11.5955 16.2525 10.8915 16.2525C10.2011 16.2525 9.74756 15.799 9.74756 15.1018C9.74756 13.7006 9.74756 12.2926 9.74756 10.8914C9.74756 10.2145 10.2011 9.75423 10.878 9.75423C12.2927 9.74746 13.7007 9.74746 15.1154 9.75423C15.7856 9.75423 16.2459 10.2145 16.2459 10.8914C16.2459 12.3062 16.2526 13.7141 16.2459 15.1289C16.2459 15.7855 15.7856 16.2458 15.129 16.2525C14.4182 16.2593 13.7075 16.2525 12.9967 16.2525Z"
                          fill="currentColor"
                        />
                        <path
                          d="M22.7709 9.75423C23.4614 9.75423 24.1586 9.75423 24.849 9.75423C25.5395 9.75423 25.9862 10.2078 25.993 10.905C25.993 12.3062 25.993 13.7141 25.993 15.1153C25.993 15.7922 25.5327 16.2458 24.8626 16.2525C23.4478 16.2593 22.0399 16.2593 20.6251 16.2525C19.955 16.2525 19.4947 15.7922 19.4947 15.1153C19.4947 13.7006 19.4879 12.2926 19.4947 10.8779C19.4947 10.2145 19.955 9.761 20.6116 9.75423C21.3291 9.75423 22.0534 9.75423 22.7709 9.75423Z"
                          fill="currentColor"
                        />
                      </svg>
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
      {isHamburger && (
        <Sidenav
          data={sidenavData}
          closeSideHeader={closeSideHeader}
          toggleSideHeader={toggleSideHeader}
          isSideHeaderOpen={isSideHeaderOpen}
        />
      )}
    </>
  );
};

export default Header;
