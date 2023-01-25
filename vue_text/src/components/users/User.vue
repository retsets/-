<template>
  <div>
    <el-tree
      :data="menus"
      show-checkbox
      node-key="name"
      :props="defaultProps"
      ref="tree"
      style="background:rgb(200, 200, 200)"
    >
    </el-tree>
    <el-button @click="getCheckedNodes" style="background:bisque">通过node获取</el-button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      menus: [],
      defaultProps: {
        label:'name',
        children: 'children'
      }
    }
  },
  created(){
    this.menus = [...this.$router.options.routes]
    console.log(this.$router.options.routes);
  },
  methods:{
    getCheckedNodes(){
      let arr = this.$refs.tree.getCheckedNodes()  //把点击的数据获取
      console.log(arr);
    }
  }
};
</script>

<style>
</style>