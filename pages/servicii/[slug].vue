<script setup>
const route = useRoute()
const {data: home} = await useAsyncData(() =>
    queryCollection('services').path(route.path).first())

console.log(home)
console.log("This is the route", route)

const title = home.value?.title
const description= home.value?.description
</script>

<template>
  <div>
    <div>{{title}}</div>
    <div>{{description}}</div>
  </div>
</template>

<style scoped>

</style>