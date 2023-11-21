import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import SectionTitle from '../../../components/SectionTitle';

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: payments = [] } = useQuery({
    queryKey: ['payments', user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user?.email}`);
      return res.data;
    },
  });

  return (
    <div>
      <SectionTitle
        heading="PAYMENT HISTORY"
        subHeading="At a Glance!"
      ></SectionTitle>
      <div className="min-h-screen max-w-4xl mx-auto shadow-2xl p-10">
        <div className="flex justify-between items-center cinzel">
          <h2 className="text-2xl font-bold">
            Total Payments: {payments?.length}
          </h2>
        </div>
        <div className="mt-10">
          <div className="overflow-x-auto rounded-xl">
            <table className="table">
              {/* head */}
              <thead className="bg-[#D1A054]">
                <tr className="uppercase text-white">
                  <th>#</th>
                  <th>price</th>
                  <th>Transaction-ID</th>
                  <th>status</th>
                  <th>PAYMENT DATE</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {payments?.map((item, idx) => (
                  <tr key={item._id}>
                    <td>{idx + 1}</td>
                    <td>${item?.price}</td>
                    <td>{item?.transactionId}</td>
                    <td>{item?.status}</td>
                    <td>{item?.date}</td>
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
export default PaymentHistory;
