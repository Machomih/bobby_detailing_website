<script lang="ts" setup>

</script>

<template>
  <div class="carousel w-full">
    <div id="slide1" class="carousel-item relative w-full">
      <img
          class="w-full"
          src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"/>
      <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
        <a class="btn btn-circle" href="#slide4">❮</a>
        <a class="btn btn-circle" href="#slide2">❯</a>
      </div>
    </div>
    <div id="slide2" class="carousel-item relative w-full">
      <img
          class="w-full"
          src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"/>
      <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
        <a class="btn btn-circle" href="#slide1">❮</a>
        <a class="btn btn-circle" href="#slide3">❯</a>
      </div>
    </div>
    <div id="slide3" class="carousel-item relative w-full">
      <img
          class="w-full"
          src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"/>
      <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
        <a class="btn btn-circle" href="#slide2">❮</a>
        <a class="btn btn-circle" href="#slide4">❯</a>
      </div>
    </div>
    <div id="slide4" class="carousel-item relative w-full">
      <img
          class="w-full"
          src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"/>
      <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
        <a class="btn btn-circle" href="#slide3">❮</a>
        <a class="btn btn-circle" href="#slide1">❯</a>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>