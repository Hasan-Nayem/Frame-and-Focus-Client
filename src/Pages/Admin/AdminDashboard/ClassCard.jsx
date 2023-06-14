import { useQuery } from "@tanstack/react-query";

const ClassCard = () => {
    const {data : allClass = {}, isLoading} = useQuery({
        queryKey: ['class'],
        queryFn: async () => {
            const result = await fetch(`https://frame-and-focus.vercel.app/class/`,{
                method : 'GET',
                headers : {
                    authorization: localStorage.getItem('phero-assignment-token')
                }
            });
            return result.json();
        }
    });

    // console.log(allClass);
    let pending = 0;
    let approved = 0;
    let denied = 0;
    
    if(!isLoading){
        allClass.forEach(element => {
            if(element.status === 'pending'){
                pending = pending + 1;
            }
            if(element.status === 'approved'){
                approved = approved + 1;
            }
            if(element.status === 'denied'){
                denied = denied + 1;
            }
        });
    }

    return (
        <div className="row mt-3 text-center">
            <div className="col-lg-3 col-sm-12 mx-2" style={{backgroundColor: "#6ab04c", borderRadius : "6px", height: "80px"}} >
                <h4 className="text-center text-white mt-4 fw-bolder">Class Created : {allClass.length} </h4>
            </div>
            <div className="col-lg-3 col-sm-12 mx-2" style={{backgroundColor: "#4834d4", borderRadius : "6px", height: "80px"}} >
                <h4 className="text-center text-white mt-4 fw-bolder">Approved : {approved} </h4>
            </div>
            <div className="col-lg-3 col-sm-12 mx-2" style={{backgroundColor: "#f9ca24", borderRadius : "6px", height: "80px"}} >
                <h4 className="text-center text-white mt-4 fw-bolder">Pending : {pending} </h4>
            </div>
            <div className="col-lg-3 col-sm-12 mx-2 mt-3" style={{ backgroundColor:"#eb4d4b", borderRadius : "6px", height: "80px"}} >
                <h4 className="text-center text-white mt-4 fw-bolder">Denied : {denied} </h4>
            </div>
        </div>
    );
};

export default ClassCard;