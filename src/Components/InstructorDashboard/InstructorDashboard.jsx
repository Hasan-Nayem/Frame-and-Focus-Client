import useClass from "../../hooks/useClass";

const InstructorDashboard = () => {
    const [allClass, ,isLoading] = useClass(); 
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
        <div className="my-5 text-center"> 
            <h1 className="fs-1 fw-bolder">Instructor Dashboard</h1> 
            <div className="row mt-5 text-center">
                <div className="col-lg-3 col-sm-12 mx-2" style={{backgroundColor: "#FFC107", borderRadius : "6px", height: "80px"}} >
                    <h4 className="text-center text-white mt-4 fw-bolder">Class Created : {allClass.length} </h4>
                </div>
                <div className="col-lg-3 col-sm-12 mx-2" style={{backgroundColor: "#96BB7C", borderRadius : "6px", height: "80px"}} >
                    <h4 className="text-center text-white mt-4 fw-bolder">Approved : {approved} </h4>
                </div>
                <div className="col-lg-3 col-sm-12 mx-2" style={{backgroundColor: "#E74040", borderRadius : "6px", height: "80px"}} >
                    <h4 className="text-center text-white mt-4 fw-bolder">Pending : {pending} </h4>
                </div>
            </div>
            <div className="row mt-3 text-center">
                <div className="col-lg-3 col-sm-12 mx-2 bg-info" style={{ borderRadius : "6px", height: "80px"}} >
                    <h4 className="text-center text-white mt-4 fw-bolder">Denied : {denied} </h4>
                </div>
            </div>
        </div>
    );
};

export default InstructorDashboard;