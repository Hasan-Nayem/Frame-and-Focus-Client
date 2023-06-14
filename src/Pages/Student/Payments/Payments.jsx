import { Helmet } from "react-helmet";
import useHistory from "../../../hooks/useHistory";
const Payments = () => {

    const [history, ,isLoading] = useHistory();
    console.log('payment history', history);

    return (
        <div className="my-5">
            <Helmet>
                <title>Student | Payment History</title>
            </Helmet>
            <h1 className="fs-1 fw-bolder text-center my-5"> Payment History</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Sl</th>
                        <th>Course Title</th>
                        <th>Course Instructor</th>
                        <th>Price</th>
                        <th>Transaction Id</th>
                    </tr>
                </thead>
                <tbody>
                    
                    {/* {
                        !isLoading && history.map((data, index) => {
                            <tr key={index + 1}>
                                <td>{index + 1}</td>
                            </tr>
                        })
                    } */}
                </tbody>
            </table>
        </div>
    );
};

export default Payments;