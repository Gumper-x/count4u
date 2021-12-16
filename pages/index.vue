<template>
  <div>
    {{ lol }}
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const data = await $axios.$get(
      'https://jsonplaceholder.typicode.com/todos/1'
    )
    console.log(data)
    return { lol: data }
  },
}
</script>
