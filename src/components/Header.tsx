import Home from "../pages/Home";
import Local from "./Local";


export default function Header() {
  return (
    <div className="z-50 flex flex-row flex-wrap space-x-4 items-center justify-center w-screen h-10 bg-yellow shadow-md">
      <div className="absolute top-1 left-5">
        <p className="text-red font-extrabold text-[20px]">Portal🔥<span className="text-portal-green">Gás</span></p>
      </div>
      <div className="flex flex-row space-x-4 items-center justify-center font-bold text-lg">
            <a href='#' className="transition ease-in-out hover:opacity-75 delay-80 hover:-translate-y-1">Home</a>
            <a href='#' className="transition ease-in-out hover:opacity-75 delay-80 hover:-translate-y-1">Aonde Estamos?</a>
            <a href='#' className="transition ease-in-out hover:opacity-75 delay-80 hover:-translate-y-1">Produtos</a>
            <a href='#' className="transition ease-in-out hover:opacity-75 delay-80 hover:-translate-y-1">Contato</a>
      </div>
    </div>
  );
}

