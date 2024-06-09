<template>
  <div class="menus">
    <el-tooltip
        :key="`menu_${item.menu}`"
        v-for="item in menus"
        placement="right"
        :content="item.desc"
    >
      <MyIcon
          :name="item.icon"
          :class="['menu',item.menu === activeMenu ? 'menu-hover' : '']"
          @click="handleClickMenu(item.menu)"
      />
    </el-tooltip>

  </div>
</template>

<script>
//
import MyIcon from '@/component/common/icon'
//
import {getState, setState} from "@/util/common/vuexHelper";

export default {
  components: {
    MyIcon
  },
  data() {
    return {
      activeMenu: '',
      menus: [
        {
          icon: 'app',
          menu: 'myApp',
          desc: '我的应用'
        }
      ]
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.activeMenu = getState(this.$store, 'home', 'menu')
    },
    handleClickMenu(name) {
      this.activeMenu = name;
      setState(this.$store, 'home', 'setMenu', name);
    }
  }
}
</script>
<style scoped>
.menus {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.menu {
  padding: 10px;
  border-radius: 8px;
}

.menu-hover {
  background-color: #f0f0f0;
}

.menu:hover {
  background-color: #f0f0f0;
}
</style>
