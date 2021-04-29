/* eslint-disable no-unused-vars */
<template>
  <div
    :id="sectionId"
    class="graphics__container"
    data-scroll
    data-scroll-speed="0.1"
    aria-hidden="true"
  >
    <div class="graphics__gradient--pink"></div>
    <div class="graphics__gradient--blue"></div>
  </div>
</template>

<script>
// import { addClass, getRandomInt } from "../assets/utils";
import DotGrid from "../assets/graphics/DotGrid";
import DotCluster from "../assets/graphics/DotCluster";

if (typeof window === "undefined") {
  global.window = {};
}
export default {
  props: {
    scroll: {
      type: Object,
      default: () => {},
    },
    sectionId: {
      type: String,
      default: "graphics",
    },
  },
  data() {
    return {
      mainDots: "",
      clusters: [],
    };
  },
  mounted() {
    this.initGraphics();
  },
  methods: {
    initGraphics() {
      if (!process.client) {
        return;
      }
      const container = document.getElementById(this.sectionId);
      this.mainDots = new DotGrid(container, 3);
      const options = {
        x: 5,
        y: 20,
        radius: 2,
        rows: 10,
        cols: 24,
        gap: 16,
        fill: "green",
        opacity: 0.5,
      };
      const cluster1 = new DotCluster({ container, ...options });
      const cluster2 = new DotCluster({
        container,
        ...options,
        alignX: "right",
        alignY: "bottom",
        cols: 18,
        fill: "purple",
      });
      const cluster3 = new DotCluster({
        container,
        ...options,
        alignX: "right",
        alignY: "top",
        radius: 3,
        x: 15,
        y: 30,
        rows: 6,
        cols: 12,
        fill: "green",
        speed: 5,
      });
      this.clusters.push(cluster1, cluster2, cluster3);
      console.log(this.scroll);
      this.$nextTick(() => {
        this.updateScroll();
      });
    },
    updateScroll() {
      console.log("updateScroll");
      if (typeof this.scroll.update === "function") {
        this.scroll.update();
      } else {
        setTimeout(() => {
          this.updateScroll();
        }, 100);
      }
    },
    /* mainDots() {
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
    dotsGroup(dotSize, margin, className) {}, */
  },
};
</script>
