<template>
  <ul
    class="md:flex md:justify-evenly items-center gap-4 grid grid-cols-2 justify-items-center grid-row-2 py-5 px-4 bg-primary-700 text-white"
  >
    <li v-for="(item, index) in dignity" :key="index" class="max-w-[15rem] text-center">
      <h4 class="font-mono text-3xl">{{ item.head }}</h4>
      <p class="font-medium">{{ item.body }}</p>
    </li>
  </ul>
</template>

<script>
  export default {
    computed: {
      dignity() {
        return [
          {
            head: "12",
            body: this.$t("other.success_dignity"),
          },
          {
            head: "340",
            body: this.$t("other.registered_dignity"),
          },
          {
            head: "1240",
            body: this.$t("other.legal_dignity"),
          },
          {
            head: "94%",
            body: this.$t("other.recommend_dignity"),
          },
        ];
      },
    },
  };
</script>
