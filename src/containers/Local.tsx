export default function Local(){
    return(
        <div id="location" className="overflow-hidden bg-white py-24 sm:py-32 m-5 rounded-xl shadow-md">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        <div className="lg:pr-8 lg:pt-4">
                            <div className="lg:max-w-lg">
                            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Aonde Estamos?</p>
                            <p className="mt-6 text-lg leading-8 text-gray-600">Estamos localizados na zona Urbana do bairro Vila Nova, especificamente na rua São Firmino 870</p>
                            <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                                <div className="relative pl-9">
                                <dt className="inline font-semibold text-gray-900">
                                    <svg className="absolute -left-6 -top-9 size-[100px]">
                                    <circle r="5" cx="50" cy="50" className='fill-portal-green' />
                                    </svg>
                                    Entrega Rápida.
                                </dt>
                                <dd className="inline">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</dd>
                                </div>
                                <div className="relative pl-9">
                                <dt className="inline font-semibold text-gray-900">
                                    <svg className="absolute -left-6 -top-9 size-[100px]">
                                    <circle r="5" cx="50" cy="50" className='fill-portal-green' />
                                    </svg>
                                    Atendimento Simples.
                                </dt>
                                <dd className="inline">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.</dd>
                                </div>
                                <div className="relative pl-9">
                                <dt className="inline font-semibold text-gray-900">
                                    <svg className="absolute -left-6 -top-9 size-[100px]">
                                    <circle r="5" cx="50" cy="50" className='fill-portal-green' />
                                    </svg>
                                    Boa Localização.
                                </dt>
                                <dd className="inline">Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</dd>
                                </div>
                            </dl>
                            </div>
                        </div>
                        <iframe
                         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14308.069819990811!2d-48.91261285927733!3d-26.29353415036414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dea5d440581425%3A0x8f81835d40efb792!2sPortal%20Gas!5e0!3m2!1spt-BR!2sbr!4v1722882375665!5m2!1spt-BR!2sbr" 
                         title="Local"
                         width="600" height="450" className="border-0 rounded-md" loading="lazy"
                         referrerPolicy="no-referrer-when-downgrade">
                         </iframe>
                        </div>
                    </div>
        </div>
    )
}