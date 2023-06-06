<template>
    <div class="home">
        <el-row :gutter="20">
            <el-col :span="12">
                <x-block title="咪咪发发冲突次数趋势变化">
                    <template #slot-right>
                        <el-radio-group v-model="radio1" fill="#00C2CE">
                            <el-radio-button v-for="(item, index) in radioLIst" :key="index" :label="item.value">{{ item.label }}</el-radio-button>
                        </el-radio-group>
                    </template>
                    <template #slot-conten>
                        <x-charts @chartsChange="chartsChange" v-bind="chartsConfig1"></x-charts>
                    </template>
                </x-block>
            </el-col>
             <el-col :span="12">
                <x-block title="咪咪发发冲突次数趋势变化">
                    <template #slot-right>
                        <el-radio-group v-model="radio2" fill="#00C2CE">
                            <el-radio-button v-for="(item, index) in radioLIst" :key="index" :label="item.value">{{ item.label }}</el-radio-button>
                        </el-radio-group>
                    </template>
                    <template #slot-conten>
                        <x-charts @chartsChange="chartsChange" v-bind="chartsConfig2"></x-charts>
                    </template>
                </x-block>
            </el-col>
       </el-row>
       <el-row :gutter="20">
            <el-col :span="12">
                <x-block title="咪咪发发冲突次数趋势变化">
                    <template #slot-right>
                        <el-radio-group v-model="radio3" fill="#00C2CE">
                            <el-radio-button v-for="(item, index) in radioLIst" :key="index" :label="item.value">{{ item.label }}</el-radio-button>
                        </el-radio-group>
                    </template>
                    <template #slot-conten>
                        <x-charts @chartsChange="chartsChange" v-bind="chartsConfig3"></x-charts>
                    </template>
                </x-block>
            </el-col>
             <el-col :span="12">
                <x-block title="咪咪发发冲突次数趋势变化">
                    <template #slot-right>
                        <el-radio-group v-model="radio4" fill="#00C2CE">
                            <el-radio-button v-for="(item, index) in radioLIst" :key="index" :label="item.value">{{ item.label }}</el-radio-button>
                        </el-radio-group>
                    </template>
                    <template #slot-conten>
                        <x-charts @chartsChange="chartsChange" v-bind="chartsConfig4"></x-charts>
                    </template>
                </x-block>
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
            radio1: 1,
            radio2: 1,
            radio3: 1,
            radio4: 1,
            radioLIst: [
                {
                value: 1,
                label: '月报',
                },
                {
                value: 2,
                label: '日报',
                }
            ],
        }
    },
    computed: {
        chartsConfig1() {
            return {
                serName: '冲突趋势',
                barWidth: 10,
                event: true,
                xAxisData: axiax.filter(item => item.type === this.radio1)[0].data,
                yAxisData: axiax.filter(item => item.type === this.radio1)[0].records,
            }   
        },
        chartsConfig2() {
            return {
                serName: '冲突原因',
                barWidth: 10,
                xAxisData: axiax.filter(item => item.type === this.radio2)[0].data,
                yAxisData: axiax.filter(item => item.type === this.radio2)[0].records,
                isRow: false,
            }   
        },
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
        console.log(this.$store.state)
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
    height: 100%;
    padding: 0 10px;
}
</style>