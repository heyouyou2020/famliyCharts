<template>
  <div class="login-item">
    <div>
      <span class="title">账户</span>
    </div>
    <div class="row">
      <el-input
       placeholder="请输入账户"
        v-model="login.userName"
        clearable>
      </el-input>
    </div>
    <div>
      <span class="title">密码</span>
    </div>
    <div class="row">
      <el-input
        placeholder="请输入密码"
        v-model="login.password"
        show-password
        @keyup.enter.native="sendLogin"
        clearable>
      </el-input>
    </div>
    <div>
        <el-button style="width: 100%; background: #00C2CE" type="primary" :loading="loading" @click="sendLogin">登录</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login-item',
  mixins: [],
  components: {},
  props: {},
  data () {
    return {
        login: {
            userName: '',
            password: '',
        },
        loading: false,
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    sendLogin() {
      this.$emit('login', this.login);
    },
  }
}
</script>

<style scoped lang="scss">
.login-item{
    padding: 1.25rem 3rem;
    div{
        margin-bottom: 0.5rem;
        text-align: left;
        .title{
            padding-left: 0.5rem;
            font-size: 1rem;
            font-weight: 500;
            color: rgb(122, 122, 104);
        }
    }
    .el-input{
      // height: 2.5rem;
      // ::v-deep .el-input__inner{
      //   height: 2.5rem !important;
      // }
    }
}
</style>
