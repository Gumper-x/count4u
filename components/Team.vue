<template>
  <div class="relative 2xl:px-40 xl:px-20 px-5">
    <h3 class="font-mono text-3xl text-second-500 mb-16">Видение, миссия, ценности</h3>
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
          <div class="bg-second-100 flex flex-col rounded-3xl py-6 px-8 max-w-[26rem] min-h-[27rem]">
            <h2 class="font-semibold text-center text-primary-500 text-xl mt-2">{{ item.title }}</h2>
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
            title: "Видение",
            list: [
              "Эксперт на рынке бухгалтерских, финансовых аутсорсинговых услуг",
              "Надежный партнер малого и среднего бизнеса",
              "Ответственный, желанный работодатель",
            ],
          },
          {
            title: "Миссия",
            list: [
              "Развитие культуры аутсорсинга в Украине и за ее пределами",
              "Прямое участие в росте и укреплении бизнеса наших клиентов",
              "Организация простой, прозрачной и гибкой финансово-учетной системы для каждой компании с учетом ее специфики",
            ],
          },
          {
            title: "Ценности",
            list: [
              "Команда-наша главная ценность и фундамент",
              "Честные и доверительные отношения с клиентами и сотрудниками с целью долгосрочных отношений",
              "Надежность, понимание ответственности",
            ],
          },
          {
            title: "Корпоративная культура",
            list: [
              "Профессионализм, эволюция в каждом движении",
              "Профессионализм, эволюция в каждом движении; Адаптивность, гибкость",
              "Инициативность, дружелюбие",
              "Сознательность, самодисциплина",
            ],
          },
        ];
      },
    },
  };
</script>
