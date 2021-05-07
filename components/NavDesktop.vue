<template>
  <div id="nav" class="nav intro-ani" role="navigation">
    <div class="elwood-logo">
      <logo-horizontal />
    </div>
    <ul class="nav__links-desktop">
      <li>
        <a
          :class="[{ active: showProducts }, 'products-link']"
          @mouseenter="showProds"
          >Products <arrow
        /></a>
        <div
          class="nav__products-dropdown"
          :class="{ active: showProducts }"
          @mouseleave="hideProds"
        >
          <ul>
            <li
              @click.prevent="
                scrollTo('#feature-2', {
                  offset: 100,
                  duration: 1000,
                })
              "
            >
              <h2>XMS Trading</h2>
            </li>
            <li
              @click.prevent="
                scrollTo('#feature-1', {
                  offset: 100,
                  duration: 1000,
                })
              "
            >
              <h2>XMS Brokerage</h2>
            </li>
          </ul>
        </div>
      </li>
      <li
        @click.prevent="
          scrollTo('#clients-section', {
            offset: 0,
            duration: 1000,
          })
        "
      >
        <a>Clients</a>
      </li>
      <li>
        <a
          @click.prevent="
            scrollTo('#contact-section', {
              offset: 0,
              duration: 1000,
            })
          "
          >Developers</a
        >
      </li>
      <li>
        <button
          tabindex="0"
          role="button"
          aria-label="Connect with us"
          class="btn btn__keyline--green"
          @click.prevent="
            scrollTo('#contact-section', {
              offset: 0,
              duration: 1000,
            })
          "
        >
          Connect with us
        </button>
      </li>
    </ul>
    <button
      v-show="isMobile"
      tabindex="0"
      role="button"
      aria-label="Connect with us"
      class="btn btn__keyline--green nav__connect-btn-mobile"
      @click.prevent="
        scrollTo('#contact-section', {
          offset: 0,
          duration: 1000,
        })
      "
    >
      Request Demo
    </button>
  </div>
</template>
<script>
import mobile from "is-mobile";
import Arrow from "~/assets/dropdown_arrow.svg?inline";
import LogoHorizontal from "~/assets/logo_horizontal.svg?inline";
export default {
  components: {
    Arrow,
    LogoHorizontal,
  },
  props: {
    scroll: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      showProducts: false,
    };
  },
  computed: {
    isMobile() {
      return mobile();
    },
  },
  methods: {
    scrollTo(target, options) {
      this.scroll.scrollTo(target, options);
    },
    showProds() {
      this.showProducts = true;
    },
    hideProds() {
      this.showProducts = false;
    },
  },
};
</script>
