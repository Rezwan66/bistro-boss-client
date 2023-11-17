import { FaEdit, FaRegTrashAlt } from 'react-icons/fa';
import SectionTitle from '../../../components/SectionTitle';
import useMenu from '../../../hooks/useMenu';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { Link } from 'react-router-dom';

const ManageItems = () => {
  const [menu, , refetch] = useMenu();
  const axiosSecure = useAxiosSecure();

  const handleDeleteItem = item => {
    // console.log(item);
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#D1A054',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(async result => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/menu/${item._id}`);
        // console.log(res.data);
        if (res.data.deletedCount > 0) {
          // refetch to update the ui
          refetch();
          Swal.fire({
            title: 'Deleted!',
            text: `${item.name} has been deleted!`,
            icon: 'success',
          });
        }
      }
    });
  };

  return (
    <div>
      <SectionTitle
        subHeading="Hurry Up!"
        heading="MANAGE ALL ITEMS"
      ></SectionTitle>
      <div className="min-h-screen max-w-4xl mx-auto shadow-2xl p-10">
        <div className="flex justify-between items-center cinzel">
          {/* <h2 className="text-2xl font-bold">Total Users: {users?.length}</h2> */}
        </div>
        <div className="mt-10">
          <div className="overflow-x-auto rounded-xl">
            <table className="table">
              {/* head */}
              <thead className="bg-[#D1A054]">
                <tr className="uppercase text-white">
                  <th>#</th>
                  <th>ITEM IMAGE</th>
                  <th>ITEM NAME</th>
                  <th>PRICE</th>
                  <th>UPDATE</th>
                  <th>DELETE</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {menu?.map((item, idx) => (
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
                    <td className="text-right">${item?.price}</td>
                    <th>
                      <Link to={`/dashboard/updateItem/${item._id}`}>
                        <button className="btn btn-sm btn-accent text-white ml-1">
                          <FaEdit></FaEdit>
                        </button>
                      </Link>
                    </th>
                    <th>
                      <button
                        onClick={() => handleDeleteItem(item)}
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
export default ManageItems;
