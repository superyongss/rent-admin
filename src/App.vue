<template>
  <div id="app">
    <el-container class="main-container">
      <el-header class="header border10 moduleColor" height="90px">
        <header-page></header-page>
      </el-header>
      <el-container>
        <el-aside class="aside border10 moduleColor" width="205px">
          <rent-aside></rent-aside>
        </el-aside>
        <el-container>
          <el-main class="main border10 moduleColor">
            <router-view></router-view>
          </el-main>
          <el-footer class="footer border10 moduleColor">
            <footer-page></footer-page>
          </el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>

import rentAside from "@/components/rentAside";
import headerPage from '@/components/headerPage';
import footerPage from '@/components/footerPage'

export default {
  name: 'App',
  components: {
    rentAside,
    footerPage,
    headerPage
  },
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100%;
}

.main-container {
  height: 100%;
}

.moduleColor {
  /*background-color: #EDF2F4;*/
  background-color: white;
}

.border10 {
  border-radius: 10px;
}

.aside {
  background-color: #274C77;
  height: calc(100% - 7px);
  margin: 0 0 7px 7px;
}

.header {
  margin: 7px 7px 7px 7px;
}

.mainHeader {
  margin: 0 7px 7px 7px;
  background-color: cornflowerblue;
}

.main {
  height: 100%;
  margin: 0 7px 7px 7px;
}

.footer {
  margin: 0 7px 7px 7px;
}

</style>
