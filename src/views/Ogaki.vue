<template>
  <Timetable :lessons="lessons"/>
</template>

<script>
import Timetable from '@/components/Timetable.vue'

export default {
  name: 'Ogaki',
  components: {
    Timetable
  },
  data() {
    return {
      lessons: [
        // Monday
        {
          day: 0,
          time: {
            start: 10.5,
            end: 11.5,
          },
          label: {
            jp: 'キックボクシングフィットネス',
            en: 'Kickboxing fitness',
          },

          color: '#6aa0e6',
        },
        {
          day: 0,
          time: {
            start: 11.5,
            end: 17.0,
          },
          label: {
            jp: 'パーソナル トレーニング',
            en: 'Personal training',
          },
          color: '#f5da89',
        },
        {
          day: 0,
          time: {
            start: 19,
            end: 20,
          },
          label: {
            jp: '柔術　キッズ',
            en: 'Jujitsu kids',
          },
          color: '#ebe534',
        },
        {
          day: 0,
          time: {
            start: 17,
            end: 18,
          },
          label: {
            jp: 'キックボクシング　キッズ',
            en: 'Kickboxing kids',
          },
          color: '#ebe534',
        },
        {
          day: 0,
          time: {
            start: 18,
            end: 19,
          },
          label: {
            jp: 'フリーマット',
            en: 'Free mat',
          },
          color: '#e3dac8',
        },

        {
          day: 0,
          time: {
            start: 19,
            end: 20,
          },
          label: {
            jp: 'キックボクシング',
            en: 'Kickboxing',
          },
          details: {
            jp: 'ベーシック',
            en: 'Basic',
          },
          color: '#6aa0e6',
        },

        {
          day: 0,
          time: {
            start: 20,
            end: 20.5,
          },
          label: {
            jp: 'フリーマット',
            en: 'Free mat',
          },
          color: '#e3dac8',
        },

        {
          day: 0,
          time: {
            start: 20.5,
            end: 21.5,
          },
          label: {
            jp: '柔術',
            en: 'Jujitsu',
          },
          details: {
            jp: 'ベーシック',
            en: 'Basic',
          },
          color: "#6ae680",
        },
        {
          day: 0,
          time: {
            start: 21.5,
            end: 22.5,
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

        // Tuesday
        {
          day: 1,
          time: {
            start: 10,
            end: 12,
          },
          label: {
            jp: 'フリーマット',
            en: 'Free mat',
          },
          color: '#e3dac8',
        },

        {
          day: 1,
          time: {
            start: 16,
            end: 20.5,
          },
          label: {
            jp: 'フリーマット',
            en: 'Free mat',
          },
          color: '#e3dac8',
        },

        {
          day: 1,
          time: {
            start: 20.5,
            end: 21.5,
          },
          label: {
            jp: 'キックボクシング',
            en: 'Kickboxing',
          },
          details: {
            jp: 'ベーシック',
            en: 'Basic',
          },
          color: '#6aa0e6',
        },
        {
          day: 1,
          time: {
            start: 21.5,
            end: 22.5,
          },
          label: {
            jp: 'キックボクシング',
            en: 'Kickboxing',
          },
          details: {
            jp: 'アドバンス',
            en: 'Advanced',
          },
          color: '#6aa0e6',
        },


        // Wednesday
        {
          day: 2,
          time: {
            start: 10.5,
            end: 11.5,
          },
          label: {
            jp: 'キックボクシングフィットネス',
            en: 'Kickboxing fitness',
          },

          color: '#6aa0e6',
        },
        {
          day: 2,
          time: {
            start: 11.5,
            end: 17.5,
          },
          label: {
            jp: 'パーソナル トレーニング',
            en: 'Personal training',
          },
          color: '#f5da89',
        },
        {
          day: 2,
          time: {
            start: 17.5,
            end: 18.5,
          },
          label: {
            jp: 'キックボクシング　キッズ',
            en: 'Kickboxing kids',
          },
          color: '#ebe534',
        },

        {
          day: 2,
          time: {
            start: 18.5,
            end: 19,
          },
          label: {
            jp: 'フリーマット',
            en: 'Free mat',
          },
          color: '#e3dac8',
        },
        {
          day: 2,
          time: {
            start: 19,
            end: 20,
          },
          label: {
            jp: 'キックボクシング',
            en: 'Kickboxing',
          },
          details: {
            jp: 'アドバンス',
            en: 'Advanced',
          },
          color: '#6aa0e6',
        },

        {
          day: 2,
          time: {
            start: 20,
            end: 21,
          },
          label: {
            jp: '柔術',
            en: 'Jujitsu',
          },
          details: {
            jp: 'アドバンス',
            en: 'Advanced',
          },
          color: "#6ae680",
        },
        {
          day: 2,
          time: {
            start: 21,
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
        // Thursday
        {
          day: 3,
          time: {
            start: 10,
            end: 12,
          },
          label: {
            jp: 'フリーマット',
            en: 'Free mat',
          },
          color: '#e3dac8',
        },

        {
          day: 3,
          time: {
            start: 16,
            end: 20.5,
          },
          label: {
            jp: 'フリーマット',
            en: 'Free mat',
          },
          color: '#e3dac8',
        },


        {
          day: 3,
          time: {
            start: 20.5,
            end: 21.5,
          },
          label: {
            jp: 'キックボクシング',
            en: 'Kickboxing',
          },
          details: {
            jp: 'ベーシック',
            en: 'Basic',
          },
          color: '#6aa0e6',
        },
        {
          day: 3,
          time: {
            start: 21.5,
            end: 22.5,
          },
          label: {
            jp: 'キックボクシング',
            en: 'Kickboxing',
          },
          details: {
            jp: 'アドバンス',
            en: 'Advanced',
          },
          color: '#6aa0e6',
        },
        // Friday
        {
          day: 4,
          time: {
            start: 10,
            end: 12,
          },
          label: {
            jp: 'フリーマット',
            en: 'Free mat',
          },
          color: '#e3dac8',
        },

        {
          day: 4,
          time: {
            start: 16,
            end: 19,
          },
          label: {
            jp: 'フリーマット',
            en: 'Free mat',
          },
          color: '#e3dac8',
        },
        {
          day: 4,
          time: {
            start: 19,
            end: 20,
          },
          label: {
            jp: 'キックボクシング',
            en: 'Kickboxing',
          },
          details: {
            jp: 'ベーシック',
            en: 'Basic',
          },
          color: '#6aa0e6',
        },

        {
          day: 4,
          time: {
            start: 20,
            end: 20.5,
          },
          label: {
            jp: 'フリーマット',
            en: 'Free mat',
          },
          color: '#e3dac8',
        },

        {
          day: 4,
          time: {
            start: 20.5,
            end: 21.5,
          },
          label: {
            jp: '柔術',
            en: 'Jujitsu',
          },
          details: {
            jp: 'ベーシック',
            en: 'Basic',
          },
          color: "#6ae680",
        },
        {
          day: 4,
          time: {
            start: 21.5,
            end: 22.5,
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
        // Saturday
        {
          day: 5,
          time: {
            start: 10.5,
            end: 12,
          },
          label: {
            jp: '柔術 & キックボクシング',
            en: 'Jujitsu Kickboxing',
          },
          details: {
            jp: 'フリートレーニング',
            en: 'Free training',
          },
          color: '#56dbd9',
        },
        {
          day: 5,
          time: {
            start: 14,
            end: 15,
          },
          label: {
            jp: '柔術　キッズ',
            en: 'Jujitsu kids',
          },
          color: '#ebe534',
        },
        // Sunday (nothing)

      ]
    }
  }
}
</script>
