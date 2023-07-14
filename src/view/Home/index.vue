<template>
  <div class="home">
    <Header></Header>
    <Main></Main>
    <Sidebar></Sidebar>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header/index.vue'
import Footer from '@/components/Footer/index.vue'
import Main from '@/view/Home/Main/index.vue'
import Sidebar from '@/view/Home/Sidebar/index.vue'
export default {
  components: {
    Header,
    Footer,
    Main,
    Sidebar
  }
}
</script>

<style>
</style>