import Vue from 'vue'
import VueNativeSock from 'vue-native-websocket'
import { MMOCK_WS } from '../constants';

export default ({ store }, inject) => {
  Vue.use(VueNativeSock, MMOCK_WS+'/echo', { store: store, format: 'json' })
}