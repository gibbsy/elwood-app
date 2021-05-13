<template>
  <div :id="containerId" data-scroll-container>
    <Nuxt />
    <transition name="fade" appear>
      <cookie-panel
        v-show="!cookiesOk"
        :click-fn="acceptCookies"
      ></cookie-panel>
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {
      page: null,
      scroll: null,
      cookiesOk: true,
    };
  },
  computed: {
    containerId() {
      return this.$route.name;
    },
  },
  watch: {
    $route(value) {
      this.page = value.name;
      console.log(value);
    },
  },
  mounted() {
    window.setTimeout(() => {
      this.cookiesOk = this.$cookies.get("EW-accept-cookies");
      // this.cookiesOk = false;
    }, 3000);
  },
  methods: {
    checkCookies() {},
    acceptCookies() {
      console.log("cookies Ok");
      this.cookiesOk = true;
      this.$cookies.set("EW-accept-cookies", "true", {
        path: "/",
        maxAge: 60 * 60 * 24 * 90,
      });
    },
  },
};
</script>
