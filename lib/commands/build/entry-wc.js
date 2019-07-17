import './setPublicPath'
import Vue from 'vue'
import wrap from '@vue/web-component-wrapper'

// runtime shared by every component chunk
import 'css-loader/lib/css-base'
import 'vue-style-loader/lib/addStylesShadow'
import 'vue-loader/lib/runtime/componentNormalizer'

import aptTestVue from '~root/content/test/test-vue/src/App.vue?shadow'
window.customElements.define('apt-test-vue', wrap(Vue, aptTestVue))