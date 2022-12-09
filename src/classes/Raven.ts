import raven from "src/assets/imgs/raven.png";
import { canvas } from "src/components/canvas";

export class Raven {
  spriteWidth = 271;
  spriteHeight = 194;
  width = this.spriteWidth / 2;
  height = this.spriteHeight / 2;

  x = canvas.width;
  y = Math.random() * (canvas.height - this.height);
  directionX = Math.random() * 5 + 3;
  directionY = Math.random() * 5 - 2.5;
  markedForDeletion = false;
  image = new Image();

  constructor() {
    this.image.src = raven;
  }

  update() {
    this.x -= this.directionX;

    if (this.x < 0 - this.width) {
      this.markedForDeletion = true;
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.strokeRect(this.x, this.y, this.width, this.height);
    ctx.drawImage(
      this.image,
      0,
      0,
      this.spriteWidth,
      this.spriteHeight,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
}
