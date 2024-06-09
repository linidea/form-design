<template>
  <div class="cards">
    <div class="card" v-for="card in cards" :key="card.name">
      <div class="card-inner">
        <MyIcon class="card-inner_icon" :name="card.icon" size="30"/>
        <div class="card-inner_title">{{ card.title }}</div>
        <div class="card-inner_desc">{{ card.desc }}</div>
      </div>
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
          desc: '基于 ElementUI 的表单设计器,通过可视化操作搭建页面,最终保存为 JSON 配置项'
        }, {
          icon: 'table',
          name: 'tableDesigner',
          title: '表格设计器',
          path: '/designer/table',
          desc: '基于 ElementUI 的表单设计器,通过可视化操作配置表格属性,最终保存为 JSON 配置项'
        },
      ]
    }
  }
}
</script>

<style scoped>
.cards {
  display: flex;
  flex-wrap: wrap;
}

.card {
  width: 33.33%;
  padding: 10px;
  box-sizing: border-box;
  overflow: hidden;
}

.card-inner {
  height: 25vh;
  padding: 20px;
  box-sizing: border-box;
  border: 1px solid #eee;
  cursor: pointer;
  background: #f9f9f9;
  border-radius: 16px;
}

.card-inner:hover {
  background: #f0f0f0;
  border: 1px solid #4fa4fa;
}

.card-inner_icon {
  display: flex;
  justify-content: center;
}

.card-inner_title {
  text-align: center;
  margin-top: 10px;
  font-size: 16px;
  font-weight: bold;
}

.card-inner_desc {
  margin-top: 10px;
}
</style>
