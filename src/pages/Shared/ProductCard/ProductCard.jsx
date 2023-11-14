import Swal from 'sweetalert2';
import useAuth from '../../../hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const ProductCard = ({ item }) => {
  const { name, recipe, image, price, _id } = item || {};
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();

  const handleAddToCart = food => {
    if (user && user.email) {
      // TODO:send data to DB
      console.log(user.email, food);
      const cartItem = {
        menuId: _id,
        email: user?.email,
        name,
        image,
        price,
      };
      axiosSecure.post('/cart', cartItem).then(res => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `${name} added to the cart`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    } else {
      Swal.fire({
        title: 'You are not Logged In',
        text: 'Please Login to Add to Cart!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#BB8506',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Login!',
      }).then(result => {
        if (result.isConfirmed) {
          // send user to login page
          navigate('/login', { state: { from: location } });
        }
        // else{Swal.fire({
        //   title: 'Deleted!',
        //   text: 'Your file has been deleted.',
        //   icon: 'success',
        // });}
      });
    }
  };
  return (
    <div>
      <div className="card bg-[#F3F3F3] shadow-md rounded-none h-[500px]">
        <figure>
          <img className="w-full h-[250px]" src={image} alt="menu item" />
        </figure>
        <p className="absolute right-4 top-4 bg-[#111827] text-white px-3 py-1">
          ${price}
        </p>
        <div className="card-body text-center items-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-center">
            {/* <button className="lg:px-7 px-4 py-3 border-b-2 border-b-[#BB8506] bg-[#E8E8E8] text-[#BB8506] uppercase rounded-lg hover:bg-[#1F2937] hover:border-none font-medium">
              add to cart
            </button> */}
            <button
              onClick={() => handleAddToCart(item)}
              className="btn btn-outline mt-6 border-0 border-b-4 text-[#BB8506] bg-[#E8E8E8] hover:text-[#BB8506]"
            >
              add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
