import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";

const Layout1 = () => {
  return (
    <div>
      <Header
        isHamburger={true}
        variant={true}
        logo={"/assets/img/logo_dark.svg"}
      />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout1;
