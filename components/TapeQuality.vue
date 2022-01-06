<template>
  <client-only>
    <carousel
      :per-page="1"
      :per-page-custom="[
        [1280, 6],
        [768, 4],
        [640, 3],
        [425, 2],
      ]"
      class="2xl:px-40 xl:px-20 px-5 bg-primary-700"
      :pagination-enabled="false"
    >
      <slide v-for="(item, index) in qualities" :key="index" class="text-primary-100 uppercase text-center py-3 px-3">
        {{ item }}
      </slide>
    </carousel>
  </client-only>
</template>

<script>
  export default {
    data() {
      return {
        swiper: null,
      };
    },
    computed: {
      qualities() {
        return [
          this.$t("other.professionally"),
          this.$t("other.comprehensively"),
          this.$t("other.quickly"),
          this.$t("other.creatively"),
          this.$t("other.responsibly"),
          this.$t("other.efficiently"),
        ];
      },
    },
    mounted() {},
    methods: {
      someLocalProperty() {
        console.log(2);
      },
    },
  };
</script>
