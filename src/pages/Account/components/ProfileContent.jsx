import PropTypes from 'prop-types'
import s from "../styles/ProfileContent.module.css";

function ProfileContent(props){

    return(
        <>
            <div className={s.section}>
                <div className={s.iconContainer}>
                    <img src="https://img.icons8.com/?size=100&id=2oRq7VXjDba7&format=png&color=000000" alt="" />
                </div>
                <div className={s.infoContainer}>
                    <h2>{props.info.name}</h2>
                </div>
            </div>
            <div className={s.section}>
                <div className={s.iconContainer}>
                    <img src="https://img.icons8.com/?size=100&id=9659&format=png&color=000000" alt="" />
                </div>
                <div className={s.infoContainer}>
                    <h2>{props.info.phone}</h2>
                </div>
            </div>
            <div className={s.section}>
                <div className={s.iconContainer}>
                    <img src="https://img.icons8.com/?size=100&id=mtfWz20b5AxB&format=png&color=000000" alt="" />
                </div>
                <div className={s.infoContainer}>
                    <h2>{props.info.email}</h2>
                </div>
            </div>
            <div className={s.section}>
                <div className={s.iconContainer}>
                    <img src="https://img.icons8.com/?size=100&id=84997&format=png&color=000000" alt="" />
                </div>
                <div className={s.infoContainer}>
                    <h2>{props.info.birthDate}</h2>
                </div>
            </div>
        </>
    )
}
ProfileContent.propTypes = {
    info: PropTypes.object,
}

export default ProfileContent;