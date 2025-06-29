<template>
  <div id="userRegisterPage">
    <h2 class="title">用户注册</h2>
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
      <a-form-item
        label="确认密码"
        name="checkPassword"
        :rules="[
          { required: true, message: '请输入确认密码' },
          { min: 8, message: '确认密码不能小于8位' },
        ]"
      >
        <a-input-password
          v-model:value="formState.checkPassword"
          aria-placeholder="请输入密码"
        />
      </a-form-item>

      <a-form-item
        label="编号"
        name="planetCode"
        :rules="[{ required: true, message: '请输入编号' }]"
      >
        <a-input-password
          v-model:value="formState.planetCode"
          aria-placeholder="请输入编号"
        />
      </a-form-item>

      <a-form-item :wrapper-col="{ offset: 4, span: 20 }">
        <a-button type="primary" html-type="submit">注册</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>
<script lang="ts" setup>
import { reactive } from "vue";
import { userRegister } from "@/api/user";
import { useLoginUserStore } from "@/store/useLoginUserStore";
import { useRouter } from "vue-router";
import { message } from "ant-design-vue";

// 这里和给后端传递的参数对应
interface FormState {
  userAccount: string;
  userPassword: string;
  checkPassword: string;
  planetCode: string;
}
// 默认值
const formState = reactive<FormState>({
  userAccount: "",
  userPassword: "",
  checkPassword: "",
  planetCode: "",
});

const loginUserStore = useLoginUserStore();
const router = useRouter();
/**
 * 提交表单 ： 和后端交互的核心代码
 * @param values
 */

const handleSubmit = async (values: any) => {
  // 前端增加一些校验
  if (formState.userPassword !== formState.checkPassword) {
    // 这个我估计就是弹窗
    message.error("两次输入的密码不一致");
  }
  // 获取后端响应的结果
  const res = await userRegister(values);

  if (res.data.code === 0 && res.data.data) {
    await loginUserStore.fetchLoginUser();
    message.success("注册成功");
    router.push({
      path: "/",
      replace: true,
    });
  } else {
    console.log("注册失败");
  }
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};
</script>

<style scoped>
#userRegisterPage .title {
  text-align: center;
  margin-bottom: 16px;
}
</style>
