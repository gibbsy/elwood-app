<template>
  <div
    ref="container"
    class="feature__video_wrapper"
    :class="{
      autoplay,
      wallpaper,
    }"
  >
    <div
      ref="innerContainer"
      class="feature__video_wrapper_inner"
      :class="{ autoplay, wallpaper }"
    >
      <div
        v-if="wallpaper"
        :id="playerId"
        ref="player"
        class="feature__video wallpaper"
        data-scroll
        data-scroll-speed="-1"
      ></div>
      <div v-else :id="playerId" ref="player" class="feature__video"></div>
      <transition name="quick-fade">
        <div
          v-if="!autoplay"
          v-show="!inProgress"
          ref="poster"
          class="video__poster"
          data-scroll
        >
          <button id="play_btn" type="button">
            <img src="../assets/play_btn.svg" alt="Play video" />
          </button>
        </div>
      </transition>
      <div class="video__overlay"></div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  props: {
    playerId: {
      type: String,
      required: true,
    },
    vimeoId: {
      type: String,
      required: true,
    },
    autoplay: {
      type: Boolean,
      default: false,
    },
    wallpaper: {
      type: Boolean,
      default: false,
    },
    scroll: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      container: "",
      observer: "",
      playerEl: "",
      controller: "",
      poster: "",
      player: {},
      paused: true,
      inProgress: false,
      initialized: false,
    };
  },
  computed: {
    ...mapState({
      palette: (state) => state.main.palette,
      winSize: (state) => state.main.winSize,
    }),
    playerOpts() {
      return {
        id: this.vimeoId,
        width: 1920,
        byline: false,
        muted: this.autoplay,
        autoplay: this.autoplay,
        autopause: !this.autopause,
        portrait: false,
        title: false,
        controls: !this.autoplay,
        loop: this.autoplay,
      };
    },
    videoUri() {
      return encodeURI(`https://vimeo.com/${this.vimeoId}`);
    },
  },
  mounted() {
    //  Lazy init
    //  Use a mutation observer to watch for the is-inview class applied by Locomotive
    this.playerEl = this.$refs.player;
    this.container = this.$refs.container;
    const config = { attributes: true, childList: false, subtree: false };
    this.observer = new MutationObserver(this.onClassChange);
    this.observer.observe(this.container, config);
    // initialize autoplay videos first so they are ready to fade in
    if (this.autoplay) {
      this.init();
    }
  },
  beforeDestroy() {
    if (this.initialized) {
      if (!this.autoplay) {
        this.poster.removeEventListener("click", this.toggleController);
        this.controller.removeEventListener("click", this.toggleController);
        this.player.off("pause", this.onPause);
        this.player.off("play", this.onPlay);
        this.player.off("ended", this.onEnded);
      }
      this.observer.disconnect();
      this.player.destroy();
    }
  },
  methods: {
    onClassChange(mutationsList, observer) {
      for (const m of mutationsList) {
        if (m.attributeName === "class") {
          if (m.target.classList.contains("is-inview")) {
            if (!this.initialized) {
              this.init();
              this.observer.disconnect();
            }
            if (this.autoplay) {
              if (this.player.getPaused()) {
                console.log("paused");
                this.player.play();
              }
            }
          }
        }
      }
    },
    init() {
      // create an invisible element over video player so we can scroll the page over the video
      this.initPlayer();
      /**
       * these methods causing problems with nuxt
       */
      /*   if (this.autoplay) {
        this.initOverlay();
      } else {
        this.initController();
      } */
      this.initialized = true;
    },
    initPlayer() {
      // create the player instance
      const player = new Vimeo.Player(this.playerId, this.playerOpts);
      // player.setColor("#fff777");
      this.player = player;
      /*       this.player.ready().then(() => {
        this.iframe = document.querySelector("iframe");
      }); */
    },
    initOverlay() {
      // create an invisible element over video player so we can scroll the page over the video
      const overlay = document.createElement("div");
      overlay.classList.add("video__overlay");
      this.$refs.innerContainer.appendChild(overlay);
    },
    initController() {
      // create poster image element over video player to use as a controller
      const { player, playerEl } = this;
      const controller = document.createElement("div");
      controller.classList.add("video__controller", "show");
      playerEl.appendChild(controller);
      // send api request so we can put together the poster uri
      const poster = this.$refs.poster;
      this.getVimeoData(
        `https://vimeo.com/api/oembed.json?url=${this.videoUri}`
      ).then((data) => {
        const str = data.thumbnail_url;
        const posterUri = str.slice(str.lastIndexOf("/") + 1, str.indexOf("_"));
        poster.style.backgroundImage = `url(
          https://i.vimeocdn.com/video/${posterUri}.jpg?mw=1920&mh=10800&q=70)`;
      });
      poster.addEventListener("click", this.toggleController);
      player.on("pause", this.onPause);
      player.on("play", this.onPlay);
      player.on("ended", this.onEnded);
      controller.addEventListener("click", this.toggleController);
      this.poster = poster;
      this.controller = controller;
    },
    getVimeoData(url) {
      return fetch(url).then((res) => res.json());
    },
    toggleController(evt, val) {
      if (this.paused) {
        this.player.play();
        this.inProgress = true;
      } else {
        this.player.pause();
      }
    },
    onPlay() {
      const { playerEl, scroll } = this;
      const { height } = this.winSize;
      const offset = (height - playerEl.offsetHeight) / 2;
      scroll.scrollTo(playerEl, { offset: -offset });
      this.paused = false;
    },
    onPause() {
      this.paused = true;
    },
    onEnded() {
      this.inProgress = false;
    },
  },
};
</script>
