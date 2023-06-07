import './Slider.css';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { Link } from 'react-router-dom';

import slider1 from '../../../assets/slider/1.jpg'
import slider2 from '../../../assets/slider/2.jpg'
import slider3 from '../../../assets/slider/3.jpg'

const Slider = () => {
    
    return (
        <>
        <Swiper
                spaceBetween={30}
                centeredSlides={true}
                // autoplay={{
                // delay: 2500,
                // disableOnInteraction: false,
                // }}
                pagination={{
                clickable: true,
                }}
                navigation={false}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide className='mb-4'>
                    <div className="row p-4">
                        <div className="col-lg-6 col-sm-12 d-flex flex-column align-items-center">
                            <p className="welcome fw-bold title" style={{color: "#96BB7C"}}>Welcome</p>
                            <h1 className="text-center w-50 fw-bolder heading">
                                Best Learning Opportunities
                            </h1>
                            <p className='my-4 bottom-text'>Our goal is to make online education work for everyone</p>
                            <div className='my-4'>
                                <Link className="join-us mx-2 links">Join Us</Link>
                                <Link className="learn-more mx-2 links">Learn More</Link>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-12">
                            <img src={slider1} style={{borderRadius: '8px'}} className='img-fluid' alt="" />
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className='mb-4'>
                    <div className="row p-4">
                        <div className="col-lg-6 col-sm-12 d-flex flex-column align-items-center">
                            <p className="welcome fw-bold title-2" style={{color: "#96BB7C"}}>Explore</p>
                            <h1 className="text-center w-50 fw-bolder heading-2">
                                Your New Skill
                            </h1>
                            <p className='my-4 bottom-text-2'>We aim to make your summer vacation educational</p>
                            <div className='my-4'>
                                <Link className="learn-more  links-2">View Classes</Link>
                                <Link className="mx-5 fw-bolder links-2" style={{textDecoration : 'none', color : '#96BB7C'}}>Instructors</Link>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-12">
                            <img src={slider2} style={{borderRadius: '8px'}} className='img-fluid' alt="" />
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className='mb-4'>
                    <div className="row p-4">
                        <div className="col-lg-6 col-sm-12 d-flex flex-column align-items-center">
                            <p className="welcome fw-bold" style={{color: "#96BB7C"}}>Quote of the day,</p>
                            <h1 className="text-center w-50 fw-bolder header-3">
                                “A photograph is the pause button of life.”
                            </h1>
                            <p className='my-2'>- Author Unknown</p>
                            <div className='my-4'>
                                <Link className="learn-more  links-2">View Classes</Link>
                                <Link className="mx-5 fw-bolder links-2" style={{textDecoration : 'none', color : '#96BB7C'}}>Instructors</Link>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-12">
                            <img src={slider3} style={{borderRadius: '8px'}} className='img-fluid' alt="" />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
        
    );
    
};

export default Slider;