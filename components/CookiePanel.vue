<template>
  <div class="cookie__panel">
    <p>
      We use cookies to analyse traffic and improve your experience. Learn more
      in our
      <nuxt-link to="/legal/privacy-policy">privacy policy.</nuxt-link>
    </p>
    <a class="cta-link" @click.prevent="clickFn">Continue</a>
  </div>
</template>
<script>
export default {
  props: {
    clickFn: {
      type: Function,
      default: () => console.log("Expected click function"),
    },
  },
};
</script>
