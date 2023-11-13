import { Link } from 'react-router-dom';
import loginImg from '../../assets/others/auth.png';
import authPageBg from '../../assets/others/authentication.png';

const Register = () => {
  const handleRegister = e => {
    e.preventDefault();
  };

  return (
    <div
      className="min-h-screen py-20"
      style={{ backgroundImage: `url(${authPageBg})` }}
    >
      <div className="hero lg:h-[700px] bg-transparent max-w-screen-xl mx-auto px-6 lg:px-0 shadow-2xl">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:w-1/2 lg:text-left">
            <img src={loginImg} alt="" />
          </div>
          <div className="card lg:w-1/2 md:max-w-md max-w-xs bg-transparent">
            <h1 className="text-4xl text-center font-bold">Sign Up!</h1>
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="your full name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              {/* react-simple-captcha */}
              {/* <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <div className="flex md:flex-row flex-col md:items-center items-start justify-between gap-3">
                  <input
                    type="text"
                    name="captcha"
                    ref={captchaRef}
                    placeholder="type the captcha above"
                    className="input input-bordered flex-1"
                    required
                  />
                  <button
                    onClick={handleValidateCaptcha}
                    className="text-primary underline text-xs"
                  >
                    validate
                  </button>
                </div>
              </div> */}
              <div className="form-control mt-6">
                <input
                  // disabled={disabled}
                  className="btn bg-[#D1A054B2] text-white hover:text-black"
                  type="submit"
                  value="Sign Up"
                />
              </div>
            </form>
            <p className="text-center text-[#D1A054]">
              <small>
                Already registered?{' '}
                <Link to="/login" className="font-bold">
                  Go to log in
                </Link>
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
