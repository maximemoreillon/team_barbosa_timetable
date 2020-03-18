import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

/* eslint-disable no-new */
const store = new Vuex.Store({
  state: {
    language: 'jp',
    start_time: 9,
    end_time: 23,
    days: [
      {short: {jp: '月', en: 'Mon'}, full: {jp: '月曜日', en: 'Monday'} },
      {short: {jp: '火', en: 'Tue'}, full: {jp: '火曜日', en: 'Tuesday'} },
      {short: {jp: '水', en: 'Wed'}, full: {jp: '水曜日', en: 'Wednesday'} },
      {short: {jp: '木', en: 'Thu'}, full: {jp: '木曜日', en: 'Thursday'} },
      {short: {jp: '金', en: 'Fri'}, full: {jp: '金曜日', en: 'Friday'} },
      {short: {jp: '土', en: 'Sat'}, full: {jp: '土曜日', en: 'Saturdday'} },
      {short: {jp: '日', en: 'Sun'}, full: {jp: '日曜日', en: 'Sunday'} },
    ],
  },
  mutations: {
    toggle_language(state){
      if(state.language === 'jp') state.language = 'en'
      else state.language = 'jp'
    }
  },
  actions: {
  },
  modules: {
  }
})

export default store
