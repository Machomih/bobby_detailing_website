<template>

  <div class="flex flex-col items-center w-full h-full gap-15 overflow-x-hidden">
    <div class="relative">
      <NuxtImg class="relative"  src="/background/audi_rs7_inside.jpg" width="1920" height="540"/>
      <div class="w-full pl-10 pb-10 flex flex-col items-start absolute bottom-0 z-10 font-bold">
        <p class="text-xl md:text-2xl lg:text-3xl font-bold">FINEST AUTO DETAILING SERVICE</p>
      </div>
    </div>

    <USeparator color="primary" class="text-xl lg:text-3xl w-4/5"><h6>Servicii Oferite</h6></USeparator>

    <div class="flex flex-col lg:flex-row flex-wrap justify-center items-center gap-10 w-full h-full mx-auto">
      <Servicii :limit="limit"/>
      <div class="mt-4 text-center">
        <UButton active active-color="primary" color="secondary" size="md" to="/servicii"
                 trailing-icon="material-symbols:arrow-outward" variant="outline">+ {{ 5 - limit }}
        </UButton>
      </div>
    </div>

    <USeparator color="primary" class="w-4/5"/>

    <Before_after/>

    <USeparator color="primary" class="w-4/5"/>

    <Hero_section/>

  </div>
</template>

<script setup>
import Servicii from "~/components/servicii/Servicii.vue"
import Before_after from "~/components/content/Before_after.vue";
import Hero_section from "~/components/main_page/Hero_section.vue";

const limit = 2; // Show only the first 2 services

</script>

<style scoped>

</style>
