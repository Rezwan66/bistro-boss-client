import { FaRegTrashAlt, FaUsers } from 'react-icons/fa';
import SectionTitle from '../../../components/SectionTitle';

const ManageItems = () => {
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
                  <th>NAME</th>
                  <th>EMAIL</th>
                  <th>role</th>
                  <th>action</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {/* {users?.map((user, idx) => (
                  <tr key={user._id}>
                    <th>{idx + 1}</th>
                    <td>{user?.name}</td>
                    <td>{user?.email}</td>
                    <th>
                      {user?.role === 'admin' ? (
                        <span className="text-success font-black">ADMIN</span>
                      ) : (
                        <button
                        //   onClick={() => handleMakeAdmin(user)}
                          className="btn btn-sm btn-accent text-white ml-1"
                        >
                          <FaUsers></FaUsers>
                        </button>
                      )}
                    </th>
                    <th>
                      <button
                        // onClick={() => handleDelete(user)}
                        className="btn btn-sm btn-error text-white ml-1"
                      >
                        <FaRegTrashAlt></FaRegTrashAlt>
                      </button>
                    </th>
                  </tr>
                ))} */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ManageItems;
