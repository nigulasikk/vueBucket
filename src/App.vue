<template>
  <div id="app">
    <el-row class="tac">
      <el-col :span="4">
        <el-menu default-active="page2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :router="true" >
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i>导航一</template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <!-- menu组件集成 路由跳转写法 -->
          <el-menu-item index="page1"><i class="el-icon-menu"></i>Page1</el-menu-item>
          <el-menu-item index="page2"><i class="el-icon-setting"></i> Page2</el-menu-item>
        </el-menu>
        <!-- 手动路由跳转写法 -->
         <!-- <router-link to="/page1"> </router-link> -->
      </el-col>
      <el-col :span="20">
       <transition name="fade">
        <router-view></router-view>
       </transition>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Hello from './components/Hello'

export default {
  name: 'app',
  components: {
    Hello
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style>
body{
  margin:0;
  padding:0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
a {text-decoration: none;color:none;}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
