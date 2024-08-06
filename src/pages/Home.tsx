import homeImg from '../assets/portal.jpg';

export default function Home() {
    return (
        <div className="flex flex-col  justify-center">
            <div className="flex flex-row h-[500px] items-center justify-center rounded-[30px] bg-portal-green my-20 mx-[200px]">
                <div className="text-white flex flex-col w-[50%] h-full font-bold text-[30px] items-center justify-center mx-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque fringilla odio, et consequat nibh luctus et. Suspendisse elementum a mauris et consectetur. Sed posuere commodo orci quis ultrices. Maecenas non elementum orci.

                    <div className='flex flex-row m-10 space-x-5 text-lg'>
                        <button className='bg-yellow rounded-lg px-4 py-2 text-black'>Ver Produtos</button>
                        <button className='text-yellow rounded-lg px-4 py-2'>Saiba mais</button>
                    </div>
                </div>
                <div className="w-[50%] h-full">
                    <div id=""  >
                        <img 
                            src={homeImg}
                            className="h-[500px] rounded-r-[30px]"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}