<script setup lang="ts">
const route = useRoute()
console.log(route.params)
</script>

<template>
 Asta e serviciu <span>Serviciu ID: {{ $route.params.id }}</span>
</template>

<style scoped>

</style>