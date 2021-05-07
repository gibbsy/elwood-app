import { addClass, getRandomInt } from "../utils";
export default class DotGrid {
  constructor(container, dotSize, width, height) {
    const { innerWidth, innerHeight } = window;
    this.container = container;
    // console.log(innerWidth, innerHeight, container);
    const pad = 44;
    this.size = dotSize;
    const numDots = Math.floor(innerWidth / (pad + dotSize));
    const numRows = Math.floor((innerHeight * 0.85) / (pad + dotSize));
    this.rows = [];
    this.dots = [];
    this.tweens = [];
    this.el = document.createElement("div");
    addClass(this.el, "graphics__dots-main");
    this.el.setAttribute("data-scroll", "");
    this.el.setAttribute("data-scroll-speed", "0.5");
    container.appendChild(this.el);
    for (let i = 0; i < numRows; i++) {
      const row = document.createElement("ul");
      row.classList.add(`radius-${dotSize}`);
      this.el.appendChild(row);
      this.rows.push(row);
      for (let i = 0; i < numDots; i++) {
        const dot = document.createElement("li");
        if (Math.random() < 0.6) {
          const tween = gsap.fromTo(
            dot,
            { opacity: 0 },
            {
              opacity: 1,
              repeat: -1,
              repeatDelay: getRandomInt(1, 10),
              delay: getRandomInt(1, 10),
              yoyo: true,
            }
          );
          this.tweens.push(tween);
        }
        row.appendChild(dot);
      }
    }
    /* setTimeout(() => {
      this.tweens.forEach((tween) => {
        tween.kill();
      });
      console.log(this.tweens[0]);
    }, 2000); */
  }
  /*  allBlink() {

  } */
}
