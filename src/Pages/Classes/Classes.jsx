import { useQuery } from '@tanstack/react-query';
import ClassesCard from '../../Components/ClassesCard/ClassesCard';
import image from '../../assets/images/research.png';
import './Classes.css';
import Loader from '../../Components/Loader/Loader';
import { Helmet } from "react-helmet";
const Classes = () => {
    
    // https://frame-and-focus.vercel.app/class?status=approved
    const {data : approvedClass = {}, refetch, isLoading} = useQuery({
        queryKey: ['class'],
        queryFn: async () => {
            const result = await fetch(`https://frame-and-focus.vercel.app/class?status=approved`);
            return result.json();
        }
    })
    // console.log(approvedClass);


    return (
        <>
        
        <Helmet>
            <title> Frame & Focus | Class</title>
        </Helmet>
            <div className='mt-5 title-section'>
                <div className="container ">
                    <div className="row">
                        <div className="col-lg-4 col-sm-12 p-3 informations">
                            <h1 className="fw-bolder fs-1 text-center">Our Research And Classes</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy.</p>
                            <button className='get-btn'>Get In Touch</button>
                        </div>
                        <div className="col-lg-8 p-3">
                            <img src={image} className='img-fluid' alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <section className="container all-classes">
                <h1 className="text-center title fw-bolder">Our <span className="special">Classes</span></h1>
                {
                    isLoading? <Loader></Loader> :
                    approvedClass.map(classes=><ClassesCard key={classes._id} 
                        id={classes._id}
                        name={classes.name}
                        title={classes.title}
                        image={classes.image[0]}
                        price={classes.price}
                        seat={classes.seat}
                        refetch={refetch}
                    ></ClassesCard>)
                }
            </section>
        </>
    );
};

export default Classes;