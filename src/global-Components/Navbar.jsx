import s from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar(){

    const navData = [
        {text: "Home", path: "/hjzo-react/", 
            icon: "https://img.icons8.com/?size=100&id=14096&format=png&color=707070",
            iconActive: "https://img.icons8.com/?size=100&id=14096&format=png&color=e61c34"},
        {text: "Search", path: "/hjzo-react/search", 
            icon: "https://img.icons8.com/?size=100&id=132&format=png&color=707070",
            iconActive: "https://img.icons8.com/?size=100&id=132&format=png&color=e61c34"},
        {text: "Map", path: "/hjzo-react/map", 
            icon: "https://img.icons8.com/?size=100&id=3723&format=png&color=707070",
            iconActive: "https://img.icons8.com/?size=100&id=3723&format=png&color=e61c34"},
        {text: "Bookings", path: "/hjzo-react/bookings", 
            icon: "https://img.icons8.com/?size=100&id=26065&format=png&color=707070",
            iconActive: "https://img.icons8.com/?size=100&id=26065&format=png&color=e61c34"},
        {text: "Account", path: "/hjzo-react/account", 
            icon: "https://img.icons8.com/?size=100&id=2oRq7VXjDba7&format=png&color=707070",
            iconActive: "https://img.icons8.com/?size=100&id=2oRq7VXjDba7&format=png&color=e61c34"},
    ]
    
    const [isActive, setActive] = useState(0);

    return(
        <nav>
            {navData.map((data, key) => {
                return(
                    <Link 
                        key={key} 
                        to={data.path} 
                        className={s.navPathContainer} 
                        onClick={() => setActive(key)}
                        >
                        <div className={s.iconContainer}>
                            <img src={isActive == key ? data.iconActive : data.icon} alt=""  />
                        </div>
                        <div className={s.textContainer}>
                            <h3 className={isActive == key ? s.active : null}>{data.text}</h3>
                        </div>
                    </Link>
                )
            })}
        </nav>
    )
}

export default Navbar;