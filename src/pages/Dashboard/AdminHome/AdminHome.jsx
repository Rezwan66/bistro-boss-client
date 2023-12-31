import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { FaListAlt, FaTruck, FaUsers, FaWallet } from 'react-icons/fa';
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  PieChart,
  Pie,
  Legend,
} from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

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

  //   custom shape for the pie chart
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  const pieChartData = chartData.map(data => {
    return { name: data.category, value: data.revenue };
  });

  return (
    <div className="max-w-7xl mx-auto p-10">
      <h2 className="text-3xl">
        <span>Hi, Welcome </span>
        {user?.displayName ? user?.displayName : 'Back'}
      </h2>
      <div className="mt-6">
        <div className="stats flex justify-between rounded-none text-white gap-6">
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
        <div className="flex mt-20 items-center justify-between gap-20">
          <div className="w-1/2">
            <BarChart
              width={600}
              height={400}
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
          <div className="w-1/2">
            <PieChart width={400} height={400}>
              <Pie
                data={pieChartData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={130}
                fill="#8884d8"
                dataKey="value"
              >
                {pieChartData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Legend></Legend>
            </PieChart>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AdminHome;
