import { NavLink } from 'react-router-dom';
import logoImg from '/logo.png';

const NavBar = () => {
  const navOptions = (
    <>
      <li>
        <NavLink to="/">HOME</NavLink>
      </li>
      <li>
        <NavLink to="/menu">OUR MENU</NavLink>
      </li>
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
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
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
            <a className="btn">Button</a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
