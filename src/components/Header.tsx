import Home from "../pages/Home";
import Local from "./Local";


export default function Header() {
  return (
    <div className="flex flex-row flex-wrap space-x-4 items-center justify-center w-screen h-10 bg-yellow">
      <div className="absolute top-1 left-5">
        <p className="text-red font-extrabold text-[20px]">Portal🔥<span className="text-portal-green">Gás</span></p>
      </div>
      <div className="flex flex-row space-x-4 items-center justify-center font-bold text-lg">
            <a href='#'>Home</a>
            <a href='#'>Aonde Estamos?</a>
            <a href='#'>Produtos</a>
            <a href='#'>Contato</a>
      </div>
    </div>
  );
}

