import { useQuery } from "@tanstack/react-query";

const useClassess = () => {
    const {data : allClass = {}, isLoading} = useQuery({
        queryKey: ['class'],
        queryFn: async () => {
            const response = fetch(`http://localhost:3000/class?status=approved`)
            return response.json();
        }
    });
    return [allClass, isLoading];
};

export default useClassess;