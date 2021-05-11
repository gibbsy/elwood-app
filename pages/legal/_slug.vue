<template>
  <div ref="scroll" class="page-wrapper legals">
    <nav-desktop />
    <h1>{{ pageData.title }}</h1>
    <block-content :blocks="pageData.text"></block-content>
  </div>
</template>
<script>
import mobile from "is-mobile";
import imageUrlBuilder from "@sanity/image-url";
import NavDesktop from "@/components/NavDesktop";
import sanityClient from "@/sanityClient";
const urlBuilder = imageUrlBuilder(sanityClient);
console.log(mobile());
export default {
  components: {
    NavDesktop,
  },
  async asyncData({ route, params }) {
    const query = `*[_type == "legalsPage" && slug.current == "${params.slug}"]{_id, slug, text, title}`;
    const pageData = await sanityClient.fetch(query);
    console.log(pageData[0]);
    return { pageData: pageData[0] };
  },
  mounted() {
    this.$nextTick(() => {
      this.init();
    });
  },
  beforeDestroy() {
    console.log("destro scroll");
    this.scroll.destroy();
  },
  methods: {
    init() {
      this.initScroll();
      setTimeout(() => {
        this.updateScroll();
      }, 500);
    },
    urlFor(source) {
      return urlBuilder.image(source);
    },
    initScroll() {
      const el = this.$refs.scroll;
      this.scroll = new this.LocomotiveScroll({
        el,
        smooth: true,
        getDirection: true,
      });
      this.initScrollEvents();
    },
    initScrollEvents() {
      window.addEventListener("resize", () => {
        console.log("Resize");
        clearTimeout(this.resizeTimeout);
        this.resizeTimeout = setTimeout(() => {
          this.updateScroll();
        }, 250);
      });
    },
    updateScroll() {
      console.log("update scroll");
      this.scroll.update();
    },
    scrollTo(target, options) {
      this.scroll.scrollTo(target, options);
    },
  },
};
</script>
