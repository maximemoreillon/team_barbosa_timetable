<template>
  <div id="app">
    <!--
    <nav>
      <router-link to="/nagoya">Nagoya</router-link>
      <router-link to="/ogaki">Ogaki</router-link>
      <router-link to="/handa">handa</router-link>
    </nav>
    -->
    <router-view/>
  </div>
</template>

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
}

</style>
