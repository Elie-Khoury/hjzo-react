import s from "../styles/Header.module.css";
import logo from "../../../assets/hjzo-logo.jpg"

function Navbar(){  

    return(
        <div className={s.header}>
            <div className={s.logoContainer}>
                <img src={logo} alt="BT Logo" />
            </div>
            
            <div className={s.iconContainer}>
                <img src="https://img.icons8.com/?size=100&id=11642&format=png&color=000000" alt="" />
            </div>
        </div>
    )
}

export default Navbar;