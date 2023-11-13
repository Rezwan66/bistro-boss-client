import { Link, useNavigate } from 'react-router-dom';
import loginImg from '../../assets/others/auth.png';
import authPageBg from '../../assets/others/authentication.png';
import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet-async';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';

const Register = () => {
  const {
    register,
    handleSubmit,
    reset,
    // watch,
    formState: { errors },
  } = useForm();
  const { createUser, updateUserProfile, logoutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = data => {
    console.log(data);
    createUser(data.email, data.password)
      .then(res => {
        const loggedUser = res.user;
        console.log(loggedUser);
        updateUserProfile(data.name, data.photoURL)
          .then(() => {
            reset();
            Swal.fire({
              title: 'Yayy!',
              text: 'Signed Up Successfully',
              icon: 'success',
              confirmButtonText: 'Cool',
            });
            logoutUser()
              .then(() => {
                navigate('/login');
              })
              .catch(err => console.log(err.message));
          })
          .catch(err => console.log(err.message));
      })
      .catch(err => {
        console.log(err.message);
      });
  };

  // console.log(watch('name'));

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Sign Up</title>
      </Helmet>
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
              <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    {...register('name', { required: true })}
                    placeholder="your full name"
                    className="input input-bordered"
                  />
                  {errors.name && (
                    <span className="text-red-600 ml-2 mt-1 text-xs">
                      Name is required
                    </span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    type="text"
                    {...register('photoURL', { required: true })}
                    placeholder="your profile photo url"
                    className="input input-bordered"
                  />
                  {errors.photoURL && (
                    <span className="text-red-600 ml-2 mt-1 text-xs">
                      Photo URL is required
                    </span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    {...register('email', { required: true })}
                    placeholder="email"
                    className="input input-bordered"
                  />
                  {errors.email && (
                    <span className="text-red-600 ml-2 mt-1 text-xs">
                      Email is required
                    </span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    {...register('password', {
                      required: true,
                      minLength: 6,
                      maxLength: 20,
                      pattern:
                        /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                    })}
                    placeholder="password"
                    className="input input-bordered"
                  />
                  {errors.password?.type === 'required' && (
                    <p className="text-red-600 ml-2 mt-1 text-xs">
                      Password is required
                    </p>
                  )}
                  {errors.password?.type === 'minLength' && (
                    <p className="text-red-600 ml-2 mt-1 text-xs">
                      Password must be 6 characters
                    </p>
                  )}
                  {errors.password?.type === 'maxLength' && (
                    <p className="text-red-600 ml-2 mt-1 text-xs">
                      Password must be less than 20 characters
                    </p>
                  )}
                  {errors.password?.type === 'pattern' && (
                    <p className="text-red-600 ml-2 mt-1 text-xs">
                      Password must have 1 uppercase, 1 lowercase, a number and
                      a special character.
                    </p>
                  )}
                </div>
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
    </>
  );
};
export default Register;
