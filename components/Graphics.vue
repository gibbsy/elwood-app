<template>
  <div
    :id="sectionId"
    class="graphics__container"
    data-scroll
    data-scroll-speed="0.1"
    role="presentation"
    aria-hidden="true"
  >
    <div class="graphics__gradient--pink"></div>
    <div class="graphics__gradient--blue"></div>
    <div class="graphics__hero-arc" data-scroll data-scroll-speed="-2">
      <div class="graphic"><arc /></div>
    </div>
    <div class="graphics__hero-hex" data-scroll data-scroll-speed="-2">
      <div class="graphic"><hex /></div>
    </div>
  </div>
</template>

<script>
// import { addClass, getRandomInt } from "../assets/utils";
import isMobile from "is-mobile";
import DotGrid from "../assets/graphics/DotGrid";
import DotCluster from "../assets/graphics/DotCluster";
import Arc from "~/assets/graphics_arc.svg?inline";
import Hex from "~/assets/graphics_hex_dark.svg?inline";

if (typeof window === "undefined") {
  global.window = {};
}
export default {
  components: {
    Arc,
    Hex,
  },
  props: {
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
    this.$nextTick(() => {
      this.initGraphics();
    });
  },
  methods: {
    initGraphics() {
      const container = document.getElementById(this.sectionId);
      this.mainDots = new DotGrid(container, 4);

      /**
       * Additional dots
       */
      const options = {
        x: 5,
        y: 20,
        radius: 3,
        rows: 8,
        cols: 18,
        gap: 16,
        fill: "green",
        opacity: 0.5,
        alignX: "right",
        alignY: "bottom",
      };
      if (!isMobile()) {
        const cluster1 = new DotCluster({ container, ...options });
        /*  const cluster2 = new DotCluster({
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
          radius: 4,
          x: 15,
          y: 30,
          rows: 6,
          cols: 12,
          fill: "green",
          speed: 5,
        }); */
        this.clusters.push(cluster1 /* cluster2, cluster3 */);
      }
    },
  },
};
</script>
