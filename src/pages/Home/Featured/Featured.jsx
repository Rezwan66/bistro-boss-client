import SectionTitle from '../../../components/SectionTitle';
import featuredImg from '../../../assets/home/featured.jpg';
import './Featured.css';

const Featured = () => {
  const today = new Date();
  const formattedDate = today.toLocaleDateString('en-US', {
    month: 'long', // Specify the full month name
    day: 'numeric', // Specify the day of the month
    year: 'numeric', // Specify the full year
  });
  //   console.log(formattedDate);
  return (
    <div className="featured-item bg-fixed text-white my-20">
      <div className="bg-black bg-opacity-40 pt-10 pb-20">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-0">
          <SectionTitle
            heading="FROM OUR MENU"
            subHeading="Check it out"
          ></SectionTitle>
          <div className="md:flex justify-center items-center lg:px-20 py-10">
            <div>
              <img className="lg:w-3/4" src={featuredImg} alt="" />
            </div>
            <div className="lg:ml-0 md:ml-10 ml-0 mt-10 md:mt-0">
              <h3>{formattedDate}</h3>
              <h3 className="uppercase my-2">WHERE CAN I GET SOME?</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                voluptate facere, deserunt dolores maiores quod nobis quas
                quasi. Eaque repellat recusandae ad laudantium tempore
                consequatur consequuntur omnis ullam maxime tenetur.
              </p>
              <button className="btn btn-outline mt-6 border-0 border-b-4 text-white">
                Order Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Featured;
