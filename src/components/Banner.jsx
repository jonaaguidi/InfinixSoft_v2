import Image from "next/image";
import { BannerLogos } from "../constants/images"
import Marquee from 'react-fast-marquee'; // Importa react-fast-marquee

const Banner = () => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 600;

  return (
    <div className="w-full h-fit px-28 py-16 z-20 flex flex-wrap items-center justify-center gap-24 max-[880px]:px-14 max-[466px]:px-7 max-[466px]:gap-16">
      {isMobile ? (
        // React-fast-marquee solo en pantallas móviles (ancho <= 600px)
        <Marquee
          style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
          direction="left"
          speed={45}
          pauseOnHover={true}
          autoFill={true}
        >
          {BannerLogos.map((logo) => (
            <Image className="max-[600px]:scale-[0.80] mx-4" key={logo.name} src={logo.icon} alt={logo.name} />
          ))}
        </Marquee>
      ) : (
        // En pantallas más grandes, estatico.
        BannerLogos.map((logo) => (
          <Image className="max-[466px]:scale-75 max-[466px]:gap-10" key={logo.name} src={logo.icon} alt={logo.name} />
        ))
      )}
    </div>
  );
};

export default Banner;

