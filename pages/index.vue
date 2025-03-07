<template>
  <div class="flex flex-col items-center w-full h-full gap-15">
    <div class="relative">
      <NuxtImg :src="images.backgroundMainImage" class="relative" height="540" width="1920"/>
      <div class="w-full pl-10 pb-10 flex flex-col items-start absolute bottom-0 z-10 font-bold">
        <p class="text-xl"> Fa-ti prietena invidioasa!</p>
        <p class="text-3xl font-">FINEST AUTO DETAILING SERVICE</p>
      </div>
    </div>

    <Servicii/>

    <Before_after/>

    <Hero_section/>
  </div>
</template>

<script setup>
import {images} from "@/assets/images_paths.js"
import Servicii from "~/components/index_page/Servicii.vue";
import Before_after from "~/components/index_page/Before_after.vue";
import Hero_section from "~/components/index_page/hero_section.vue";

definePageMeta({
  colorMode: 'dark',
})

</script>

<style scoped>

</style>
