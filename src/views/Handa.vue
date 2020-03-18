<template>
  <Timetable :lessons="lessons"/>
</template>

<script>
import Timetable from '@/components/Timetable.vue'

export default {
  name: 'Handa',
  components: {
    Timetable
  },
  data() {
    return {
      lessons: [
        // Monday
        {
          day: 0,
          half: 'left',
          time: {
            start: 20,
            end: 20.75,
          },
          label: {
            jp: '柔術',
            en: 'Jujitsu',
          },
          details: {
            jp: 'テクニック＆ドリル',
            en: 'technique & drill',
          },
          color: "#6ae680",
        },
        {
          day: 0,
          half: 'left',
          time: {
            start: 20.75,
            end: 21.5,
          },
          label: {
            jp: '柔術',
            en: 'Jujitsu',
          },
          details: {
            jp: 'スパークリング',
            en: 'sparring',
          },
          color: "#6ae680",
        },
        {
          day: 0,
          half: 'right',
          time: {
            start: 19.5,
            end: 21.5,
          },
          label: {
            jp: 'キックボクシング',
            en: 'Kickboxing',
          },
          color: '#6aa0e6',
        },
        {
          day: 0,
          time: {
            start: 21.5,
            end: 22.5,
          },
          label: {
            jp: 'フリーマット',
            en: 'Free mat',
          },
          color: '#e3dac8',
        },
        // Tuesday
        {
          day: 1,
          time: {
            start: 10.5,
            end: 12.0,
          },
          label: {
            jp: 'キックボクシングフィットネス',
            en: 'Kickboxing fitness',
          },

          color: '#6aa0e6',
        },
        {
          day: 1,
          time: {
            start: 12,
            end: 17,
          },
          label: {
            jp: 'パーソナル トレーニング',
            en: 'Personal training',
          },
          color: '#f5da89',
        },
        {
          day: 1,
          time: {
            start: 17,
            end: 18.5,
          },
          label: {
            jp: 'キックボクシング　キッズ',
            en: 'Kickboxing kids',
          },
          color: '#ebe534',
        },
        {
          day: 1,
          time: {
            start: 18.5,
            end: 19.5,
          },
          label: {
            jp: 'フリーマット',
            en: 'Free mat',
          },
          color: '#e3dac8',
        },
        {
          day: 1,
          half: 'right',
          time: {
            start: 19.5,
            end: 22,
          },
          label: {
            jp: 'キックボクシング',
            en: 'Kickboxing',
          },
          color: '#6aa0e6',
        },
        {
          day: 1,
          half: 'left',
          time: {
            start: 19.5,
            end: 22,
          },
          label: {
            jp: '柔術',
            en: 'Jujitsu',
          },

          color: "#6ae680",
        },


        {
          day: 1,
          time: {
            start: 22,
            end: 22.5,
          },
          label: {
            jp: 'フリーマット',
            en: 'Free mat',
          },
          color: '#e3dac8',
        },
        // Wednesday
        {
          day: 2,
          half: 'left',
          time: {
            start: 20.5,
            end: 21.25,
          },
          label: {
            jp: '柔術',
            en: 'Jujitsu',
          },
          details: {
            jp: 'テクニック＆ドリル',
            en: 'technique & drill',
          },
          color: "#6ae680",
        },
        {
          day: 2,
          half: 'left',
          time: {
            start: 21.25,
            end: 22,
          },
          label: {
            jp: '柔術',
            en: 'Jujitsu',
          },
          details: {
            jp: 'スパークリング',
            en: 'sparring',
          },
          color: "#6ae680",
        },
        {
          day: 2,
          half: 'right',
          time: {
            start: 19.5,
            end: 21.5,
          },
          label: {
            jp: 'キックボクシング',
            en: 'Kickboxing',
          },
          color: '#6aa0e6',
        },
        {
          day: 2,
          time: {
            start: 21.5,
            end: 22.5,
          },
          label: {
            jp: 'フリーマット',
            en: 'Free mat',
          },
          color: '#e3dac8',
        },
        // Thursday
        {
          day: 3,
          time: {
            start: 10.5,
            end: 12.0,
          },
          label: {
            jp: 'キックボクシングフィットネス',
            en: 'Kickboxing fitness',
          },

          color: '#6aa0e6',
        },
        {
          day: 3,
          time: {
            start: 12,
            end: 17,
          },
          label: {
            jp: 'パーソナル トレーニング',
            en: 'Personal training',
          },
          color: '#f5da89',
        },
        {
          day: 3,
          time: {
            start: 17,
            end: 18.5,
          },
          label: {
            jp: 'キックボクシング　キッズ',
            en: 'Kickboxing kids',
          },
          color: '#ebe534',
        },
        {
          day: 3,
          time: {
            start: 18.5,
            end: 19.5,
          },
          label: {
            jp: 'フリーマット',
            en: 'Free mat',
          },
          color: '#e3dac8',
        },

        {
          day: 3,
          half: 'right',
          time: {
            start: 19.5,
            end: 22,
          },
          label: {
            jp: 'キックボクシング',
            en: 'Kickboxing',
          },
          color: '#6aa0e6',
        },
        {
          day: 3,
          half: 'left',
          time: {
            start: 19.5,
            end: 22,
          },
          label: {
            jp: '柔術',
            en: 'Jujitsu',
          },

          color: "#6ae680",
        },
        {
          day: 3,
          time: {
            start: 22,
            end: 22.5,
          },
          label: {
            jp: 'フリーマット',
            en: 'Free mat',
          },
          color: '#e3dac8',
        },
        // Friday
        {
          day: 4,
          time: {
            start: 10,
            end: 18.5,
          },
          label: {
            jp: 'パーソナル トレーニング',
            en: 'Personal training',
          },
          color: '#f5da89',
        },

        {
          day: 4,
          time: {
            start: 18.5,
            end: 20,
          },
          label: {
            jp: 'フリーマット',
            en: 'Free mat',
          },
          color: '#e3dac8',
        },


        {
          day: 4,
          half: 'left',
          time: {
            start: 20,
            end: 20.75,
          },
          label: {
            jp: '柔術',
            en: 'Jujitsu',
          },
          details: {
            jp: 'テクニック＆ドリル',
            en: 'technique & drill',
          },
          color: "#6ae680",
        },
        {
          day: 4,
          half: 'left',
          time: {
            start: 20.75,
            end: 21.5,
          },
          label: {
            jp: '柔術',
            en: 'Jujitsu',
          },
          details: {
            jp: 'スパークリング',
            en: 'sparring',
          },
          color: "#6ae680",
        },
        {
          day: 4,
          half: 'right',
          time: {
            start: 19.5,
            end: 21.5,
          },
          label: {
            jp: 'キックボクシング',
            en: 'Kickboxing',
          },
          color: '#6aa0e6',
        },

        {
          day: 4,
          time: {
            start: 21.5,
            end: 22.5,
          },
          label: {
            jp: 'フリーマット',
            en: 'Free mat',
          },
          color: '#e3dac8',
        },
        // Saturday
        {
          day: 5,
          time: {
            start: 10.5,
            end: 12,
          },
          label: {
            jp: '柔術',
            en: 'Jujitsu',
          },
          details: {
            jp: 'スパークリング',
            en: 'sparring',
          },
          color: "#6ae680",
        },

        {
          day: 5,
          time: {
            start: 12,
            end: 17,
          },
          label: {
            jp: 'パーソナル トレーニング',
            en: 'Personal training',
          },
          color: '#f5da89',
        },
        {
          day: 5,
          time: {
            start: 17,
            end: 19,
          },
          label: {
            jp: 'キックボクシング　キッズ',
            en: 'Kickboxing kids',
          },
          color: '#ebe534',
        },

        {
          day: 5,
          time: {
            start: 19,
            end: 20,
          },
          label: {
            jp: 'キックボクシング',
            en: 'Kickboxing',
          },

          color: '#6aa0e6',
        },

        {
          day: 5,
          time: {
            start: 20,
            end: 20.75,
          },
          label: {
            jp: '柔術',
            en: 'Jujitsu',
          },
          details: {
            jp: 'テクニック＆ドリル',
            en: 'technique & drill',
          },
          color: "#6ae680",
        },
        {
          day: 5,
          time: {
            start: 20.75,
            end: 21.5,
          },
          label: {
            jp: '柔術',
            en: 'Jujitsu',
          },
          details: {
            jp: 'スパークリング',
            en: 'sparring',
          },
          color: "#6ae680",
        },
        {
          day: 5,
          time: {
            start: 21.5,
            end: 22.5,
          },
          label: {
            jp: 'フリーマット',
            en: 'Free mat',
          },
          color: '#e3dac8',
        },
        // Sunday
        {
          day: 6,
          time: {
            start: 10.5,
            end: 11.25,
          },
          label: {
            jp: '柔術',
            en: 'Jujitsu',
          },
          details: {
            jp: 'テクニック＆ドリル',
            en: 'technique & drill',
          },
          color: "#6ae680",
        },
        {
          day: 6,
          time: {
            start: 11.25,
            end: 12,
          },
          label: {
            jp: '柔術',
            en: 'Jujitsu',
          },
          details: {
            jp: 'スパークリング',
            en: 'sparring',
          },
          color: "#6ae680",
        },

        {
          day: 6,
          time: {
            start: 12,
            end: 22.5,
          },
          label: {
            jp: 'パーソナル トレーニング',
            en: 'Personal training',
          },
          color: '#f5da89',
        },

      ]
    }
  }
}
</script>
