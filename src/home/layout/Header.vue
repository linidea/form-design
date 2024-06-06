<template>
  <div class="nav">
    <div class="nav-title">LowCode</div>
    <div class="nav-icon">
      <MyIcon name="github" size="30" href="https://github.com/linidea" target="_blank"/>
    </div>
  </div>
</template>

<script>
import MyIcon from '@/component/common/icon'

export default {
  components: {
    MyIcon
  }
}
</script>
<style scoped>
.nav {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-title {
  font-size: 30px;
  font-weight: bold;
}

.nav-icon {
  display: flex;
}
</style>
