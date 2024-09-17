import {useState} from 'react'; 
import {FaAngleUp} from 'react-icons/fa';

const GoToTop = () =>{

    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if(scrolled > 300){
            setVisible(true);
        }else if (scrolled <= 300){
            setVisible(false);
        }
    };

    const scrollToTop = () =>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    window.addEventListener('scroll',toggleVisible);

    return(
        <FaAngleUp className="cursor-pointer fixed bg-portal-green text-white z-50 text-[50px] bottom-[30px] right-[30px] rounded-md hover:-translate-y-1 hover:scale-110 delay-80 transition ease-in-out" onClick={scrollToTop} style={{display: visible ? 'inline' : 'none'}}/>
    );
}
export default GoToTop; 
