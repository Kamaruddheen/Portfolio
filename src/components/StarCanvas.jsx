import React, { useRef, useEffect } from "react";

const StarCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    // Set the initial canvas size
    const handleResize = () => {
      const html = document.documentElement;
      const body = document.body;

      const width = Math.min(
        body.scrollWidth,
        body.offsetWidth, // Good
        html.clientWidth, // Good
        html.scrollWidth,
        html.offsetWidth // Good
      );

      canvas.width = width;
      canvas.height = html.offsetHeight;
    };

    // Handle the resizing on initial load and on window resize
    handleResize();
    window.addEventListener("resize", handleResize);

    // Generate stars
    const stars = Array.from({ length: 1000 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2,
      speed: Math.random() * 0.75,
    }));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        ctx.fillStyle = "#646cffaa";
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();

        star.y = (star.y + star.speed) % canvas.height;
      });

      animationFrameId = requestAnimationFrame(animate);
    };
    ctx.fillStyle = "red";

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0" />;
};

export default StarCanvas;

/* 
* Experiment purpose
const body = document.body;


const height = Math.max(
  body.scrollHeight, // Giving extra space because of scrolling
  body.offsetHeight, // Good
  html.clientHeight, // Good
  html.scrollHeight, // Giving extra space because of scrolling
  html.offsetHeight  // Good
);

const width = Math.min(
  body.scrollWidth, 
  body.offsetWidth, // Good
  html.clientWidth, // Good
  html.scrollWidth,
  html.offsetWidth  // Good
);

*/
