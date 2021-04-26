/* eslint-disable no-unused-vars */
<template>
  <div
    id="graphics"
    class="graphics__container"
    data-scroll
    data-scroll-speed="0.2"
    aria-hidden="true"
  >
    <div class="graphics__gradient--pink"></div>
  </div>
</template>

<script>
import { addClass, getRandomInt } from "../assets/utils";
if (typeof window === "undefined") {
  global.window = {};
}
export default {
  data() {
    return {
      coords: {},
    };
  },
  mounted() {
    this.mainDots();
  },
  methods: {
    initGraphics() {},
    mainDots() {
      const { innerWidth, innerHeight } = window;
      const container = document.getElementById("graphics");
      console.log(innerWidth, innerHeight, container);
      const pad = 44;
      const size = 4;
      const numDots = Math.floor(innerWidth / (pad + size));
      const numRows = Math.floor((innerHeight * 0.85) / (pad + size));
      const grid = document.createElement("div");
      addClass(grid, "graphics__dots-main");
      container.appendChild(grid);
      for (let i = 0; i < numRows; i++) {
        const row = document.createElement("ul");
        grid.appendChild(row);
        for (let i = 0; i < numDots; i++) {
          const dot = document.createElement("li");
          if (Math.random() < 0.6) {
            gsap.fromTo(
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
          }
          row.appendChild(dot);
        }
      }
    },
    dotsGroup(dotSize, margin, className) {},
  },
};
</script>
