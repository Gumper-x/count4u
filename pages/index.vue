<template>
  <div class="h-[1000px] relative overflow-hidden">
    <div class="2xl:px-40 lg:px-20 px-5 mt-20">
      <h1
        class="font-mono xl:text-6xl lg:text-5xl sm:text-4xl text-3xl leading-tight text-second-500 xl:max-w-[925px] md:max-w-[740px] max-w-[550px]"
      >
        Аутсорсинг бухгалтерских и финансовых услуг
      </h1>
      <p class="sm:mt-9 mt-5 sm:text-lg max-w-[570px]">
        Экономьте ваше время и расходы, развивая бизнес без отвлечения и потерь!
      </p>
      <img
        class="absolute xl:-top-2 xl:right-0 md:top-3 md:right-[-6rem] lt:top-[13rem] lt:right-[-3rem] mn:top-[18rem] top-[23rem] right-0 -z-10 select-none max-w-[1150px] w-full"
        :src="require('@/assets/img/hand.png')"
        alt="Logo"
      />
      <BaseButton class="mt-7">Получить консультацию</BaseButton>
    </div>
  </div>
</template>

<script>
  export default {
    name: "IndexPage",
  };
</script>
