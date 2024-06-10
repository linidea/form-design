import FormDesigner from '@/designer/form/index.vue';
import TableDesigner from '@/designer/table/index.vue';
import FlowDesigner from '@/designer/flow/index.vue';

export default [
    {
        path: '/designer/form',
        component: FormDesigner
    },
    {
        path: '/designer/table',
        component: TableDesigner
    }, {
        path: '/designer/flow',
        component: FlowDesigner
    }
]
