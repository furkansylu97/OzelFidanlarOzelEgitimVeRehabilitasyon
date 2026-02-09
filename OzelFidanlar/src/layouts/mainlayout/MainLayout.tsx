import { Outlet } from "react-router";
import { Header } from "../../shared/components/header/Header";
import { Footer } from "../../shared/components/footer/Footer";
import Navbar from "../../shared/components/header/navbar/Navbar";
import StickyNavbar from "../../shared/components/header/navbar/StickyNavbar";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Navbar />
      <StickyNavbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
