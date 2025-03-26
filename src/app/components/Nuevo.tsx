import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import "./Nuevo.css";

const zapatillas = [
  {
    img: "/Slider Destacados/zapatilla-slider.png",
    name: "Nike SB Dunk Low Pro Premium",
    description: "Zapatillas de Moda para Hombre",
    price: "249.000",
  },
  {
    img: "/Slider Destacados/zapatilla-slider.png",
    name: "Nike SB Dunk Low Pro Premium",
    description: "Zapatillas de Moda para Hombre",
    price: "249.000",
  },
  {
    img: "/Slider Destacados/zapatilla-slider.png",
    name: "Nike SB Dunk Low Pro Premium",
    description: "Zapatillas de Moda para Hombre",
    price: "249.000",
  },
  {
    img: "/Slider Destacados/zapatilla-slider.png",
    name: "Nike SB Dunk Low Pro Premium",
    description: "Zapatillas de Moda para Hombre",
    price: "249.000",
  },
  {
    img: "/Slider Destacados/zapatilla-slider.png",
    name: "Nike SB Dunk Low Pro Premium",
    description: "Zapatillas de Moda para Hombre",
    price: "249.000",
  },
  {
    img: "/Slider Destacados/zapatilla-slider.png",
    name: "Nike SB Dunk Low Pro Premium",
    description: "Zapatillas de Moda para Hombre",
    price: "249.000",
  },
  {
    img: "/Slider Destacados/zapatilla-slider.png",
    name: "Nike SB Dunk Low Pro Premium",
    description: "Zapatillas de Moda para Hombre",
    price: "249.000",
  },
  {
    img: "/Slider Destacados/zapatilla-slider.png",
    name: "Nike SB Dunk Low Pro Premium",
    description: "Zapatillas de Moda para Hombre",
    price: "249.000",
  },
  {
    img: "/Slider Destacados/zapatilla-slider.png",
    name: "Nike SB Dunk Low Pro Premium",
    description: "Zapatillas de Moda para Hombre",
    price: "249.000",
  },
];

const ProductCard = ({ zapa }) => (
  <div className="p-2 h-full">
    <div className="bg-secondary shadow-lg rounded-lg overflow-hidden text-center h-full">
      <img
        src={zapa.img}
        alt={zapa.name}
        className="w-full h-56 object-cover"
      />
      <h3 className="text-texto-resaltado text-start text-xl font-beiruti ml-2 mt-2">
        Lo nuevo
      </h3>
      <h2 className="text-2xl text-start ml-2 mt-2">{zapa.name}</h2>
      <h3 className="text-start ml-2 text-oscuro">{zapa.description}</h3>
      <h1 className="text-3xl text-start ml-2 mt-2 mb-2">${zapa.price}</h1>
    </div>
  </div>
);

function NextArrow(props) {
  const { onClick } = props;
  return (
    <FaChevronRight
      className="absolute top-1/2 right-0 transform -translate-y-1/2 text-xl cursor-pointer z-10"
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <FaChevronLeft
      className="absolute top-1/2 left-0 transform -translate-y-1/2 text-xl cursor-pointer z-10"
      onClick={onClick}
    />
  );
}

export default function Nuevo() {
  const [showFilters, setShowFilters] = useState(false);

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  };

  return (
    <div className="relative flex flex-col justify-center items-center mt-[140px] w-full max-w-6xl mx-auto">
      <div className="flex justify-between items-center w-full px-4">
        <h1 className="text-4xl">Lo Nuevo</h1>
        <button
          onClick={toggleFilters}
          className="flex gap-2 items-center text-3xl"
        >
          <h3 className="font-beiruti">Filtros</h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="w-[20px] h-[20px] cursor-pointer"
          >
            <path d="M0 416c0 17.7 14.3 32 32 32l54.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 448c17.7 0 32-14.3 32-32s-14.3-32-32-32l-246.7 0c-12.3-28.3-40.5-48-73.3-48s-61 19.7-73.3 48L32 384c-17.7 0-32 14.3-32 32zm128 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM320 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm32-80c-32.8 0-61 19.7-73.3 48L32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l246.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48l54.7 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-54.7 0c-12.3-28.3-40.5-48-73.3-48zM192 128a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm73.3-64C253 35.7 224.8 16 192 16s-61 19.7-73.3 48L32 64C14.3 64 0 78.3 0 96s14.3 32 32 32l86.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 128c17.7 0 32-14.3 32-32s-14.3-32-32-32L265.3 64z" />
          </svg>
        </button>
      </div>

      <Slider {...settings} className="w-full mt-6 px-4">
        {zapatillas.map((zapa, index) => (
          <ProductCard key={index} zapa={zapa} />
        ))}
      </Slider>

      <div
        className={`fixed top-[170px] right-0 w-[400px] h-[350px] bg-secondary rounded-tl-xl rounded-bl-xl shadow-xl border border-black transition-transform duration-300 ${
          showFilters ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="w-full flex justify-between items-center mt-4 mb-2 px-2">
          <h1 className="text-3xl">Precio</h1>
          <svg
            width="35px"
            height="35px"
            viewBox="0 0 24 24"
            fill="none"
            onClick={toggleFilters}
            className="cursor-pointer"
          >
            <path
              d="M18 6L6 18M6 6L18 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="w-full flex justify-between items-center gap-2 p-2">
          <input
            type="number"
            className="w-[100px] h-[40px] rounded-lg bg-white text-center text-xl text-black outline-none"
            placeholder="$20.000"
          />
          <p className="text-2xl">---</p>
          <input
            type="number"
            className="w-[100px] h-[40px] rounded-lg bg-white text-center text-xl"
            placeholder="$100.000"
          />
        </div>
        <div className="flex justify-between items-center w-full border-t-2 border-black p-2">
          <h1 className="text-2xl">Categorías</h1>
          <svg
            width="35px"
            height="100%"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="cursor-pointer"
          >
            <path
              d="M6 9L12 15L18 9"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="flex justify-between items-center w-full border-t-2 border-black p-2">
          <h1 className="text-2xl">Talle</h1>
          <svg
            width="35px"
            height="100%"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="cursor-pointer"
          >
            <path
              d="M6 9L12 15L18 9"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="flex justify-between items-center w-full border-t-2 border-black p-2">
          <h1 className="text-2xl">Tipo de Producto</h1>
          <svg
            width="35px"
            height="100%"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="cursor-pointer"
          >
            <path
              d="M6 9L12 15L18 9"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="flex justify-between items-center w-full border-t-2 border-black p-2">
          <h1 className="text-2xl">Color</h1>
          <svg
            width="35px"
            height="100%"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="cursor-pointer"
          >
            <path
              d="M6 9L12 15L18 9"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}