import Link from "next/link";
// import { IoIosHome } from "react-icons/io";
// import { IoIosRocket } from "react-icons/io";
// import { PiHandbagFill } from "react-icons/pi";
// import { IoNewspaperSharp } from "react-icons/io5";



const Dropdown_Menu = () => {
  return (
    <nav className="animate-fade-up animate-duration-[650ms] animate-delay-25 w-fit opacity-90 absolute border-2 border-[#313134] bg-[#171718] shadow-navbar p-3 rounded-xl top-[96px] right-[112px] max-[880px]:right-[40px] max-[469px]:right-8">
      <ul className="w-fit flex flex-col rounded-md items-start font-normal text-[14px]" role="menu">

      <li role="menuitem">
          <Link
            href="/"
            className="menuitems gap-2 flex items-center"
            rel='noreferrer'
          >
            {/* <IoIosHome className="scale-150" /> */}
            <p>Home</p>
          </Link>
        </li>

        <li role="menuitem">
          <Link
            href="#cases-study"
            className="menuitems gap-2 flex items-center"
            rel='noreferrer'
          >
          {/* <IoIosRocket className="scale-150" /> */}
            <p>Case Studies</p>
          </Link>
        </li>

        <li role="menuitem">
          <Link
            href="#our-services"
            className="menuitems gap-2 flex items-center"
            rel='noreferrer'>
            {/* <PiHandbagFill className="scale-150" /> */}
            <p>Our Services</p>
          </Link>
        </li>

        {/* <li role="menuitem">
          <Link
            href="/blog"
            className="menuitems gap-2.5 flex items-center"
            target="_blank"
            rel='noreferrer'
          >
          <IoNewspaperSharp className="scale-150" />
            <p>Blog</p>
          </Link>
        </li> */}
      </ul>
    </nav>
  );
};

export default Dropdown_Menu;
