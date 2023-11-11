import { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch('menu.json')
      .then(res => res.json())
      .then(data => {
        const popularItems = data.filter(item => item.category === 'popular');
        setMenu(popularItems);
      });
  }, []);
  // console.log(menu);
  return (
    <section className="max-w-screen-xl mx-auto my-20 px-6 lg:px-0">
      <SectionTitle
        subHeading="Popular Items"
        heading="FROM OUR MENU"
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-10">
        {menu?.map(item => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="text-center">
        <button className="mt-10 px-7 py-3 border-b-2 border-b-[#1F2937] uppercase rounded-lg font-medium hover:btn">
          View Full Menu
        </button>
      </div>
    </section>
  );
};
export default PopularMenu;
