<template>
  <div class="aside-module">
    <el-menu
        :router="isRouter"
        default-active="/home"
        class="aside-menu"
        @open="handleOpen"
        @close="handleClose"
        background-color="#274C77"
        text-color="#fff"
        active-text-color="#ffd04b">
      <el-menu-item index="/home">
        <i class="el-icon-s-home"></i>
        <span>首页</span>
      </el-menu-item>
      <el-submenu index="/rent">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>租房管理</span>
        </template>
        <el-menu-item index=/rent/house>
          <i class="el-icon-school"></i>
          房屋管理
        </el-menu-item>
        <el-menu-item index="/rent/tenant">
          <i class="el-icon-user-solid"></i>
          租客管理
        </el-menu-item>
      </el-submenu>
      <el-menu-item index="/setting">
        <i class="el-icon-setting"></i>
        <span slot="title">设置</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "rentAside",
  data() {
    return {
      isRouter: true
    }
  },
  methods: {
    handleOpen() {

    },
    handleClose() {

    }
  }
}
</script>

<style scoped>
.aside-module {
  background-color: yellow;
  height: 100%;
}

.aside-menu {
  background-color: #274C77;
  height: 100%;
  text-align: left;
}
</style>