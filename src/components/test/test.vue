<template>
  <div class="container"></div>
</template>
<script>
import Viewer from "./photo.js";
const EventEmitter = require("events").EventEmitter;
const event = new EventEmitter();

export default {
  name: "Viewer",
  data() {
    return {
      progress: "",
      bkPicture: "/photos/bg.png",
      pictures: [
        "/photos/p01.png",
        "/photos/p02.png",
        "/photos/p03.png",
        "/photos/p04.png",
        "/photos/p05.png",
        "/photos/p06.png",
        "/photos/p07.png",
        "/photos/p08.png",
        "/photos/p09.png",
        "/photos/p10.png",
        "/photos/p11.png",
        "/photos/p12.png",
        "/photos/p13.png",
        "/photos/p14.png",
        "/photos/p15.png",
        "/photos/p16.png",
        "/photos/p17.png",
        "/photos/p18.png",
        "/photos/p19.png",
        "/photos/p20.png",
        "/photos/p21.png",
        "/photos/p22.png",
        "/photos/p23.png",
        "/photos/p24.png",
        "/photos/p25.png",
        "/photos/p26.png",
        "/photos/p27.png",
      ],
    };
  },
  methods: {
    initScene: function () {
      this.viewer = new Viewer(".container", event, this.bkPicture);
      this.viewer.createPhotos(this.pictures);
      event.on("progress", (v) => {
        this.progress = Math.round(v * 100);
        console.log(this.progress);
      });
    },
  },
  mounted() {
    this.initScene();
  },
  beforeDestroy() {},
};
</script>
<style>
.container {
  height: 100%;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
}
</style>
