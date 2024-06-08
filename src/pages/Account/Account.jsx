import s from "./styles/Account.module.css";
import ProfileContent from "./components/ProfileContent.jsx";

function Account(){

    const info = {
        name: "Elie El Khoury",
        phone: 79148055,
        email: "elie.c.khoure@gmail.com",
        birthDate: "Jan 9, 2002",
        password: "password",
        picture: "",
    }

    return(
        <div className={s.container}>
            <div className={s.header}>
                <div className={s.addPhotoContainer}>
                    <h1>Add Photo</h1>
                </div>
            </div>
            <div className={s.contentContainer}>
                <ProfileContent 
                        info={info} 
                />
            </div>
            <div className={s.btnContainer}>
                <button><h2>Edit Profile</h2></button>
            </div>
        </div>
    )
}

export default Account;