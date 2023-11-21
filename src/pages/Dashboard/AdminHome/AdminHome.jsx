import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { FaListAlt, FaTruck, FaUsers, FaWallet } from 'react-icons/fa';

const AdminHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: stats = [] } = useQuery({
    queryKey: ['admin-stats'],
    queryFn: async () => {
      const res = await axiosSecure.get('/admin-stats');
      return res.data;
    },
  });

  console.log(stats);

  return (
    <div className="p-10">
      <h2 className="text-3xl">
        <span>Hi, Welcome </span>
        {user?.displayName ? user?.displayName : 'Back'}
      </h2>
      <div className="my-10">
        <div className="stats rounded-none text-white gap-6">
          <div className="stat rounded-md flex items-center py-8 bg-gradient-to-r from-[#BB34F5] to-[#FCDBFF] px-10">
            <div className="text-white">
              <FaWallet className="text-4xl"></FaWallet>
            </div>
            <div>
              <div className="stat-value">${stats?.revenue}</div>
              <div className="stat-title text-white tracking-widest">
                Revenue
              </div>
            </div>
          </div>
          <div className="stat rounded-md flex items-center py-8 bg-gradient-to-r from-[#D3A256] to-[#FDE8C0] px-10">
            <div className="text-white">
              <FaUsers className="text-4xl"></FaUsers>
            </div>
            <div>
              <div className="stat-value">{stats?.users}</div>
              <div className="stat-title text-white tracking-widest">
                Customers
              </div>
            </div>
          </div>
          <div className="stat rounded-md flex items-center py-8 bg-gradient-to-r from-[#FE4880] to-[#FECDE9] px-10">
            <div className="text-white">
              <FaListAlt className="text-4xl"></FaListAlt>
            </div>
            <div>
              <div className="stat-value">{stats?.menuItems}</div>
              <div className="stat-title text-white tracking-widest">
                Menu Items
              </div>
            </div>
          </div>
          <div className="stat rounded-md flex items-center py-8 bg-gradient-to-r from-[#6AAEFF] to-[#B6F7FF] px-14">
            <div className="text-white">
              <FaTruck className="text-4xl"></FaTruck>
            </div>
            <div>
              <div className="stat-value">{stats?.orders}</div>
              <div className="stat-title text-white tracking-widest">
                Orders
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AdminHome;
