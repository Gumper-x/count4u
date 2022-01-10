<template>
  <div class="2xl:px-40 xl:px-20 px-5">
    <h3 class="font-mono text-3xl text-second-500 mb-16">Что о нас говорят клиенты</h3>
    <client-only>
      <carousel
        :per-page="1"
        :per-page-custom="[
          [1280, 4],
          [860, 3],
          [550, 2],
        ]"
        pagination-color="#c9cbd2"
        pagination-active-color="#3b3b47"
        :pagination-padding="5"
        :loop="true"
      >
        <slide v-for="(item, index) in team" :key="index" class="flex justify-center px-3">
          <div class="bg-primary-100 flex flex-col rounded-3xl py-8 px-8 max-w-[23rem]">
            <h2 class="font-semibold text-center text-second-500 mt-2">Елена Еременко</h2>
            <span class="text-primary-500 text-center mb-2">руководитель ИТ отдела</span>
            <div class="flex gap-1 justify-center">
              <img v-for="id in 5" :key="id" src="@/assets/img/star.png" class="w-5" alt="star" />
            </div>
            <p class="text-second-500 mt-4">
              Директор нашей компании очень рада, что в свое время обратилась в Count4U за услушами. Вме делается оперативно, в
              оговоренные сроки. Все это время сервис - на высшем уровне. Настоятельно рекомменду...
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
