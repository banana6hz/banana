<template>
  <div class="hello">
    <el-carousel :interval="5000" arrow="always">
      <el-carousel-item v-for="item in carouselImg" :key="item">
        <img :alt="item.alt" :src="item.src">
      </el-carousel-item>
    </el-carousel>
    <h1>{{ msg }}</h1>
    <p><img alt="Vue logo" src="../assets/logo.png"></p>
    <el-button>我我我</el-button>
    <div class="div1">
      <div class="div2">想吃烤鸡呀</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return{
      carouselImg: [
        {alt: '1', src: require('../../static/img/logo.png')},
        {alt: '2', src: require('../../static/img/logo.png')},
        {alt: '3', src: require('../../static/img/logo.png')}
      ]
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
a {
  color: #42b983;
}
.el-carousel__item {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  display: flex;
  justify-content: center;
  align-items: center;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}
.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
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
