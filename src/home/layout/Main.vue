<template>
  <component :is="cards[activeMenu].component"/>
</template>
<script>
import {getState} from "@/util/common/vuexHelper";
//
import MyApp from '@/home/myapp'

export default {
  components: {
    MyApp
  },
  computed: {
    activeMenu() {
      return getState(this.$store, 'home', 'menu');
    }
  },
  data() {
    return {
      cards: {
        myApp: {
          component: 'MyApp'
        }
      }
    }
  }
}
</script>
<style scoped>

</style>
