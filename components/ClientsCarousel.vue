<template>
  <div class="clients__carousel">
    <div v-for="client in clients" :key="client._id" class="clients__card">
      <div class="client__testimonial">
        <div class="client__image">
          <img
            :src="
              urlFor(client.image)
                .size(400, 400)
                .format('jpg')
                .quality(70)
                .url()
            "
            :alt="'Image of ' + client.name"
          />
        </div>
        <block-content :blocks="client.quote"></block-content>
      </div>
      <div class="client__details">
        <div>
          <h3 class="client__name">{{ client.name }}</h3>
          <h4 class="client__position">{{ client.position }}</h4>
        </div>
        <div class="client__logo">
          <img
            :src="
              urlFor(client.logo).width(200).format('jpg').quality(70).url()
            "
            :alt="client.company + 'logo'"
          />
        </div>
      </div>
    </div>
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
  methods: {
    urlFor(source) {
      return urlBuilder.image(source);
    },
  },
};
</script>
