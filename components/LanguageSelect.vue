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
        return this.$i18n.locale.toUpperCase();
      },
      availableLocales() {
        return this.$i18n.locales;
      },
      optionsLocales() {
        return this.availableLocales.map((lang) => ({
          label: lang.code.toUpperCase(),
          value: lang.iso,
        }));
      },
    },
  };
</script>
