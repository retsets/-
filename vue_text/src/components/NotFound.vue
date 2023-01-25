<template>
  <div class="notfound">
    <div class="wrapper">
        <div class="big">页面不见了！</div>
        <div>首页瞧瞧，点击 <router-link to="/">这里</router-link>进入首页</div>
    </div>
  </div>
</template>

<script>
export default {
    name:'',
    data(){
        return {};
    }
}
</script>

<style scoped>
    .notfound{
        height: 100%;
        background-image: url('../assets/404.jpeg');
        background-repeat: no-repeat;
        background-size: cover,auto;
    }
</style>