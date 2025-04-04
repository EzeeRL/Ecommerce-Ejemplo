import Slider from "react-slick";
import "@google/model-viewer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const models = [
  { src: "./3D Models/airmax.glb", name: "Arimax" },
  { src: "./3D Models/blazer.glb", name: "Blazer" },
  { src: "./3D Models/dunk.glb", name: "Dunk" },
  { src: "./3D Models/jordan.glb", name: "Jordan" },
  { src: "./3D Models/retrorun.glb", name: "Retrorun" },
];

function NextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute right-0 md:right-[-10px] top-1/2 transform -translate-y-1/2 cursor-pointer bg-black bg-opacity-30 rounded-full p-2 hover:bg-opacity-50 z-10"
      onClick={onClick}
    >
      <FaChevronRight size={24} className="text-white" />
    </div>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute left-0 md:left-[-10px] top-1/2 transform -translate-y-1/2 cursor-pointer bg-black bg-opacity-30 rounded-full p-2 hover:bg-opacity-50 z-10"
      onClick={onClick}
    >
      <FaChevronLeft size={24} className="text-white" />
    </div>
  );
}

export default function Clasicos3D() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="flex flex-col justify-center items-center my-8 w-full max-w-lg mx-auto overflow-y-hidden overflow-x-hidden px-4">
      <div className="w-full max-w-full relative">
        <Slider {...settings} className="w-full">
          {models.map((model, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center w-full"
            >
              <model-viewer
                src={model.src}
                ios-src="/modelo.usdz"
                alt="Modelo 3D"
                auto-rotate
                shadow-intensity="1"
                gesture="none"
                camera-orbit="45deg 90deg"
                camera-controls
                interaction-prompt="none"
                disable-zoom
                className="w-full h-[300px] md:h-[450px]"
              ></model-viewer>
              <div className="flex justify-center items-center mb-4 w-full mt-4">
                <button
                  className="text-2xl md:text-3xl bg-secondary text-black px-6 py-2 rounded-full cursor-pointer transition-all duration-300 hover:scale-[1.05] hover:bg-secondary2"
                  style={{ boxShadow: "0px 5px 5px 2px rgba(0, 0, 0, 0.3)" }}
                >
                  {model.name}
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
