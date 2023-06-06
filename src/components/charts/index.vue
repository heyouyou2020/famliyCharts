<template>
  <div class="charts" :style="{height: height + 'rem'}">
  </div>
</template>

<script>
export default {
  name: 'x-charts',
  mixins: [],
  components: {},
  props: {
    barColor: {
        type: String,
        default: '#00C2CE',
    },
    serName: {
        type: String,
        default: '',
    },
    chartsType: {
        type: String,
        default: 'bar',
    },
    barWidth: {
        type: Number,
        default: 10,
    },
    xAxisData: {
        type: Array,
        default: () => [],
    },
    yAxisData: {
        type: Array,
        default: () => [],
    },
    event: {
        type: Boolean,
        default: false,
    },
    isRow: {
        type: Boolean,
        default: true,
    },
    height: {
        type: Number,
        default: 21.5,
    },
  },
  data () {
    return {
        myChart: null,
    }
  },
  computed: {
    option() {
        return {
            legend: {
                bottom: 10,
                width: 8,
                height: 8,
            },
            tooltip: {
                trigger: 'axis',
                valueFormatter: (value) => value + '次',
            },
            xAxis: this.isRow ? {
                type: 'category',
                data: this.xAxisData
            }: {
                type: 'value'
            },
            yAxis: !this.isRow ? {
                type: 'category',
                data: this.xAxisData
            }: {
                type: 'value'
            },
            series: [
                {   
                    name: this.serName,
                    data: this.yAxisData,
                    barWidth: this.barWidth,
                    type: this.chartsType,
                    showBackground: true,
                    backgroundStyle: {
                        color: 'rgba(180, 180, 180, 0.2)'
                    },
                    itemStyle: {
                        color: this.barColor,
                    }
                },
            ]
        }
    },
  },
  watch: {
    option: {
        handler () {
            this.myChart && this.$nextTick(() => this.myChart.setOption(this.option))
        },
        deep: true,
    },
  },
  created () {},
  mounted () {
    this.myChart = this.$echarts.init(this.$el);
    this.option && this.myChart.setOption(this.option);
    window.addEventListener('resize', () => {
        this.myChart.resize();
    })
    this.event && this.myChart.on('click',  (params) => {
      // series name 为 '冲突趋势' 的系列中的图形元素被点击时，此方法被回调。
      console.log(this.xAxisData[params.dataIndex], params.seriesName);
      this.$emit('chartsChange', {
        xAxisData: this.xAxisData[params.dataIndex], 
        seriesName: params.seriesName})
    });
  },
  methods: {}
}
</script>

<style scoped lang="scss">
.charts{
    height: 300px;
    width: 100%;
}
</style>
