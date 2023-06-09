import Slider from "../Slider/Slider";
import './Home.css';
import icon1 from '../../../assets/icon/pc.png'
import icon2 from '../../../assets/icon/telescope.png'
import ClassesCard from "../../../Components/ClassesCard/ClassesCard";
import InstructorsCard from "../../../Components/InstructorsCard/InstructorsCard";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const Home = () => {
    const {user} = useContext(AuthContext);
    console.log(user);

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
                    <h1 className="my-3 fw-bold fs-3">Take A Look At Which Classes Are Most Liked By Everyone</h1>
                    
                        <ClassesCard></ClassesCard>
                        <ClassesCard></ClassesCard>
                        <ClassesCard></ClassesCard>
                        <ClassesCard></ClassesCard>
                        <ClassesCard></ClassesCard>
                        <ClassesCard></ClassesCard>
                </section>
                <section className="popular-instructors text-center">
                    <p className="text-start" style={{color: "#96BB7C", fontSize: '18px', fontWeight : "800"}}>Team</p>
                    <h1 className="text-start my-3 fw-bold fs-3">Get Quality Education</h1>
                    <div className="text-start row row-cols-1 row-cols-md-2 g-4">
                        <InstructorsCard></InstructorsCard>
                        <InstructorsCard></InstructorsCard>
                        <InstructorsCard></InstructorsCard>
                        <InstructorsCard></InstructorsCard>
                        <InstructorsCard></InstructorsCard>
                        <InstructorsCard></InstructorsCard>
                    </div>
                    <button className="my-3 show-btn">Show More</button>
                </section>
            </div>
            <section className="newsletter">
               <div className="container text-center">
                    <p className="fw-bolder top-title" style={{color: "#96BB7C"}}>Newsletter</p>
                    <h3 className="fw-bolder mb-3 title">Watch Our Classes</h3>
                    <p className="mb-3 w-50 mx-auto description" style={{color: "#737373"}}>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics. </p>
               </div>
               <div className="text-center container w-50 my-5 input-div">
                    <div className="input-group mb-3">
                        <input type="text" className="form-control p-3" placeholder="Your Email Address" aria-label="" aria-describedby="basic-addon2" />
                        <span className="input-group-text" style={{backgroundColor: "#96BB7C" , color: "#fff"}} id="basic-addon2">Subscribe</span>
                    </div>
               </div>
            </section>
        </>
    );
};

export default Home;