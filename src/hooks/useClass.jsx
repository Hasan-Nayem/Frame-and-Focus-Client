import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useClass = () => {
    //For instructor
    const {user} = useContext(AuthContext);
    const {data : allClass = {}, refetch, isLoading} = useQuery({
        queryKey: ['class', user.email],
        queryFn: async () => {
            const result = await fetch(`https://frame-and-focus.vercel.app/class/${user.email}`,{
                method : 'GET',
                headers : {
                    authorization: localStorage.getItem('phero-assignment-token')
                }
            });
            return result.json();
        }
    });
    return [allClass, refetch, isLoading];
};

export default useClass;