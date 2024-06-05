import court from "../../../assets/court1.jpg"
import court2 from "../../../assets/court2.jpg"
import court3 from "../../../assets/court3.jpg"
import s from "../styles/CarouselSection.module.css";
import { useEffect } from "react";

function CarouselSection(){

  useEffect(() => {
    const script = document.createElement('script');

    script.src = "https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, [])

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
    {
        id: "4",
        url: court,
    },
    {
        id: "5",
        url: court2,
    },
    {
      id: "6",
      url: court3,
    },
  ];
  
  
  return(
    <>
      <div className={s.crslSection}>
        <div className={s.text}>
          <h1>New Courts 🎇</h1>
          <h2>The latest courts available on HJZO!</h2>
        </div>
        <swiper-container className="mySwiper" pagination="true" pagination-clickable="true" slides-per-view="2.5"
          space-between="20" free-mode="true"
          >
            {images.map((image) => (
              <>
                <swiper-slide>
                  <img src={image.url} key={image.id} />
                </swiper-slide>
              </>
            ))}
        </swiper-container>
      </div>
      <div className={s.crslSection}>
        <div className={s.text}>
          <h1>Courts Nearby 🗺</h1>
          <h2>Checkout these courts near your location.</h2>
        </div>
        <swiper-container class="mySwiper" pagination="true" pagination-clickable="true" slides-per-view="2"
          space-between="20" free-mode="true"
          >
            {images.map((image) => (
              <>
                <swiper-slide>
                  <img src={image.url} key={image.id} />
                </swiper-slide>
              </>
            ))}
        </swiper-container>
      </div>
    </>
    
  //   <swiper-container class="mySwiper" pagination="false" pagination-clickable="false" slides-per-view="3"
  //   space-between="30" free-mode="true">
  //   <swiper-slide>Slide 1</swiper-slide>
  //   <swiper-slide>Slide 2</swiper-slide>
  //   <swiper-slide>Slide 3</swiper-slide>
  //   <swiper-slide>Slide 4</swiper-slide>
  //   <swiper-slide>Slide 5</swiper-slide>
  //   <swiper-slide>Slide 6</swiper-slide>
  //   <swiper-slide>Slide 7</swiper-slide>
  //   <swiper-slide>Slide 8</swiper-slide>
  //   <swiper-slide>Slide 9</swiper-slide>
  // </swiper-container>
      
  )
}

export default CarouselSection;