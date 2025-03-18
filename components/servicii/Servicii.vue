<script lang="ts" setup>
const props = defineProps({
  limit: {
    type: Number,
    required: false,
    default: 0 // 0 means show all
  }
});

const services = [
  {
    image: '/detailing_interior.jpg',
    title: 'Detailing interior',
    description: 'Menținerea curățeniei interioare a mașinii asigură un mediu sănătos, confortabil și sigur, eliminând mirosurile neplăcute, reducând riscul de alergii și îmbunătățind siguranța la volan, contribuind totodată la păstrarea valorii autovehiculului în timp.',
    price: 700
  },
  {
    image: '/detailing_exterior.jpg',
    title: 'Detailing exterior',
    description: 'Polish-ul auto îmbunătățește și menține aspectul exterior al mașinii, corectând imperfecțiunile și oferind un finisaj de durată. Procedeul poate include unul sau mai mulți pași, asigurând un rezultat vizibil și beneficii pe termen lung.',
    price: 1200
  },
  {
    image: '/wet_car_1.jpeg',
    title: 'Detailing interior',
    description: 'Aceasta e descrierea3',
    price: 700
  },
  {
    image: '/wet_car_1.jpeg',
    title: 'Detailing exterior',
    description: 'Aceasta e descrierea4',
    price: 800
  },
  {
    image: '/wet_car_1.jpeg',
    title: 'Detailing interior',
    description: 'Aceasta e descrierea5',
    price: 900
  }
];

// Filter services based on the `limit` prop
const displayedServices = computed(() => (props.limit > 0 ? services.slice(0, props.limit) : services));

const width = ref(400)
</script>

<template>
  <div class="flex flex-row flex-wrap items-center justify-center gap-10 xl:gap-30">
    <UCard v-for="(service, index) in displayedServices" :key="index" class="w-[400px]" variant="soft">

      <NuxtImg :src="service.image" :width="width" class="relative rounded-t-xl" fit="outside" height="200"/>
      <div class="flex flex-col gap-5 pt-5">
        <p class="text-2xl font-bold text-(--ui-primary)">{{ service.title }}</p>
        <p class="text-sm xl:text-base text-wrap">{{ service.description }}</p>
      </div>


      <template #footer>
        <div class="flex flex-row justify-between items-center">
          <div class="text-xl text-(--ui-primary) font-bold">Preț de la {{ service.price }}*</div>
          <UButton label="Vezi detalii" rounded-full trailing-icon="material-symbols:arrow-right-alt"/>
        </div>
      </template>
    </UCard>
  </div>
</template>
