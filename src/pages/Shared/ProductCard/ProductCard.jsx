const ProductCard = ({ item }) => {
  const { name, recipe, image } = item || {};
  return (
    <div>
      <div className="card bg-[#F3F3F3] shadow-md rounded-none h-[500px]">
        <figure>
          <img className="w-full h-[250px]" src={image} alt="menu item" />
        </figure>
        <div className="card-body text-center items-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-center">
            <button className="lg:px-7 px-4 py-3 border-b-2 border-b-[#BB8506] bg-[#E8E8E8] text-[#BB8506] uppercase rounded-lg hover:bg-[#1F2937] hover:border-none font-medium">
              add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
