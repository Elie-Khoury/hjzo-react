import s from "./styles/Home.module.css";
import Header from "./components/Header.jsx";
import HeroCarousel from "./components/HeroCarousel.jsx";
import SportBox from "./components/SportBox.jsx";
import CarouselSection from "./components/CarouselSection.jsx";
import Navbar from "../../global-Components/Navbar.jsx";

function Home(){

    return(
        <>
            <Header /> 
            <HeroCarousel />

            <div className={s.sportBoxList}>
                <SportBox 
                    id="1"
                    icon="https://img.icons8.com/?size=100&id=12969&format=png&color=000000"
                    title="Basketball"
                />
                <SportBox 
                    id="2"
                    icon="https://img.icons8.com/?size=100&id=58&format=png&color=000000"
                    title="Football"
                />
                <SportBox 
                    id="3"
                    icon="https://img.icons8.com/?size=100&id=38ERfqnwAMdo&format=png&color=000000"
                    title="Padel"
                />
                <SportBox 
                    id="4"
                    icon="https://img.icons8.com/?size=100&id=16960&format=png&color=000000"
                    title="Volleyball"
                />
                <SportBox 
                    id="5"
                    icon="https://img.icons8.com/?size=100&id=16953&format=png&color=000000"
                    title="Tennis"
                />
                <SportBox 
                    id="6"
                    icon="https://img.icons8.com/?size=100&id=38ERfqnwAMdo&format=png&color=000000"
                    title="Basketball"
                />
            </div>
            <CarouselSection />
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Navbar />
        </>
    )
}

export default Home;