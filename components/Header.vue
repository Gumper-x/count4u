<template>
  <header class="flex justify-between py-4 2xl:px-40 xl:px-20 px-5 lg:pl-8 lg:pr-6 items-center">
    <div class="fixed right-4 bottom-0 bg-red-500 text-slate-50 px-3 py-1 rounded-t-lg z-50">Режим Разработки</div>
    <div class="relative">
      <Logo class="!text-second-500" />
      <img
        class="absolute top-[-24px] left-[-173px] max-w-fit -z-10 select-none"
        :src="require('@/assets/icon/logo-line.svg')"
        alt="Line"
      />
    </div>
    <nav class="lg:flex hidden items-center">
      <ul class="flex grow justify-end">
        <li v-for="(item, index) in menu" :key="index" class="xl:px-6 px-3">
          <nuxt-link
            class="block h-full text-second-500 hover:text-primary-500 transition-[color] ease-in-out"
            :to="localePath(item.path)"
          >
            {{ item.text }}
          </nuxt-link>
        </li>
      </ul>
      <a
        class="ml-4 text-second-200 hover:text-second-300 transition ease-in-out"
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
      <a
        class="ml-4 text-second-200 hover:text-second-300 transition ease-in-out"
        target="_blank"
        href="https://www.instagram.com/count.4u"
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
      <LanguageSelect class="ml-5" />
    </nav>
    <Sidebar :menu="menu" class="lg:hidden" />
  </header>
</template>

<script>
  export default {
    computed: {
      menu() {
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
