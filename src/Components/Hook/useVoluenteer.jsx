import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useVoluenteer = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { data: isVoluenteer, isPending: isVoluenteerLoading } = useQuery({
        queryKey: [user?.email, 'isVoluenteer'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/voluenteer/${user.email}`);
            console.log(res.data);
            return res.data?.voluenteer;
        }
    })
    return [isVoluenteer, isVoluenteerLoading]
};

export default useVoluenteer; 