<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Main from '@/components/Main'
export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  mounted() {
    window.onbeforeunload = function (e) {
      const storage = window.localStorage
      storage.clear()
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #f5f5f5;
  width: 100%;
  min-height: 100vh;
  position: relative;
}
</style>
