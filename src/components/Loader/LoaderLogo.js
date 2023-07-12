import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const LogoLoader = () => {
  const welcomeRef = useRef(null);
  const captionRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 2, ease: "power3.inOut" },
    });
    tl.fromTo(
      welcomeRef.current,
      { autoAlpha: 0, scale: 0.5, rotation: 0 },
      { autoAlpha: 1, scale: 1, rotation: 360 }
    ).fromTo(
      captionRef.current,
      { autoAlpha: 0, scale: 0.5 },
      { autoAlpha: 1, scale: 1, delay: 1.5 },
      "<"
    );
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1 ref={welcomeRef}>Greetings, Tech Trailblazer!</h1>
      <h2 ref={captionRef}>You've Arrived at My Professional Showcase.</h2>
    </div>
  );
};

export default LogoLoader;
