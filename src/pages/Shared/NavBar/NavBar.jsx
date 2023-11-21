import { Link, NavLink } from 'react-router-dom';
import logoImg from '/logo.png';
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import Swal from 'sweetalert2';
import noUserImg from '../../../assets/others/profile.png';
import { FaShoppingCart } from 'react-icons/fa';
import useCart from '../../../hooks/useCart';
import useAdmin from '../../../hooks/useAdmin';

const NavBar = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const { isAdmin } = useAdmin();
  const { cart } = useCart();

  const handleLogout = () => {
    logoutUser()
      .then(() =>
        Swal.fire({
          title: 'Success!',
          text: 'Logged Out Successfully',
          icon: 'success',
          confirmButtonText: 'Cool',
        })
      )
      .catch(err => console.log(err.message));
  };
  const navOptions = (
    <>
      <li>
        <NavLink to="/">HOME</NavLink>
      </li>
      <li>
        <NavLink to="/menu">OUR MENU</NavLink>
      </li>
      <li>
        <NavLink to="/order/salads">ORDER FOOD</NavLink>
      </li>
      {
        // user? isAdmin? 'double true':'one true' : 'false'
      }
      {user && isAdmin && (
        <li>
          <Link to="/dashboard/adminHome">Dashboard</Link>
        </li>
      )}
      {user && !isAdmin && (
        <li>
          <Link to="/dashboard/userHome">Dashboard</Link>
        </li>
      )}
      <li className="lg:ml-2 my-2 lg:my-0">
        <NavLink to="/dashboard/cart">
          <button className="flex items-center">
            <FaShoppingCart className="mr-2 text-lg text-[#D99904]"></FaShoppingCart>
            <div className="badge bg-[#D99904] border-0 text-white">
              +{cart.length}
            </div>
          </button>
        </NavLink>
      </li>
      {user ? (
        <>
          <button
            onClick={handleLogout}
            className="btn btn-ghost btn-sm mt-[1px]"
          >
            LOGOUT
          </button>
        </>
      ) : (
        <>
          <li>
            <NavLink to="/login">LOGIN</NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="">
      <div className="navbar fixed z-10 bg-opacity-30 bg-[#15151580] text-white">
        <div className="navbar lg:px-10">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-[#D99904]"
              >
                {navOptions}
              </ul>
            </div>
            <div className="flex items-center gap-3 btn btn-ghost">
              <img className="w-10" src={logoImg} alt="" />
              <div className="md:text-lg text-xs cinzel font-black uppercase">
                <p>BISTRO BOSS</p>
                <p className="md:text-sm md:tracking-widest">Restaurant</p>
              </div>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navOptions}</ul>
          </div>
          <div className="navbar-end">
            {user ? (
              <div className="flex items-center gap-2">
                <div className="avatar">
                  <div className="w-9 rounded-full">
                    <img src={user?.photoURL} />
                  </div>
                </div>
                <p className="text-sm text-[#D99904] font-semibold">
                  {user?.displayName}
                </p>
              </div>
            ) : (
              <div className="avatar">
                <div className="w-9 rounded-full">
                  <img src={noUserImg} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
