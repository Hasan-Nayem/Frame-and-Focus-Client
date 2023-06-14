import { useLoaderData } from 'react-router-dom';
import image from '../../assets/images/teachers.png';
import Card from './Card';
import './Instructors.css'
import { Helmet } from "react-helmet";
const Instructors = () => {
    const instructors = useLoaderData();
    return (
        <>
        <Helmet>
            <title> Frame & Focus | Instructors</title>
        </Helmet>
            <div className='mt-5 title-section'>
                <div className="container ">
                    <div className="row">
                        <div className="col-lg-4 col-sm-12" style={{marginTop: "45px"}}>
                            <h1 className="fw-bolder fs-1 text-center">Our Instructors</h1>
                            <p>Photography instructors are responsible for teaching students at nearly every academic level how to shoot pictures, develop film, make prints, edit digital images, and evaluate finished photos. They work in high schools, teaching students the basics of shooting and printing black-and-white photography.</p>
                            <strong>A good photography instructor should have the following qualities:</strong>
                            <ul type='disc'>
                                <li><strong>Passion : </strong>A good photography instructor should be passionate about photography and should be able to inspire their students to be passionate about it as well.</li>
                                <li><strong>Patience : </strong>Photography can be a difficult subject to learn, so a good photography instructor should be patient with their students.</li>
                                <li><strong>Creativity : </strong>A good photography instructor should be creative and should be able to help their students develop their own creative vision.</li>
                                <li><strong>Technical knowledge : </strong>A good photography instructor should have a strong technical knowledge of cameras, lighting, and other equipment</li>
                            </ul>
                        </div>
                        <div className="col-lg-8 p-3">
                            <img src={image} className='img-fluid' alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <section className='all-instructors'>
                <div className="container">
                    {
                        instructors.map(instructor => <Card key={instructor._id} instructor={instructor}></Card>)
                    }
                </div>
            </section>  
        </>
    );
};

export default Instructors;