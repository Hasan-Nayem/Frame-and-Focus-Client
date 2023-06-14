import { useQuery } from "@tanstack/react-query";
const useUsers = () => {
    //for admin
    const {data :users = {}, refetch, isLoading} = useQuery({
        queryKey: ['user'],
        queryFn: async() => {
            const response = await fetch('https://frame-and-focus.vercel.app/user',{
                method: 'GET',
                headers : {
                    authorization : localStorage.getItem('phero-assignment-token')
                }
            })
            return response.json();
        }        
    });
    return [users, refetch, isLoading];
};

export default useUsers;