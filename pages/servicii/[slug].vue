<script setup>
const route = useRoute()
const {data: home} = await useAsyncData(() =>
    queryCollection('services').path(route.path).first())

console.log(home)
console.log("This is the route", route)

const title = home.value?.title
const description = home.value?.description
const price = home.value?.meta.price

const items = [
  'https://picsum.photos/640/640?random=1',
  'https://picsum.photos/640/640?random=2',
  'https://picsum.photos/640/640?random=3',
  'https://picsum.photos/640/640?random=4',
  'https://picsum.photos/640/640?random=5',
  'https://picsum.photos/640/640?random=6'
]
</script>

<template>
  <div class="min-h-[50vh] py-10 pl-10 flex flex-col gap-10 w-full">
    <h1 class="text-3xl font-bold">{{ title }}</h1>
    <div class="flex flex-col lg:flex-row gap-10">
        <p class="text-xl w-1/2">{{ description }}</p>
      <UCarousel
          v-slot="{ item }"
          fade
          arrows
          :autoplay="{ delay: 2000 }"
          :items="items"
          class="w-full max-w-xs mx-auto"
      >
        <img :src="item" width="320" height="320" class="rounded-lg">
      </UCarousel>
    </div>

    <div>
      <p class="text-2xl font-bold">
        Pret de la : {{ price }}*
      </p>
    </div>
  </div>
</template>

<style scoped>

</style>