import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import Sidenav from "../Components/Sidenav/Sidenav";

const Dashboard = () => {
    return (
        <>  
            <Header></Header>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <Outlet></Outlet>
                    </div>
                    <div className="col-lg-4">
                        <Sidenav></Sidenav>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Dashboard;