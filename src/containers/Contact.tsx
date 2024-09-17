export default function Contact(){
    return(
        <div id='contact' className="flex flex-row justify-center items-start font-bold text-[18px] text-white bg-portal-blue h-[50vh] p-20">
            <div className="flex flex-col px-20">
                <p className="text-[30px] text-portal-green">
                    <span className="text-red font-extrabold">Portal</span>🔥Gás
                </p>
                <a href="#">Facebook</a>
                <a href="#">Instagram</a>
            </div>
            <div className="flex flex-col px-20 ">
                <p className="text-[25px]">Endereço</p>
                <p>São Firmino, 870</p>
                <p>89237-355</p>
            </div>
            <div className="flex flex-col px-20 text-portal-green">
                <p className="text-white text-[25px]">Contato</p>
                <p>Whatsapp1</p>
                <p>Whatsapp2</p>
                <p>Fixo</p>
            </div>
            <div className="flex flex-col px-20 ">
                <p className="text-[25px]">Bug Report</p>
                <a href="#">Git</a>
                <a href="#">Email</a>
            </div>
        </div>
    )
}