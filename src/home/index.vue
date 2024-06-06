<template>
  <div>
    <el-container class="container">
      <el-header class="header">Header</el-header>
      <el-container>
        <el-aside class="aside" width="60px">Aside</el-aside>
        <el-main class="main">Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
export default {
  mounted() {
    console.log(3333);
  }
}
</script>
<style scoped>
.header, .container, .main, .aside {
  box-sizing: border-box;
}

.container {
  height: 100vh;
  overflow: hidden;
}

.header {
  border-bottom: 1px solid #ddd;
}

.aside {
  border-right: 1px solid #ddd;
}
</style>
