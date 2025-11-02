import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";


createRoot(document.getElementById("root")!).render(
  <div id="app-wrapper" style={{ position: "relative" }}>
    <canvas id="cursor-particles" style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 50 }}></canvas>
    <App />
  </div>
);

const canvas = document.getElementById("cursor-particles") as HTMLCanvasElement;
if (canvas) {
  const ctx = canvas.getContext("2d")!;
  let particles: { x: number; y: number; alpha: number }[] = [];

  const resize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };
  resize();
  window.addEventListener("resize", resize);

  window.addEventListener("mousemove", (e) => {
    particles.push({ x: e.clientX, y: e.clientY, alpha: 1 });
  });

  const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles = particles.filter(p => p.alpha > 0.01);
    particles.forEach(p => {
      p.alpha -= 0.015;
      ctx.fillStyle = `rgba(0,255,255,${p.alpha})`;
      ctx.beginPath();
      ctx.arc(p.x, p.y, 4, 0, Math.PI * 2);
      ctx.fill();
    });
    requestAnimationFrame(animate);
  };
  animate();
}
