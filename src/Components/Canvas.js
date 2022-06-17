import { useOnDraw } from "./Hooks";

const Canvas = ({ width, height }) => {
  const { onMouseDown, setCanvasRef } = useOnDraw(onDraw);

  function onDraw(ctx, point, prevPoint) {
    drawLine(prevPoint, point, ctx, "#39FF14", 2);
  }

  function drawLine(start, end, ctx, color, width) {
    start = start ?? end;
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.strokeStyle = color;
    ctx.moveTo(start.x, start.y);
    ctx.lineTo(end.x, end.y);
    ctx.stroke();

    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(start.x, start.y, 1, 0, 2 * Math.PI);
    ctx.fill();
  }
  return (
    <canvas
      width={width}
      height={height}
      onMouseDown={onMouseDown}
      style={canvasStyle}
      ref={setCanvasRef}
      background-color="#ffffff"
    />
  );
};

export default Canvas;

const canvasStyle = {
  border: "10px solid #FF5F1F",
};
