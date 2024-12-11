import React, { useRef, useEffect } from "react";

const StarCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    // Set the initial canvas size
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Handle the resizing on initial load and on window resize
    handleResize();
    window.addEventListener("resize", handleResize);

    const stars = Array.from({ length: 100 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2,
      speed: Math.random() * 0.5,
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

    // const handleResize = () => {
    //   canvas.width = document.documentElement.scrollWidth;
    //   canvas.height = document.body.scrollHeight;
    // };

    // handleResize();
    // window.addEventListener("resize", handleResize);
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-50" />;
};

export default StarCanvas;
