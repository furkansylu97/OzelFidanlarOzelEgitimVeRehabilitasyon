import { Outlet } from "react-router";
import { Header } from "../../shared/components/header/Header";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default MainLayout;
