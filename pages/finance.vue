<template>
  <div class="2xl:px-40 xl:px-20 px-5">
    <h2 class="font-mono text-2xl text-second-500 mb-12">{{ $t("other.finance_title") }}</h2>
    <div class="flex flex-col gap-20">
      <IconBanner
        v-for="(item, index) in accounts"
        :key="index"
        :even="((index + 1) & 1) === 0"
        :title="item.title"
        :emoji="item.icon"
        :list="item.list"
      />
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      accounts() {
        return [
          {
            title: this.$t("other.finance_cfo"),
            icon: "money-with-wings",
            list: this.$t("other.finance_cfo_list"),
          },
          {
            title: this.$t("other.finance_management"),
            icon: "bookmark-tabs",
            list: this.$t("other.finance_management_list"),
          },
          {
            title: this.$t("other.finance_management"),
            icon: "euro-banknote",
            list: this.$t("other.finance_management_list"),
          },
        ];
      },
    },
  };
</script>
