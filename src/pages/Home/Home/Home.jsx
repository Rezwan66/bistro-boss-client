import About from '../About/About';
import Banner from '../Banner/Banner';
import CallUs from '../CallUs/CallUs';
import Category from '../Category/Category';
import ChefRecommends from '../ChefRecommends/ChefRecommends';
import PopularMenu from '../PopularMenu/PopularMenu';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <About></About>
      <PopularMenu></PopularMenu>
      <CallUs></CallUs>
      <ChefRecommends></ChefRecommends>
    </div>
  );
};
export default Home;
