import { NavLink } from "react-router-dom";
import './ActiveLinks.css';
const ActiveLinks = ({to, children}) => {
    return (
        <div>
            <NavLink
                to={to}
                className={({ isActive }) =>
                    isActive
                    ? "active nav-link"
                    : "nav-link"
                }
            >
                {children}
            </NavLink>
        </div>
    );
};

export default ActiveLinks;