<script lang="ts" setup>
const colorMode = useColorMode()
colorMode.preference = 'dark'

useHead({
  script: [
    {
      innerHTML: `window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-Y0NJVKM8YW');`,
      type: "text/javascript"
    }
  ],
  bodyAttrs: {
    class: 'gtm-body'
  }
})
</script>

<template>
  <UApp>
    <noscript>
      <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-K6SQMZ8S"
          height="0"
          width="0"
          style="display:none;visibility:hidden"
      ></iframe>
    </noscript>
    <AppHeader/>
    <NuxtPage/>
    <AppFooter/>
  </UApp>

</template>

<style scoped>
</style>
