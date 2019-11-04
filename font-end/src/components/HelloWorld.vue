<template>
  <div class="hello">
    <message></message>
    <!-- <h1>{{ msg }}</h1>
    <p><img alt="Vue logo" src="../assets/logo.png"></p>
    <el-button>我我我</el-button>
    <div class="div1">
      <div class="div2" style="text-algin:center;margin:0 auto;">想吃烤鸡呀</div>
    </div> -->
  </div>
</template>

<script>
import message from '@/components/message.vue'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components:{
    message
  },
  data() {
    return{
      
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
a {
  color: #42b983;
}
.div1 {
  width: -moz-fit-content;
  width: -webkit-fit-content;
  width:fit-content;
  margin:0 auto;
  width: 200px;
  height: 200px;
}
.div2 {
  width: 100px;
  height: 100px;
}
</style>
