<template>
  <div class="2xl:px-40 xl:px-20 px-5 bg-primary-700 py-28">
    <h3 class="font-mono text-2xl text-white">Процесс работы</h3>
    <ul class="flex mt-12 items-end hf:flex-row flex-col relative hf:h-auto h-[36rem]">
      <li
        v-for="(item, index) in process"
        :key="index"
        class="hf:static absolute hf:w-full hf:block flex st:left-[40%] left-[9%]"
        :style="{ top: 9 * index + 'rem' }"
      >
        <h4 class="font-mono text-3xl text-primary-500 mb-2 mt-1 w-9" :class="[index === 0 && 'text-primary-100']">
          {{ index + 1 }}
        </h4>
        <hr
          class="border-none bg-primary-500 hf:h-[1px] hf:w-auto w-[1px] h-[9rem]"
          :class="[index === 0 && '!bg-primary-100 rounded-lg hf:h-[2px] w-[2px]']"
        />
        <p class="mt-3 hf:ml-0 ml-7 text-primary-500 text-lg font-medium" :class="[index === 0 && 'text-primary-100']">
          {{ item }}
        </p>
      </li>
    </ul>
    <p class="text-primary-100 max-w-[20rem] w-full mt-6">
      Оставляйте заявку на нашем сайте, в чате или по телефонам, указанным на сайте
    </p>
  </div>
</template>

<script>
  export default {
    computed: {
      process() {
        return ["Заявка", "Консультация", "Договор", "Предоставление услуг"];
      },
    },
  };
</script>
