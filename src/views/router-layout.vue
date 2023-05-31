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
  display: flex;
  flex-direction: column;
  .conten-item{
    flex: 1;
    background: rgb(233, 245, 245);
    
  }
}
</style>
  