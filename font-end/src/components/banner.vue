<template>
  <div class="hello">
    <el-carousel :interval="5000" arrow="always">
      <el-carousel-item v-for="item in carouselImg" :key="item.alt">
        <img :alt="item.alt" :src="item.src">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
export default {
  name: 'banner',
  data() {
    return{
      carouselImg: [
        {alt: 'banner1', src: require('../../static/img/banner/banner_1.png')},
        {alt: 'banner2', src: require('../../static/img/banner/banner_7.jpg')},
        {alt: 'banner3', src: require('../../static/img/banner3.png')},
        {alt: 'banner4', src: require('../../static/img/banner4.png')}
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
</style>
<style lang="scss">
.el-carousel__container{
  height:500px !important;
}
</style>