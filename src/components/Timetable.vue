<template>
  <div class="timetable">
    <translate-icon
      class="language_selector"
      v-bind:size="42"
      v-on:click="$store.commit('toggle_language')"
      />

    <div
      class="day_divider"
      v-for="(day, day_index) in $store.state.days"
      v-bind:key="day.short.en"
      v-bind:style="{width: (100/7) + '%', left: 100 * day_index/7+ '%' }">
      {{day.short[$store.state.language]}}

    </div>

    <!-- quite dirty -->
    <div
      class="hour_divider"
      v-for="hour in $store.state.end_time-$store.state.start_time"
      v-bind:key="hour"
      v-bind:style="{top: 100*(hour-1)/($store.state.end_time-$store.state.start_time)+ '%', height: 100/($store.state.end_time-$store.state.start_time) + '%'}">
      {{$store.state.start_time + hour}}:00

    </div>



    <!-- key if flimsy -->
    <Lesson
      v-for="lesson in lessons"
      v-bind:key="JSON.stringify(lesson)"
      v-bind:lesson="lesson"/>
  </div>
</template>

<script>

import Lesson from '@/components/Lesson.vue'
import TranslateIcon from 'vue-material-design-icons/Translate.vue';

export default {
  name: 'Timetable',
  props: {
    lessons: Array,
  },
  components: {
    Lesson,
    TranslateIcon,
  },

  data() {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.timetable {
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
