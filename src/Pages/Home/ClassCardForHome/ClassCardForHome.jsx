import { Link } from "react-router-dom";

const ClassCardForHome = ({data}) => {
    return (
        <div className="row mb-1 p-2 rounded">
            <div>
                <div className="col-12">
                    <div className="row">
                        <div className="col-lg-4">
                            <img src={data.image[0]} className="img-fluid img-thumbnail" style={{width:"45rem"}} alt="" />
                        </div>
                        <div className="col-lg-8" >
                            <h2 className="my-3 fw-bolder"><i className="fa-solid fa-chalkboard-user fs-4 mx-3"></i>  {data.name} </h2>
                            <h5 className="my-3"> <i className="fa-solid fa-camera mx-3"></i> {data.title} </h5>
                            <p className="my-2 mx-3"><span className="fw-bolder">Details : </span>Lorem ipsum dolor sit samet consectetur adipisicing elit. Distinctio quod repellendus dolorum eos quae. Ipsum officia quae, quod commodi adipisci rerum doloribus, omnis nisi architecto, rem sed ipsam labore veniam?
                            Corrupti ad aspernatur quidem impedit. </p>
                            <div className="d-flex my-2">
                                <p className="mx-3"><span className="fw-bolder">$ : </span> {data.price} /-</p>
                                <p>Available Seats : {data.seat} </p>
                            </div> 
                            <Link to='/classes' className="mx-3 select-btn my-2">Go To Classes</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClassCardForHome;