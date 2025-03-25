<script lang="ts" setup>
const colorMode = useColorMode()
colorMode.preference = 'dark'
</script>

<template>
  <UApp>
    <AppHeader/>
    <NuxtPage/>
    <AppFooter/>
  </UApp>

</template>

<style scoped>
</style>
