import Slider from "../Slider/Slider";
import './Home.css';
import icon1 from '../../../assets/icon/pc.png'
import icon2 from '../../../assets/icon/telescope.png'
import image from '../../../assets/images/man.jpg'
const Home = () => {

    return (
        <>
            <Slider></Slider>
            <div className="container">
                <section className="package-section">
                    <div className="row ">
                        <div className="col-lg col-sm-12">
                            <hr className="bar" />
                            <h1 className="package-title my-4">Appropriable Packages</h1>
                            <p className="mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui impedit recusandae, doloribus fuga omnis iusto odio cupiditate quia autem neque eius voluptatem ipsa laboriosam alias.</p>
                            <small style={{color: "#96BB7C", fontSize: '16px', fontWeight : "600"}}>Learn More</small>
                        </div>
                        <div className="col-lg col-sm-12">
                            <div className="card-wrapper d-flex justify-content-between m-2">
                                <div className="cards shadow p-4 m-1">
                                    <img src={icon1} className="mb-3" style={{width: "80px"}} alt="" />
                                    <h4 className="fw-bolder">Certified Teacher</h4>
                                    <hr className="bar" />
                                    <p className="text-muted bold">The gradual accumulation of information about </p>
                                </div>
                                <div className="cards shadow p-4 m-1">
                                    <img src={icon2} className="mb-3" style={{width: "80px"}} alt="" />
                                    <h4 className="fw-bolder">Expert Instruction</h4>
                                    <hr className="bar" />
                                    <p className="text-muted bold">The gradual accumulation of information about </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="popular-classes">
                    <p style={{color: "#96BB7C", fontSize: '18px', fontWeight : "800"}}>Popular Classes</p>
                    <h1 className="my-3 fw-bold fs-3">Take a look at which classes are most liked by everyone</h1>
                    <div className="row my-3 my-5 p-4 rounded" style={{border: '3px solid #E74040'}}>
                        <div className="col-12">
                            <div className="row">
                                <div className="col-lg-4">
                                    <img src={image} className="img-fluid img-thumbnail" style={{width:"45rem"}} alt="" />
                                </div>
                                <div className="col-lg-8">
                                    <h2 className="my-2 fw-bolder"><i className="fa-solid fa-chalkboard-user fs-4 mx-3"></i>John Doe</h2>
                                    <h5 className="my-2"> <i className="fa-solid fa-camera mx-3"></i> Wild Photography</h5>
                                    <p className="my-2 mx-3"><span className="fw-bolder">Details : </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quod repellendus dolorum eos quae. Ipsum officia quae, quod commodi adipisci rerum doloribus, omnis nisi architecto, rem sed ipsam labore veniam?
                                    Corrupti ad aspernatur quidem impedit. Cumque mollitia aspernatur earum amet maxime eveniet, rerum ratione! Cum autem quod eius ab harum adipisci ut, corporis animi deserunt voluptatum sit suscipit natus fuga!</p>
                                    <p className="mx-4"><span className="fw-bolder">$ : </span>4500/-</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
            </div>
        </>
    );
};

export default Home;