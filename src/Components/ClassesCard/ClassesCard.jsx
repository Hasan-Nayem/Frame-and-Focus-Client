import { Link } from 'react-router-dom';
import image from '../../assets/images/man.jpg'
import './ClassesCard.css'
const ClassesCard = () => {
    return (
        // <div className="row mb-3 p-4 rounded" style={{border: '3px solid #E74040'}}>
        <div className="row mb-1 p-2 rounded">
            <div>
                <div className="col-12">
                    <div className="row">
                        <div className="col-lg-4">
                            <img src={image} className="img-fluid img-thumbnail" style={{width:"45rem"}} alt="" />
                        </div>
                        <div className="col-lg-8">
                            <h2 className="my-3 fw-bolder"><i className="fa-solid fa-chalkboard-user fs-4 mx-3"></i>John Doe</h2>
                            <h5 className="my-3"> <i className="fa-solid fa-camera mx-3"></i> Wild Photography</h5>
                            <p className="my-2 mx-3"><span className="fw-bolder">Details : </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quod repellendus dolorum eos quae. Ipsum officia quae, quod commodi adipisci rerum doloribus, omnis nisi architecto, rem sed ipsam labore veniam?
                            Corrupti ad aspernatur quidem impedit. </p>
                            <div className="d-flex my-2">
                                <p className="mx-3"><span className="fw-bolder">$ : </span>4500/-</p>
                                <p>Available Seats : 20</p>
                            </div> 
                            <Link className="mx-3 select-btn my-2">Select This Class</Link>
                            <Link className="mx-3 select-btn my-2">Selected<i className="fa-solid fa-circle-check ms-2"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClassesCard;