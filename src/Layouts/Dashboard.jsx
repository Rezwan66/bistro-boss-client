import {
  FaBars,
  FaBook,
  FaCalendarAlt,
  FaCalendarCheck,
  FaHome,
  FaHouseUser,
  FaList,
  FaShoppingBag,
  FaShoppingCart,
  FaStar,
  FaUsers,
  FaWallet,
} from 'react-icons/fa';
import { RiAdminFill } from 'react-icons/ri';
import { ImSpoonKnife } from 'react-icons/im';
import { NavLink, Outlet } from 'react-router-dom';
import useCart from '../hooks/useCart';

const Dashboard = () => {
  const { cart } = useCart();

  // TODO: get isAdmin value from DB
  const isAdmin = true;

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
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/adminHome">
                  <RiAdminFill></RiAdminFill>
                  Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addItems">
                  <ImSpoonKnife />
                  Add Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageItems">
                  <FaList></FaList>
                  manage items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageBookings">
                  <FaBook></FaBook>
                  manage bookings
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/users">
                  <FaUsers></FaUsers>
                  all users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/userHome">
                  <FaHouseUser></FaHouseUser>
                  User Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/reservation">
                  <FaCalendarAlt></FaCalendarAlt>
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
                  My Cart ({cart?.length})
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
                  <FaCalendarCheck></FaCalendarCheck>
                  my booking
                </NavLink>
              </li>
            </>
          )}
          {/* shared links= both admin+user */}
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome></FaHome>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu">
              <FaBars></FaBars>
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/salads">
              <FaShoppingBag></FaShoppingBag>
              order food
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
