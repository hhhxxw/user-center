<template>
  <a-row :wrap="false">
    <a-col flex="200px">
      <div class="title-bar">
        <img class="logo" src="../assets/logo.png" />
        <div class="title">鱼皮用户中心</div>
      </div>
    </a-col>
    <a-col flex="auto">
      <div id="globalHeader">
        <a-menu
          v-model:selectedKeys="current"
          mode="horizontal"
          :items="items"
          @click="doMenuClink"
        />
      </div>
    </a-col>
    <a-col flex="80px">
      <div id="user-login-status">
        <a-button type="primary" href="/user/login">登陆</a-button>
      </div>
    </a-col>
  </a-row>
</template>
<script lang="ts" setup>
import { h, ref } from "vue";
import { CrownOutlined, HomeOutlined } from "@ant-design/icons-vue";
import { MenuProps } from "ant-design-vue";

// 路由跳转的钩子函数
import { useRouter } from "vue-router";
const router = useRouter();
//路由跳转事件
const doMenuClink = ({ key }: { key: string }) => {
  router.push({
    path: key,
  });
};
// 当前选中的菜单
const current = ref<string[]>([]);
// 监听路由变化，跟新当前选中菜单
router.afterEach((to, from, failure) => {
  current.value = [to.path];
});
const items = ref<MenuProps["items"]>([
  {
    key: "/",
    icon: () => h(HomeOutlined),
    label: "主页",
    title: "主页",
  },
  {
    key: "/user/login",
    label: "用户登陆",
    title: "用户登陆",
  },
  {
    key: "/user/register",
    label: "用户注册",
    title: "用户注册",
  },
  {
    key: "/admin/userManage",
    icon: () => h(CrownOutlined),
    label: "用户管理",
    title: "用户管理",
  },
  {
    key: "others",
    label: h(
      "a",
      { href: "https://www.codefather.cn", target: "_blank" },
      "编程导航"
    ),
    title: "编程导航",
  },
]);
</script>
<style scoped>
.title-bar {
  display: flex;
  align-items: center;
}
.logo {
  height: 48px;
}
.title {
  color: black;
  font-size: 18px;
  margin-left: 16px;
}
</style>
