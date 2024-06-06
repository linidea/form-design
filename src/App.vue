<template>
  <div id="app">
    <!--<avue-form-design style="height: 100vh;"-->
    <!--                  :options="options"-->
    <!--                  @submit="handleSubmit"-->
    <!--&gt;</avue-form-design>-->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  mounted() {
    // this.$router.push('/').catch(err => {
    //   console.log(err);
    // });
  }
}
</script>
<style>
</style>
