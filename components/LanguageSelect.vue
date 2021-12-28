<template>
  <vSelect
    :value="currentLocale"
    :options="optionsLocales"
    :clearable="false"
    :searchable="false"
    @option:selected="$i18n.setLocale($event.label.toLowerCase())"
  />
</template>

<script>
  // Lib
  import vSelect from "vue-select";
  import OpenIndicator from "@/components/Icons/OpenIndicator";
  // Utils
  import { capitalize } from "@/utils";
  vSelect.props.components.default = () => ({ OpenIndicator });

  export default {
    components: {
      vSelect,
    },
    data() {
      return {};
    },
    computed: {
      currentLocale() {
        return capitalize(this.$i18n.locale);
      },
      availableLocales() {
        return this.$i18n.locales;
      },
      optionsLocales() {
        return this.availableLocales.map((lang) => ({
          label: capitalize(lang.code),
          value: lang.ios,
        }));
      },
    },
  };
</script>
