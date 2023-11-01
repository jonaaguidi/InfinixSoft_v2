import Link from "next/link";

const Dropdown_Menu = () => {
  return (
    <nav className="animate-fade-up animate-duration-[650ms] animate-delay-25 w-fit opacity-90 absolute border-2 border-[#313134] bg-black shadow-navbar p-1.5 rounded-md top-36 right-20 max-[469px]:right-12 max-[880px]:right-4">
      <ul className="w-fit flex flex-col rounded-md items-start font-normal text-[14px]" role="menu">

      <li role="menuitem">
          <Link
            href="/#hero"
            className="menuitems"
            rel='noreferrer'
          >
            <p>Home</p>
          </Link>
        </li>

        <li role="menuitem">
          <Link
            href="/#projects"
            className="menuitems"
            rel='noreferrer'
          >
            <p>Case Studies</p>
          </Link>
        </li>

        <li role="menuitem">
          <Link
            href="/#services"
            className="menuitems"
            rel='noreferrer'>
            <p>Our Services</p>
          </Link>
        </li>

        <li role="menuitem">
          <Link
            href="https://infinixholdinggroup.com/partner/"
            className="menuitems"
            target="_blank"
            rel='noreferrer'
          >
            <p>Partner</p>
          </Link>
        </li>

        <li role="menuitem">
          <Link
            href="/#contact"
            className="menuitems"
            rel='noreferrer'
          >
            <p>Contact</p>
          </Link>
        </li>

      </ul>
    </nav>
  );
};

export default Dropdown_Menu;
