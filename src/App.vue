<template>
  <div id="app">
    <avue-form-design style="height: 100vh;"
                      :options="options"
                      @submit="handleSubmit"
    ></avue-form-design>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      options: {},
    }
  },
  methods: {}
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100%;
  height: 100%;
}
</style>
