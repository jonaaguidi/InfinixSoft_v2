/* eslint-disable @next/next/no-img-element */
'use client'
import { Tilt } from 'react-tilt'
import { BsFillRocketFill } from "react-icons/bs";
import Image from 'next/image';

const Card_Projects = ({ image, title, subtitle, link }) => {

  const defaultOptions = {
    reverse: false,  // reverse the tilt direction
    max: 35,     // max tilt rotation (degrees)
    perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.032,    // 2 = 200%, 1.5 = 150%, etc..
    speed: 480,   // Speed of the enter/exit transition
    transition: true,   // Set a transition on enter/exit.
    axis: null,   // What axis should be disabled. Can be X or Y.
    reset: true,    // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
  }

  return (
    <Tilt options={defaultOptions} className="w-[328px] h-[427px] relative z-full px-6 py-10 border-cards flex flex-col items-center justify-center max-[1320px]:w-[308px]">
      <Image width={150} height={150} src={image} alt={title} className="pb-10" />
      <div className="flex flex-col items-center justify-center gap-2 pb-6">
        <p className="text-[24px] font-bold">{title}</p>
        <p className="text-center text-[#A1A1A9]">{subtitle}</p>
      </div>
      <a href={link} target="_blank" rel='noreferrer'>
        <button className="btn-3 btn-hover flex items-center gap-2 transition duration-400 hover:shadow-button_secondary">View Project
          <BsFillRocketFill />
        </button>
      </a>
    </Tilt>
  )
}

export default Card_Projects