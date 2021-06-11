<template>
  <footer>
    <div class="footer__main">
      <div class="footer__contact footer__col">
        <h2>Connect</h2>
        <ul class="footer__socials">
          <li class="linkedin">
            <a
              href="https://www.linkedin.com/company/elwoodam/"
              target="_blank"
              aria-label="Follow us on Linkedin"
              >Linkedin</a
            >
          </li>
          <li class="twitter">
            <a
              href=" https://twitter.com/elwood_io"
              target="_blank"
              aria-label="Follow us on Twitter"
              >Twitter</a
            >
          </li>
        </ul>
        <div class="address">
          <p>
            <span>5th Floor,</span><span>82 Baker Street,</span
            ><span>London, W1U 8EQ, UK</span>
          </p>
          <!-- <a class="index-link" href="https://elwoodam.io"
            >Elwood Blockchain Index</a
          > -->
        </div>
      </div>
      <div class="footer__logo">
        <nuxt-link to="/">
          <logo-stacked class="logo__stacked" />
        </nuxt-link>
      </div>
    </div>
    <div class="footer__legals">
      <p class="copyright">©2021 Elwood Asset Management LLP</p>
      <ul class="legal-links-menu">
        <li v-for="page in legals" :key="page.slug">
          <nuxt-link :to="`/legal/${page.slug}`">{{ page.title }}</nuxt-link>
        </li>
      </ul>
    </div>
  </footer>
</template>
<script>
import sanityClient from "~/sanityClient";
import LogoStacked from "~/assets/logo_vertical.svg?inline";
const query = `*[_type == "legalsPage" ]{ title, "slug": slug.current }`;
export default {
  components: {
    LogoStacked,
  },
  data() {
    return {
      legals: [],
    };
  },
  async fetch() {
    this.legals = await sanityClient.fetch(query);
  },
};
</script>
