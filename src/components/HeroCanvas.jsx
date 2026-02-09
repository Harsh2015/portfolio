import { useEffect, useRef } from "react";

const HeroCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = 160;
    };

    resize();
    window.addEventListener("resize", resize);

    const boxSize = 12;
    const gap = 6;
    const cols = Math.floor(canvas.width / (boxSize + gap));
    const rows = Math.floor(canvas.height / (boxSize + gap));

    const boxes = [];

    for (let i = 0; i < cols * rows; i++) {
      boxes.push({
        alpha: Math.random(),
        speed: Math.random() * 0.01 + 0.002,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      let index = 0;
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const box = boxes[index++];

          box.alpha += box.speed;
          if (box.alpha > 1 || box.alpha < 0.2) box.speed *= -1;

          ctx.fillStyle = `rgba(200,200,200,${box.alpha})`;
          ctx.fillRect(
            x * (boxSize + gap),
            y * (boxSize + gap),
            boxSize,
            boxSize
          );
        }
      }

      requestAnimationFrame(draw);
    };

    draw();

    return () => window.removeEventListener("resize", resize);
  }, []);

  return <canvas ref={canvasRef} className="w-full h-full" />;
};

export default HeroCanvas;
