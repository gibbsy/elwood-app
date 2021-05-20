<template>
  <div id="page-wrapper" ref="scroll" class="home page-wrapper">
    <div id="sticky-nav-target"></div>
    <transition appear name="fade">
      <nav-desktop ref="nav" :scroll="scroll" />
    </transition>
    <nav-sticky
      data-scroll
      data-scroll-sticky
      data-scroll-target="#sticky-nav-target"
      :active="navActive"
      :scroll="scroll"
      :dark="dark"
    />

    <section
      id="hero-container"
      class="hero__container"
      data-scroll
      data-scroll-call="hero"
      data-scroll-repeat="true"
    >
      <graphics :section-id="'hero-graphics'" :scroll="scroll"></graphics>
      <div class="hero__content-block">
        <div class="hero__text-block" data-scroll data-scroll-speed="-2">
          <h1
            id="hero-heading"
            ref="hero-heading"
            class="hero__headline intro-ani"
          >
            {{ homeData.heroHeadline }}
          </h1>
          <div
            id="hero-summary"
            ref="hero-summary"
            class="hero__summary intro-ani"
          >
            <block-content :blocks="homeData.heroBody"></block-content>
          </div>
          <div
            id="hero-btns"
            ref="hero-btns"
            class="hero__btn-container intro-ani"
          >
            <button
              class="btn btn__solid--green"
              @click.prevent="
                scrollTo('#feature-0', {
                  offset: 100,
                  duration: 1000,
                })
              "
            >
              Single-API Market Access
            </button>
            <button
              class="btn btn__solid--green"
              @click.prevent="
                scrollTo('#feature-1', {
                  offset: 100,
                  duration: 1000,
                })
              "
            >
              End-to-End Trading Services
            </button>
          </div>
        </div>
        <!--  <ul
          id="hero-bullets"
          class="hero__feature-list"
          data-scroll
          data-scroll-speed="-1"
        >
          <li
            v-for="(item, i) in homeData.heroBullets"
            :key="i"
            class="hero__bullet intro-ani"
          >
            {{ item.text }}
          </li>
        </ul> -->
        <div
          class="hero__btn-container--mobile"
          data-scroll
          data-scroll-speed="-1"
        >
          <button
            class="btn btn__solid--green"
            @click.prevent="
              scrollTo('#feature-0', {
                offset: 0,
                duration: 1000,
              })
            "
          >
            Single-API Market Access
          </button>
          <button
            class="btn btn__solid--green"
            @click.prevent="
              scrollTo('#feature-1', {
                offset: 0,
                duration: 1000,
              })
            "
          >
            End-to-End Trading Services
          </button>
        </div>
      </div>
      <div
        class="graphics__circle-keyline--green"
        data-scroll
        data-scroll-speed="2.5"
        data-scroll-repeat="true"
        role="presentation"
        alt=""
        aria-hidden
      >
        <div class="graphic"></div>
      </div>
    </section>
    <section
      class="features__section-container"
      data-scroll
      data-scroll-call="features"
      data-scroll-repeat="true"
    >
      <div
        id="features-hex-1"
        class="graphics__hex--white"
        data-scroll
        data-scroll-speed="-2"
        role="presentation"
        aria-hidden="true"
      >
        <div class="graphic"></div>
      </div>
      <div
        id="features-hex-2"
        class="graphics__hex--white"
        data-scroll
        data-scroll-speed="-3"
        role="presentation"
        aria-hidden="true"
      >
        <div class="graphic"></div>
      </div>
      <div
        id="features-circ-1"
        class="graphics__circle"
        data-scroll
        data-scroll-speed="-2"
        role="presentation"
        aria-hidden="true"
      >
        <div class="graphic"></div>
      </div>
      <div
        id="features-circ-2"
        class="graphics__circle-keyline--green"
        data-scroll
        data-scroll-speed="-1"
        role="presentation"
        aria-hidden="true"
      >
        <div class="graphic"></div>
      </div>
      <dot-grid
        v-show="!isMobile"
        data-scroll
        data-scroll-speed="-1"
        :init-options="{ radius: 3, rows: 4, cols: 16, gap: 18 }"
        fill="purple"
        uid="features-1"
      ></dot-grid>
      <dot-grid
        v-show="!isMobile"
        data-scroll
        data-scroll-speed="-1"
        :init-options="{ radius: 3, rows: 4, cols: 12, gap: 24 }"
        fill="purple"
        uid="features-2"
      ></dot-grid>
      <dot-grid
        v-show="!isMobile"
        data-scroll
        data-scroll-speed="-2"
        :init-options="{ radius: 3, rows: 4, cols: 8, gap: 18 }"
        fill="purple"
        uid="features-3"
      ></dot-grid>

      <div
        v-for="(feature, i) in homeData.features"
        :id="`feature-${i}`"
        :key="i"
        :class="['feature__content-block', { rtl: i % 2 != 0 }]"
      >
        <div class="feature__text-block" data-scroll data-scroll-speed="1">
          <div
            class="feature__subhead"
            data-scroll
            :data-scroll-offset="videoOffset / 2"
          >
            <h2 class="section__caption">
              {{ feature.subhead }}
            </h2>
          </div>
          <div
            class="feature__title"
            data-scroll
            :data-scroll-offset="videoOffset / 2"
          >
            <block-content :blocks="feature.title"></block-content>
          </div>
          <div
            class="feature__summary"
            data-scroll
            :data-scroll-offset="videoOffset / 2"
          >
            <block-content :blocks="feature.text"></block-content>
          </div>
          <div
            class="feature__cta-wrapper"
            data-scroll
            :data-scroll-offset="videoOffset / 2"
          >
            <a
              class="cta-link"
              @click.prevent="
                scrollTo('#contact-section', {
                  offset: 100,
                  duration: 1000,
                })
              "
              >Connect to get started</a
            >
          </div>
        </div>
        <ContentVideo
          :player-id="`feature-video-${i}`"
          :vimeo-id="feature.animation"
          :autoplay="true"
          :wallpaper="true"
          :scroll="scroll"
          data-scroll
          data-scroll-repeat="true"
          :data-scroll-offset="videoOffset"
        ></ContentVideo>
      </div>
    </section>
    <section
      class="usp__section-container"
      data-scroll
      data-scroll-call="usp"
      data-scroll-repeat="true"
      data-scroll-offset="100%"
    >
      <graphics :scroll="scroll"></graphics>

      <div
        class="usp__content-block"
        data-scroll
        data-scroll-call="showBullets"
        data-scroll-repeat="false"
        :data-scroll-offset="videoOffset"
      >
        <div
          class="usp__headline"
          data-scroll
          :data-scroll-offset="videoOffset"
        >
          <block-content
            :class-name="'block-heading--centred'"
            :blocks="homeData.uspTitle"
          ></block-content>
        </div>
        <div class="usp__bullet-points" data-scroll data-scroll-speed="-1">
          <div
            v-for="(bullet, i) in homeData.uspList"
            :key="i"
            class="usp__bullet"
          >
            <figure
              class="usp__icon"
              :style="{ backgroundImage: `url(${urlFor(bullet.icon)})` }"
              data-scroll
            ></figure>
            <h2 class="usp__title">{{ bullet.title }}</h2>
            <block-content :blocks="bullet.text"></block-content>
          </div>
        </div>
        <a
          class="cta-link--green centred usp__cta"
          data-scroll
          @click.prevent="
            scrollTo('#contact-section', {
              offset: 100,
              duration: 1000,
            })
          "
          >Connect to get started</a
        >
      </div>
    </section>
    <section
      id="clients-section"
      class="clients__section-container"
      data-scroll
      data-scroll-call="clients"
      data-scroll-repeat="true"
    >
      <div class="clients__content-block">
        <div
          id="clients-hex-1"
          class="graphics__hex--white"
          data-scroll
          data-scroll-speed="-2"
          role="presentation"
          aria-hidden="true"
        >
          <div class="graphic"></div>
        </div>
        <div
          id="clients-hex-2"
          class="graphics__hex--keyline"
          data-scroll
          data-scroll-speed="-3"
          role="presentation"
          aria-hidden="true"
        >
          <div class="graphic"></div>
        </div>
        <div
          id="clients-circ-1"
          class="graphics__circle"
          data-scroll
          data-scroll-speed="-2"
          role="presentation"
          aria-hidden="true"
        >
          <div class="graphic"></div>
        </div>

        <dot-grid
          v-show="!isMobile"
          data-scroll
          data-scroll-speed="-1"
          :init-options="{ radius: 3, rows: 6, cols: 14, gap: 12 }"
          fill="purple"
          uid="clients-1"
        ></dot-grid>
        <dot-grid
          v-show="!isMobile"
          data-scroll
          data-scroll-speed="-1"
          :init-options="{ radius: 3, rows: 8, cols: 12, gap: 18 }"
          fill="green"
          uid="clients-2"
        ></dot-grid>
        <div class="clients__title" data-scroll data-scroll-offset="100">
          <h1 class="block-heading--centred">{{ homeData.clientsTitle }}</h1>
        </div>
        <clients-carousel :clients="homeData.clients"></clients-carousel>
      </div>
    </section>
    <section class="connect__section-container">
      <div
        id="connect-circ-1"
        class="graphics__circle--grey"
        data-scroll
        data-scroll-speed="-2"
        role="presentation"
        aria-hidden="true"
      >
        <div class="graphic"></div>
      </div>
      <div
        id="connect-hex-1"
        class="graphics__hex--keyline"
        data-scroll
        data-scroll-speed="-3"
        role="presentation"
        aria-hidden="true"
      >
        <div class="graphic"></div>
      </div>
      <div
        id="connect-hex-2"
        class="graphics__hex--grey"
        data-scroll
        data-scroll-speed="-2"
        role="presentation"
        aria-hidden="true"
      >
        <div class="graphic"></div>
      </div>
      <dot-grid
        v-show="!isMobile"
        data-scroll
        data-scroll-speed="-1"
        :init-options="{ radius: 3, rows: 6, cols: 14, gap: 12 }"
        fill="purple"
        uid="connect-1"
      ></dot-grid>
      <dot-grid
        v-show="!isMobile"
        data-scroll
        data-scroll-speed="-1"
        :init-options="{ radius: 3, rows: 8, cols: 12, gap: 18 }"
        fill="green"
        uid="connect-2"
      ></dot-grid>
      <div id="contact-section" class="connect__content-block">
        <div class="connect__title" data-scroll data-scroll-offset="200">
          <h1 class="block-heading--centred">Connect With Our Team</h1>
        </div>
        <div class="connect__main" data-scroll data-scroll-offset="200">
          <div class="connect__intro">
            <block-content :blocks="homeData.connectIntro"></block-content>
          </div>
          <contact-form></contact-form>
        </div>
      </div>
    </section>
    <div v-if="homeData.promoBoxes.length">
      <section
        id="promo-section"
        class="promo__section-container"
        data-scroll
        data-scroll-call="promos"
        data-scroll-repeat="true"
        data-scroll-offset="100%"
      >
        <graphics :section-id="'promo-bg-graphics'" :scroll="scroll"></graphics>

        <div
          class="promo__content-block"
          data-scroll
          :data-scroll-offset="videoOffset"
        >
          <a
            v-for="promo in homeData.promoBoxes"
            :key="promo.title"
            :class="['promo-box', `col-${homeData.promoBoxes.length}`]"
            @click.prevent="scrollTo(`#${promo.link}`)"
          >
            <div class="promo__content">
              <figure
                class="promo__icon"
                :style="{ backgroundImage: `url(${urlFor(promo.icon)})` }"
                data-scroll
              ></figure>
              <div class="promo__text-content">
                <h1 class="promo__title">{{ promo.title }}</h1>
                <block-content :blocks="promo.text"></block-content>
              </div>
            </div>
            <div class="promo__cta"></div>
          </a>
        </div>
      </section>
    </div>
    <app-footer />
  </div>
</template>

<script>
import mobile from "is-mobile";
import imageUrlBuilder from "@sanity/image-url";
import sanityClient from "../sanityClient";
import NavDesktop from "../components/NavDesktop";
import NavSticky from "../components/NavSticky";
import ClientsCarousel from "../components/ClientsCarousel";
import Graphics from "../components/Graphics";
import ContentVideo from "../components/ContentVideo";
import DotGrid from "../components/DotGrid";
import ContactForm from "~/components/ContactForm.vue";
import AppFooter from "~/components/AppFooter";
const urlBuilder = imageUrlBuilder(sanityClient);
if (typeof window === "undefined") {
  global.window = {};
}
const query = `{
  "config": *[_type=="siteConfig"]{"title": siteTitle, "description": siteDescription, "keywords": siteKeywords},
	"home": *[_type=="home"][0] {
  ...,
  heroBullets[] {
   text
  },
  features[] {
  subhead, title, text, animation, image
  },
  uspList[] {
		..., icon{
    asset->
    }
  },
  clients[] {
		name, position, quote, 
    image,
    logo{
    asset->
  }
  },
   promoBoxes[] {
		..., icon{
    asset->
    }
  },
},
"legals": *[_type == "legalsPage" ]{ title, "slug": slug.current }
}`;
export default {
  components: {
    NavDesktop,
    NavSticky,
    ContentVideo,
    ClientsCarousel,
    Graphics,
    ContactForm,
    DotGrid,
    AppFooter,
  },
  async asyncData() {
    const homeData = await sanityClient.fetch(query);
    return {
      homeData: homeData.home,
      legals: homeData.legals,
      config: homeData.config[0],
    };
  },
  data() {
    return {
      loaded: false,
      navActive: false,
      dark: false,
      resizeTimeout: 0,
      scroll: {},
      tlIntro: {},
      bulletsOn: false,
      /**
       * started to add, then remove email box in hero
       */
      /*       email: { value: null, valid: false },
      emailValid: true, */
    };
  },
  head() {
    const { title, description, keywords } = this.config;
    return {
      title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: description,
        },
        {
          hid: "keywords",
          name: "keywords",
          content: keywords,
        },
        {
          property: "og:locale",
          content: "en_GB",
          vmid: "og:locale",
        },
        {
          property: "og:type",
          content: "website",
          vmid: "og:type",
        },
        {
          property: "og:url",
          content: "https://elwood.io",
          vmid: "og:url",
        },
        {
          property: "og:site_name",
          content: "Elwood",
          vmid: "og:site_name",
        },
        {
          property: "og:image",
          content: "https://elwood.io/elwood_thumbnail_large.jpg",
          vmid: "og:image",
        },
        {
          property: "og:image:width",
          content: "1200",
          vmid: "og:image_width",
        },
        {
          property: "og:image:height",
          content: "630",
          vmid: "og:image_width",
        },
        {
          property: "og:title",
          content: title,
          vmid: "og:title",
        },
        {
          property: "og:description",
          content: description,
          vmid: "og:description",
        },
        {
          property: "twitter:card",
          content: "summary_large_image",
          vmid: "twitter:card",
        },
        {
          property: "twitter:title",
          content: title,
          vmid: "twitter:title",
        },
        {
          property: "twitter:description",
          content: description,
          vmid: "twitter:description",
        },
        {
          property: "twitter:image",
          content: "https://elwood.io/elwood_thumbnail_large.jpg",
          vmid: "twitter:image",
        },
      ],
    };
  },
  computed: {
    isMobile() {
      return mobile();
    },
    videoOffset() {
      let val = 100;
      if (process.client) {
        if (window.innerHeight < 768) {
          val = Math.round(window.innerHeight / 4);
        } else {
          val = Math.round(window.innerHeight / 2.5);
        }
      }
      return val;
    },
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
      this.$nextTick(() => {
        this.introAni();
      });
    },
    initScrollEvents() {
      window.addEventListener("resize", this.handleResize);
      this.scroll.on("call", (value, way, obj) => {
        if (value === "hero") {
          if (this.isMobile) {
            return;
          }
          if (way === "exit") {
            this.navActive = true;
          } else {
            this.navActive = false;
          }
        }
        if (value === "usp") {
          if (this.isMobile) {
            return;
          }
          if (way === "exit") {
            this.dark = false;
          } else if (way === "enter") {
            this.dark = true;
          }
        }
        if (value === "promos") {
          if (this.isMobile) {
            return;
          }
          if (way === "exit") {
            this.dark = false;
          } else if (way === "enter") {
            this.dark = true;
          }
        }
        if (value === "showBullets" && way === "enter") {
          if (!this.bulletsOn) {
            this.showUSPs();
          }
        }
      });
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
    introAni() {
      const nav = document.getElementById("nav");
      // const heroSub = document.getElementById("hero-subhead");
      const heroHead = this.$refs["hero-heading"];
      const heroSummary = this.$refs["hero-summary"];
      const btns = this.$refs["hero-btns"];
      const bullets = gsap.utils.toArray(".hero__bullet");
      const els = [/* heroSub, */ heroHead, heroSummary, btns];
      this.tlIntro = gsap
        .timeline()
        .set(els, { opacity: 0, y: "+=80" })
        .set(nav, { y: "-=40", opacity: 0 })
        .set(bullets, { x: "+=30", opacity: "0" })
        .to(
          nav,
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "Power2.easeOut",
          },
          0.5
        );

      els.forEach((el, i) => {
        this.tlIntro.to(
          el,
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "Power2.easeOut",
          },
          i * 0.2 + 0.5
        );
      });
      bullets.forEach((el, i) => {
        this.tlIntro.to(
          el,
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "Power2.easeOut",
          },
          i * 0.3 + 2
        );
      });
    },
    showUSPs() {
      if (this.bulletsOn === true) {
        return;
      }
      const els = gsap.utils.toArray(".usp__bullet");
      const tlBullets = gsap.timeline().set(els, { y: "+=100", opacity: 0 });
      els.forEach((el, i) => {
        tlBullets.to(
          el,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "Power2.easeOut",
          },
          i * 0.1 + 0.5
        );
      });
      this.bulletsOn = true;
    },
    /* handleEmail() {
      console.log(this.email);
      this.scroll.stop();
    }, */
  },
};
</script>
