<template>
  <div id="tenant" class="tenant">
    <el-tabs style="height: 100%" v-model="editableTabsValue" type="card" closable @tab-remove="removeTab">
      <el-tab-pane
          style="height: 100%"
          v-for="(item, index) in editableTabs"
          :key="index"
          :label="item.title"
          :name="item.name"
      >
        <div class="tenantContent">
          <div class="tenantContentChild" v-if="item.type === 'detail'">
            <tenant-detail :tenantInfo=selectTenant></tenant-detail>
          </div>
          <div class="tenantContentChild" v-else-if="item.type === 'table'">
            <table-detail :tableData=tableData @rowClick="rowClick"></table-detail>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import {Message} from "element-ui";
import tenantDetail from "@/components/rentAdmin/tenant/tenantDetail";
import tableDetail from "@/components/rentAdmin/tenant/tableDetail";
import {tenantBaseInfo} from "@/assets/js/tenant";
import {getTenants} from "@/networks/tenants";

export default {
  name: "tenantPage",
  components: {
    tenantDetail,
    tableDetail
  },
  data() {
    return {
      contentHeight: 0,
      editableTabsValue: '租客管理',
      editableTabs: [{
        type: 'table',
        title: '租客管理',
        name: '租客管理',
      }],
      tabIndex: 2,
      tableData: [],
      selectTenant: {},
    }
  },
  created() {
    getTenants().then(res => {
      this.tableData = res.data
    })
  },
  methods: {
    addTab(targetName) {
      let newTabName = ++this.tabIndex + '';
      this.editableTabs.push({
        type: 'detail',
        title: targetName,
        name: newTabName,
        content: 'New Tab content'
      });
      this.editableTabsValue = newTabName;
    },
    removeTab(targetName) {
      let tabs = this.editableTabs;
      let activeName = this.editableTabsValue;
      if (activeName !== '租客管理' && activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1];
            if (nextTab) {
              activeName = nextTab.name;
            }
          }
        });
        this.editableTabsValue = activeName;
        this.editableTabs = tabs.filter(tab => tab.name !== targetName);
      } else {
        Message.error("该选项不可关闭")
      }
    },
    rowClick(row) {
      console.log(row)
      this.selectTenant = new tenantBaseInfo(1, row.name, row.address)
      this.addTab(row.name)
    }
  }
}
</script>

<style scoped>
.tenant {
  height: 100%;
}

.tenantContent {
  height: 100% !important;
}

/*#tenantContent div{*/
/*  height: 100%;*/
/*}*/

.tenantContentChild {
  height: 100% !important;
}

.tenant >>> .el-tabs__content {
  height: calc(100% - 60px)
}
</style>