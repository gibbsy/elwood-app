<template>
  <div ref="scroll" class="page-wrapper ancillary-page legals">
    <div class="nav" role="navigation">
      <transition name="fade" appear mode="out-in">
        <div class="elwood-logo">
          <nuxt-link to="/">
            <logo-horizontal />
          </nuxt-link>
        </div>
      </transition>
    </div>
    <div class="legals__hero-container">
      <Graphics />
      <div class="legals__title-block">
        <transition name="fade" appear mode="out-in">
          <h1 class="hero__headline">{{ pageData.title }}</h1>
        </transition>
      </div>
    </div>
    <section class="legals section-container"></section>
    <block-content
      :class-name="'legals__text text-block--full-width'"
      :blocks="pageData.text"
    ></block-content>
    <app-footer></app-footer>
  </div>
</template>
<script>
import mobile from "is-mobile";
import imageUrlBuilder from "@sanity/image-url";
import sanityClient from "@/sanityClient";
import AppFooter from "~/components/AppFooter.vue";
import LogoHorizontal from "~/assets/logo_horizontal.svg?inline";
const urlBuilder = imageUrlBuilder(sanityClient);
console.log(mobile());
export default {
  components: {
    LogoHorizontal,
    AppFooter,
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
    console.log("destroy scroll");
    window.removeEventListener("resize", this.handleResize);
    this.scroll.destroy();
    this.scroll = null;
  },
  methods: {
    init() {
      this.initScroll();
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
      setTimeout(() => {
        this.updateScroll();
      }, 500);
      this.initScrollEvents();
    },
    initScrollEvents() {
      window.addEventListener("resize", this.handleResize);
    },
    updateScroll() {
      console.log("update scroll");
      this.scroll.update();
    },
    scrollTo(target, options) {
      this.scroll.scrollTo(target, options);
    },
    handleResize() {
      console.log("Resize");
      clearTimeout(this.resizeTimeout);
      this.resizeTimeout = setTimeout(() => {
        this.updateScroll();
      }, 250);
    },
  },
};
</script>
