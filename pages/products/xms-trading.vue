<template>
  <div
    id="page-wrapper"
    ref="scroll"
    class="home page-wrapper"
    data-scroll-section
  >
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
          <!-- <h2 id="hero-subhead" class="subhead intro-ani">
            {{ homeData.heroSubhead }}
          </h2> -->
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
                scrollTo('#feature-2', {
                  offset: 100,
                  duration: 1000,
                })
              "
            >
              XMS Trading
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
              XMS Brokerage
            </button>
          </div>
        </div>
        <ul
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
        </ul>
        <div
          class="hero__btn-container--mobile"
          data-scroll
          data-scroll-speed="-1"
        >
          <button
            class="btn btn__solid--green"
            @click.prevent="
              scrollTo('#feature-2', {
                offset: -100,
                duration: 1000,
              })
            "
          >
            XMS Trading
          </button>
          <button
            class="btn btn__solid--green"
            @click.prevent="
              scrollTo('#feature-1', {
                offset: -100,
                duration: 1000,
              })
            "
          >
            XMS Brokerage
          </button>
        </div>
      </div>
      <div
        id="scroll-prompt"
        class="scroll-prompt"
        data-scroll
        data-scroll-speed="1.8"
        data-scroll-offset="0,20%"
        data-scroll-repeat="true"
        role="presentation"
        alt=""
        aria-hidden
        @click.prevent="
          scrollTo('#feature-0', {
            offset: 0,
            duration: 1000,
          })
        "
      >
        <div class="graphic"></div>
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
        v-if="!isMobile"
        data-scroll
        data-scroll-speed="-1"
        :init-options="{ radius: 3, rows: 4, cols: 16, gap: 18 }"
        fill="purple"
        uid="features-1"
      ></dot-grid>
      <dot-grid
        v-if="!isMobile"
        data-scroll
        data-scroll-speed="-1"
        :init-options="{ radius: 3, rows: 4, cols: 12, gap: 24 }"
        fill="purple"
        uid="features-2"
      ></dot-grid>
      <dot-grid
        v-if="!isMobile"
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
        <div class="feature__text-block">
          <div
            class="feature__subhead"
            data-scroll
            data-scroll-speed="1"
            :data-scroll-offset="videoOffset"
          >
            <h2>
              {{ feature.subhead }}
            </h2>
          </div>
          <div
            class="feature__title"
            data-scroll
            data-scroll-speed="1.25"
            :data-scroll-offset="videoOffset"
          >
            <block-content :blocks="feature.title"></block-content>
          </div>
          <div
            class="feature__summary"
            data-scroll
            data-scroll-speed="1.5"
            :data-scroll-offset="videoOffset"
          >
            <block-content :blocks="feature.text"></block-content>
          </div>
          <div
            class="feature__cta-wrapper"
            data-scroll
            data-scroll-speed="1.6"
            :data-scroll-offset="videoOffset"
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
      clients__section-container
      data-scroll
      data-scroll-call="clients"
      data-scroll-repeat="true"
    >
      <div class="clients__content-block">
        <div class="clients__title" data-scroll data-scroll-offset="100">
          <h1 class="block-heading--centred">{{ homeData.clientsTitle }}</h1>
        </div>
        <clients-carousel :clients="homeData.clients"></clients-carousel>
      </div>
    </section>
    <section connect__section-container>
      <div id="contact-section" class="connect__content-block">
        <div class="connect__title" data-scroll data-scroll-offset="200">
          <h1 class="block-heading--centred">Connect with our team</h1>
        </div>
        <div class="connect__main" data-scroll data-scroll-offset="200">
          <div class="connect__leftcol">
            <div class="connect__intro">
              <block-content :blocks="homeData.connectIntro"></block-content>
            </div>
            <block-content
              :class-name="'connect__bullets'"
              :blocks="homeData.connectBullets"
            ></block-content>
          </div>
          <contact-form></contact-form>
        </div>
      </div>
    </section>
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
              ></a>
            </li>
            <li class="twitter">
              <a
                href="https://twitter.com/Elwood_AM"
                target="_blank"
                aria-label="Follow us on Twitter"
              ></a>
            </li>
          </ul>
          <p class="address">
            <span>27 Baker Street</span><span>London, W1U 8EQ, UK</span>
          </p>
        </div>
        <div class="footer__logo">
          <logo-stacked class="logo__stacked" />
        </div>
      </div>
      <div class="footer__legals">
        <p class="copyright">©2021 Elwood Asset Management LLP</p>
        <!-- <ul>
          <nuxt-link to="privacy">Privacy policy</nuxt-link>
        </ul> -->
      </div>
    </footer>
  </div>
</template>

<script>
import mobile from "is-mobile";
import imageUrlBuilder from "@sanity/image-url";
import sanityClient from "~/sanityClient";
import NavDesktop from "~/components/NavDesktop";
import NavSticky from "~/components/NavSticky";
import ClientsCarousel from "~/components/ClientsCarousel";
import Graphics from "~/components/Graphics";
import ContentVideo from "~/components/ContentVideo";
import DotGrid from "~/components/DotGrid";
import ContactForm from "~/components/ContactForm.vue";
import LogoStacked from "~/assets/logo_vertical.svg?inline";
const urlBuilder = imageUrlBuilder(sanityClient);
if (typeof window === "undefined") {
  global.window = {};
}
const query = `{
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
}
}`;
export default {
  components: {
    NavDesktop,
    NavSticky,
    ContentVideo,
    ClientsCarousel,
    Graphics,
    ContactForm,
    LogoStacked,
    DotGrid,
  },
  async asyncData() {
    const homeData = await sanityClient.fetch(query);
    return { homeData: homeData.home };
  },
  data() {
    return {
      loaded: false,
      navActive: false,
      dark: false,
      // homeData: 0,
      resizeTimeout: 0,
      scroll: {},
      tlIntro: {},
    };
  },
  /* async fetch() {
    await sanityClient.fetch(query).then((data) => {
      // console.log(data);
      this.homeData = data.home;
      // console.log(this.homeData);
      this.$nextTick(() => {
        console.log("loaded");
        this.loaded = true;
        console.log(process.client);
        console.log(process.static);
        if (process.client) {
          this.init();
        }
      });
      // this.updateScroll();
    });
  }, */
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
  /* head() {
    if (!this || !this.home) {
      return;
    }
    return {
      title: this.home.name,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.home.description,
        },
        {
          hid: "keywords",
          name: "keywords",
          content: this.home.keywords.join(","),
        },
      ],
    };
  }, */
  mounted() {
    console.log(this.homeData);
    // this.initScroll();
    this.$nextTick(() => {
      this.init();
    });
  },
  methods: {
    init() {
      this.initScroll();
      console.log(process);
      this.$nextTick(() => {
        this.introAni();
      });
      /*  if (process.client) {
        console.log("init");
      } */
      setTimeout(() => {
        this.updateScroll();
      }, 500);
      // console.log("GSAP");
      // console.log(gsap);
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
      this.$nextTick(() => {
        this.introAni();
      });
    },
    initScrollEvents() {
      window.addEventListener("resize", () => {
        console.log("Resize");
        clearTimeout(this.resizeTimeout);
        this.resizeTimeout = setTimeout(() => {
          this.updateScroll();
        }, 250);
      });
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
        /*  if (value === "features") {
          if (this.isMobile) {
            return;
          }
          if (way === "exit") {
            this.dark = true;
          } else {
            this.dark = false;
          }
        } */
        if (value === "usp") {
          if (this.isMobile) {
            return;
          }
          if (way === "exit") {
            this.dark = false;
          } else if (way === "enter") {
            console.log(obj);
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
            console.log(obj);
            this.dark = true;
          }
        }
        if ((value === "showBullets") & (way === "enter")) {
          this.showUSPs();
          // obj.el.removeAttribute("data-scroll-call");
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

    introAni() {
      const nav = document.getElementById("nav");
      // const heroSub = document.getElementById("hero-subhead");
      const heroHead = this.$refs["hero-heading"];
      const heroSummary = this.$refs["hero-summary"];
      const btns = this.$refs["hero-btns"];
      const bullets = gsap.utils.toArray(".hero__bullet");
      const els = [/* heroSub, */ heroHead, heroSummary, btns];
      console.log(els);
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
      const els = gsap.utils.toArray(".usp__bullet");
      const tlBullets = gsap.timeline().set(els, { y: "+=100" });
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
    },
  },
};
</script>
