<template>
  <component :is="cards[activeMenu].component"/>
</template>
<script>
import {getState} from "@/util/common/vuexHelper";
//
import Designer from '../designer'

export default {
  components: {
    Designer
  },
  computed: {
    activeMenu() {
      return getState(this.$store, 'home', 'menu');
    }
  },
  data() {
    return {
      cards: {
        designer: {
          component: 'Designer'
        }
      }
    }
  }
}
</script>
<style scoped>

</style>
