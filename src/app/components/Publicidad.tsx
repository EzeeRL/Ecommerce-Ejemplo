export default function Publicidad() {
  return (
    <div className="w-full flex justify-center items-center flex-wrap mt-[150px]">
      <div className="w-full flex justify-center items-center gap-[20px]">
        <div className="w-[33%] flex justify-center items-start relative flex-col">
          <img
            src="/Publicidad ropa/Hombre.png"
            alt="Ropa para Hombre"
            className="w-[100%] h-[80%]"
            draggable="false"
          />
          <button
            className="w-[180px] absolute bottom-[10px] ml-2 text-2xl bg-secondary p-2 text-center rounded-4xl cursor-pointer transition-all 300 hover:scale-[1.05] hover:bg-secondary2"
            style={{ boxShadow: "0px 5px 5px 2px rgba(0, 0, 0, 0.3)" }}
          >
            Para hombre
          </button>
        </div>
        <div className="w-[33%] flex justify-center items-center relative flex-col">
          <img
            src="/Publicidad ropa/Mujer.png"
            alt="Ropa para Mujer"
            className="w-[100%] h-[80%]"
            draggable="false"
          />
          <button
            className="w-[180px] absolute bottom-[10px] text-2xl bg-secondary p-2 text-center rounded-4xl cursor-pointer transition-all 300 hover:scale-[1.05] hover:bg-secondary2"
            style={{ boxShadow: "0px 5px 5px 2px rgba(0, 0, 0, 0.3)" }}
          >
            Para Mujer
          </button>
        </div>
        <div className="w-[33%] flex justify-center items-end relative flex-col">
          <img
            src="/Publicidad ropa/Niños.png"
            alt="Ropa para Niños"
            className="w-[100%] h-[80%]"
            draggable="false"
          />
          <button
            className="w-[180px] absolute bottom-[10px] mr-2 text-2xl bg-secondary p-2 text-center rounded-4xl cursor-pointer transition-all 300 hover:scale-[1.05] hover:bg-secondary2"
            style={{ boxShadow: "0px 5px 5px 2px rgba(0, 0, 0, 0.3)" }}
          >
            Para Niños
          </button>
        </div>
      </div>
    </div>
  );
}
