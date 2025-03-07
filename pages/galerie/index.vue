<script lang="ts" setup>

import Carousel from "~/components/galerie/carousel.vue";

const number = 5
</script>

<template>
  <div v-for="n in number" :key="n" class="foo">
    <Carousel/>
  </div>
</template>

<style scoped>

</style>