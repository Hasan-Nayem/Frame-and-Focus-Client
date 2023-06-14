import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../providers/AuthProvider";
import { useContext } from 'react';

const useHistory = () => {
    const {user} = useContext(AuthContext);
    const {data : history = {}, refetch, isLoading : loadHistory} = useQuery({
        queryKey: ['history', user.email],
        queryFn: async () => {
            const response = await fetch(`http://localhost:3000/history/${user.email}`,{
                method: 'GET',
                headers : {
                    authorization : localStorage.getItem('phero-assignment-token')
                }
            });
            return response.json();
        }

    });
    return [history, refetch, loadHistory]
};

export default useHistory;