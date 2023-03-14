<template>
  <div id="home" class="home-wrap text-black">
    <div class="home-bg">
      <video autoplay muted loop>
        <source src="../../assets/video-bg.mp4" type="video/mp4" />
      </video>
      <div class="overlay"></div>
    </div>
    <!-- <div >
      <div class="overlay"></div>
      <img src="~/assets/bg.png" />
    </div> -->
    <v-container class="home-content text-white text-center">
      <div>
        <div class="text-h2 mb-2">VW Safari Official</div>
        <div class="text-body-1 mb-4">Explore borobudur with us</div>
        <v-btn href="#about-us" icon="mdi-arrow-down" />
      </div>
    </v-container>
  </div>
</template>

<style lang="scss">
@mixin bg-full {
  position: absolute;
  left: 0;
  bottom: 0;
}
.home-wrap {
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  width: 100vw;
  margin-top: -65px;
}
.home-bg {
  .overlay {
    @include bg-full;
    height: 100%;
    width: 100%;
    // background-color: #3c6255;
    background-color: black;
    opacity: 0.5;
    z-index: 1;
  }
  video {
    @include bg-full;
    min-height: 100%;
    min-width: 100%;
    left: auto !important;
    right: auto !important;
    z-index: -1;
  }
}
.home-content {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 65px);
  margin-top: 65px;
  z-index: 2;
}
</style>
