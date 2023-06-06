import Vue from 'vue';
import block from '@/components/block'
import charts from '@/components/charts';
const component = () => {
    Vue.component('x-block', block);
    Vue.component('x-charts', charts);
}
export default component
