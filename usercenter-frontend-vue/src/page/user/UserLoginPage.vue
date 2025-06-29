<template>
  <div id="userLoginPage">
    <h2 class="title">用户登陆</h2>
    <a-form
      style="max-width: 480px; margin: 0 auto"
      :model="formState"
      name="basic"
      label-align="left"
      :label-col="{ span: 4 }"
      :wrapper-col="{ span: 16 }"
      autocomplete="off"
      @finish="handleSubmit"
      @finishFailed="onFinishFailed"
    >
      <a-form-item
        label="账号"
        name="userAccount"
        :rules="[{ required: true, message: '请输入账号' }]"
      >
        <a-input
          v-model:value="formState.userAccount"
          aria-placeholder="请输入账号"
        />
      </a-form-item>

      <a-form-item
        label="密码"
        name="userPassword"
        :rules="[
          { required: true, message: '请输入密码' },
          { min: 8, message: '密码不能小于8位' },
        ]"
      >
        <a-input-password
          v-model:value="formState.userPassword"
          aria-placeholder="请输入密码"
        />
      </a-form-item>

      <a-form-item :wrapper-col="{ offset: 4, span: 20 }">
        <a-button type="primary" html-type="submit">登陆</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>
<script lang="ts" setup>
import { reactive } from "vue";
import { userLogin } from "@/api/user";
import { useLoginUserStore } from "@/store/useLoginUserStore";
import { useRouter } from "vue-router";
import { message } from "ant-design-vue";

interface FormState {
  userAccount: string;
  userPassword: string;
}
// 默认值
const formState = reactive<FormState>({
  userAccount: "",
  userPassword: "",
});

const loginUserStore = useLoginUserStore();
const router = useRouter();
/**
 * 提交表单： 和后端交互的核心代码
 * @param values
 */

const handleSubmit = async (values: any) => {
  // 获取后端响应的结果
  const res = await userLogin(values);

  if (res.data.code === 0 && res.data.data) {
    await loginUserStore.fetchLoginUser();
    message.success("登陆成功");
    router.push({
      path: "/",
      replace: true,
    });
  } else {
    console.log("登陆失败");
  }
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};
</script>

<style scoped>
#userLoginPage .title {
  text-align: center;
  margin-bottom: 16px;
}
</style>
