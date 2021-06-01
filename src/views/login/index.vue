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
        <el-form-item label="密码" prop="psd">
          <el-input v-model="formData.psd" type="password" autocomplete="off" />
        </el-form-item>
        <el-form-item label="重复密码" prop="psd2" v-if="nowTab === 1">
          <el-input
            v-model="formData.psd2"
            type="password"
            autocomplete="off"
          />
        </el-form-item>
        <el-form-item class="code" label="验证码" prop="code">
          <el-input v-model="formData.code" autocomplete="off" maxlength="6" />
          <el-button type="success" @click="getCode">获取验证码</el-button>
        </el-form-item>
        <el-button
          :disabled="true"
          style="width: 100%; margin-top: 30px"
          type="danger"
        >
          登录
        </el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
import * as until from "@u/validate";
import { GetSms } from "@a/login";
export default {
  name: "Login",
  data() {
    let validateEamil = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入邮箱"));
      } else if (!until.validateEmail(value)) {
        callback(new Error("请输入正确的邮箱"));
      } else {
        callback();
      }
    };
    let validatePsd = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else if (!until.validatePsd(value)) {
        callback(new Error("请输入6-20位数字和字母组成的密码"));
      } else {
        callback();
      }
    };
    let validatePsd2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else if (value !== this.formData.psd) {
        callback(new Error("两次输入的密码不一致"));
      } else {
        callback();
      }
    };
    let validateCode = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else if (!until.validateCode(value)) {
        callback(new Error("验证码格式有误"));
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
        psd2: "",
        code: "",
      },
      rules: {
        email: [{ required: true, validator: validateEamil, trigger: "blur" }],
        psd: [{ required: true, validator: validatePsd, trigger: "blur" }],
        psd2: [{ required: true, validator: validatePsd2, trigger: "blur" }],
        code: [{ required: true, validator: validateCode, trigger: "blur" }],
      },
    };
  },
  methods: {
    switchTab(i) {
      this.nowTab = i;
    },
    getCode() {
      GetSms({ username: this.formData.email, module: "register" }).then(
        (res) => {
          console.log(res);
        }
      );
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
.code {
  /deep/ .el-form-item__content {
    display: flex;
    align-items: center;
  }
  /deep/ .el-input__suffix {
    display: none;
  }
  button {
    margin: 0 0 0 20px;
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
