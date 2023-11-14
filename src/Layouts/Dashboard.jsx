import {
  FaCalendar,
  FaHome,
  FaList,
  FaShoppingCart,
  FaStar,
  FaWallet,
} from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="flex">
      {/* dashboard sidebar */}
      <div className="w-72 min-h-screen bg-[#D1A054] p-4">
        {/* restaurant name-logo */}
        <div className="flex btn btn-ghost my-10">
          <div className="md:text-lg text-xs cinzel font-black uppercase">
            <p>BISTRO BOSS</p>
            <p className="md:text-sm md:tracking-widest">Restaurant</p>
          </div>
        </div>
        <ul className="menu uppercase">
          <li>
            <NavLink to="/dashboard/userHome">
              <FaHome></FaHome>
              User Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/reservation">
              <FaCalendar></FaCalendar>
              reservation
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/paymentHistory">
              <FaWallet></FaWallet>
              payment history
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/cart">
              <FaShoppingCart></FaShoppingCart>
              My Cart
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/review">
              <FaStar></FaStar>
              add review
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/bookings">
              <FaList></FaList>
              my booking
            </NavLink>
          </li>
        </ul>
      </div>
      {/* dashboard content */}
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};
export default Dashboard;
