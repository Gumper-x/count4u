<template>
  <div class="relative overflow-hidden">
    <diчяv class="2xl:px-40 lg:px-20 px-5 mt-10 lg:mb-64 hf:mb-52 md:mb-56 sm:mb-52 st:mb-56 lt:mb-32 mn:mb-32 ms:mb-48 mb-40">
      <h1
        class="font-mono xl:text-6xl lg:text-5xl sm:text-4xl text-3xl leading-tight text-second-500 xl:max-w-[925px] md:max-w-[740px] max-w-[550px]"
      >
        {{ $t("other.title_home") }}
      </h1>
      <p class="sm:mt-9 mt-5 sm:text-lg max-w-[570px]">
        {{ $t("other.foreword_home") }}
      </p>
      <img
        class="absolute xl:-top-2 xl:right-0 hf:top-3 hf:right-[-6rem] md:top-[8rem] md:right-0 sm:top-[9rem] lt:top-[13rem] lt:right-[-3rem] mn:top-[15rem] mn:right-[-3rem] ms:top-[20rem] top-[23rem] right-0 -z-10 select-none max-w-[1150px] w-full"
        :src="require('@/assets/img/hand.png')"
        alt="Logo"
      />
      <BaseButton class="mt-7">{{ $t("other.get_services") }}</BaseButton>
    </diчяv>
    <TapeQuality />
    <div class="2xl:px-40 lg:px-20 px-5 my-16">
      <TargetBanner />
      <WhyUs class="mt-20" />
    </div>
    <Dignity />
    <Team class="mt-20" />
    <Process class="mt-20" />
    <Reviews class="mt-20" />
  </div>
</template>

<script>
  export default {
    name: "IndexPage",
  };
</script>
