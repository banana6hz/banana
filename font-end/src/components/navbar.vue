<template>
    <div class="navbar clearfix">
        <ul class="navbar_ul">
            <li class="navbar_item" @click="goFish()">酸菜鱼</li>
            <li class="navbar_item" @click="goHotpop()">麻辣烫</li>
            <li class="navbar_item">鸡排</li>
            <li class="navbar_item">鸭脖</li>
            <li class="navbar_item">烧烤</li>
            <li class="navbar_item">火锅</li>
        </ul>
        <!-- <banner></banner> -->
    </div>
</template>
<script>
export default {
  name: 'navbar',
  components: {
    
  },
  methods: {
    goFish() {
        this.$router.push('/about')
    },
    goHotpop(){
        this.$router.push('/charge')
    }
  }
}
</script>
<style scoped lang="scss">
    .navbar_ul{box-shadow:0px 2px 4px #ececf1;position:fixed;top:0;left:0;z-index:6;width:100%;background-color:#fff;color:#000;height:50px;width:100%;display:flex;justify-content:space-around;}
    .navbar_item{line-height: 50px;font-size:16px;}
</style>
