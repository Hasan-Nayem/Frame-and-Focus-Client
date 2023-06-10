import { useQuery } from "@tanstack/react-query";
const useUsers = () => {
    const {data :users = {}, refetch, isLoading} = useQuery({
        queryKey: ['user'],
        queryFn: async() => {
            const response = await fetch('http://localhost:3000/user',{
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