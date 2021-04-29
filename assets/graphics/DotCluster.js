// import { getRandomInt } from "./utils";
const defaultOptions = {
  alignX: "left",
  alignY: "top",
  x: 0,
  y: 0,
  radius: 4,
  rows: 6,
  cols: 6,
  gap: 4,
  fill: "green",
  opacity: 1,
  speed: 2,
};
export default class DotGrid {
  constructor(options = {}) {
    Object.assign(this, defaultOptions, options);
    this.container = options.container;
    this.els = { rows: [], dots: [] };
    this.tweens = [];
    this.el = "";
    this.init();
  }

  init() {
    const { container, radius, rows, cols, gap, fill } = this;
    this.el = document.createElement("div");
    this.el.classList.add(
      `graphics__dots-cluster--${fill}`,
      `radius-${radius}`,
      `gap-${gap}`
    );
    this.el.setAttribute("data-scroll", "");
    this.el.setAttribute("data-scroll-speed", this.speed);
    container.appendChild(this.el);
    for (let i = 0; i < rows; i++) {
      const row = document.createElement("ul");
      this.el.appendChild(row);
      this.els.rows.push(row);
      for (let i = 0; i < cols; i++) {
        const dot = document.createElement("li");
        this.els.dots.push(dot);
        row.appendChild(dot);
      }
    }

    this.move();
    this.enter();
  }

  move(x, y) {
    const { el, alignX, alignY } = this;
    const xpos = x | this.x;
    const ypos = y | this.y;
    el.style[alignX] = xpos + "%";
    el.style[alignY] = ypos + "%";
  }

  enter() {
    const { opacity } = this;
    const tlIntro = gsap.timeline();
    this.els.rows.forEach((row) => {
      const children = Array.from(row.children);
      children.forEach((dot, i) => {
        tlIntro.to(dot, { opacity, duration: 0.5, delay: 1 }, 0.01 * i);
      });
    });
    Object.assign(this, { tlIntro });
  }
}

/* if (Math.random() < 0.6) {
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
        } */
