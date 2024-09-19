import { FiFacebook, FiInstagram, FiPhone, FiSmartphone, FiMapPin, FiGithub, FiMail } from "react-icons/fi";

export default function Contact(){
    return(
        <div id='contact' className="flex flex-row justify-center items-start font-bold text-[18px] text-white bg-portal-blue h-[50vh] p-20">
            <div className="flex flex-col px-20">
                <p className="text-[30px] text-portal-green bg-portal-yellow px-1 mb-3 rounded-md">
                    <span className="text-red font-extrabold ">Portal</span>🔥Gás
                </p>
                <a className="flex flex-row items-center transition ease-in-out hover:-translate-y-1"
                href="https://www.facebook.com/profile.php?id=61557651803108" target="_blank">
                    <FiFacebook className="mr-1"/>Facebook
                </a>
                <a href="" className="flex flex-row items-center transition ease-in-out hover:-translate-y-1">
                    <FiInstagram className="mr-1"/>Instagram
                </a>
            </div>
            <div className="flex flex-col px-20 ">
                <p className="flex flex-row items-center text-[25px] mb-3">
                    <FiMapPin className="mr-1"/>Endereço
                </p>
                <p className="flex flex-row">
                    São Firmino, 870
                </p>
                <p>89237-355</p>
            </div>
            <div className="flex flex-col px-20">
                <p className="text-[25px] mb-3">Contato</p>
                <p className="flex flex-row items-center">
                    <FiSmartphone className="mr-1"/>47 99688-4268
                </p>
                <p className="flex flex-row items-center">
                    <FiSmartphone className="mr-1"/>47 99904-0500
                </p>
                <p className="flex flex-row items-center">
                    <FiPhone className="mr-1"/>47 3028-4686
                </p>
            </div>
            <div className="flex flex-col px-20 ">
                <p className="text-[25px] mb-3">Bug Report</p>
                <a className="flex flex-row items-center transition ease-in-out hover:-translate-y-1"
                href="https://github.com/GadonskiLuc/portal-gas-site" target="_blank">
                    <FiGithub className="mr-1"/> GitHub
                </a>
                <a className="flex flex-row items-center transition ease-in-out hover:-translate-y-1"
                href="mailto:lucasmotta-2011@hotmail.com?subject=Bug Report do PortalGas">
                    <FiMail className="mr-1"/>Email
                </a>
            </div>
        </div>
    )
}