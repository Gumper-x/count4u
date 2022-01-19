<template>
  <footer
    class="grid xl:grid-cols-6 grid-cols-4 grid-rows-[20px_minmax(0,_1fr)_minmax(0,_1fr)] md:gap-5 gap-9 py-12 2xl:px-40 lg:px-20 sm:px-12 px-5 bg-second-500"
  >
    <div class="flex gap-x-2.5 xl:col-start-6 xl:col-span-1 md:col-span-2 md:row-span-1 col-span-4 justify-around">
      <a
        class="text-second-200 hover:text-second-300 transition ease-in-out"
        target="_blank"
        href="https://www.facebook.com/Count4U-103905131935773"
      >
        <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 10.056C0 15.028 3.61 19.162 8.333 20v-7.223h-2.5V10h2.5V7.777c0-2.5 1.611-3.888 3.89-3.888.721 0 1.5.111 2.221.222v2.556h-1.277c-1.223 0-1.5.61-1.5 1.389V10h2.666l-.444 2.777h-2.222V20C16.389 19.162 20 15.028 20 10.056 20 4.525 15.5 0 10 0S0 4.525 0 10.056Z"
            fill="currentColor"
          />
        </svg>
      </a>
      <a
        class="text-second-200 hover:text-second-300 transition ease-in-out"
        target="_blank"
        href="https://www.instagram.com/count.4u"
      >
        <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M9.998 6.665A3.342 3.342 0 0 0 6.663 10a3.342 3.342 0 0 0 3.335 3.335A3.342 3.342 0 0 0 13.332 10a3.342 3.342 0 0 0-3.335-3.335ZM19.998 10c0-1.38.013-2.75-.065-4.128-.077-1.6-.443-3.022-1.613-4.193C17.147.506 15.729.143 14.128.066 12.747-.012 11.378 0 10 0 8.62 0 7.25-.012 5.872.066 4.272.143 2.85.509 1.68 1.679.506 2.853.143 4.271.066 5.872-.012 7.253 0 8.622 0 10c0 1.378-.013 2.75.065 4.128.077 1.6.443 3.022 1.613 4.193 1.174 1.173 2.592 1.536 4.193 1.613C7.253 20.012 8.622 20 10 20c1.38 0 2.75.013 4.128-.065 1.6-.077 3.022-.443 4.193-1.613 1.173-1.174 1.536-2.592 1.613-4.193.08-1.379.065-2.747.065-4.128ZM9.998 15.131A5.124 5.124 0 0 1 4.867 10a5.124 5.124 0 0 1 5.13-5.131A5.124 5.124 0 0 1 15.13 10a5.124 5.124 0 0 1-5.131 5.131Zm5.34-9.274A1.197 1.197 0 0 1 14.14 4.66c0-.663.536-1.198 1.199-1.198a1.197 1.197 0 0 1 .847 2.046 1.197 1.197 0 0 1-.847.35Z"
            fill="currentColor"
          />
        </svg>
      </a>
      <a class="text-second-200 hover:text-second-300 transition ease-in-out" target="_blank" href="mailto:count4u.ua@gmail.com">
        <svg height="19" viewBox="0 0 26 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M23.4 0H2.6C1.17 0 0.013 1.17 0.013 2.6L0 18.2C0 19.63 1.17 20.8 2.6 20.8H23.4C24.83 20.8 26 19.63 26 18.2V2.6C26 1.17 24.83 0 23.4 0ZM22.88 5.525L13.689 11.271C13.273 11.531 12.727 11.531 12.311 11.271L3.12 5.525C2.98965 5.45182 2.87549 5.35296 2.78446 5.23439C2.69342 5.11582 2.62738 4.98001 2.59035 4.83518C2.55331 4.69035 2.54605 4.53951 2.569 4.3918C2.59195 4.24408 2.64464 4.10256 2.72387 3.97579C2.80309 3.84902 2.90722 3.73965 3.02994 3.65429C3.15267 3.56893 3.29143 3.50936 3.43784 3.47919C3.58426 3.44901 3.73527 3.44886 3.88174 3.47873C4.02821 3.50861 4.1671 3.56789 4.29 3.653L13 9.1L21.71 3.653C21.8329 3.56789 21.9718 3.50861 22.1183 3.47873C22.2647 3.44886 22.4157 3.44901 22.5622 3.47919C22.7086 3.50936 22.8473 3.56893 22.9701 3.65429C23.0928 3.73965 23.1969 3.84902 23.2761 3.97579C23.3554 4.10256 23.408 4.24408 23.431 4.3918C23.4539 4.53951 23.4467 4.69035 23.4097 4.83518C23.3726 4.98001 23.3066 5.11582 23.2155 5.23439C23.1245 5.35296 23.0104 5.45182 22.88 5.525Z"
            fill="currentColor"
          />
        </svg>
      </a>
    </div>
    <nav class="flex flex-col xl:row-start-1 xl:col-start-1 xl:col-span-1 xl:row-span-3 md:row-start-1 md:row-span-2 col-span-2">
      <h4 class="font-semibold text-white mb-2">{{ $t("other.services") }}</h4>
      <nuxt-link
        v-for="(service, index) in services"
        :key="index"
        class="py-1 text-second-100 hover:text-primary-500 transition"
        :to="localePath(service.path)"
      >
        {{ service.text }}
      </nuxt-link>
    </nav>
    <nav class="flex flex-col xl:row-start-1 xl:row-span-3 xl:col-start-2 xl:col-span-2 md:row-start-3 col-span-2">
      <h4 class="font-semibold text-white mb-2">{{ $t("other.info") }}</h4>
      <nuxt-link
        v-for="(item, index) in info"
        :key="index"
        class="py-1 text-second-100 hover:text-primary-500 transition"
        :to="localePath(item.path)"
      >
        {{ item.text }}
      </nuxt-link>
    </nav>
    <div
      class="flex flex-col xl:row-start-1 xl:row-span-3 xl:col-span-2 xl:justify-start md:col-span-1 md:row-span-2 md:justify-end col-span-2"
    >
      <h4 class="font-semibold text-white mb-2">{{ $t("other.contact") }}</h4>
      <a href="tel:+380-68-448-08-44" class="text-second-100">+380 (68) 448 08 44</a>
      <a class="py-1 text-second-100">Украина, г. Киев, ул. Академика Лебедева, д. 1/7, оф. 178</a>
    </div>
    <div class="flex flex-col md:col-span-1 md:row-span-2 md:justify-end col-span-2 items-end">
      <Logo class="!text-white" />
      <span class="py-1 text-second-400 text-right">
        {{ $t("other.all_rights_reserved", { date: new Date().getFullYear() }) }}
      </span>
    </div>
  </footer>
</template>

<script>
  export default {
    computed: {
      services() {
        return [
          {
            text: this.$t("other.accounting"),
            path: "account",
          },
          {
            text: this.$t("other.finance"),
            path: "finance",
          },
          {
            text: this.$t("other.legal"),
            path: "legal",
          },
          {
            text: this.$t("other.automation"),
            path: "automation",
          },
        ];
      },
      info() {
        return [
          {
            text: this.$t("other.prices"),
            path: "prices",
          },
          {
            text: this.$t("other.contact"),
            path: "contact",
          },
        ];
      },
    },
  };
</script>
