/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import Arrow from "../../public/img/Form/arrow_contact.svg"
import Logo from "../../public/img/Header/logo.svg"
import Arrow2 from "../../public/img/Services/Arrow_2.svg"
import { FaLinkedinIn } from 'react-icons/fa6';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';



const Form = ({ onClose }) => {

    // Estado para controlar si se debe aplicar la animación de salida.
    const [shouldAnimateOut, setShouldAnimateOut] = useState(false);

    // Función para manejar el cierre del form con una transición.
    const handleClose = () => {
        setShouldAnimateOut(true);

        // Esperar a que termine la animación y luego cerrar el form.
        setTimeout(() => {
            onClose();
        }, 1500);
    };

    // Hook de Traducción
    const { t } = useTranslation();


    return (
        <div className={`fixed overflow-y-auto z-max top-0 left-0 w-[100%] h-[100%] bg-[#171718] px-24 flex gap-16 justify-center items-center transition-wipe-in-down ${shouldAnimateOut ? 'transition-wipe-out-up' : ''} max-[1292px]:flex-col max-[1292px]:items-center max-[1292px]:justify-start max-[1292px]:top-0 max-[1292px]:pb-48 max-[830px]:px-14 max-[672px]:px-7 max-[420px]:gap-8`}>

            {/* Text "Contact" */}
            <div className='bg-transparent p-10 rounded-lg max-[502px]:px-4 max-[455px]:px-0'>
                <h3 className='text-[52px] leading-[120%] pb-6 font-bold max-[880px]:text-[32px] flex justify-between items-center'>
                    {t("formTitle")}
                    {/* Close Button */}
                    <button
                        onClick={handleClose}
                        className="flex px-3 py-1.5 self-center cursor-pointer transition duration-400 hover:scale-105 min-[1292px]:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#a1a1a9" height="16px" width="16px" version="1.1" id="Capa_1" viewBox="0 0 460.775 460.775">
                            <path d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55  c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55  c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505  c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55  l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719  c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z" />
                        </svg>
                    </button>

                </h3>
                <p className='text-[18px] font-normal text-[#A1A1A9] max-[880px]:text-[14px]'>
                    {t("formSubtitle1")}<br></br>
                    {t("formSubtitle2")}
                </p>
                <ul className='pt-16 flex flex-col gap-4'>
                    <li className='flex gap-1.5 pb-2 border-b border-opacity-20 border-[#A1A1A2] max-[1467px]:text-[14px] max-[1379px]:items-start max-[586px]:text-[12px] max-[422px]:flex-wrap'>
                        <Image src={Arrow} alt='arrow' />
                        <span className='font-bold'>Dubai:</span> Dubai Silicon Oasis, DDP, Building A2, United Arab Emirates.
                    </li>
                    <li className='flex gap-1.5 pb-2 border-b border-opacity-20 border-[#A1A1A2] max-[1467px]:text-[14px] max-[1379px]:items-start max-[586px]:text-[12px] max-[422px]:flex-wrap'>
                        <Image src={Arrow} alt='arrow' />
                        <span className='font-bold'>New York:</span> 175 Varick St. New York, NY. 10014. United States.
                    </li>
                    <li className='flex gap-1.5 pb-2 border-b border-opacity-20 border-[#A1A1A2] max-[1467px]:text-[14px] max-[1379px]:items-start max-[586px]:text-[12px] max-[422px]:flex-wrap '>
                        <Image src={Arrow} alt='arrow' />
                        <span className='font-bold'>Miami:</span> 360 NE 75 st. Miami, Suite #127, Florida 33138 United States.
                    </li>
                    <li className='flex gap-1.5 pb-2 border-b border-opacity-20 border-[#A1A1A2] max-[1467px]:text-[14px] max-[1379px]:items-start max-[586px]:text-[12px] max-[422px]:flex-wrap'>
                        <Image src={Arrow} alt='arrow' />
                        <span className='font-bold'>Buenos Aires:</span> Av.Rivadavia 18451, Buenos aires. Argentina.
                    </li>
                    <li className='flex gap-1.5 pb-2 border-b border-opacity-20 border-[#A1A1A2] max-[1467px]:text-[14px] max-[1379px]:items-start max-[586px]:text-[12px] max-[422px]:flex-wrap'>
                        <Image src={Arrow} alt='arrow' />
                        <span className='font-bold'>Reach out to us via email:</span><span className='text-[#db3957] font-bold cursor-pointer'>info@infinixsoft.com</span>
                    </li>
                    <li className='flex items-center gap-1.5 pb-3 border-b border-opacity-20 border-[#A1A1A2] max-[1467px]:text-[14px] max-[1379px]:items-start max-[586px]:text-[12px] max-[422px]:flex-wrap'>
                        <Image src={Arrow} alt='arrow' />
                        <span className='font-bold'>+1 (877) 789 8761 </span>
                        <span className=''> - </span>
                        <div className='flex gap-2 max-[1467px]:text-[14px] max-[1379px]:items-start max-[586px]:text-[12px] max-[422px]:flex-wrap'>
                            <a href='https://www.linkedin.com/company/infinixsoft/' target='_blank' rel='noreferrer'>
                                <FaLinkedinIn className='text-[18px] cursor-pointer transition duration-500 transform hover:scale-[1.10]' />
                            </a>
                        </div>
                    </li>

                </ul>
            </div>

            {/* Formulario */}
            <div className="w-[496px] h-fit bg-transparent shadow-form p-10 rounded-[12px] relative top-5 border-[2px] border-[#313134] border-opacity-70 max-[586px]:w-[396px] max-[501px]:w-[328px] max-[420px]:w-[296px] max-[442px]:top-2">
                <div className='flex items-center justify-center pb-10 max-[442px]:pb-8'>
                    <Image src={Logo} alt='Logotype' />
                </div>

                <form className='flex flex-col items-center justify-center'>

                    {/* Name Inputs */}
                    <div className="w-full grid sm:grid-cols-2 sm:gap-6 max-[632px]:w-full max-[420px]:gap-1.5">
                        <div className="relative z-0 w-full mb-6 group max-[442px]:mb-4">
                            <input
                                type="text"
                                name="floating_first_name"
                                id="floating_first_name"
                                className="block py-2.5 px-2 rounded-sm w-full text-sm text-white bg-transparent border-0 border-b-2 border-[#A1A1A9] appearance-none focus:outline-none focus:ring-0 focus:border-[#db3957] peer"
                                placeholder=" "
                                required
                            />
                            <label
                                htmlFor="floating_first_name"
                                className="peer-focus:font-medium absolute text-sm text-[#A1A1A9] duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#db3957] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                First Name
                            </label>
                        </div>
                        <div className="relative z-0 w-full mb-12 group max-[442px]:mb-8">
                            <input
                                type="text"
                                name="floating_last_name"
                                id="floating_last_name"
                                className="block py-2.5 px-2 rounded-sm w-full text-sm text-white bg-transparent border-0 border-b-2 border-[#A1A1A9] appearance-none focus:outline-none focus:ring-0 focus:border-[#db3957] peer"
                                placeholder=" "
                                required
                            />
                            <label
                                htmlFor="floating_last_name"
                                className="peer-focus:font-medium absolute text-sm text-[#A1A1A9] duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#db3957] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                Last Name
                            </label>
                        </div>
                    </div>


                    {/* Email Input */}
                    <div className="relative z-0 w-full mb-12 group max-[442px]:mb-8">
                        <input type="email" name="floating_Email" id="floating_Email" className="block py-2.5 px-2 rounded-sm w-full text-sm text-white bg-transparent border-0 border-b-2 border-[#A1A1A9] appearance-none focus:outline-none focus:ring-0 focus:border-[#db3957] peer" placeholder="" required />
                        <label htmlFor="floating_Email" className="peer-focus:font-medium p-1 absolute text-sm text-[#A1A1A9] duration-300 transform -translate-y-6 scale-75 top-0 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#db3957] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
                    </div>

                    {/* Company Input */}
                    <div className="relative z-0 w-full mb-12 group max-[442px]:mb-8">
                        <input type="Company" name="floating_company" id="floating_company" className="block py-2.5 px-2 rounded-sm w-full text-sm text-white bg-transparent border-0 border-b-2 border-[#A1A1A9] appearance-none focus:outline-none focus:ring-0 focus:border-[#db3957] peer" placeholder="" required />
                        <label htmlFor="floating_company" className="peer-focus:font-medium p-1 absolute text-sm text-[#A1A1A9] duration-300 transform -translate-y-6 scale-75 top-0 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#db3957] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Company</label>
                    </div>

                    {/* Message Textarea */}
                    <div className="relative z-0 w-full mb-12 group max-[442px]:mb-8">
                        <textarea
                            name="floating_message"
                            id="floating_message"
                            className="block py-2.5 px-2 w-full h-24 text-sm text-white bg-transparent border-0 border-b-2 border-[#A1A1A9] appearance-none focus:outline-none focus:ring-0 focus:border-[#db3957] peer resize-none"
                            placeholder=""
                            required
                        />
                        <label htmlFor="floating_message" className="peer-focus:font-medium absolute text-sm text-[#A1A1A9] duration-300 transform -translate-y-6 scale-75 top-0 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#db3957] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Message</label>
                    </div>

                    {/* Button "Send" */}
                    <button type="submit" className="btn-primary btn-hover w-[180px] transition duration-400 hover:shadow-opacity flex items-center justify-center gap-1">
                        Let's Connect
                        <Image className="ml-1 w-3.5" src={Arrow2} alt="Arrow"></Image>
                    </button>

                </form>

            </div>

            {/* Close Button Desktop */}
            <button
                type='submit'
                onClick={handleClose}
                className="flex px-3 py-1.5 self-start mt-40 cursor-pointer transition duration-400 hover:scale-105 max-[1292px]:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#a1a1a9" height="16px" width="16px" version="1.1" id="Capa_1" viewBox="0 0 460.775 460.775">
                    <path d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55  c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55  c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505  c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55  l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719  c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z" />
                </svg>
            </button>

        </div>
    );
};

export default Form;



