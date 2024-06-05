import s from "../styles/Navbar.module.css";
import logo from "../../../assets/logo.png"

function Navbar(){  

    return(
        <nav>
            <div className={s.logoContainer}>
                <img src={logo} alt="BT Logo" />
            </div>
            
            <div className={s.navPaths}>
                <a href="">HOME</a>
                <a href="">DISCOGRAPHY</a>
                <a href="">MERCH</a>
                <a href="">MEMORIES</a>
                <a href="">CONTACT</a>
            </div>
            <div className={s.hamburgerMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    )
}

export default Navbar;