import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";


const useCart = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    // TODO: load cart data with tanstack query
    const { data: cart = [], refetch } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/cart?email=${user?.email}`);
            return res.data;
        }
    })
    return { cart, refetch };
}
export default useCart;