<template>
  <div
    ref="container"
    class="clients__carousel"
    data-scroll
    data-scroll-offset="150"
  >
    <transition name="carousel" mode="out-in">
      <div v-for="i in [currentIndex]" :key="i" class="client__card">
        <div class="client__testimonial">
          <div
            class="client__image"
            :style="{
              'background-image': `url(${clientImage(client.image, [
                200,
                200,
              ])})`,
            }"
          ></div>
          <div class="client__quote">
            <div class="double-quotes"></div>
            <block-content :blocks="client.quote"></block-content>
          </div>
        </div>
        <div class="client__details">
          <div>
            <p class="client__name">{{ client.name }}</p>
            <p class="client__position">{{ client.position }}</p>
          </div>
          <div
            class="client__logo"
            :style="{
              'background-image': `url(${urlFor(client.logo).url()})`,
            }"
          ></div>
        </div>
      </div>
    </transition>
    <ul class="clients__carousel-tabs">
      <li
        v-for="(item, i) in clients"
        :key="item._id"
        :class="{ active: currentIndex == i }"
        @click="updateIndex(i)"
      ></li>
    </ul>
  </div>
</template>
<script>
import imageUrlBuilder from "@sanity/image-url";
import sanity from "@/sanityClient";
const urlBuilder = imageUrlBuilder(sanity);
export default {
  props: {
    clients: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      index: 0,
      container: null,
      autoPlayIndex: 0,
    };
  },
  computed: {
    currentIndex() {
      return Math.abs(this.index % this.clients.length);
    },
    client() {
      return this.clients[this.currentIndex];
    },
  },
  mounted() {
    this.container = this.$refs.container;
    const config = { attributes: true, childList: false, subtree: false };
    this.observer = new MutationObserver(this.onClassChange);
    this.observer.observe(this.container, config);
  },
  methods: {
    urlFor(source) {
      return urlBuilder.image(source);
    },
    clientImage(image, size) {
      const src = this.urlFor(image)
        .size(...size)
        .format("jpg")
        .quality(70)
        .url();
      return src;
    },
    updateIndex(i) {
      window.clearInterval(this.autoPlayIndex);
      this.index = i;
    },
    autoPlay() {
      this.autoPlayIndex = window.setInterval(() => {
        this.index += 1;
      }, 6000);
    },
    onClassChange(mutationsList, observer) {
      for (const m of mutationsList) {
        if (m.attributeName === "class") {
          if (m.target.classList.contains("is-inview")) {
            if (!this.initialized) {
              this.autoPlay();
              this.observer.disconnect();
            }
          }
        }
      }
    },
  },
};
</script>
