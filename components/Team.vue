<template>
  <div class="2xl:px-40 xl:px-20 px-5">
    <h3 class="font-mono text-3xl text-second-500 mb-16">Видение, миссия, ценности</h3>
    <client-only>
      <carousel
        :per-page="1"
        :per-page-custom="[
          [1100, 3],
          [768, 2],
        ]"
        pagination-color="#c9cbd2"
        pagination-active-color="#3b3b47"
        :pagination-padding="5"
        :loop="true"
      >
        <slide v-for="(item, index) in team" :key="index" class="flex justify-center px-3">
          <div class="bg-second-100 flex flex-col rounded-3xl py-8 px-8 max-w-[26rem]">
            <svg
              width="65"
              class="self-center text-second-400"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 14C3 14 2 14 2 13C2 12 3 9 8 9C13 9 14 12 14 13C14 14 13 14 13 14H3ZM8 8C8.79565 8 9.55871 7.68393 10.1213 7.12132C10.6839 6.55871 11 5.79565 11 5C11 4.20435 10.6839 3.44129 10.1213 2.87868C9.55871 2.31607 8.79565 2 8 2C7.20435 2 6.44129 2.31607 5.87868 2.87868C5.31607 3.44129 5 4.20435 5 5C5 5.79565 5.31607 6.55871 5.87868 7.12132C6.44129 7.68393 7.20435 8 8 8V8Z"
                fill="currentColor"
              />
            </svg>
            <h2 class="font-semibold text-center text-second-500 mt-2">Юлия Александровна</h2>
            <span class="text-primary-500 text-center mb-4">СЕО & Основательница Count4U</span>
            <p class="mb-4">
              <span class="font-semibold text-second-500">Направление:&nbsp;</span>
              Ведение ФЛП, консультации по бухгалтерскому учету и налогообложению
            </p>
            <p>
              <span class="font-semibold text-second-500">Опыт:&nbsp;</span>
              В бухгалтерской сфере с 2010 года
            </p>
            <p class="mt-4">
              <span class="font-semibold text-second-500">Образование:&nbsp;</span>
              КНЭУ, Магистр экономических наук, 2008г.
            </p>
          </div>
        </slide>
      </carousel>
    </client-only>
  </div>
</template>

<script>
  export default {
    computed: {
      team() {
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
  };
</script>
