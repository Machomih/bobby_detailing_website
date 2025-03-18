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
    <h1 class="text-3xl">Metode ce fac diferenta </h1>
    <p class="text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet aperiam, asperiores aut
      consequuntur dolor doloribus, est illo ipsum labore numquam provident rem sapiente vel voluptatem? Molestiae
      possimus reiciendis sapiente!</p>
  </div>
</template>

<style scoped>

</style>