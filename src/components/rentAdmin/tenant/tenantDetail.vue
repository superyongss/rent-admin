<template>
  <div class="tenantDetail">
    <div>
      <el-descriptions title="租户信息" border>
        <template slot="extra">
          <el-button type="primary" size="small" @click="editClick">编辑</el-button>
        </template>
        <el-descriptions-item label="用户名">{{ tenant.name }}</el-descriptions-item>
        <el-descriptions-item label="年龄">{{ tenant.age }}</el-descriptions-item>
        <el-descriptions-item label="性别">{{ tenant.gender }}</el-descriptions-item>
        <el-descriptions-item label="邮箱">{{ tenant.email }}</el-descriptions-item>
        <el-descriptions-item label="手机号">{{ tenant.phone }}</el-descriptions-item>
        <el-descriptions-item label="入住时间">{{ tenant.date }}</el-descriptions-item>
        <el-descriptions-item label="房型">
          <el-tag size="small">{{ tenant.roomType }}</el-tag>
        </el-descriptions-item>
        <el-descriptions-item label="房间号">{{ tenant.roomNumber }}</el-descriptions-item>
        <el-descriptions-item label="租金">{{ tenant.price }}</el-descriptions-item>
        <el-descriptions-item label="居住地">{{ tenant.address }}</el-descriptions-item>
      </el-descriptions>
    </div>
    <el-drawer
        :title="tenant.name"
        :visible.sync="drawer"
        :before-close="handleClose"
        :destroy-on-close="true">
      <tenant-edit style="height: 100%" :tenantInfo="tenant" @submit="onSubmit" @cancel="onCancel"></tenant-edit>
    </el-drawer>
  </div>
</template>

<script>
import tenantEdit from "@/components/rentAdmin/tenant/tenantEdit.vue";
import {tenantBaseInfo} from "@/assets/js/tenant"
import {getTenant} from "@/networks/tenants";

export default {
  name: "tenantDetail",
  components: {
    tenantEdit
  },
  props: {
    tenantInfo: tenantBaseInfo
  },
  data() {
    return {
      tenant: {},
      beforeEditTenant: {},
      drawer: false,
    }
  },
  created() {
    getTenant(this.tenantInfo.id, this.tenantInfo.name, this.tenantInfo.address).then(res => {
      console.log(res)
      this.tenant = res.data
    })
  },
  methods: {
    handleClose(done) {
      this.$confirm('确认关闭？')
          .then(() => {
            done();
          })
          .catch(() => {
          });
    },
    editClick() {
      this.beforeEditTenant = Object.assign({}, this.tenant)
      this.drawer = true
    },
    closeDrawer() {
      this.drawer = false
    },
    onSubmit(newTenant) {
      this.tenant = newTenant
      this.closeDrawer()
    },
    onCancel() {
      this.tenant = Object.assign({}, this.beforeEditTenant)
      this.closeDrawer()
    }
  }
}
</script>

<style scoped>
.tenantDetail {
  height: 80%;
  width: 70%;
  margin: 0 auto;
  padding: 50px 0;
}
</style>