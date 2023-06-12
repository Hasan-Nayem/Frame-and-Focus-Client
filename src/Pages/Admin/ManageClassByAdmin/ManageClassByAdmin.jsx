import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import './ManageClassByAdmin.css';
const ManageClassByAdmin = () => {
    const {data : allClass = {}, refetch, isLoading} = useQuery({
        queryKey: ['class'],
        queryFn: async () => {
            const result = await fetch(`http://localhost:3000/class/`,{
                method : 'GET',
                headers : {
                    authorization: localStorage.getItem('phero-assignment-token')
                }
            });
            return result.json();
        }
    })

    const handleApproved = (id) => {
        console.log('Approved', id);
        Swal.fire({
            title: 'Are you sure to Approve this class?',
            icon: 'info',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, approve this!'
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/class/${id}?status=approved`,{
                    method: 'PUT',
                    headers: {
                        authorization: localStorage.getItem('phero-assignment-token')
                    },
                })
                .then(response => response.json())
                // modifiedCount
                .then(data => {
                    if(data.modifiedCount === 1){
                        refetch();
                        Swal.fire(
                            'Done!',
                            'This class is now approved by admin',
                            'success'
                          )
                    }
                })
              
            }
          })
    }

    // console.log(isLoading);
    const handleDeny = (e) => {
        e.preventDefault();
        // console.log(allClass)
        const form = e.target;
        const id = form.id.value;
        const feedback = form.feedback.value;
        console.log(id, {feedback});
        Swal.fire({
            title: 'Are you sure to deny this class?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, deny this!'
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/class/${id}`,{
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        authorization: localStorage.getItem('phero-assignment-token')
                    },
                    body: JSON.stringify({feedback})
                })
                .then(response => response.json())
                // modifiedCount
                .then(data => {
                    if(data.modifiedCount === 1){
                        refetch();
                        Swal.fire(
                            'Done!',
                            'This class is now denied by admin',
                            'success'
                          )
                    }
                })
              
            }
          })
        
        
    }
    return (
        <div className="my-5">
            {
                !isLoading &&
                allClass.map(classes =><>
                    <div className="row mb-1 p-2 rounded">
                        <div>
                            <div className="col-12">
                                <div className="row">
                                    <div className="col-lg-4">
                                        {
                                            classes.image[0]?
                                            <img src={classes.image[0]} className="img-fluid img-thumbnail" style={{width:"45rem"}} alt="" />
                                            : "Image Not Uploaded."
                                        }
                                        
                                    </div>
                                    <div className="col-lg-8" >
                                        <h2 className="my-3 fw-bolder"><i className="fa-solid fa-chalkboard-user fs-4 mx-3"></i>{classes.name}</h2>
                                        <h5 className="my-3"> <i className="fa-solid fa-camera mx-3"></i> {classes.title}</h5>
                                        <p className="my-2 mx-3"><span className="fw-bolder">Details : </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quod repellendus dolorum eos quae. Ipsum officia quae, quod commodi adipisci rerum doloribus, omnis nisi architecto, rem sed ipsam labore veniam?
                                        Corrupti ad aspernatur quidem impedit. </p>
                                        <div className="d-flex my-2">
                                            <p className="mx-3"><span className="fw-bolder">$ : </span>{classes.price}/-</p>
                                            <p>Available Seats : {classes.seat}</p>
                                            <p className="mx-3">
                                                Status -  
                                                {classes.status === 'pending' && <span className="fw-bolder badge bg-warning"> Pending</span> }
                                                {classes.status === 'approved' && <span className="fw-bolder badge bg-success"> Approved</span> }
                                                {classes.status === 'denied' && <span className="fw-bolder badge bg-danger"> Denied</span> }
                                            </p>
                                            <label htmlFor=""></label>
                                        </div> 
                                        {
                                            classes.status === 'pending' && 
                                            <>
                                                <button onClick={()=>{handleApproved(classes._id)}} className="btn btn-success px-2 form-control">Approve </button>
                                                <form onSubmit={handleDeny} className="form-control my-2 p-2">
                                                    <input type="hidden" name="id" defaultValue={classes._id} />
                                                    <textarea className="form-control my-2" name="feedback" cols="30" rows="5" placeholder="Feedback"></textarea>
                                                    {/* <input type="text" className="form-control my-2" name="feedback" id="" placeholder="Feedback"/> */}
                                                    <button className="btn btn-danger px-2 my-2 form-control"
                                                >Deny</button>
                                                </form>
                                            </>
                                        }
                                        {/* {
                                            classes.status === 'approved' && 
                                            <>
                                                <button className="btn btn-warning px-2">Pending </button>
                                                <button className="btn btn-danger px-2 mx-3">Deny </button>
                                            </>
                                        } */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>)
            }
        </div>  
    );
};

export default ManageClassByAdmin;