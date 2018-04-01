import Vue from 'vue'
import Icon from 'vue-awesome';
const VueAwesome = {
  install(Vue, options) {
    Vue.component('icon', Icon)
  }
};
Vue.use(VueAwesome);
export default VueAwesome;
