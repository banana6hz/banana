<template>
  <div class="home">
    <navbar></navbar>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button @click="mockDate">mockDate</button>
  </div>
</template>

<script>
 import axios from 'axios'
// 导入假数据接口
import mockdata from '../mock.js'
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import navbar from '@/components/navbar.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    navbar
  },
  methods:{
    mockDate(){
      axios.get('/msg1').then(response => {
          let res = response.data
          console.log(res)
      })
    }
  }
}
</script>
