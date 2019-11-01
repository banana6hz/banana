<template>
  <div class="home">
    <navbar></navbar>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import navbar from '@/components/navbar.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    navbar
  }
}
</script>
