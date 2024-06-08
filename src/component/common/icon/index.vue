<template>
  <a :href="href" :target="target" @click="handleClick">
    <img alt="icon" class="icon" :src="Icons[name]['icon']" :style="`width:${size}px;height:${size}px`"/>
  </a>
</template>

<script>
import Icons from './config'

export default {
  props: {
    href: {
      type: String,
      default: 'javascript:void(0);'
    },
    target: {
      type: String,
      default: '_self'
    },
    name: {
      type: String,
      default: '',
    },
    size: {
      type: String,
      default: '24'
    }
  },
  data() {
    return {
      Icons
    }
  },
  methods: {
    handleClick() {
      this.$emit('click');
    }
  }
}
</script>
<style scoped>
.icon {
  display: block;
}
</style>
