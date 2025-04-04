export default function Publicidad() {
  return (
    <div className="w-full flex justify-center items-center flex-wrap mt-[150px] px-4">
      <div className="w-full flex flex-col md:flex-row justify-center items-center gap-5 md:gap-[20px]">
        {/* Card Hombre */}
        <div className="w-full md:w-[33%] flex justify-center items-center relative flex-col mb-8 md:mb-0">
          <div className="w-full h-full relative">
            <img
              src="/Publicidad ropa/Hombre.png"
              alt="Ropa para Hombre"
              className="w-full h-auto md:h-[80%] object-cover rounded-lg"
              draggable="false"
            />
            <button
              className="w-[160px] md:w-[180px] absolute bottom-4 left-1/2 transform -translate-x-1/2 text-xl md:text-2xl bg-secondary p-2 text-center rounded-full cursor-pointer transition-all duration-300 hover:scale-[1.05] hover:bg-secondary2"
              style={{ boxShadow: "0px 5px 5px 2px rgba(0, 0, 0, 0.3)" }}
            >
              Para hombre
            </button>
          </div>
        </div>

        {/* Card Mujer */}
        <div className="w-full md:w-[33%] flex justify-center items-center relative flex-col mb-8 md:mb-0">
          <div className="w-full h-full relative">
            <img
              src="/Publicidad ropa/Mujer.png"
              alt="Ropa para Mujer"
              className="w-full h-auto md:h-[80%] object-cover rounded-lg"
              draggable="false"
            />
            <button
              className="w-[160px] md:w-[180px] absolute bottom-4 left-1/2 transform -translate-x-1/2 text-xl md:text-2xl bg-secondary p-2 text-center rounded-full cursor-pointer transition-all duration-300 hover:scale-[1.05] hover:bg-secondary2"
              style={{ boxShadow: "0px 5px 5px 2px rgba(0, 0, 0, 0.3)" }}
            >
              Para Mujer
            </button>
          </div>
        </div>

        {/* Card Niños */}
        <div className="w-full md:w-[33%] flex justify-center items-center relative flex-col">
          <div className="w-full h-full relative">
            <img
              src="/Publicidad ropa/Niños.png"
              alt="Ropa para Niños"
              className="w-full h-auto md:h-[80%] object-cover rounded-lg"
              draggable="false"
            />
            <button
              className="w-[160px] md:w-[180px] absolute bottom-4 left-1/2 transform -translate-x-1/2 text-xl md:text-2xl bg-secondary p-2 text-center rounded-full cursor-pointer transition-all duration-300 hover:scale-[1.05] hover:bg-secondary2"
              style={{ boxShadow: "0px 5px 5px 2px rgba(0, 0, 0, 0.3)" }}
            >
              Para Niños
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
