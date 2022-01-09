<template>
  <div class="flex hf:flex-row flex-col">
    <h3 class="font-mono text-3xl text-second-500 mb-8 whitespace-nowrap">{{ $t("other.why_us") }}</h3>
    <ul class="flex flex-col xl:ml-[35%] hf:ml-[15%]">
      <li v-for="(item, index) in causes" :key="index" class="flex items-center my-6">
        <div class="min-w-[5rem] max-h-16 h-16 pl-[1.4rem] py-4 bg-no-repeat bg-contain bg-[url('~/assets/icon/ellipse.svg')]">
          <img class="object-contain h-full" :src="require(`@/assets/emoji/${item.icon}.png`)" alt="Clock-face-two-oclock" />
        </div>
        <p class="ml-4 text-lg text-second-500">{{ item.text }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    computed: {
      causes() {
        return [
          {
            icon: "clock-face-two-oclock",
            text: this.$t("other.why_us_professional_team"),
          },
          {
            icon: "high-voltage-sign",
            text: this.$t("other.why_us_quickly"),
          },
          {
            icon: "eyes",
            text: this.$t("other.why_us_keep_records"),
          },
          {
            icon: "sparkles",
            text: this.$t("other.why_us_creative"),
          },
          {
            icon: "smiling-face-with-sunglasses",
            text: this.$t("other.why_us_save"),
          },
        ];
      },
    },
  };
</script>
