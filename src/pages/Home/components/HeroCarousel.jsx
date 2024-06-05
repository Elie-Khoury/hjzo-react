import s from '../styles/HeroCarousel.module.css';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import court from "../../../assets/court1.jpg"
import court2 from "../../../assets/court2.jpg"
import court3 from "../../../assets/court3.jpg"
 
const HeroCarousel = () => {

    const images = [
        {
            id: "1",
            url: court,
        },
        {
            id: "2",
            url: court2,
        },
        {
            id: "3",
            url: court3,
        },
    ];

    return (
        <div className={s.carouselContainer}>
          <Carousel
            className={s.crsl}
            autoPlay
            infiniteLoop
            showArrows={false}
            showIndicators={false}
            showThumbs={false}
            showStatus={false}
            transitionTime={750}
            interval={3000}
          >
            {images.map((image) => (
              <img src={image.url} key={image.id} />
            ))}
          </Carousel>
        </div>
    )
};

export default HeroCarousel;