import image from '../../assets/images/instructor.png';
const InstructorsCard = ({data}) => {
    return (
        <div className="col" style={{width:"350px"}}>
            <div className="card p-2">
            <img src={image} style={{width:"250px"}} className="card-img-top mx-auto" />
            <div className="card-body">
                <h5 className="card-title fw-bolder fs-4">{data.name}</h5>
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