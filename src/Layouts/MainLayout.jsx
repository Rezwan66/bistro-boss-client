import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';
import NavBar from '../pages/Shared/NavBar/NavBar';

const MainLayout = () => {
  const location = useLocation();
  // console.log(location);
  const noHeaderFooter =
    location.pathname.includes('login') ||
    location.pathname.includes('register');

  return (
    <div>
      {noHeaderFooter || <NavBar></NavBar>}
      <Outlet></Outlet>
      {noHeaderFooter || <Footer></Footer>}
    </div>
  );
};
export default MainLayout;
