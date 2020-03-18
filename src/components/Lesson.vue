<template>
  <div class="lesson_wrapper">
    <div
      class="lesson_open_background"
      v-bind:class="{open: open}"
      v-on:click="close_lesson()"/>

    <div
      class="lesson"
      v-bind:class="{open: open}"
      v-bind:style="{
        height: height,
        width: width,
        top: top,
        left:left,
        zIndex: z_index,
        }">



      <div
        v-on:click="open_lesson()"
        class="lesson_inner"
        v-bind:style="{backgroundColor: lesson.color}"
        v-bind:class="{open: open}">

        <!-- Indication of the time -->

        <div class="lesson_time" v-if="open">
          {{$store.state.days[lesson.day].full[$store.state.language]}} {{render_time(lesson.time.start)}} - {{render_time(lesson.time.end)}}
        </div>


        <div class="lesson_content">
          <!-- Name of the lesson -->
          <div class="lesson_label" v-html="lesson.label[$store.state.language]"/>

          <div
            class="lesson_description"
            v-if="lesson.details && open"
            v-html="lesson.details[$store.state.language]">

          </div>
        </div>



      </div>

    </div>


    <div
      class="lesson placeholder"
      v-bind:style="{
        height: height,
        width: width,
        top: top,
        left:left,
        zIndex: default_z_index-1
        }">

      <div
        class="lesson_inner"
        v-bind:style="{borderColor: lesson.color}">

      </div>

    </div>

  </div>


</template>

<script>
export default {
  name: 'Lesson',
  props: {
    lesson: Object,
  },
  data(){
    return {
      open: false,
      z_index: undefined,

    }
  },
  mounted(){
    this.z_index = this.default_z_index
  },
  methods: {
    render_time(raw_time){
      let hour = Math.floor(raw_time)
      let minutes = (raw_time - Math.floor(raw_time))*60
      return ((hour < 10) ? '0' : '') + hour + ":" + ((minutes < 10) ? '0' : '') + minutes
    },
    open_lesson(){
      if(!this.open) {
        this.open = true;
        this.z_index = '10';
      }
      else this.close_lesson();
    },
    close_lesson() {
      this.open = false;
      setTimeout(() => {this.z_index = this.default_z_index},250)
    }

  },
  computed:  {

    default_z_index() {
      if(this.lesson.half) return 3
      else return undefined
    },


    top(){
      return 100*(this.lesson.time.start-this.$store.state.start_time)/this.day_duration+'%'
    },
    left(){
      if(this.lesson.half) {
        if(this.lesson.half === 'right') return `${(100 * this.lesson.day/7) + (0.5*100/7)}%`
        else return `${100 * this.lesson.day/7}%`
      }
      else return `${100 * this.lesson.day/7}%`
    },
    width(){
      if(this.lesson.half) return `${0.5*(100/7)}%`
      return `${(100/7)}%`
    },
    height(){
      return 100*this.duration/this.day_duration+'%'
    },
    duration(){
      return this.lesson.time.end - this.lesson.time.start
    },
    day_duration(){
      return this.$store.state.end_time - this.$store.state.start_time
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.lesson {
  position: absolute;

  padding: 5px;
  transition: 0.25s;
}

.lesson.placeholder {
  z-index: -1;
}

.lesson.open {
  /* need important to counteract style set by Vue */
  top: 20% !important;
  left: 20% !important;
  width: 60% !important;
  height: 60% !important;


}

.lesson_open_background{
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #666666;
  opacity: 0;
  z-index: 5;
  transition: opacity 0.25s, visibility 0.25s;
  visibility: hidden;
}

.lesson_open_background.open{
  opacity: 0.5;
  visibility: visible;
}

.lesson:not(.placeholder) .lesson_inner {
  position: relative;

  /* with box sizing, this is OK */
  width: 100%;
  height: 100%;

  background-color: #dddddd;
  border-radius: 5px;

  padding: 0 5px;

  display: flex;
  flex-direction: column;



  font-size: 1.5vmin;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);

  cursor: pointer;
  transition: 0.25s;
}

.lesson:not(.placeholder) .lesson_inner.open {
  font-size: 3vmin;
}

.lesson:not(.placeholder) .lesson_inner:not(.open):hover {
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}

.lesson_time {
  position: absolute;
  left: 15px;
  top: 15px;

}

.lesson_content {

  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  overflow: hidden;


}

.lesson_label {
  font-weight: bold;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.placeholder .lesson_inner {

  /* with box sizing, this is OK */
  width: 100%;
  height: 100%;

  border-style: dashed;
  border-width: 2px;

  border-radius: 5px;

}
</style>
