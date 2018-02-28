<template lang="html">
  <div id="contain">
    <h1>{{msg}}</h1>
    <audio id="audioId"
      controls src="http://www.egtch.com/t_works/Vuedata/I Am You.mp3">
    </audio>
    <div id="ctrl_button">
      <input type="button" value="播放" @click="playFn">
      <input type="button" value="暂停" @click="isPauseFn">
    </div>
    <div id="mp3List">
      <h2>歌曲列表</h2>
      <ul>
        <li v-for="item in musicList" :key=item.id>
          <img :src=item.img alt=""/>
          <span>{{item.name}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'player',
  data () {
    return {
      msg: 'fm播放器',
      musicList: ''
    }
  },
  // 一开始就执行
  created () {
    this.getData()
  },
  methods: {
    // 获取音乐数据
    getData () {
      axios.get('http://localhost:3698/mp3-list').then((_data) => {
        // console.log(_data)
        this.musicList = _data.data.music
      })
    },
    // 播放方法
    playFn () {
      let _audioId = document.getElementById('audioId')
      _audioId.play()
    },
    // 暂停方法
    isPauseFn () {
      document.getElementById('audioId').pause()
    }
  }
}
</script>

<style scoped>
  *{margin:0;padding:0;border:0;}
  ul, li {list-style: none}
  #contain {
    height:300px;
    text-align: center;
  }
  h1, h2 {
    margin:15px auto;
    font-weight: 100;
  }
  #ctrl_button input {
    width:45px;
    height:35px;
    border-radius: 5px;
    margin:10px 10px;
    text-align: center;
    font-size: 15px;
  }
  #mp3List ul li {
    height:70px;
    background: #F0F0F0;
    margin:10px;
  }
  #mp3List ul li img{
    height:50px;
    width:50px;
    margin:10px auto;
  }
  #mp3List ul li span{
    position:relative;
    text-align: left;
    display: inline-block;
    width:100px;
    left:10px;
    top:-30px;
  }

</style>
