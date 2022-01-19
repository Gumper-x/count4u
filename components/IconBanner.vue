<template>
  <div class="flex md:flex-row flex-col justify-evenly md:gap-6">
    <div class="relative flex flex-col md:mr-8 min-w-[14rem]" :class="even && 'md:order-1'">
      <h3 class="font-mono text-xl md:text-left text-center md:p-0 py-8 text-second-500 whitespace-pre-line">{{ title }}</h3>
      <div
        class="md:static absolute bottom-[-45%] right-[-0.5rem] md:mt-1 md:-mr-8 self-end min-w-[6rem] max-h-20 h-20 pl-[1.4rem] py-4 bg-no-repeat bg-contain bg-[url('~/assets/icon/ellipse.svg')]"
      >
        <img class="object-contain h-full" :src="emoji ? require(`@/assets/emoji/${emoji}.png`) : ''" :alt="emoji" />
      </div>
    </div>
    <Banner class="bg-second-100 w-full max-w-4xl min-h-[28rem] py-12 md:px-16 px-8">
      <ul class="flex flex-col gap-3">
        <li
          v-for="(item, index) in list"
          :key="index"
          class="list-element-primary flex gap-1 items-center font-semibold text-second-500"
        >
          <span class="whitespace-pre-line">{{ item }}</span>
        </li>
      </ul>
    </Banner>
  </div>
</template>

<script>
  export default {
    props: {
      even: {
        type: Boolean,
        default: false,
      },
      title: {
        type: String,
        default: "",
      },
      emoji: {
        type: String,
        default: "",
      },
      list: {
        type: Array,
        default: () => [],
      },
    },
    data() {
      return {};
    },
  };
</script>
