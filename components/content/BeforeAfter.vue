<script lang="ts" setup>
defineProps({
  image1: {
    type: String,
    default: '/porsche_blue.jpeg',
  }, image2: {
    type: String,
    default: '/porsche_red.jpeg',
  }
});
</script>

<template>
  <div class="card flex justify-center w-2/3">
    <ImageCompare class="sm:w- shadow-lg rounded-2xl">
      <template #left>
        <NuxtImg :src="image1"/>
      </template>
      <template #right>
        <NuxtImg :src="image2"/>
      </template>
    </ImageCompare>
  </div>
  <div class="flex flex-col items-start w-2/3 mx-auto">
    <section>
      <h1 class="text-4xl">
        <slot name="title"/>
      </h1>
      <slot name="description"/>
    </section>
  </div>
</template>

<style scoped>

</style>