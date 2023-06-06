<template>
    <div class="block" :style="{width,}">
      <div class="block_head">
          <p>{{ title }}</p>
          <slot name="slot-right"></slot>
      </div>
      <div class="block_conten">
          <slot name="slot-conten"></slot>
      </div>
    </div>
</template>
<script>
export default {
  name: 'block-item',
  mixins: [],
  components: {},
  props: {
    title: {
        type: String,
        default: '',
    },
    width: {
        type: String,
        default: '100%'
    }
  },
  data () {
    return {
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {}
}
</script>

<style scoped lang="scss">
.block{
    margin-bottom: 1.25rem;
    // box-shadow: 0 0 10px gray;
    background: #fff;
    .block_head{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.25rem 0.5rem;
        border-bottom: 1px solid rgb(230, 222, 222);
        p{
          font-size: 1rem;
          color: #12C299;
          font-weight: 500;
        }
    }
    .block-conten{
        padding: 0.5rem;
    }
}
</style>
