const MenuItem = ({ item }) => {
  //   console.log(Object.keys(item).join(','));
  const { name, recipe, image, price } = item || {};
  return (
    <div className="flex space-x-3">
      <img
        style={{ borderRadius: '0px 200px 200px 200px' }}
        className="w-[90px] h-[80px] object-cover"
        src={image}
      />
      <div>
        <h3 className="uppercase cinzel text-lg">{name} ------------------</h3>
        <p>{recipe}</p>
      </div>
      <h2 className="text-lg text-[#BB8506]">${price}</h2>
    </div>
  );
};
export default MenuItem;
