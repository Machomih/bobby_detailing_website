<script lang="ts" setup>
const colorMode = useColorMode()
colorMode.preference = 'dark'

window.dataLayer = window.dataLayer || [];

function gtag() {
  dataLayer.push(arguments);
}

gtag('js', new Date());

gtag('config', 'G-Y0NJVKM8YW');

(function (w, d, s, l, i) {
  w[l] = w[l] || [];
  w[l].push({
    'gtm.start':
        new Date().getTime(), event: 'gtm.js'
  });
  var f = d.getElementsByTagName(s)[0],
      j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : '';
  j.async = true;
  j.src =
      'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
  f.parentNode.insertBefore(j, f);
})(window, document, 'script', 'dataLayer', 'GTM-K6SQMZ8S');
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
