<template>
  <div>
    <div class="2xl:px-40 lg:px-20 px-5 mt-20">
      <h1 class="font-mono lg:text-[2.5rem] text-2xl leading-tight text-second-500 2xl:w-6/12 lg:w-7/12">
        Аутсорсинг бухгалтерских и финансовых услуг
      </h1>
      <p class="sm:mt-7 mt-5 sm:text-lg lg:w-[41%]">Экономьте ваше время и расходы, развивая бизнес без отвлечения и потерь!</p>
      <img
        class="absolute top-0 right-0 -z-10 select-none max-w-[750px] w-full"
        :src="require('@/assets/img/hand.png')"
        alt="Logo"
      />
      <BaseButton class="mt-6">Получить консультацию</BaseButton>
    </div>
  </div>
</template>

<script>
  export default {
    name: "IndexPage",
  };
</script>
