import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useBlog = () => {
    const AxiosPublic = useAxiosPublic()
    const { data: blog = [], refetch, isLoading } = useQuery({
        queryKey: ['BlogData'],
        queryFn: async () => {
            const res = await AxiosPublic.get('https://blood-bond-server.vercel.app/blogPublish')
            return res.data
        }
    })
  return [ blog,refetch,isLoading ]
}

export default useBlog; 