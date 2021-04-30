<template>
  <div ref="scroll" class="home page-wrapper" data-scroll-section>
    <div id="nav" class="nav intro-ani" role="navigation">
      <div class="elwood-logo">
        <logo-horizontal />
      </div>
      <div class="nav__links">
        <!--         <a>Products</a>
        <a>Company</a>
        <a>Connect</a> -->
        <button
          tabindex="0"
          role="button"
          aria-label="Connect with us"
          class="btn btn__keyline--green"
          @click.prevent="
            scrollTo('#contact-anchor', {
              offset: 100,
              duration: 1000,
            })
          "
        >
          Request Demo
        </button>
      </div>
    </div>
    <section class="hero__container">
      <graphics :section-id="'hero-graphics'" :scroll="scroll"></graphics>
      <div class="hero__content-block">
        <div class="hero__text-block" data-scroll data-scroll-speed="-2">
          <h2 id="hero-subhead" class="subhead intro-ani">
            {{ homeData.heroSubhead }}
          </h2>
          <h1 id="hero-heading" class="hero__headline intro-ani">
            {{ homeData.heroHeadline }}
          </h1>
          <div id="hero-summary" class="hero__summary intro-ani">
            <block-content :blocks="homeData.heroBody"></block-content>
          </div>
          <div id="hero-btns" class="btn-container intro-ani">
            <button class="btn btn__solid--green">XMS Trading</button>
            <button class="btn btn__solid--green">XMS Brokerage</button>
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
    <section class="features__section-container">
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
        data-scroll
        data-scroll-speed="-1"
        :init-options="{ radius: 3, rows: 4, cols: 16, gap: 18 }"
        fill="purple"
        uid="features-1"
      ></dot-grid>
      <dot-grid
        data-scroll
        data-scroll-speed="-1"
        :init-options="{ radius: 3, rows: 4, cols: 12, gap: 24 }"
        fill="purple"
        uid="features-2"
      ></dot-grid>
      <dot-grid
        data-scroll
        data-scroll-speed="-2"
        :init-options="{ radius: 3, rows: 4, cols: 8, gap: 18 }"
        fill="purple"
        uid="features-3"
      ></dot-grid>

      <div
        v-for="(feature, i) in homeData.features"
        :key="i"
        :class="['feature__content-block', { rtl: i % 2 != 0 }]"
      >
        <div class="feature__text-block">
          <div class="feature__subhead" data-scroll data-scroll-speed="1">
            <h2>
              {{ feature.subhead }}
            </h2>
          </div>
          <div class="feature__title" data-scroll data-scroll-speed="1.25">
            <block-content :blocks="feature.title"></block-content>
          </div>
          <div class="feature__summary" data-scroll data-scroll-speed="1.5">
            <block-content :blocks="feature.text"></block-content>
          </div>
          <div class="feature__cta-wrapper" data-scroll data-scroll-speed="1.6">
            <a class="cta-link">Connect to get started</a>
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
    <section class="usp__section-container">
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
          <block-content :blocks="homeData.uspTitle"></block-content>
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
        <a class="cta-link--green usp__cta" data-scroll
          >Connect to get started</a
        >
      </div>
    </section>
    <section clients__section-container>
      <div class="clients__content-block">
        <div class="clients__title" data-scroll data-scroll-offset="100">
          <h1>{{ homeData.clientsTitle }}</h1>
        </div>
        <clients-carousel :clients="homeData.clients"></clients-carousel>
      </div>
    </section>
    <section connect__section-container>
      <div id="contact-anchor" class="connect__content-block">
        <div class="connect__title" data-scroll data-scroll-offset="200">
          <h1>Connect with our team</h1>
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
    <footer>
      <div class="footer__contact footer__col">
        <h2>Connect</h2>
        <ul class="footer__socials">
          <li class="linkedin"></li>
          <li class="twitter"></li>
        </ul>
        <p class="address">
          <span>27 Baker Street</span><span>London, W1U 8EQ, UK</span>
        </p>
        <p class="copyright">©2021 Elwood Asset Management LLP</p>
      </div>
      <div class="footer__logo">
        <logo-stacked class="logo__stacked" />
      </div>
    </footer>
  </div>
</template>

<script>
import imageUrlBuilder from "@sanity/image-url";
import sanity from "@/sanityClient";
import sanityClient from "../sanityClient";
import ClientsCarousel from "../components/ClientsCarousel";
import Graphics from "../components/Graphics";
import ContentVideo from "../components/ContentVideo";
import DotGrid from "../components/DotGrid";
import ContactForm from "~/components/ContactForm.vue";
import LogoHorizontal from "~/assets/logo_refreshed_horizontal.svg?inline";
import LogoStacked from "~/assets/logo_refreshed_stacked.svg?inline";
const urlBuilder = imageUrlBuilder(sanity);
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
		..., image{
    asset->
    }
  },
  clients[] {
		name, position, quote, 
    image,
    logo{
    asset->
  }
  }
}
}`;
export default {
  components: {
    ContentVideo,
    ClientsCarousel,
    Graphics,
    ContactForm,
    LogoHorizontal,
    LogoStacked,
    DotGrid,
  },
  data() {
    return {
      homeData: 0,
      scroll: {},
      tlIntro: {},
    };
  },
  async fetch() {
    await sanityClient.fetch(query).then((data) => {
      // console.log(data);
      this.homeData = data.home;
      console.log(this.homeData);
      // this.updateScroll();
    });
  },
  computed: {
    videoOffset() {
      let val = 250;
      if (process.client) {
        val = Math.round(window.innerHeight / 2.5);
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
    this.introAni();
    this.$nextTick(() => {
      this.initScroll();
    });
    setTimeout(() => {
      this.updateScroll();
    }, 500);
    console.log("GSAP");
    console.log(gsap);
  },
  methods: {
    urlFor(source) {
      return urlBuilder.image(source);
    },
    initScroll() {
      const el = this.$refs.scroll;
      this.scroll = new this.LocomotiveScroll({
        el,
        smooth: true,
      });
      this.initScrollEvents();
    },
    initScrollEvents() {
      this.scroll.on("call", (value, way, obj) => {
        if ((value === "showBullets") & (way === "enter")) {
          this.showUSPs();
          obj.el.removeAttribute("data-scroll-call");
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
      const heroSub = document.getElementById("hero-subhead");
      const heroHead = document.getElementById("hero-heading");
      const heroSummary = document.getElementById("hero-summary");
      const btns = document.getElementById("hero-btns");
      const bullets = gsap.utils.toArray(".hero__bullet");
      const els = [heroSub, heroHead, heroSummary, btns];
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
