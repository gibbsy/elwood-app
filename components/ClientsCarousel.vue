<template>
  <div class="clients__carousel">
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
            <h3 class="client__name">{{ client.name }}</h3>
            <h4 class="client__position">{{ client.position }}</h4>
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
      this.index = i;
    },
  },
};
</script>
