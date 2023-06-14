import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import Sidenav from "../Components/Sidenav/Sidenav";
import { AuthContext } from "../providers/AuthProvider";
import { useContext } from 'react';
import Loader from "../Components/Loader/Loader";
import { Helmet } from "react-helmet";
const Dashboard = () => {
    const {loader} = useContext(AuthContext);
    return (
        <>  
        <Helmet>
            <title> Frame & Focus | Dashboard</title>
        </Helmet>
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
                    <ScrollRestoration></ScrollRestoration>
                </>
            }
            
        </>
    );
};

export default Dashboard;