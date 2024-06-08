<template>
  <div class="cards">
    <div class="card" v-for="card in cards" :key="card.name">
      <MyIcon :name="card.icon"/>
      <div>{{ card.title }}</div>
      <div>{{ card.description }}</div>
    </div>
  </div>
</template>
<script>
//
import MyIcon from '@/component/common/icon'

export default {
  components: {
    MyIcon
  },
  data() {
    return {
      cards: [
        {
          icon: 'form',
          name: 'formDesigner',
          title: '表单设计器',
          path: '/designer/form',
          description: '基于 ElementUI 的表单设计器,通过可视化操作搭建页面,最终保存为 JSON 配置项'
        },        {
          icon: 'form',
          name: 'formDesigner',
          title: '表单设计器',
          path: '/designer/form',
          description: '基于 ElementUI 的表单设计器,通过可视化操作搭建页面,最终保存为 JSON 配置项'
        },        {
          icon: 'form',
          name: 'formDesigner',
          title: '表单设计器',
          path: '/designer/form',
          description: '基于 ElementUI 的表单设计器,通过可视化操作搭建页面,最终保存为 JSON 配置项'
        },        {
          icon: 'form',
          name: 'formDesigner',
          title: '表单设计器',
          path: '/designer/form',
          description: '基于 ElementUI 的表单设计器,通过可视化操作搭建页面,最终保存为 JSON 配置项'
        }, {
          icon: 'form',
          name: 'formDesigner',
          title: '表单设计器',
          path: '/designer/form',
          description: '基于 ElementUI 的表单设计器,通过可视化操作搭建页面,最终保存为 JSON 配置项'
        },
      ]
    }
  }
}
</script>

<style scoped>
.cards {
  display: flex;
}

.card {
  width: 30%;
  height: 200px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
