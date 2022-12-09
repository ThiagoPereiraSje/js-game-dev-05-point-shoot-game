import "src/index.css";
import { canvas, ctx } from "src/components/canvas";
import { Raven } from "src/classes/Raven";

let ravens: Raven[] = [];

// const raven = new Raven();

const ravenInterval = 500;
let timeToNextRaven = 0;
let lastTime = 0;

function animate(timestamp: number) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const deltaTime = timestamp - lastTime;
  lastTime = timestamp;
  timeToNextRaven += deltaTime;

  if (timeToNextRaven > ravenInterval) {
    timeToNextRaven = 0;
    ravens.push(new Raven());
  }

  [...ravens].forEach((r) => r.update());
  [...ravens].forEach((r) => r.draw(ctx));

  ravens = ravens.filter((r) => !r.markedForDeletion);

  requestAnimationFrame(animate);
}

window.addEventListener("load", () => {
  document.body.appendChild(canvas);

  animate(0);
});
