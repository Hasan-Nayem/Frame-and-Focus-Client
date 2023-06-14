import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../providers/AuthProvider";
import { useContext } from 'react';
const useSelectedClass = () => {
    const {user} = useContext(AuthContext);
    const {data : bookedClass = {}, refetch, isLoading} = useQuery({
        queryKey: ['selectedClass', user.email],
        queryFn: async () => {
            const response = await fetch(`https://frame-and-focus.vercel.app/selected/${user.email}`,{
                method: 'GET',
                headers : {
                    authorization : localStorage.getItem('phero-assignment-token')
                }
            });
            return response.json();
        }

    });
    return [bookedClass, refetch, isLoading]
};

export default useSelectedClass;