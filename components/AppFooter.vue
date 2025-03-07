<template>
  <footer>
    <div class="flex flex-row justify-around items-start pt-20 ">

      <div class="flex flex-col gap-5 h-[470px] justify-between">
        <div class="flex flex-col gap-3">
          <h6 class="text-3xl">
            Program de lucru:
          </h6>
          <ul class="flex flex-col gap-2">
            <li><p>Luni: 8:00 - 17:00</p></li>
            <li><p>Marti: 8:00 - 17:00</p></li>
            <li><p>Miercuri: 8:00 - 17:00</p></li>
            <li><p>Joi: 8:00 - 17:00</p></li>
            <li><p>Vineri: 8:00 - 17:00</p></li>
            <li><p>Sambata: 8:00 - 13:00</p></li>
          </ul>
        </div>

        <div class="flex flex-col gap-3">
          <h6 class="text-3xl">
            Contact
          </h6>
          <ul class="flex flex-col gap-2">
            <li class="flex flex-row items-center gap-1">
              <UIcon name="material-symbols:call"/>
              <p>Telefon: 0754 279 456</p></li>
            <li class="flex flex-row items-center gap-1">
              <UIcon name="ic:baseline-whatsapp"/>
              <NuxtLink target="_blank" to="https://wa.me/+40754279456?text=urlencodedtext">
                <p>Whatsapp: 0754 279 456</p>
              </NuxtLink>
            </li>
            <li class="flex flex-row items-center gap-1">
              <UIcon name="ic:baseline-facebook"/>
              <p>Facebook:</p>
            </li>
            <li class="flex flex-row items-center gap-1">
              <UIcon name="mdi:instagram"/>
              <p>Instagram:</p>
            </li>
            <li class="flex flex-row items-center gap-1">
              <UIcon name="ic:baseline-tiktok"/>
              <p>TikTok:</p>
            </li>
            <li class="flex flex-row items-center gap-1">
              <UIcon name="material-symbols:alternate-email"/>
              <p>Email:</p>
            </li>

          </ul>
        </div>
      </div>

      <div>
        <iframe
            allowfullscreen="allowfullscreen"
            height="480" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2633.780067036085!2d27.53879244748227!3d47.1978818947063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40caf926f7015381%3A0x3270c605d6c190ae!2sDetailing%20Auto%20Iasi!5e0!3m2!1sro!2sro!4v1741341760081!5m2!1sro!2sro"
            style="border:0;"
            width="800"
        >
        </iframe>
        <p> Str. George Calinescu Nr.3, Iasi, Romania</p>
      </div>

    </div>
  </footer>
</template>
<script lang="ts" setup>

</script>

<style scoped>

</style>