import { Parallax } from 'react-parallax';

const Cover = ({ img, title, subTitle }) => {
  return (
    <div>
      <Parallax
        blur={{ min: -50, max: 50 }}
        bgImage={img}
        bgImageAlt="the menu"
        strength={-200}
        style={{}}
      >
        <div className="hero lg:h-[600px] md:h-[350px] h-[275px]">
          {/* style={{backgroundImage: `url('${img}')`,}} */}
          {/* <div className="hero-overlay bg-opacity-60"></div> */}
          <div className="hero-content text-center max-w-screen-xl mx-auto px-6 lg:px-0">
            <div className="max-w-4xl lg:w-[896px] md:w-[600px] bg-black text-white cinzel bg-opacity-60 lg:p-20 p-10 uppercase">
              <h1 className="mb-5 md:text-5xl text-3xl font-bold">{title}</h1>
              <p>{subTitle}</p>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
};
export default Cover;
