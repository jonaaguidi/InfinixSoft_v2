import React, { useEffect, useRef } from "react";
import { useSpring } from "@react-spring/web";
import createGlobe from "cobe";

const DraggablePlanet = () => {
  const canvasRef = useRef();
  const pointerInteracting = useRef(null);
  const pointerInteractionMovement = useRef(0);
  const [{ r }, api] = useSpring(() => ({
    r: 0,
    config: {
      mass: 1,
      tension: 280,
      friction: 40,
      precision: 0.001,
    },
  }));

  useEffect(() => {
    let phi = 0;

    const onRender = (state) => {
      state.phi = phi;
      phi += 0.0035;
      state.phi += r.get();
    };

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
        // ... (otros marcadores)
      ],
      onRender: (state) => {
        onRender(state);
      },
    });

    const handlePointerDown = (e) => {
      pointerInteracting.current = e.clientX - pointerInteractionMovement.current;
      canvasRef.current.style.cursor = 'grabbing';
    };

    const handlePointerUp = () => {
      pointerInteracting.current = null;
      canvasRef.current.style.cursor = 'grab';
    };

    const handlePointerOut = () => {
      pointerInteracting.current = null;
      canvasRef.current.style.cursor = 'grab';
    };

    const handleMouseMove = (e) => {
      if (pointerInteracting.current !== null) {
        const delta = e.clientX - pointerInteracting.current;
        pointerInteractionMovement.current = delta;
        api.start({
          r: delta / 200,
        });
      }
    };

    const handleTouchMove = (e) => {
      if (pointerInteracting.current !== null && e.touches[0]) {
        const delta = e.touches[0].clientX - pointerInteracting.current;
        pointerInteractionMovement.current = delta;
        api.start({
          r: delta / 100,
        });
      }
    };

    canvasRef.current.addEventListener('pointerdown', handlePointerDown);
    canvasRef.current.addEventListener('pointerup', handlePointerUp);
    canvasRef.current.addEventListener('pointerout', handlePointerOut);
    canvasRef.current.addEventListener('mousemove', handleMouseMove);
    canvasRef.current.addEventListener('touchmove', handleTouchMove);

    return () => {
      globe.destroy();
      canvasRef.current.removeEventListener('pointerdown', handlePointerDown);
      canvasRef.current.removeEventListener('pointerup', handlePointerUp);
      canvasRef.current.removeEventListener('pointerout', handlePointerOut);
      canvasRef.current.removeEventListener('mousemove', handleMouseMove);
      canvasRef.current.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return (
    <div className="relative z-0">
      <div className="absolute z-0 inset-0">
        <div className="rounded-full bg-[#DB3957] blur-[128px] opacity-30 w-full h-full"></div>
      </div>
      <canvas
        ref={canvasRef}
        className="scale-110 z-[100]"
        style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
      />
    </div>
  );
};

export default DraggablePlanet;
