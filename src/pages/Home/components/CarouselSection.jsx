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
  
  
  return(
    <>
      <swiper-container class="mySwiper" pagination="false" pagination-clickable="false" slides-per-view="2.5"
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
    </>
  )
}

export default CarouselSection;