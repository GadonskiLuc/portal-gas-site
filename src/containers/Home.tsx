import homeImg from '../assets/portal.jpg';
import GoTo from '../components/GoTo';

export default function Home() {
    return (
        <div id='home' className="flex flex-col justify-center">
            <div className="flex flex-row h-[500px] items-center justify-center rounded-[30px] bg-portal-green my-20 mx-[200px] shadow-gray shadow-lg">
                <div className="text-white flex flex-col w-[50%] h-full font-bold text-[30px] items-center justify-center mx-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque fringilla odio, et consequat nibh luctus et. Suspendisse elementum a mauris et consectetur. Sed posuere commodo orci quis ultrices. Maecenas non elementum orci.

                    <div className='flex flex-row m-10 space-x-5 text-lg'>
                        <button onClick={() => GoTo('product')} className='bg-portal-blue rounded-lg px-4 py-2 text-white transition ease-in-out hover:scale-110 delay-80 hover:-translate-y-1'>Ver Produtos</button>
                        <button onClick={() => GoTo('contact')} className=' text-portal-blue rounded-lg px-4 py-2 transition ease-in-out delay-80 hover:scale-110 hover:-translate-y-1'>Saiba mais</button>
                    </div>
                </div>
                <div className="w-[50%] h-full">
                    <div id=""  >
                        <img 
                            src={homeImg}
                            alt="Foto Portal"
                            className="h-[500px] rounded-r-[30px]"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}