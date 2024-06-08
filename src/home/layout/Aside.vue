<template>
  <div class="menus">
    <MyIcon v-for="item in menus"
            :key="item.name"
            :name="item.name"
            :class="['menu',item.name === activeMenu ? 'menu-hover' : '']"
            @click="handleClickMenu(item.name)"
    />
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
          name: 'app',
          path: ''
        },
        {
          name: 'github',
          path: ''
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
