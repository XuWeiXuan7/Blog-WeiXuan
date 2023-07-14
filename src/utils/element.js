// 按需引入 Element
import Vue from 'vue'
import { Button, Select, MessageBox, Message, icon, Form, FormItem, Input, CheckboxGroup, Checkbox } from 'element-ui'
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'

// 设置语言
locale.use(lang)
// 引入组件
Vue.component(icon.name, icon)
Vue.component(Button.name, Button)
Vue.component(Select.name, Select)
Vue.component(Form.name, Form)
Vue.component(FormItem.name, FormItem)
Vue.component(Input.name, Input)
Vue.component(CheckboxGroup.name, CheckboxGroup)
Vue.component(Checkbox.name, Checkbox)
Vue.prototype.$message = Message
Vue.prototype.$MessageBox = MessageBox