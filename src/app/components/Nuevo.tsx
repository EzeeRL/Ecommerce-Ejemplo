import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

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

export default function Nuevo() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div className="relative flex flex-col justify-center items-center mt-[140px] w-full max-w-6xl mx-auto">
      <div className="flex justify-between items-center w-full px-4">
        <h1 className="text-4xl">Lo Nuevo</h1>
        <button className="">
          <h3 className="font-beiruti flex gap-2 items-center text-3xl">
            Filtros{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-[20px] h-[20px] cursor-pointer"
            >
              <path d="M0 416c0 17.7 14.3 32 32 32l54.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 448c17.7 0 32-14.3 32-32s-14.3-32-32-32l-246.7 0c-12.3-28.3-40.5-48-73.3-48s-61 19.7-73.3 48L32 384c-17.7 0-32 14.3-32 32zm128 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM320 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm32-80c-32.8 0-61 19.7-73.3 48L32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l246.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48l54.7 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-54.7 0c-12.3-28.3-40.5-48-73.3-48zM192 128a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm73.3-64C253 35.7 224.8 16 192 16s-61 19.7-73.3 48L32 64C14.3 64 0 78.3 0 96s14.3 32 32 32l86.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 128c17.7 0 32-14.3 32-32s-14.3-32-32-32L265.3 64z" />
            </svg>
          </h3>
        </button>
      </div>

      <Slider {...settings} className="w-full mt-6 px-4">
        {zapatillas.map((zapa, index) => (
          <div key={index} className="p-2">
            <div className="bg-secondary shadow-lg rounded-lg overflow-hidden text-center">
              <div>
                <img
                  src={zapa.img}
                  alt={zapa.name}
                  className="w-full h-56 object-cover"
                />
              </div>
              <div>
                <h3 className="text-texto-resaltado text-start text-xl font-beiruti ml-2 mt-2">
                  Lo nuevo
                </h3>
                <h2 className="text-2xl text-start ml-2 mt-2">{zapa.name}</h2>
                <h3 className="text-start ml-2 text-oscuro">
                  {zapa.description}
                </h3>
                <h1 className="text-3xl text-start ml-2 mt-2 mb-2">
                  ${zapa.price}
                </h1>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      <div
        className="absolute top-[60px] right-[-45px] w-[400px] h-[350px] flex flex-col justify-start items-center bg-secondary rounded-lg shadow-xl border-black border-1"
      >
        <div className="w-full flex justify-between items-center mt-4 mb-2">
          <h1 className="w-full text-start text-3xl ml-2">Precio</h1>
          <svg
            width="35px"
            height="100%"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="cursor-pointer mr-2"
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
        <div className="w-full flex justify-between items-center gap-[8px] p-2">
          <input
            type="text"
            className="w-[100px] h-[40px] rounded-lg bg-white text-center text-xl text-black outline-none"
            placeholder="Mínimo"
          />
          <p className="font-beiruti text-2xl">---</p>
          <input
            type="text"
            className="w-[100px] h-[40px] rounded-lg bg-white text-center text-xl"
            placeholder="Máximo"
          />
        </div>
        <div className="w-full">
          <div className="w-full flex justify-between items-center border-t-2 border-black p-1 mt-2">
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
          <div className="w-full flex justify-between items-center border-t-2 border-black p-1 mt-2">
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
          <div className="w-full flex justify-between items-center border-t-2 border-black p-1 mt-2">
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
          <div className="w-full flex justify-between items-center border-t-2 border-black p-1 mt-2">
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
    </div>
  );
}

function NextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute right-[-30px] top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500 hover:text-black"
      onClick={onClick}
    >
      <FaChevronRight size={30} />
    </div>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute left-[-30px] top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500 hover:text-black"
      onClick={onClick}
    >
      <FaChevronLeft size={30} />
    </div>
  );
}
