import { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle';
import ProductCard from '../../Shared/ProductCard/ProductCard';

const ChefRecommends = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch('menu.json')
      .then(res => res.json())
      .then(data => {
        // const popularItems = data.filter(item => item.category === 'popular');
        setMenu(data);
      });
  }, []);
  // console.log(menu);

  return (
    <section className="max-w-screen-xl mx-auto my-20 px-6 lg:px-0">
      <SectionTitle
        subHeading="Should Try"
        heading="CHEF RECOMMENDS"
      ></SectionTitle>
      <div className="grid md:grid-cols-3 gap-10">
        {menu?.slice(1, 4).map(item => (
          <ProductCard key={item._id} item={item}></ProductCard>
        ))}
      </div>
    </section>
  );
};
export default ChefRecommends;
