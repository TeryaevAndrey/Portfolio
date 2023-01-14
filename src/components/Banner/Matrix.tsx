import React, { FC } from "react";

const Matrix: FC = () => {
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    const engLetters: string[] = "abcdefghijklmnopqrstuvwxyz".split("");
    const rusLetters: string[] = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя".split("");
    const numbers: string[] = "123456789".split("");
    const allValues: string[] = engLetters.concat(rusLetters, numbers);

    if (canvas && ctx) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const fontSize: number = 20;
      const columns: number = canvas.width / fontSize;

      const arr: number[] = [];

      for (let i = 0; i < columns; i++) arr[i] = 1;

      setInterval(() => {
        ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "#0f0";
        ctx.font = `${fontSize}px serif`;

        for (let i = 0; i < arr.length; i++) {
          let str = allValues[Math.floor(Math.random() * allValues.length)];

          ctx.fillText(str, i * fontSize, arr[i] * fontSize);

          if (arr[i] * fontSize > canvas.height && Math.random() > 0.9)
            arr[i] = 0;

          arr[i]++;
        }
      }, 50);
    }
  }, []);

  return <canvas ref={canvasRef} />;
};

export default Matrix;
