import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Loader from "../Components/Loader/Loader";

const Main = () => {
    const {loader} = useContext(AuthContext);
    return (
        <>
            {
                loader? 
                 <Loader/>
                :
                <>
                    <Header></Header>
                        <Outlet></Outlet>
                    <Footer></Footer>
                </>
            }
            <ScrollRestoration></ScrollRestoration>
        </>
    );
};

export default Main;