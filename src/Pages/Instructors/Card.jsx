import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import img from '../../assets/images/instructor.png'
const Card = ({instructor}) => {
    // console.log(instructor?.name)
    const {data} = useQuery({
        queryKey: ['class', instructor?.email],
        queryFn: async () => {
            const result = await fetch(`http://localhost:3000/class/${instructor?.email}`);
            return result.json();
        }
    })
    console.log("instructors class",data?.length)
    return (
        <div className="row mb-1 p-2 rounded">
            <div>
                <div className="col-12">
                    <div className="row">
                        <div className="col-lg-4">
                            <img src={img} className="img-fluid img-thumbnail p-4" style={{width:"25rem"}} alt="" />
                        </div>
                        <div className="col-lg-8 mt-4" >
                            <h2 className="my-3 fw-bolder"><i className="fa-solid fa-chalkboard-user fs-4 mx-3"></i>{instructor?.name}</h2>
                            <h5 className="my-3"> <i className="fa-solid fa-envelope mx-3"></i> {instructor?.email} </h5>
                            <p className="my-2 mx-3 pb-3"><span className="fw-bolder">Classes Taken : </span> {data?.length} </p>
                            <Link className="mx-3 select-btn my-5">View All Class</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;