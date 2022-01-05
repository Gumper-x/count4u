<template>
  <div class="z-50">
    <button class="px-1.5 py-2 rounded hover:bg-second-200/20 transition ease-out duration-300" @click="openSidebar">
      <svg width="22" viewBox="0 0 24 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="0.5" y1="0.5" x2="23.5" y2="0.5" stroke="#3B3B47" stroke-linecap="round" />
        <line x1="0.5" y1="7.5" x2="23.5" y2="7.5" stroke="#3B3B47" stroke-linecap="round" />
        <line x1="0.5" y1="14.5" x2="23.5" y2="14.5" stroke="#3B3B47" stroke-linecap="round" />
      </svg>
    </button>
    <transition name="sidebar-veil">
      <div v-if="sidebar" class="fixed top-0 left-0 h-full w-full bg-black/50" @click="closeSidebar" />
    </transition>
    <transition name="sidebar">
      <aside
        v-if="sidebar"
        class="fixed top-0 right-0 bg-white h-full max-w-sm w-10/12 py-7 px-5 grid grid-rows-[auto_1fr_auto_auto]"
      >
        <div class="flex justify-end">
          <button @click="closeSidebar">
            <svg width="20" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L13 13L25 1" stroke="#3B3B47" stroke-linecap="round" />
              <path d="M25 25L13 13L1 25" stroke="#3B3B47" stroke-linecap="round" />
            </svg>
          </button>
        </div>
        <nav class="mt-6">
          <ul class="flex flex-col justify-end">
            <li v-for="(item, index) in menu" :key="index" class="xl:px-6 px-4">
              <nuxt-link
                class="block text-lg h-full text-second-500 hover:text-primary-500 transition-[color] ease-in-out"
                :to="item.path"
              >
                {{ item.text }}
              </nuxt-link>
            </li>
          </ul>
        </nav>
        <img
          class="absolute bottom-0 left-0 w-full -z-10 select-none"
          :src="require('@/assets/icon/sidebar-line.svg')"
          alt="Line"
        />
        <LanguageSelect class="mt-2 mb-12" />
        <nav class="flex pl-1">
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
          <a
            class="ml-3 text-second-200 hover:text-second-300 transition ease-in-out"
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
        </nav>
      </aside>
    </transition>
  </div>
</template>

<script>
  import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

  export default {
    props: {
      menu: {
        type: Array,
        default: () => [],
      },
    },
    data() {
      return {
        sidebar: false,
      };
    },
    methods: {
      openSidebar() {
        this.sidebar = true;
        disableBodyScroll(document, {
          reserveScrollBarGap: true,
        });
      },
      closeSidebar() {
        this.sidebar = false;
        enableBodyScroll(document);
      },
    },
  };
</script>

<style>
  .sidebar-enter-active,
  .sidebar-leave-active {
    transition-property: transform opacity;
    transition-duration: 0.3s;
    transition-timing-function: ease-in-out;
  }

  .sidebar-enter,
  .sidebar-leave-to {
    opacity: 0.7;
    transform: translateX(100%);
  }

  .sidebar-veil-enter-active,
  .sidebar-veil-leave-active {
    transition: opacity 0.3s cubic-bezier(0.2, 0, 0.13, 1.5);
  }

  .sidebar-veil-enter,
  .sidebar-veil-leave-to {
    opacity: 0;
  }
</style>
