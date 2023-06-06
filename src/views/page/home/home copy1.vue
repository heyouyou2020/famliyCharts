<template>
    <div class="home">
        <el-row :gutter="0">
            <el-col :span="12">
                <dv-decoration-2 style="width:200px;height:5px;" />
            </el-col>
             <el-col :span="12">
            </el-col>
       </el-row>
       <el-row :gutter="20">
            <el-col :span="12">
            </el-col>
             <el-col :span="12">
            </el-col>
       </el-row>
    </div>
</template>
<script>
import axiax from '@/common/utils/date';
export default {
    name: 'home-item',
    data() {
        return{
        }
    },
    computed: {
        chartsConfig3() {
            return {
                serName: '冲突地点',
                barWidth: 10,
                xAxisData: axiax.filter(item => item.type === this.radio3)[0].data,
                yAxisData: axiax.filter(item => item.type === this.radio3)[0].records,
            }   
        },
        chartsConfig4() {
            return {
                serName: '趋势获胜比例',
                barWidth: 10,
                xAxisData: axiax.filter(item => item.type === this.radio4)[0].data,
                yAxisData: axiax.filter(item => item.type === this.radio4)[0].records,
            }   
        },
    },
    created() {
    },
    methods: {
        chartsChange(data) {
            switch (data.seriesName) {
                case '冲突趋势' : this.radio1 = 2 ;
                break
                case '冲突原因' : this.radio2 = 2;
                break
                case '冲突地点' : this.radio3 = 2;
                break
                case '趋势获胜比例' : this.radio4 = 2;
                break
            }
        },
    },
}
</script>
<style lang="scss">
  .home{
    flex: 1;
    background: #dbeffd;
  }
</style>