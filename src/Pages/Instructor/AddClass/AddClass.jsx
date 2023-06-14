import { useContext } from 'react';
import './AddClass.css'
import { AuthContext } from '../../../providers/AuthProvider';
import { useForm } from 'react-hook-form';
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';
import { Helmet } from "react-helmet";
const AddClass = () => {
    const {user} = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors }} = useForm();
    const apiKey = import.meta.env.VITE_IMAGE;
    const imageHostingUrl = `https://api.imgbb.com/1/upload?key=${apiKey}`;
    const formData = new FormData();
    const navigate = useNavigate();

    const handleForm = ({name,email,title,image, seat, price}) => {
        // console.log(image[0]);
        formData.append("image",image[0]) ;
        fetch(imageHostingUrl,{
            method: 'POST',
            body: formData,
        })
        .then(imageResponse => imageResponse.json())
        .then(imageData => {
            console.log(imageData);
            const insertData = {
                name: name,
                email : email,
                title : title,
                image : [
                    imageData.data.display_url,
                    imageData.data.delete_url,
                    imageData.data.thumb.url,
                ],
                seat : parseInt(seat),
                price : parseInt(price),
                totalStudent : 0,
                status : 'pending'
            }
            console.log(insertData);
            if(imageData.success){
                fetch('https://frame-and-focus.vercel.app/class',{
                method : 'POST',
                headers : {
                    'Content-Type': 'application/json',
                    'authorization' : localStorage.getItem('phero-assignment-token')
                },
                body : JSON.stringify(insertData)
            })
            .then(response => response.json())
            .then(data => {
                    if(data.insertedId){
                        Swal.fire({
                            icon: 'success',
                            title: 'Done!!!',
                            text: 'Your Add Class request sended to Admin!',
                        })
                        navigate('/dashboard');
                    }
                })
            }
        });    
    }

    return (
        <div className="container form-container">
            <Helmet>
                <title> Instructor | Add Class</title>
            </Helmet>
            <form onSubmit={handleSubmit(handleForm)} className="form-control">
                <h1 className="fw-bolder fs-1 text-center my-5">Class Add Form</h1>
                <div className="row">
                    <div className="col-lg-6 col-sm-12">
                        <div className="form-group my-1">
                            <label htmlFor="name">Instructor Name</label>
                            <input type="text" {...register('name', {required: true})} readOnly defaultValue={user.displayName} className="form-control" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <div className="form-group my-1">
                            <label htmlFor="email">Instructor Email</label>
                            <input type="email" {...register('email', {required: true})} readOnly defaultValue={user.email} className="form-control" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <div className="form-group my-1">
                            <label htmlFor="title">Class Title</label>
                            <input type="text" {...register('title', {required: true})} className="form-control" />
                            {errors.title?.type === 'required' && <p className="my-1 text-danger">Title is required</p>}
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <div className="form-group my-1">
                            <label htmlFor="title">Class Banner Image</label>
                            <input type="file" {...register('image', {required: true})} className="form-control" />
                            {errors.image?.type === 'required' && <p className="my-1 text-danger">Image is required</p>}
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <div className="form-group my-1">
                            <label htmlFor="title">Total Seat</label>
                            <input type="text" {...register('seat', {required: true})} className="form-control" />
                            {errors.seat?.type === 'required' && <p className="my-1 text-danger">Available seat count is required</p>}
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <div className="form-group my-1">
                            <label htmlFor="title">Price</label>
                            <input type="text" {...register('price', {required: true})} className="form-control" />
                            {errors.price?.type === 'required' && <p className="my-1 text-danger">Price is required</p>}
                        </div>
                    </div>
                </div>
                <div className="form-group my-2">
                    <button className="add">
                        Add Class
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddClass;