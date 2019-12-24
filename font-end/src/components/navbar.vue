<template>
    <div class="navbar">
        <ul class="navbar_ul">
            <li class="navbar_item" @click="goFish()">酸菜鱼</li>
            <li class="navbar_item" @click="goHotpop()">麻辣烫</li>
            <li class="navbar_item">鸡排</li>
            <li class="navbar_item">鸭脖</li>
            <li class="navbar_item">烧烤</li>
            <li class="navbar_item">火锅</li>
        </ul>
        <banner></banner>
    </div>
</template>
<script>
import banner from '@/components/banner.vue'
export default {
  name: 'navbar',
  components: {
    banner
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
    .navbar_ul{position:absolute;z-index:6;width:100%;background-color:rgba(0, 0, 0, 0.2);height:60px;width:100%;display:flex;justify-content:space-around;}
    .navbar_item{line-height: 60px;font-size:16px;color:aliceblue;}
</style>
