// import { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import useMenu from '../../../hooks/useMenu';
import { Link } from 'react-router-dom';

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter(item => item.category === 'popular');
  // const [menu, setMenu] = useState([]);
  // useEffect(() => {
  //   fetch('menu.json')
  //     .then(res => res.json())
  //     .then(data => {
  //       const popularItems = data.filter(item => item.category === 'popular');
  //       setMenu(popularItems);
  //     });
  // }, []);
  // console.log(menu);
  return (
    <section className="max-w-screen-xl mx-auto my-20 px-6 lg:px-0">
      <SectionTitle
        subHeading="Popular Items"
        heading="FROM OUR MENU"
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-10">
        {popular?.map(item => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="text-center">
        <Link to="/menu">
          <button className="btn btn-outline mt-6 border-0 border-b-4">
            View Full Menu
          </button>
        </Link>
      </div>
    </section>
  );
};
export default PopularMenu;
