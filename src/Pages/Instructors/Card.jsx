import { Link } from 'react-router-dom';
import image from '../../../src/assets/images/man.jpg'
const Card = () => {
    return (
        <div className="row mb-1 p-2 rounded">
            <div>
                <div className="col-12">
                    <div className="row">
                        <div className="col-lg-4">
                            <img src={image} className="img-fluid img-thumbnail" style={{width:"45rem"}} alt="" />
                        </div>
                        <div className="col-lg-8 mt-4" >
                            <h2 className="my-3 fw-bolder"><i className="fa-solid fa-chalkboard-user fs-4 mx-3"></i>John Doe</h2>
                            <h5 className="my-3"> <i className="fa-solid fa-envelope mx-3"></i> johndoe@gmail.com</h5>
                            <p className="my-2 mx-3 pb-3"><span className="fw-bolder">Classes Taken : </span> 15 </p>
                            <Link className="mx-3 select-btn my-5">View All Class</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;