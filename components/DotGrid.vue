<template>
  <div
    :id="`dots-${uid}`"
    ref="container"
    class="graphics__dots-container-inline"
    role="presentation"
    aria-hidden="true"
  ></div>
</template>
<script>
import DotCluster from "../assets/graphics/DotClusterInline";
export default {
  props: {
    uid: {
      type: String,
      default: "dots",
    },
    initOptions: {
      type: Object,
      default: () => {
        return {
          radius: 5,
          rows: 6,
          cols: 8,
          gap: 12,
        };
      },
    },
    fill: {
      type: String,
      default: "purple",
    },
  },
  data() {
    return {
      tlIntro: {},
      grid: null,
    };
  },
  mounted() {
    // this.$nextTick(() => this.init());
    this.container = this.$refs.container;
    const config = { attributes: true, childList: false, subtree: false };
    this.observer = new MutationObserver(this.onClassChange);
    this.observer.observe(this.container, config);
  },
  methods: {
    init() {
      const { container, fill } = this;
      this.grid = new DotCluster({ container, fill, ...this.initOptions });
    },
    onClassChange(mutationsList, observer) {
      for (const m of mutationsList) {
        if (m.attributeName === "class") {
          if (m.target.classList.contains("is-inview")) {
            if (!this.initialized) {
              this.init();
              this.observer.disconnect();
            }
          }
        }
      }
    },
  },
};
</script>
