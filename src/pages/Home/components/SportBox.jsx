/* eslint-disable react/prop-types */
import s from "../styles/SportBox.module.css"


function SportBox(props){

    return(
        <div className={s.container} key={props.id}>
            <div className={s.iconContainer}>
                <img src={props.icon} alt="" />
            </div>
            <div className={s.titleContainer}>
                <h3>{props.title}</h3>
            </div>
        </div>
    )
}

export default SportBox;