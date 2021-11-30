<template>
  <div class="panel-tab__content">
    <el-form size="mini" label-width="90px" @submit.native.prevent>
      <el-form-item label="类型">
        <el-select v-model="serviceType">
          <el-option v-for="i in Object.keys(typeObject)" :key="i" :label="typeObject[i]" :value="i" />
        </el-select>
      </el-form-item>
      <el-form-item v-if="serviceType === 'class'" label="Java类">
        <el-input v-model="serviceValue" clearable @change="updateInfo('class')" />
      </el-form-item>
      <el-form-item v-if="serviceType === 'expression'" label="表达式">
        <el-input v-model="serviceValue" clearable @change="updateInfo('expression')" />
      </el-form-item>
      <el-form-item v-if="serviceType === 'delegateExpression'" label="代理表达式">
        <el-input v-model="serviceValue" clearable @change="updateInfo('delegateExpression')" />
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  name: "ServiceTask",
  props: {
    id: String,
    type: String
  },
  inject: {
    prefix: "prefix",
    width: "width"
  },
  data() {
    return {
      typeObject: {
        class: "Java 类",
        expression: "表达式",
        delegateExpression: "代理表达式"
      },
      serviceType: "",
      serviceValue: ""
    };
  },
  watch: {
    id: {
      immediate: true,
      handler(val) {
        this.$nextTick(() => this.resetBaseInfo());
      }
    }
  },
  methods: {
    resetBaseInfo() {
      this.bpmnElement = window?.bpmnInstances?.bpmnElement;
      var val = "";
      if ((val = this.bpmnElement.businessObject.class)) {
        this.serviceType = "class";
      } else if ((val = this.bpmnElement.businessObject.expression)) {
        this.serviceType = "expression";
      } else if ((val = this.bpmnElement.businessObject.delegateExpression)) {
        this.serviceType = "delegateExpression";
      }
      this.serviceValue = val;
    },
    updateInfo(key) {
      const attrObj = Object.create(null);
      attrObj.class = undefined;
      attrObj.expression = undefined;
      attrObj.delegateExpression = undefined;
      if (key === "class") {
        attrObj.class = this.serviceValue;
      } else if (key === "expression") {
        attrObj.expression = this.serviceValue;
      } else {
        attrObj.delegateExpression = this.serviceValue;
      }
      window.bpmnInstances.modeling.updateProperties(this.bpmnElement, attrObj);
    }
  },
  beforeDestroy() {
    this.bpmnElement = null;
  }
};
</script>
