<template>
  <!--  每一个组件都有唯一的标识-->
  <div id="basicLayout">
    <a-layout>
      <a-layout-header class="header">
        <global-header />
      </a-layout-header>
      <a-layout-content class="content">
        <router-view />
      </a-layout-content>
      <a-layout-footer class="footer">
        <a herf="https://codefather.cn" target="_blank">
          编程导航 by 程序员鱼皮
        </a>
      </a-layout-footer>
    </a-layout>
  </div>
</template>
<script setup lang="ts">
import GlobalHeader from "@/components/GlobalHeader.vue";
// import { getCurrentUser } from "@/api/user";

// // 获取当前用户来进行一个测试
// getCurrentUser().then((res) => {
//   console.log(res);
// });
</script>
<style scoped>
#basicLayout .footer {
  background: #efefef;
  text-align: center;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 16px;
}
#basicLayout .content {
  padding: 20px;
  margin-bottom: 20px;
  background: linear-gradient(to right, #fefefe, #fff);
}

#basicLayout .header {
  background: white;
  margin-bottom: 16px;
  color: unset;
  padding-inline: 20px;
}
</style>
