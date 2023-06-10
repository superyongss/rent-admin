<template>
  <div class="tenantEdit">
    <el-form ref="form" :model="tenant" label-width="80px" size="mini">
      <el-form-item label="用户名">
        <el-input v-model="tenant.name"></el-input>
      </el-form-item>
      <el-form-item label="年龄">
        <el-input v-model="tenant.age"></el-input>
      </el-form-item>
      <el-form-item label="性别">
        <el-col :span="7">
          <el-radio-group v-model="tenant.gender">
            <el-radio label="男"></el-radio>
            <el-radio label="女"></el-radio>
          </el-radio-group>
        </el-col>
      </el-form-item>
      <el-form-item label="手机号">
        <el-input v-model="tenant.phone"></el-input>
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input v-model="tenant.email"></el-input>
      </el-form-item>
      <el-form-item label="房型">
        <el-col :span="11">
          <el-select v-model="tenant.roomType" placeholder="请选择房型">
            <el-option
                v-for="(item, index) in roomTypes"
                :key="index"
                :label="item"
                :value="item"
            ></el-option>
          </el-select>
        </el-col>
      </el-form-item>
      <el-form-item label="房间号">
        <el-input v-model="tenant.roomNumber"></el-input>
      </el-form-item>
      <el-form-item label="租金">
        <el-input v-model="tenant.price"></el-input>
      </el-form-item>
      <el-form-item label="入住时间">
        <el-col :span="11">
          <el-date-picker type="date" placeholder="选择日期" v-model="tenant.date"></el-date-picker>
        </el-col>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">确认</el-button>
        <el-button @click="onCancel">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>

export default {
  name: "tenantEdit",
  props: {
    tenantInfo: Object
  },
  data() {
    return {
      tenant: {},
      roomTypes: [
        "单间",
        "一房一厅"
      ]
    }
  },
  methods: {
    onSubmit() {
      this.$emit('submit', this.tenant)
    },
    onCancel() {
      this.$emit('cancel')
    }
  },
  created() {
    this.tenant = this.tenantInfo
  }
}
</script>

<style scoped>
</style>