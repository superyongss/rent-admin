<template>
  <div id="tableDetail" class="tableDetail">
    <el-table :data="tableData" :height="tableHeight" style="width: 100%">
      <el-table-column prop="date" label="日期" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
      <el-table-column prop="roomNumber" label="房间号"></el-table-column>
      <el-table-column prop="price" label="租金"></el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "tableDetail",
  props: {
    tableData: Array,
  },
  data() {
    return {
      tableHeight: 0,
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.tableHeight = document.getElementById("tableDetail").offsetHeight;
      console.log(this.tableHeight);
    });
  },
  methods: {
    handleClick(row) {
      this.$emit('rowClick', row)
    }
  }
};
</script>

<style scoped>
.tableDetail {
  height: 100%;
}
</style>