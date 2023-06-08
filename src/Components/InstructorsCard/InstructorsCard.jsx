import image from '../../assets/images/instructor.jpg';
const InstructorsCard = () => {
    return (
        <div className="col">
            <div className="card p-2">
            <img src={image} style={{height:"400px"}} className="card-img-top img-thumbnail" />
            <div className="card-body">
                <h5 className="card-title fw-bolder fs-3">John Doe</h5>
                <p className="card-text">Photography Instructor</p>
                <div className="d-flex justify-content-between align-items-center">
                    <div className="info">Years of experience:  5 yrs</div>
                    <div className="info"> <img src="https://i.ibb.co/7NqPNJy/thumbs.png" style={{width:"30px"}} alt="" /> 50</div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default InstructorsCard;