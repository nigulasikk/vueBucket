<template>
  <div>
      <h2>page2</h2>
  <el-tabs  v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="动画" name="first">
     <transition-group-flip></transition-group-flip>
    </el-tab-pane>
    <el-tab-pane label="vuex购物车" name="second">
       vuex购物车demo    
       <shopping-cart></shopping-cart>    
    </el-tab-pane>
  </el-tabs>
     
		
  </div>
</template>

<script>
import TransitionGroupFlip from '../components/TransitionGroupFlip'
import ShoppingCart from '../components/ShoppingCart/ShoppingCart'
export default {
  name: 'page2',
  data () {
    return {
      activeName: 'first'
    }
  },
  components: {
    TransitionGroupFlip,
    ShoppingCart
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
