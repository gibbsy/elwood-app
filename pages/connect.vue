/* eslint-disable vue/attribute-hyphenation */
<template>
  <div ref="scroll" class="home page-wrapper" data-scroll-section>
    <div class="nav" role="navigation"></div>
    <section class="hero__content-block">
      <div class="hero__text-block" data-scroll data-scroll-speed="-2">
        <h3 class="subhead">
          {{ homeData.heroSubhead }}
        </h3>
        <h1>{{ homeData.heroHeadline }}</h1>
        <div class="hero__summary">
          <block-content :blocks="homeData.heroBody"></block-content>
        </div>
        <div class="btn-container">
          <button class="btn">XMS Trading</button>
          <button class="btn">XMS Brokerage</button>
        </div>
      </div>
      <!-- <p>{{ homeData }}</p> -->
      <ul class="hero__feature-list" data-scroll data-scroll-speed="-1">
        <li v-for="(item, i) in homeData.heroBullets" :key="i">
          {{ item.text }}
        </li>
      </ul>
    </section>
    <section class="section-outer-wrapper">
      <div
        v-for="(feature, i) in homeData.features"
        :key="i"
        class="feature__content-block"
      >
        <div class="text-block">
          <block-content
            class="feature__title"
            :blocks="feature.title"
            data-scroll
            data-scroll-speed="0.5"
          ></block-content>
          <block-content
            class="feature__text"
            :blocks="feature.text"
            data-scroll
            data-scroll-speed="2"
          ></block-content>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// import LocomotiveScroll from "locomotive-scroll";
import sanityClient from "../sanityClient";
const query = `{
	"home": *[_type=="home"][0] {
  ...,
  heroBullets[] {
   text
  },
  features[] {
  subtitle, title, text, animation, image
  },
  whyXms[] {
		..., image{
    asset->
    }
  },
  clients[] {
		name, position, quote, image{
    asset->
  }
  },
connectBullets[] {
  text
}
}
}`;
export default {
  data() {
    return {
      homeData: 0,
      scroll: -1,
    };
  },
  async fetch() {
    await sanityClient.fetch(query).then((data) => {
      console.log(data);
      this.homeData = data.home;
      console.log(this.homeData);
      // this.updateScroll();
    });
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
    console.log("hi");
    console.log(this.LocomotiveScroll);
    this.$nextTick(() => {
      this.initScroll();
    });
    setTimeout(() => {
      this.updateScroll();
    }, 500);
  },
  methods: {
    initScroll() {
      const el = this.$refs.scroll;
      this.scroll = new this.LocomotiveScroll({
        el,
        smooth: true,
      });
      console.log("init");
      /*   */
    },
    updateScroll() {
      console.log("update scroll");
      this.scroll.update();
    },
  },
};
</script>

<style lang="scss">
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
