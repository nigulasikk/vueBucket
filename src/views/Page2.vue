<template>
  <div>
      page2
  <el-tabs  v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="用户管理" name="first">
     <el-tag>用户管理</el-tag>
    </el-tab-pane>
    <el-tab-pane label="配置管理" name="second">
    <el-tag type="gray">配置管理</el-tag>
    </el-tab-pane>
    <el-tab-pane label="角色管理" name="third">
      <el-tag type="primary">标签三</el-tag>
      <el-tag type="success">标签四</el-tag>
      <el-tag type="warning">标签五</el-tag>
      <el-tag type="danger">标签六</el-tag>
    </el-tab-pane>
    <el-tab-pane label="动画" name="fourth">
          <transition-group-flip></transition-group-flip>
    </el-tab-pane>
  </el-tabs>
     
		
  </div>
</template>

<script>
import TransitionGroupFlip from '../components/TransitionGroupFlip'
export default {
  name: 'page2',
  data () {
    return {
      activeName: 'first'
    }
  },
  components: {
    TransitionGroupFlip
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    }
  }
}
</script>

<style>

</style>
