export default function Header() {

  const scrollTo = (id:String) => {
    const element = document.querySelector(`#${id}`)
    
    element?.scrollIntoView({
      behavior: 'smooth'
    })
  };

  return (
    <div className="z-50 flex flex-row flex-wrap space-x-4 items-center justify-center w-full h-10 text-white bg-portal-blue shadow-md">
      <div className="absolute top-1 left-5">
        <p className="text-red font-extrabold text-[20px]">Portal🔥<span className="text-portal-green">Gás</span></p>
      </div>
      <div className="flex flex-row space-x-4 items-center justify-center font-bold text-lg">
            <a onClick={() => scrollTo('home')} className="cursor-pointer transition ease-in-out hover:opacity-75 delay-80 hover:-translate-y-1">Home</a>
            <a onClick={() => scrollTo('location')} className="cursor-pointer transition ease-in-out hover:opacity-75 delay-80 hover:-translate-y-1">Aonde Estamos?</a>
            <a onClick={() => scrollTo('product')} className="cursor-pointer transition ease-in-out hover:opacity-75 delay-80 hover:-translate-y-1">Produtos</a>
            <a onClick={() => scrollTo('contact')} className="cursor-pointer transition ease-in-out hover:opacity-75 delay-80 hover:-translate-y-1">Contato</a>
      </div>
    </div>
  );
}

