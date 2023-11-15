import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import SectionTitle from '../../../components/SectionTitle';
import { FaRegTrashAlt, FaUsers } from 'react-icons/fa';
import Swal from 'sweetalert2';

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await axiosSecure.get('/users');
      return res.data;
    },
  });

  const handleDelete = user => {
    // console.log(_id);
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#D1A054',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete user!',
    }).then(result => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${user._id}`).then(res => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: 'Deleted!',
              text: 'The user has been deleted.',
              icon: 'success',
            });
          }
        });
      }
    });
  };

  const handleMakeAdmin = user => {
    axiosSecure.patch(`/users/admin/${user._id}`).then(res => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: `${user.name} is an Admin now!`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  return (
    <div>
      <SectionTitle
        subHeading="How many users??"
        heading="MANAGE ALL USERS"
      ></SectionTitle>
      <div className="min-h-screen max-w-4xl mx-auto shadow-2xl p-10">
        <div className="flex justify-between items-center cinzel">
          <h2 className="text-2xl font-bold">Total Users: {users?.length}</h2>
        </div>
        <div className="mt-10">
          <div className="overflow-x-auto rounded-xl">
            <table className="table">
              {/* head */}
              <thead className="bg-[#D1A054]">
                <tr className="uppercase text-white">
                  <th>#</th>
                  <th>NAME</th>
                  <th>EMAIL</th>
                  <th>role</th>
                  <th>action</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {users?.map((user, idx) => (
                  <tr key={user._id}>
                    <th>{idx + 1}</th>
                    <td>{user?.name}</td>
                    <td>{user?.email}</td>
                    <th>
                      {user?.role === 'admin' ? (
                        <span className="text-success font-black">ADMIN</span>
                      ) : (
                        <button
                          onClick={() => handleMakeAdmin(user)}
                          className="btn btn-sm btn-accent text-white ml-1"
                        >
                          <FaUsers></FaUsers>
                        </button>
                      )}
                    </th>
                    <th>
                      <button
                        onClick={() => handleDelete(user)}
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
export default AllUsers;
