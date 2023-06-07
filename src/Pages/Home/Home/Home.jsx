import Slider from "../Slider/Slider";
import './Home.css';
import icon1 from '../../../assets/icon/pc.png'
import icon2 from '../../../assets/icon/telescope.png'
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
                            <p className="mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui impedit recusandae, doloribus fuga omnis iusto odio cupiditate quia autem neque eius voluptatem ipsa laboriosam alias. Officiis debitis incidunt consectetur! Quidem.</p>
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
                
            </div>
        </>
    );
};

export default Home;