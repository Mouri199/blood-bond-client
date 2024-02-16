import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import useAuth from "./useAuth";


const useProfile = () => {
    const { user } = useAuth()
    const AxiosPublic = useAxiosPublic()
    const { data: profile = [], refetch, isLoading } = useQuery({
        queryKey: ['BlogData'],
        queryFn: async () => {
            const res = await AxiosPublic.get(`https://blood-bond-server.vercel.app/profile?email=${user.email}`)
            return res.data
        }
    })
    return [profile, refetch, isLoading]
};

export default useProfile;