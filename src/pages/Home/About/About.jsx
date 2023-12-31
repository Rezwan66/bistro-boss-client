import img from '../../../assets/home/chef-service.jpg';

const About = () => {
  return (
    <div className="my-20">
      <div
        className="hero h-[572px] bg-fixed"
        style={{
          backgroundImage: `url(${img})`,
        }}
      >
        {/* <div className="hero-overlay"></div> */}
        <div className="hero-content text-center max-w-screen-xl mx-auto px-6 lg:px-0">
          <div className="max-w-4xl bg-white lg:p-20 p-8">
            <h1 className="mb-5 text-5xl cinzel">Bistro Boss</h1>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus, libero accusamus laborum deserunt ratione dolor
              officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
              nihil iusto ducimus incidunt quibusdam nemo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
