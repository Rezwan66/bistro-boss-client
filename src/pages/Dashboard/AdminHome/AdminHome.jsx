import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { FaListAlt, FaTruck, FaUsers, FaWallet } from 'react-icons/fa';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

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

  const { data: chartData = [] } = useQuery({
    queryKey: ['order-stats'],
    queryFn: async () => {
      const res = await axiosSecure.get('/order-stats');
      return res.data;
    },
  });

  console.log(stats, chartData);

  //   custom shapes for the bar chart
  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
    Z`;
  };

  const TriangleBar = props => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  return (
    <div className="p-10">
      <h2 className="text-3xl">
        <span>Hi, Welcome </span>
        {user?.displayName ? user?.displayName : 'Back'}
      </h2>
      <div className="mt-6">
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
        {/* charts */}
        <div className="flex mt-10">
          <div className="w-1/2">
            <BarChart
              width={500}
              height={300}
              data={chartData}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="category" />
              <YAxis />
              <Bar
                dataKey="quantity"
                fill="#8884d8"
                shape={<TriangleBar />}
                label={{ position: 'top' }}
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index % 6]} />
                ))}
              </Bar>
            </BarChart>
          </div>
          <div className="w-1/2"></div>
        </div>
      </div>
    </div>
  );
};
export default AdminHome;
