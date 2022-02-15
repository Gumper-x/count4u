<template>
  <div class="2xl:px-40 xl:px-20 px-5">
    <h2 class="font-mono text-2xl text-second-500 mb-12">{{ $t("other.account_title") }}</h2>
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
            title: this.$t("other.account_salary"),
            icon: "money-bag",
            list: this.$t("other.account_salary_list"),
          },
          {
            title: this.$t("other.account_personnel"),
            icon: "books",
            list: this.$t("other.account_personnel_list"),
          },
          {
            title: this.$t("other.account_transaction"),
            icon: "package",
            list: this.$t("other.account_transaction_list"),
          },
          {
            title: this.$t("other.account_vta"),
            icon: "coin",
            list: this.$t("other.account_vta_list"),
          },
          {
            title: this.$t("other.account_reporting"),
            icon: "page-facing-up",
            list: this.$t("other.account_reporting_list"),
          },
          {
            title: this.$t("other.account_flp"),
            icon: "technologist",
            list: this.$t("other.account_flp_list"),
          },
        ];
      },
    },
  };
</script>
