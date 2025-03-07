<script lang="ts" setup>
const items = [
  'https://picsum.photos/468/468?random=1',
  'https://picsum.photos/468/468?random=2',
  'https://picsum.photos/468/468?random=3',
  'https://picsum.photos/468/468?random=4',
  'https://picsum.photos/468/468?random=5',
  'https://picsum.photos/468/468?random=6'
]

const responsiveOptions = ref([
  {
    breakpoint: '1400px',
    numVisible: 2,
    numScroll: 1
  },
  {
    breakpoint: '1199px',
    numVisible: 3,
    numScroll: 1
  },
  {
    breakpoint: '767px',
    numVisible: 2,
    numScroll: 1
  },
  {
    breakpoint: '575px',
    numVisible: 1,
    numScroll: 1
  }
])
</script>

<template>
  <div class="hero bg-base-200 w-full">
    <div class="hero-content flex-col lg:flex-row-reverse justify-evenly align-start">

      <Carousel :autoplayInterval="3500" :numScroll="1" :numVisible="1" :responsiveOptions="responsiveOptions"
                :value="items" circular class="w-200">
        <template #item="image">
          <div class=" rounded">
            <div class="relative mx-auto">
              <NuxtImg :src="image.data" class="rounded"
                       height="300"
                       width="600"
              />
            </div>
          </div>
        </template>
      </Carousel>

      <div class="flex flex-col align-start w-1/2">
        <h1 class="text-3xl font-bold">Modul meu de lucru</h1>
        <p class="py-6">
          Cu peste un deceniu de experiență în detailing-ul auto, ofer servicii premium pentru clienții care își
          doresc perfecțiune, servicii la standarde înalte și nu numai. Folosesc doar echipamente moderne și de ultimă
          generație, împreună cu produse de top pentru a reda frumusețea și strălucirea mașinii tale.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>