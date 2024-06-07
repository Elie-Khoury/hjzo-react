import s from "./Navbar.module.css";

function Navbar(){

    return(
        <nav>
            <div className={s.navPathContainer}>
                <div className={s.iconContainer}>
                    <img src="https://img.icons8.com/?size=100&id=14096&format=png&color=707070" alt="" />
                </div>
                <div className={s.textContainer}>
                    <h3>Home</h3>
                </div>
            </div>
            <div className={s.navPathContainer}>
                <div className={s.iconContainer}>
                    <img src="https://img.icons8.com/?size=100&id=132&format=png&color=707070" alt="" />
                </div>
                <div className={s.textContainer}>
                    <h3>Search</h3>
                </div>
            </div>
            <div className={s.navPathContainer}>
                <div className={s.iconContainer}>
                    <img src="https://img.icons8.com/?size=100&id=3723&format=png&color=707070" alt="" />
                </div>
                <div className={s.textContainer}>
                    <h3>Map</h3>
                </div>
            </div>
            <div className={s.navPathContainer}>
                <div className={s.iconContainer}>
                    <img src="https://img.icons8.com/?size=100&id=26065&format=png&color=707070" alt="" />
                </div>
                <div className={s.textContainer}>
                    <h3>Reservs</h3>
                </div>
            </div>
            <div className={s.navPathContainer}>
                <div className={s.iconContainer}>
                    <img src="https://img.icons8.com/?size=100&id=2oRq7VXjDba7&format=png&color=e61c34" alt="" />
                </div>
                <div className={s.textContainer}>
                    <h3 className={s.active}>Account</h3>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;