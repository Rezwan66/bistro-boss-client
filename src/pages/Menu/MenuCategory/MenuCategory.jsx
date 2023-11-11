import Cover from '../../Shared/Cover/Cover';
import MenuItem from '../../Shared/MenuItem/MenuItem';

const MenuCategory = ({ items, title, img }) => {
  return (
    <section className="my-20">
      {title && (
        <Cover
          img={img}
          title={title}
          subTitle="Would you like to try a dish?"
        ></Cover>
      )}
      <div className="grid md:grid-cols-2 gap-10 max-w-screen-xl mx-auto my-12 px-6 lg:px-0">
        {items?.map(item => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="text-center">
        <button className="btn btn-outline border-0 border-b-4">
          ORDER YOUR FAVOURITE FOOD
        </button>
      </div>
    </section>
  );
};
export default MenuCategory;
