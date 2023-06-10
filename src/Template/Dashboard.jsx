import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import Sidenav from "../Components/Sidenav/Sidenav";
import { AuthContext } from "../providers/AuthProvider";
import { useContext } from 'react';
import Loader from "../Components/Loader/Loader";

const Dashboard = () => {
    const {loader} = useContext(AuthContext);
    return (
        <>  
            {
                loader?
                <Loader></Loader>
                :
                <>
                    <Header></Header>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-9">
                                    <Outlet></Outlet>
                                </div>
                                <div className="col-lg-3">
                                    <Sidenav></Sidenav>
                                </div>
                            </div>
                        </div>
                    <Footer></Footer>
                </>
            }
            
        </>
    );
};

export default Dashboard;