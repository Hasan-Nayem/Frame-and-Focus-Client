import { useQuery } from "@tanstack/react-query";

const useClassess = () => {
    const {data : allClass = {}, isLoading} = useQuery({
        queryKey: ['class'],
        queryFn: async () => {
            const response = fetch(`https://frame-and-focus.vercel.app/class?status=approved`)
            return response.json();
        }
    });
    return [allClass, isLoading];
};

export default useClassess;