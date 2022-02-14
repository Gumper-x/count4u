<template>
  <div class="relative 2xl:px-40 xl:px-20 px-5">
    <h3 class="font-mono text-3xl text-second-500 mb-16">{{ $t("other.team_title") }}</h3>
    <client-only>
      <carousel
        :per-page="1"
        :per-page-custom="[
          [1200, 4],
          [900, 3],
          [768, 2],
        ]"
        pagination-color="#c9cbd2"
        pagination-active-color="#3b3b47"
        :pagination-padding="5"
        :loop="true"
      >
        <slide v-for="(item, index) in team" :key="index" class="flex justify-center px-3">
          <div class="bg-second-100 flex flex-col rounded-3xl py-6 px-8 max-w-[26rem]">
            <h2 class="font-semibold text-center text-primary-500 text-xl">{{ item.title }}</h2>
            <ul class="flex flex-col gap-4 mt-2">
              <li
                v-for="(listItem, listIndex) in item.list"
                :key="listIndex"
                class="flex list-element items-center text-second-500"
              >
                {{ listItem }}
              </li>
            </ul>
          </div>
        </slide>
      </carousel>
    </client-only>
    <span class="absolute top-0 left-0 w-full h-full gradient-ellipse -z-10"></span>
  </div>
</template>

<script>
  export default {
    computed: {
      team() {
        return [
          {
            title: this.$t("other.vision"),
            list: this.$t("other.vision_list"),
          },
          {
            title: this.$t("other.mission"),
            list: this.$t("other.mission_list"),
          },
          {
            title: this.$t("other.values"),
            list: this.$t("other.values_list"),
          },
          {
            title: this.$t("other.culture"),
            list: this.$t("other.culture_list"),
          },
        ];
      },
    },
  };
</script>
