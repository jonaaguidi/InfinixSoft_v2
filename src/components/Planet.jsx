import createGlobe from "cobe";
import { useEffect, useRef } from "react";

const Planet = () => {
    const canvasRef = useRef();

    useEffect(() => {
        let phi = 0;

        const globe = createGlobe(canvasRef.current, {
            devicePixelRatio: 2,
            width: 600 * 2,
            height: 600 * 2,
            phi: 0,
            theta: 0,
            dark: 1,
            diffuse: 3,
            scale: 0.8,
            mapSamples: 9000,
            mapBrightness: 8,
            baseColor: [0.3, 0.3, 0.3],
            markerColor: [0.8588, 0.2235, 0.3412],
            glowColor: [0.7, 0.7, 0.7],
            markers: [
                { location: [25.276987, 55.296249], size: 0.06 },  // Dubai
                { location: [25.7617, -80.1918], size: 0.06 },    // Miami
                { location: [40.7128, -74.006], size: 0.06 },     // New York
                { location: [-34.6118, -58.4173], size: 0.06 },   // Buenos Aires
                { location: [-23.5505, -46.6333], size: 0.06 },   // São Paulo
                { location: [19.4326, -99.1332], size: 0.06 },     // Ciudad de México
                { location: [41.3851, 2.1734], size: 0.06 },      // Barcelona
                { location: [13.6972, -89.1912], size: 0.06 },    // San Salvador
            ],
            onRender: (state) => {
                state.phi = phi
                phi += 0.0035
            }
        });

        return () => {
            globe.destroy();
        };
    }, []);


    return (
        <div className="relative z-0">
            <div className="absolute inset-0">
                <div className="rounded-full bg-[#DB3957] blur-[128px] opacity-30 w-full h-full"></div>
            </div>
            <canvas
                ref={canvasRef}
                className="scale-100 z-[1]"
                style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
            />
        </div>
    )
}

export default Planet