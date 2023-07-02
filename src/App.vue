<!--
  @Author: yangshilin
  @Date: 2023-06-29 22:03:53
  @LastEditors: yangshilin
  @LastEditTime: 2023-07-02 11:57:52
  @FilePath: src\App.vue
  @Description: desc
 -->
<template>
  <div class="box">
    <h1>App根组件</h1>
  </div>
</template>

<script>
for (let i = 0; i < 100; i++) {
  console.log(i);
}
</script>

<style scoped lang="scss">
.box {
  width: 600px;
  height: 400px;
  background: #646cff;
  h1 {
    color: white;
  }
}
</style>
