<template>
  <div class="login">
    <div class="login-conten">
      <p class="dection">没没家生活管理系统</p>
      <login-item @login="login"></login-item>
    </div>
  </div>
</template>

<script>
import LoginItem from './login-item.vue';
export default {
  name: 'x-login',
  components: {
    LoginItem,
  },
  mixins: [],
  props: {},
  data () {
    return {
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    async login(data) {
        if (data.userName === '18351887995' && data.password === '20131204') {
          await this.$store.dispatch('login', data);
          this.$router.replace(this.$route.query.redirect ? this.$route.query.redirect : '/home');
        }else {
            this.$message.error('账号密码错误');
        } 
    },
  }
}
</script>

<style scoped lang="scss">
.login{
    display: flex;
    flex-direction: column;
    align-items: center;
    background: rgb(233, 245, 245);
    height: 100%;
    position: relative;
    width: 100%;
    &-conten{
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      // left: 50%;
      width: 37.5rem;
      // height: 23rem;
      padding-bottom: 2rem;
      background: #fff;
      box-shadow: 0 0 10px gray;
      .dection{
        color: rgb(229, 230, 231);
        font-size: 1.25rem;
        font-weight: 500;
        margin-bottom: 0.5rem;
        text-align: left;
        background: linear-gradient(91.71deg, #00AAEB 0%, #00C2CE 51.04%, #12C299 100%);
        padding: 0.5rem 0.75rem;
    }
  }
}
</style>
