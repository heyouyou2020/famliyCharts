<template>
    <div class="routerLayout">
        <header-item></header-item>
        <div class="conten-item">
          <router-view/>
        </div>
    </div>
</template> 
<script>
import HeaderItem from '@/components/header-item/header-item.vue'
  
export default {
  name: 'RouterLayout',
  components: {
    HeaderItem
  }
}
</script>
<style lang="scss">
.routerLayout{
  height: 100%;
  background: rgb(204, 224, 243);
  .dv-border-box-11{
    display: flex;
    flex-direction: column;
  }
  .conten-item{
    flex: 1;
    overflow-y: scroll;
    padding: 10px 20px;
  }
  /* 整个滚动条 */
  ::-webkit-scrollbar {
      /* 对应纵向滚动条的宽度 */
      width: 4px;
      /* 对应横向滚动条的宽度 */
      height: 10px;
  }

  /* 滚动条上的滚动滑块 */
  ::-webkit-scrollbar-thumb {
      background-color: #b9d6e9;
      border-radius: 32px;
  }

  /* 滚动条轨道 */
  ::-webkit-scrollbar-track {
      background-color: #dbeffd;
      border-radius: 32px;
  }
}
</style>
  