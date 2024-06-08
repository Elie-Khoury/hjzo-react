import s from "../styles/Card.module.css";
import courtImage from "../../../assets/court1.jpg";

function Card(){

    return(
        <div className={s.cardContainer}>
            <div className={s.imgContainer}>
                <img src={courtImage} alt="" />
            </div>
            <div className={s.cardContent}>
                <div className={s.courtName}>
                    <h1>Court Name</h1>
                </div>
                <div className={s.courtInfo}>
                    <h2>Location</h2>
                    <h2>Price: 40$/hr</h2>
                </div>
            </div>
        </div>
    )
}

export default Card;