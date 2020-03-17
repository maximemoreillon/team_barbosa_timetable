<template>
  <div id="app">


    <translate-icon
      class="language_selector"
      v-bind:size="42"
      v-on:click="toggle_language()"
      />

    <!--
    <select class="language_selector" v-model="settings.language">
      <option value="jp">日本語</option>
      <option value="en">English</option>
    </select>
    -->

    <div
      class="day_divider"
      v-for="(day, day_index) in days"
      v-bind:key="day.en"
      v-bind:style="{width: (100/7) + '%', left: 100 * day_index/7+ '%' }">
      {{day[settings.language]}}

    </div>

    <!-- quite dirty -->
    <div
      class="hour_divider"
      v-for="hour in settings.end_time-settings.start_time"
      v-bind:key="hour"
      v-bind:style="{top: 100*(hour-1)/(settings.end_time-settings.start_time)+ '%', height: 100/(settings.end_time-settings.start_time) + '%'}">
      {{settings.start_time + hour}}:00

    </div>



    <!-- key if flimsy -->
    <Lesson
      v-for="lesson in lessons"
      v-bind:key="JSON.stringify(lesson)"
      v-bind:lesson="lesson"
      v-bind:settings="settings"/>







  </div>
</template>

<script>
import {lessons} from '@/mixins/lessons.js'
import Lesson from '@/components/Lesson.vue'
import TranslateIcon from 'vue-material-design-icons/Translate.vue';

export default {
  name: 'App',
  components: {
    Lesson,

    TranslateIcon,
  },
  mixins: [
    lessons
  ],
  methods: {
    toggle_language(){
      if(this.settings.language === 'jp') this.settings.language = 'en'
      else this.settings.language = 'jp'
    }
  },
  computed: {

  },
  data() {
    return {
      settings: {
        start_time: 9,
        end_time: 23,
        language: 'jp'
      },
      days: [
        {jp: '月', en: 'Mon'},
        {jp: '火', en: 'Tue'},
        {jp: '水', en: 'Wed'},
        {jp: '木', en: 'Thu'},
        {jp: '金', en: 'Fri'},
        {jp: '土', en: 'Sat'},
        {jp: '日', en: 'Sun'},
      ]
    }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}
body {
  font-family :
    'ヒラギノ角ゴ ProN' ,
    'Hiragino Kaku Gothic ProN' ,
    '游ゴシック' , '游ゴシック体' ,
    YuGothic ,
    'Yu Gothic' ,
    'メイリオ' ,
    Meiryo ,
    'ＭＳ ゴシック' ,
    'MS Gothic' ,
    HiraKakuProN-W3 ,
    'TakaoExゴシック' ,
    TakaoExGothic ,
    'MotoyaLCedar' ,
    'Droid Sans Japanese' ,
    sans-serif;

  margin: 0;

  height: 100vh;
}

#app {
  height: 100%;
  position: relative;

}

.language_selector {
  position: absolute;
  left: 10px;
  top: 10px;
  z-index: 50;
  cursor: pointer;
  border-radius: 100%;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #e85a5a;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: 0.25s;

}

.language_selector:hover {
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}


.day {
  /* horizontal growth */
  flex-grow: 1;
  flex-basis: 0;
  height: 100%;

  padding: 0 5px;

  display: flex;
  flex-direction: column;
}

.day:not(:last-child) {
  border-right: 1px solid #dddddd;
}

.day_label_wrapper {
  text-align: center;
  padding: 5px;
  font-weight: bold;
}


.day_divider {
  position: absolute;
  top: 0;
  height: 100%;
  text-align: center;
  padding: 5px;
  color: #666666;
}

.day_divider:not(:last-child) {
  border-right: 1px solid #dddddd;
}

.hour_divider {
  position: absolute;
  left: 0;
  width: 100%;
  border-bottom: 1px solid #dddddd;

  color: #666666;
  font-size: 75%;

  display: flex;
  align-items: flex-end;
  padding: 0 5px;

}

</style>
