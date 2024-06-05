import s from "./styles/Home.module.css";
import Navbar from "./components/Navbar.jsx";
import HeroCarousel from "./components/HeroCarousel.jsx";
import SportBox from "./components/SportBox.jsx";
import CarouselSection from "./components/CarouselSection.jsx";

function Home(){

    return(
        <>
            <Navbar /> 
            <HeroCarousel />
            <div className={s.sportBoxList}>
                <SportBox 
                    id="1"
                    icon="https://img.icons8.com/?size=100&id=38ERfqnwAMdo&format=png&color=000000"
                    title="Basketball"
                />
                <SportBox 
                    id="2"
                    icon="https://img.icons8.com/?size=100&id=38ERfqnwAMdo&format=png&color=000000"
                    title="Basketball"
                />
                <SportBox 
                    id="3"
                    icon="https://img.icons8.com/?size=100&id=38ERfqnwAMdo&format=png&color=000000"
                    title="Basketball"
                />
                <SportBox 
                    id="4"
                    icon="https://img.icons8.com/?size=100&id=38ERfqnwAMdo&format=png&color=000000"
                    title="Basketball"
                />
                <SportBox 
                    id="5"
                    icon="https://img.icons8.com/?size=100&id=38ERfqnwAMdo&format=png&color=000000"
                    title="Basketball"
                />
                <SportBox 
                    id="6"
                    icon="https://img.icons8.com/?size=100&id=38ERfqnwAMdo&format=png&color=000000"
                    title="Basketball"
                />
            </div>
            <CarouselSection />
        </>
    )
}

export default Home;