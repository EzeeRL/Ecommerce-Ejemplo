import "../globals.css";

export default function Header() {
  return (
    <header className="w-full flex justify-between items-center p-2 text-2xl bg-secondary fixed top-0 z-[100000]">
      <div className="w-[20%] flex gap-2 items-center">
        <h1 className="">Logo</h1>
        <h3 className="">Inicio</h3>
      </div>
      <div className="w-[60%] flex justify-end items-center gap-8">
        <input
          type="text"
          name=""
          id=""
          placeholder="Pantalones Deportivos"
          className="w-[400px] h-[40px] bg-white p-2 rounded-3xl border border-gray-300 text-xl shadow-md"
        />
        <button className="w-[100px] h-[30px] flex items-center justify-center bg-white p-2 rounded-lg border border-gray-300 cursor-pointer text-xl shadow-md">
          Buscar
        </button>
      </div>
      <div className="flex justify-between items-center w-[18%]">
        <svg
          width="30px"
          height="100%"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="cursor-pointer transition-all duration-300 hover:fill-red-500 hover:scale-[1.05]"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.9932 5.13581C9.9938 2.7984 6.65975 2.16964 4.15469 4.31001C1.64964 6.45038 1.29697 10.029 3.2642 12.5604C4.89982 14.6651 9.84977 19.1041 11.4721 20.5408C11.6536 20.7016 11.7444 20.7819 11.8502 20.8135C11.9426 20.8411 12.0437 20.8411 12.1361 20.8135C12.2419 20.7819 12.3327 20.7016 12.5142 20.5408C14.1365 19.1041 19.0865 14.6651 20.7221 12.5604C22.6893 10.029 22.3797 6.42787 19.8316 4.31001C17.2835 2.19216 13.9925 2.7984 11.9932 5.13581Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <svg
          width="30px"
          height="100%"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="cursor-pointer transition-all duration-300 hover:scale-[1.05]"
        >
          <path
            d="M2 2H3.30616C3.55218 2 3.67519 2 3.77418 2.04524C3.86142 2.08511 3.93535 2.14922 3.98715 2.22995C4.04593 2.32154 4.06333 2.44332 4.09812 2.68686L4.57143 6M4.57143 6L5.62332 13.7314C5.75681 14.7125 5.82355 15.2031 6.0581 15.5723C6.26478 15.8977 6.56108 16.1564 6.91135 16.3174C7.30886 16.5 7.80394 16.5 8.79411 16.5H17.352C18.2945 16.5 18.7658 16.5 19.151 16.3304C19.4905 16.1809 19.7818 15.9398 19.9923 15.6342C20.2309 15.2876 20.3191 14.8247 20.4955 13.8988L21.8191 6.94969C21.8812 6.62381 21.9122 6.46087 21.8672 6.3335C21.8278 6.22177 21.7499 6.12768 21.6475 6.06802C21.5308 6 21.365 6 21.0332 6H4.57143ZM10 21C10 21.5523 9.55228 22 9 22C8.44772 22 8 21.5523 8 21C8 20.4477 8.44772 20 9 20C9.55228 20 10 20.4477 10 21ZM18 21C18 21.5523 17.5523 22 17 22C16.4477 22 16 21.5523 16 21C16 20.4477 16.4477 20 17 20C17.5523 20 18 20.4477 18 21Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div className="bg-secondary2 p-[8px] rounded-full shadow-[inset_0_4px_5px_rgba(0,0,0,0.3)] pointer transition-all duration-300 hover:scale-[1.05]">
          <svg
            width="30px"
            height="100%"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="relative cursor-pointer"
          >
            <path
              d="M20 21C20 19.6044 20 18.9067 19.8278 18.3389C19.44 17.0605 18.4395 16.06 17.1611 15.6722C16.5933 15.5 15.8956 15.5 14.5 15.5H9.5C8.10444 15.5 7.40665 15.5 6.83886 15.6722C5.56045 16.06 4.56004 17.0605 4.17224 18.3389C4 18.9067 4 19.6044 4 21M16.5 7.5C16.5 9.98528 14.4853 12 12 12C9.51472 12 7.5 9.98528 7.5 7.5C7.5 5.01472 9.51472 3 12 3C14.4853 3 16.5 5.01472 16.5 7.5Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </header>
  );
}
