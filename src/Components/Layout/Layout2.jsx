import Header from "../Header";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";

const Layout2 = () => {
  return (
    <div>
      <Header
        isHamburger={true}
        logo={"/assets/img/logo.svg"}
        bottomBorder={true}
      />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout2;
