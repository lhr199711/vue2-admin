<template>
  <div class="wraper">
    <div class="container">
      <div class="title">
        <span
          :class="[nowTab === i ? 'active' : '']"
          v-for="(item, i) in tabs"
          @click="switchTab(i)"
          :key="i"
        >
          {{ item.title }}
        </span>
      </div>
      <el-form
        label-position="top"
        status-icon
        :rules="rules"
        :model="formData"
      >
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="formData.email" autocomplete="off" />
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="formData.psd" type="password" autocomplete="off" />
        </el-form-item>
        <el-form-item label="验证码">
          <el-input v-model="formData.code" autocomplete="off" />
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    let validateEamil = (rule, value, callback) => {
      let reg =
        /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,5}$/;
      if (value === "") {
        callback(new Error("请输入邮箱"));
      } else if (!reg.test(value)) {
        callback(new Error("请输入正确的邮箱"));
      } else {
        callback();
      }
    };
    return {
      nowTab: 0,
      tabs: [
        {
          title: "登录",
        },
        {
          title: "注册",
        },
      ],
      formData: {
        email: "",
        psd: "",
        code: "",
      },
      rules: {
        email: [{ validator: validateEamil, trigger: "blur" }],
      },
    };
  },
  methods: {
    switchTab(i) {
      this.nowTab = i;
    },
  },
};
</script>

<style lang="scss" scoped>
.wraper {
  width: 100vw;
  height: 100vh;
  background-color: #344a5f;
}
.container {
  width: 330px;
  margin: 0 auto;
  padding: 150px 0 0;
}
.title {
  text-align: center;
  padding: 0 0 30px;
  > span {
    display: inline-block;
    width: 88px;
    line-height: 36px;
    font-size: 14px;
    color: #fff;
    border-radius: 2px;
    cursor: pointer;
    &.active {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
}
/deep/ .el-form--label-top .el-form-item__label {
  padding: 10px 0 0;
  color: #fff;
}
/deep/ .el-icon-circle-check::before {
  color: green;
}
/deep/ .el-input__validateIcon::before {
  font-size: 20px;
}
</style>
