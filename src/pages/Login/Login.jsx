import { useContext, useEffect, useState } from 'react';
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from 'react-simple-captcha';
import loginImg from '../../assets/others/auth.png';
import authPageBg from '../../assets/others/authentication.png';
import { AuthContext } from '../../providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import { FaFacebookF, FaGoogle, FaGithub } from 'react-icons/fa';
import useAxiosPublic from '../../hooks/useAxiosPublic';

const Login = () => {
  const [disabled, setDisabled] = useState(true);
  const axiosPublic = useAxiosPublic();
  //   const captchaRef = useRef(null);
  const { loginUser, googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);
    loginUser(email, password)
      .then(res => {
        const user = res.user;
        console.log(user);
        Swal.fire({
          title: 'Yayy!',
          text: 'Signed In Successfully',
          icon: 'success',
          confirmButtonText: 'Cool',
        });
        navigate(from, { replace: true });
      })
      .catch(err => {
        console.log(err.message);
      });
  };

  const handleValidateCaptcha = e => {
    const user_captcha_value = e.target.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then(res => {
        const user = res.user;
        console.log(user);
        const userInfo = {
          email: user?.email,
          name: user?.displayName,
        };
        axiosPublic.post('/users', userInfo).then(res => {
          console.log(res.data);
          // if (res.data.insertedId) {
          Swal.fire({
            title: 'Yayy!',
            text: 'Signed In using Google',
            icon: 'success',
            confirmButtonText: 'Cool',
          });
          navigate(from, { replace: true });
          // }
          // else {
          //   Swal.fire({
          //     title: 'Oops!',
          //     text: 'User already exists!',
          //     icon: 'error',
          //     confirmButtonText: 'Cool',
          //   });
          // }
        });
      })
      .catch(err => {
        console.log(err.message);
      });
  };

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Sign In</title>
      </Helmet>
      <div
        className="min-h-screen py-20"
        style={{ backgroundImage: `url(${authPageBg})` }}
      >
        <div className="hero lg:h-[700px] bg-transparent max-w-screen-xl mx-auto px-6 lg:px-0 shadow-2xl">
          <div className="hero-content flex-col lg:flex-row">
            <div className="text-center lg:w-1/2 lg:text-left">
              <img src={loginImg} alt="" />
            </div>
            <div className="card lg:w-1/2 md:max-w-md max-w-xs bg-transparent">
              <h1 className="text-4xl text-center font-bold">Login now!</h1>
              <form onSubmit={handleLogin} className="card-body">
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
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                {/* react-simple-captcha */}
                <div className="form-control">
                  <label className="label">
                    <LoadCanvasTemplate />
                  </label>
                  {/* <div className="flex md:flex-row flex-col md:items-center items-start justify-between gap-3"> */}
                  <input
                    onBlur={handleValidateCaptcha}
                    type="text"
                    name="captcha"
                    // ref={captchaRef}
                    placeholder="type the captcha above"
                    className="input input-bordered"
                    required
                  />
                  {/* <button
                      onClick={handleValidateCaptcha}
                      className="text-primary underline text-xs"
                    >
                      validate
                    </button> */}
                  {/* </div> */}
                </div>
                <div className="form-control mt-6">
                  <input
                    disabled={disabled}
                    className="btn bg-[#D1A054B2] text-white hover:text-black"
                    type="submit"
                    value="Sign In"
                  />
                </div>
              </form>
              <p className="text-center text-[#D1A054]">
                <small>
                  New Here?{' '}
                  <Link to="/register" className="font-bold">
                    Create a New Account
                  </Link>
                </small>
              </p>
              <div className="divider px-10 text-sm my-6">Or sign in with</div>
              <div className="flex items-center justify-center gap-10 lg:mb-0 mb-6">
                <button className="btn btn-outline btn-circle">
                  <FaFacebookF></FaFacebookF>
                </button>
                <button
                  onClick={handleGoogleLogin}
                  className="btn btn-outline btn-circle"
                >
                  <FaGoogle></FaGoogle>
                </button>
                <button className="btn btn-outline btn-circle">
                  <FaGithub></FaGithub>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
