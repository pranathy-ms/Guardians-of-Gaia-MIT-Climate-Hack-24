import Header from "../Header";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";

const Layout = () => {
  return (
    <div>
      <Header isHamburger={true} logo={"/assets/img/logo.svg"} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
