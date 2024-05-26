import Input from './prop/others/input.vue'
import Textarea from './prop/others/textarea.vue'
import Number from './prop/others/number.vue'
import Switch from './prop/others/switch.vue'
import Rate from './prop/others/rate.vue'
import Slider from './prop/others/slider.vue'
import Color from './prop/others/color.vue'
import Select from './prop/others/select.vue'
import Tree from './prop/others/tree.vue'
import Date from './prop/others/date.vue'
import Array from './prop/others/array.vue'
import Title from './prop/others/title.vue'
import Map from './prop/others/map.vue'
import Upload from './prop/upload/upload.vue'
import UEditor from './prop/upload/ueditor.vue'
import Dynamic from './prop/container/dynamic.vue'
import Group from './prop/container/group.vue'
import Table from './prop/table/index.vue'
import Event from './event/index.vue'

const components = [
    Input,
    Textarea,
    Number,
    Dynamic,
    Switch,
    Rate,
    Slider,
    Color,
    Select,
    Tree,
    Date,
    UEditor,
    Upload,
    Map,
    Group,
    Array,
    Title,
    Event,
    Table
]

const Config = {
    install(Vue) {
        if (this.installed) return
        this.installed = true

        components.map(component => {
            Vue.component(component.name, component);
        })
    }
}

export default Config
