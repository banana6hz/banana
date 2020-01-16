<template>
  <div id="home">
    <navbar></navbar>
    <div class="myCon">
      <banner></banner>
      <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>
    <myFooter></myFooter>
  </div>
</template>

<script>
 import axios from 'axios'
// 导入假数据接口
import mockdata from '@/mock.js'
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import banner from '@/components/banner.vue'
import navbar from '@/components/navbar.vue'
import myFooter from '@/components/footer.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    navbar,
    banner,
    myFooter
  },
  methods:{
    mockDate(){
      axios.get('/msg1').then(response => {
          let res = response.data
          console.log('mockdate',res)
      })
    },
    getTomorrow(){
        let date = new Date()
        let y = date.getFullYear()
        let m = date.getMonth() + 1
        let d = date.getDate() + 1
        let tomorrow = y + '-' + m + '-' + d
        console.log('tomorrow',tomorrow)
    }
  },
  mounted: function(){
    //this.mockDate();
  }
}
</script>
<style scoped lang="scss">
.myCon{max-width:1170px;margin:80px auto 60px;}
</style>

