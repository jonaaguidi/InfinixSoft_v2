import Image from "next/image"
import Gitex from "../../public/img/Dubai/gitex.svg"
import Text1 from "../../public/img/Dubai/textDubai.svg"
import Text2 from "../../public/img/Dubai/textDubai2.svg"

const Dubai = () => {
  return (
    <section className="w-full h-[42px] bg-[#DFE0E3] flex items-center justify-center">
      <div className="min-w-[425px] py-2.5 flex items-center justify-center gap-6 max-[520px]:scale-90 max-[445px]:scale-[0.85]">
        <a href="https://www.gitex.com/" target="_blank" rel="noreferrer">
          <Image src={Gitex} alt="Gitex Dubai" />
        </a>
        <Image src={Text1} alt="Gitex Dubai" />
        <Image src={Text2} alt="Gitex Dubai" />
      </div>
    </section>
  )
}

export default Dubai