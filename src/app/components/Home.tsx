import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../globals.css";

export default function HomeLanding() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    draggable: false,
    swipe: false,
    touchMove: false,
    arrows: false,
  };
  return (
    <div className="relative flex justify-center flex-col items-center overflow-hidden w-full max-w-screen">
      <Slider {...settings} className="w-full max-w-screen overflow-hidden">
        <div>
          <img
            src="/slider-1.jpg"
            alt="Slide 1"
            className="w-full max-w-screen h-[70vh]"
            draggable={false}
          />
        </div>
        <div>
          <img
            src="/slider-2.jpg"
            alt="Slide 2"
            className="w-full max-w-screen h-[70vh]"
            draggable={false}
          />
        </div>
      </Slider>
      <h1 className="absolute text-white text-7xl font-bold drop-shadow-[2px_2px_10px_black]">
        Nike
      </h1>
      <h3 className="absolute bottom-30 text-3xl font-bold drop-shadow-[2px_2px_10px_black] text-white">
        Just do it
      </h3>
    </div>
  );
}
