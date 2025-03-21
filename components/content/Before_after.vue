<script lang="ts" setup>
</script>

<template>
  <div class="card flex justify-center w-2/3">
    <ImageCompare class="sm:w- shadow-lg rounded-2xl">
      <template #left>
        <NuxtImg src="/porsche_blue.jpeg"/>
      </template>
      <template #right>
        <NuxtImg src="/porsche_red.jpeg"/>
      </template>
    </ImageCompare>
  </div>
  <div class="flex flex-col items-start w-2/3 mx-auto">
    <section>
      <h1 class="text-4xl">
        <slot mdc-unwrap="p" />
      </h1>
      <slot name="description" />
    </section>
  </div>
</template>

<style scoped>

</style>