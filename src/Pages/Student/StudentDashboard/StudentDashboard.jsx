import useHistory from "../../../hooks/useHistory";
import useSelectedClass from "../../../hooks/useSelectedClass";

const StudentDashboard = () => {
    const [history, , loadHistory ] = useHistory();
    const [bookedClass, ,] = useSelectedClass();
    return (
        <div className="my-5">
            <h1 className="fs-1 fw-bolder text-center">Student Dashboard</h1>
            <div className="row mt-5 text-center">
                <div className="col-lg-3 col-sm-12 mx-2 mt-4" style={{backgroundColor: "#badc58", borderRadius : "6px", height: "80px"}} >
                    <h4 className="text-center text-white mt-4 fw-bolder">Enrolled : {history.length || 0} </h4>
                </div>
                <div className="col-lg-3 col-sm-12 mx-2 mt-4" style={{backgroundColor: "#7ed6df", borderRadius : "6px", height: "80px"}} >
                    <h4 className="text-center text-white mt-4 fw-bolder">Selected : {bookedClass.length} </h4>
                </div>
                <div className="col-lg-3 col-sm-12 mx-2 mt-4" style={{backgroundColor: "#f0932b", borderRadius : "6px", height: "80px"}} >
                    <h4 className="text-center fs-5 text-white mt-4 fw-bolder">Pending payment : {bookedClass.length} </h4>
                </div>
            </div>
        </div>
    );
};

export default StudentDashboard;