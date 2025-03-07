<template>
  <div class="flex flex-col items-center w-full h-full gap-15">
    <div class="relative">
      <NuxtImg :src="images.backgroundMainImage" class="relative" height="540" width="1920"/>
      <div class="w-full pl-10 pb-10 flex flex-col items-start absolute bottom-0 z-10 font-bold">
        <p class="text-xl"> Protejeaza ce iubesti!</p>
        <p class="text-3xl font-">FINEST AUTO DETAILING SERVICE</p>
      </div>
    </div>

    <Stats/>

    <figure class="diff aspect-16/9 w-3/4 h-1/4" tabindex="0">
      <div class="diff-item-1" role="img">
        <img alt="daisy" src="https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a.webp">
      </div>
      <div class="diff-item-2" role="img" tabindex="0">
        <img
            alt="daisy"
            src="https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a-blur.webp">
      </div>
      <div class="diff-resizer"/>
    </figure>

    <div class="hero bg-base-200 ">
      <div class="hero-content flex-col lg:flex-row">
        <img
            class="max-w-sm rounded-lg shadow-2xl"
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"/>
        <div>
          <h1 class="text-5xl font-bold">Pasiune si atentie la detalii</h1>
          <p class="py-6">
            Tratez fiecare masina ca si cum ar fi a mea
          </p>
        </div>
      </div>
    </div>


    <div class="hero bg-base-200 ">
      <div class="hero-content flex-col lg:flex-row-reverse justify-between">
        <img
            class="max-w-md rounded-lg shadow-2xl"
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"/>
        <div class="flex flex-col align-start w-1/2">
          <h1 class="text-3xl font-bold">PRODUSE PROFESIONALE PENTRU REZULTATE PERFECTE</h1>
          <p class="py-6">
            Aici va veni un text legat de folosirea produselor si ceva ceva
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {images} from "@/assets/images_paths.js"
import Stats from "~/components/index_page/Stats.vue";
</script>

<style scoped>

</style>
