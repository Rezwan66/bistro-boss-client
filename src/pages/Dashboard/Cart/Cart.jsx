import { FaRegTrashAlt } from 'react-icons/fa';
import SectionTitle from '../../../components/SectionTitle';
import useCart from '../../../hooks/useCart';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const Cart = () => {
  const { cart, refetch } = useCart();
  const axiosSecure = useAxiosSecure();
  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0).toFixed(2);
  //   console.log(totalPrice);

  const handleDelete = _id => {
    // console.log(_id);
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#D1A054',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(result => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/cart/${_id}`).then(res => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: 'Deleted!',
              text: 'Your item has been deleted.',
              icon: 'success',
            });
          }
        });
      }
    });
  };

  return (
    <div>
      <SectionTitle
        subHeading="My Cart"
        heading="WANNA ADD MORE?"
      ></SectionTitle>
      <div className="min-h-screen max-w-4xl mx-auto shadow-2xl p-10">
        <div className="flex justify-between items-center cinzel">
          <h2 className="text-2xl font-bold">Total Items: {cart?.length}</h2>
          <h2 className="text-2xl font-bold">Total Price: ${totalPrice}</h2>
          <button className="btn bg-[#D1A054] text-white hover:text-black">
            pay
          </button>
        </div>
        <div className="mt-10">
          <div className="overflow-x-auto rounded-xl">
            <table className="table">
              {/* head */}
              <thead className="bg-[#D1A054]">
                <tr className="uppercase text-white">
                  <th>#</th>
                  <th>item image</th>
                  <th>item Name</th>
                  <th>price</th>
                  <th>action</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {cart?.map((item, idx) => (
                  <tr key={item._id}>
                    <th>{idx + 1}</th>
                    <td>
                      <div className="avatar">
                        <div className="mask mask-square w-12 h-12">
                          <img
                            src={item?.image}
                            className="object-cover"
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </td>
                    <td>{item?.name}</td>
                    <td>${item?.price}</td>
                    <th>
                      <button
                        onClick={() => handleDelete(item._id)}
                        className="btn btn-sm btn-error text-white ml-1"
                      >
                        <FaRegTrashAlt></FaRegTrashAlt>
                      </button>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cart;
