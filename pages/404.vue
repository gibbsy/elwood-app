<template>
  <div ref="scroll" class="page-wrapper ancillary-page error-404">
    <div class="nav" role="navigation">
      <transition name="fade" appear mode="out-in">
        <div class="elwood-logo">
          <nuxt-link to="/">
            <logo-horizontal />
          </nuxt-link>
        </div>
      </transition>
    </div>
    <div class="hero__container--dark">
      <graphics :section-id="'err-404'" />
      <div class="error__title-block">
        <transition name="fade" appear mode="out-in">
          <h1>Sorry, we can't find that page.</h1>
        </transition>
        <transition name="fade" appear mode="out-in">
          <nuxt-link class="cta-link--green error" to="/"
            >Back to home</nuxt-link
          >
        </transition>
      </div>
    </div>
    <app-footer></app-footer>
  </div>
</template>
<script>
import AppFooter from "~/components/AppFooter.vue";
import Graphics from "~/components/Graphics.vue";
import LogoHorizontal from "~/assets/logo_horizontal.svg?inline";
export default {
  components: {
    LogoHorizontal,
    AppFooter,
    Graphics,
  },
  data() {
    return {
      err: "",
    };
  },
  mounted() {
    this.err = "404";
  },
  methods: {},
};
</script>
