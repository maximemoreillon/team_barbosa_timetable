export const lessons = {

  data(){
    return {
      lessons: [
        // Monday
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
          time: {
            start: 21.5,
            end: 22.5,
          },
          label: {
            jp: 'フリーマット',
            en: 'Free mat',
          },
          color: '#deca8e',
        },
        // Tuesday
        {
          day: 1,
          time: {
            start: 10.5,
            end: 19.5,
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
            start: 19.5,
            end: 20.25,
          },
          label: {
            jp: 'キックボクシング',
            en: 'Kickboxing',
          },
          details: {
            jp: 'ミット ＆ テクニック',
            en: 'Mitts and technique',
          },
          color: '#6aa0e6',
        },
        {
          day: 1,
          time: {
            start: 20.25,
            end: 21.0,
          },
          label: {
            jp: 'キックボクシング',
            en: 'Kickboxing',
          },
          details: {
            jp: 'ライトスパー',
            en: 'Light sparring',
          },
          color: '#6aa0e6',
        },
        {
          day: 1,
          time: {
            start: 21,
            end: 22,
          },
          label: {
            jp: 'グラップリング & MMA',
            en: 'Grappling & MMA',
          },
          color: '#89f5dc',
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
          color: '#deca8e',
        },
        // Wednesday
        {
          day: 2,
          time: {
            start: 19.5,
            end: 21.0,
          },
          label: {
            jp: 'ピラティス',
            en: 'Pilates',
          },
          color: '#f5c947',
        },
        {
          day: 2,
          time: {
            start: 21,
            end: 22.5,
          },
          label: {
            jp: 'フリーマット',
            en: 'Free mat',
          },
          color: '#deca8e',
        },
        // Thursday
        {
          day: 3,
          time: {
            start: 10.5,
            end: 19.5,
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
            start: 19.5,
            end: 20.5,
          },
          label: {
            jp: 'キックボクシング',
            en: 'Kickboxing',
          },
          details: {
            jp: 'ミット ＆ テクニック',
            en: 'Mitts and technique',
          },
          color: '#6aa0e6',
        },
        {
          day: 3,
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
          day: 3,
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
          day: 3,
          time: {
            start: 22,
            end: 22.5,
          },
          label: {
            jp: 'フリーマット',
            en: 'Free mat',
          },
          color: '#deca8e',
        },
        // Friday
        {
          day: 4,
          time: {
            start: 10,
            end: 11,
          },
          label: {
            jp: 'キックボクシングフィットネス',
            en: 'Kickboxing fitness',
          },
          color: '#6aa0e6',
        },
        {
          day: 4,
          time: {
            start: 11,
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
          day: 4,
          time: {
            start: 12,
            end: 18,
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
            start: 19.5,
            end: 20.25,
          },
          label: {
            jp: '柔術　ー般 + キッズ',
            en: 'Jujitsu general + kids',
          },
          details: {
            jp: 'テクニック＆ドリル',
            en: 'technique & drill',
          },
          color: "#ebe534",
        },
        {
          day: 4,
          time: {
            start: 20.25,
            end: 21,
          },
          label: {
            jp: '柔術　ー般 + キッズ',
            en: 'Jujitsu general + kids',
          },
          details: {
            jp: 'スパークリング',
            en: 'sparring',
          },
          color: "#ebe534",
        },
        {
          day: 4,
          time: {
            start: 21,
            end: 22.5,
          },
          label: {
            jp: 'フリーマット',
            en: 'Free mat',
          },
          color: '#deca8e',
        },
        // Saturday
        {
          day: 5,
          time: {
            start: 9.5,
            end: 10.5,
          },
          label: {
            jp: 'キックボクシングフィットネス',
            en: 'Kickboxing fitness',
          },
          color: '#6aa0e6',
        },
        {
          day: 5,
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
          day: 5,
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
          day: 5,
          time: {
            start: 12,
            end: 19,
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
            start: 19,
            end: 20,
          },
          label: {
            jp: 'キックボクシング',
            en: 'Kickboxing',
          },
          details: {
            jp: 'ミット ＆ テクニック',
            en: 'Mitts and technique',
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
          color: '#deca8e',
        },
        // Sunday
        {
          day: 6,
          time: {
            start: 10.5,
            end: 12,
          },
          label: {
            jp: 'キックボクシングフィットネス<br>柔術　スパークリング ',
            en: 'Kickboxing fitness<br>Jujitsu sparring',
          },
          color: '#56dbd9',
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


};
