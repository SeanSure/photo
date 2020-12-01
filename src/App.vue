<template>
  <div id="app">
    <div
      v-if="progress < 100"
      :class="progress >= 100 ? 'progress' : 'progress-hide'"
    >
      {{ this.progress }}%
    </div>
    <div class="container"></div>
  </div>
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
      bkPicture: "./photos/bg.png",
      pictures: [
        "./photos/p01.png",
        "./photos/kuang.png",
        "./photos/kuang.png",
        "./photos/kuang.png",
        "./photos/kuang.png",
        "./photos/kuang.png",
        "./photos/p02.png",
        "./photos/kuang.png",
        "./photos/kuang.png",
        "./photos/kuang.png",
        "./photos/kuang.png",
        "./photos/kuang.png",
        "./photos/p03.png",
        "./photos/kuang.png",
        "./photos/kuang.png",
        "./photos/kuang.png",
        "./photos/kuang.png",
        "./photos/kuang.png",
        "./photos/p04.png",
        "./photos/kuang.png",
        "./photos/kuang.png",
        "./photos/kuang.png",
        "./photos/kuang.png",
        "./photos/kuang.png",
        "./photos/p05.png",
        "./photos/kuang.png",
        "./photos/kuang.png",
        "./photos/kuang.png",
        "./photos/kuang.png",
        "./photos/kuang.png",
        "./photos/p06.png",
        "./photos/kuang.png",
        "./photos/kuang.png",
        "./photos/kuang.png",
        "./photos/kuang.png",
        "./photos/kuang.png",
        "./photos/p07.png",
        "./photos/kuang.png",
        "./photos/kuang.png",
        "./photos/kuang.png",
        "./photos/kuang.png",
        "./photos/kuang.png",
        "./photos/p08.png",
        "./photos/kuang.png",
        "./photos/kuang.png",
        "./photos/kuang.png",
        "./photos/kuang.png",
        "./photos/kuang.png",
        "./photos/p9.png",
        "./photos/kuang.png",
        "./photos/kuang.png",
        "./photos/kuang.png",
        "./photos/kuang.png",
        "./photos/kuang.png",
        "./photos/p10.png",
        "./photos/kuang.png",
        "./photos/kuang.png",
        "./photos/kuang.png",
        "./photos/kuang.png",
        "./photos/kuang.png",
        "./photos/p11.png",
        "./photos/kuang.png",
        "./photos/kuang.png",
        "./photos/kuang.png",
        "./photos/kuang.png",
        "./photos/kuang.png",
        "./photos/p12.png",
        "./photos/kuang.png",
        "./photos/kuang.png",
        "./photos/kuang.png",
        "./photos/kuang.png",
        "./photos/kuang.png",
        "./photos/p13.png",
        "./photos/p14.png",
        "./photos/p15.png",
        // "./photos/p16.png",
        "./photos/p17.png",
        "./photos/p18.png",
        "./photos/p19.png",
        "./photos/p20.png",
        "./photos/p21.png",
        "./photos/p22.png",
        "./photos/p23.png",
        "./photos/p24.png",
        "./photos/p25.png",
        "./photos/p26.png",
        "./photos/p27.png",
      ],
    };
  },
  methods: {
    initScene: function () {
      this.viewer = new Viewer(".container", event, this.bkPicture);

      this.viewer.createPhotos(this.pictures);
      event.on("progress", (v) => {
        this.progress = Math.round(v * 100);
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.container {
  height: 100%;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
}
.progress {
  position: absolute;
  z-index: 1;
  left: 200px;
  top: 50px;
  font-size: 18px;
  color: white;
}
.progress-hide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: black;
  z-index: 1;
  color: white;
  font-size: 16px;
  text-align: center;
}
</style>
