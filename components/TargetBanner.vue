<template>
  <Banner class="flex items-center hf:flex-row flex-col bg-primary-500 xl:px-36 hf:px-20 px-12 py-12">
    <img class="max-w-[14rem] w-full hf:order-none order-1" src="@/assets/img/target.png" alt="Target" />
    <div class="hf:ml-16 hf:mb-0 mb-6 text-white text-lg">
      <b class="font-mono text-lg">Count4U</b>
      – {{ $t("other.target_banner_count").toLowerCase() }}
      <p class="mt-5">{{ $t("other.target_banner_guarantee") }}</p>
      <p class="mt-5">{{ $t("other.target_banner_confidentiality") }}</p>
      <p class="mt-5">{{ $t("other.target_banner_expert") }}</p>
    </div>
  </Banner>
</template>

<script>
  export default {};
</script>
