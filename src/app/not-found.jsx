"use client"
import Link from "next/link"
import Arrow2 from "../../public/img/Services/Arrow_2.svg"
import Header_v2 from "../components/Header_v2"
import Image from "next/image"

const Notfound = () => {
    return (
        <>
            <Header_v2 />
            <div className="w-full h-[74vh] flex flex-col items-center justify-center">
                <div className="flex flex-col items-center justify-center gap-8">
                    <h3 className="text-center text-[42px] font-semibold max-[768px]:text-[28px] max-[768px]:px-14">Oops! <br></br> That page can’t be found</h3>
                    <Link href="/">
                        <button className="btn-primary btn-hover flex items-center justify-center gap-1">
                            <p className="text-[14px] font-normal cursor-pointer">Home</p>
                            <Image className="ml-1 w-3" src={Arrow2} alt="Arrow" />
                        </button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Notfound