<template>
  <div class="login-page-wrapper">
    <div class="login-box">
      <el-input v-model="form.account" size="mini" placeholder="账号" />
      <el-input
        v-model="form.password"
        size="mini"
        type="password"
        placeholder="密码"
      />
      <el-button size="mini" @click="handleEmitClick">提交</el-button>
    </div>
  </div>
</template>

<script>
import api from "@/apis/login"
import { mapActions } from "vuex"

export default {
  name: "login",
  data() {
    return {
      form: {
        account: "",
        password: "",
      },
    }
  },
  methods: {
    ...mapActions("global", ["setToken"]),
    async handleEmitClick() {
      const params = {
        empNo: this.form.account,
        password: this.form.password,
      }
      const { authToken } = await api.login(params)
      sessionStorage.setItem("accessToken", authToken)
      this.setToken(authToken)
      await this.$router.push({ name: "main" })
    },
  },
}
</script>

<style lang="scss" scoped>
.login-page-wrapper {
  position: relative;
  width: 100%;
  height: 100vh;

  .login-box {
    position: absolute;
    top: 200px;
    right: 300px;
    width: 200px;

    & > div {
      margin-bottom: 10px;
    }

    button {
      width: 100%;
    }
  }
}
</style>
