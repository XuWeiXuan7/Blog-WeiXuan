<template>
  <div class="home">
    <Main></Main>
  </div>
</template>
<script>
import Header from '@/components/Header'
import Main from './Main/index.vue'
import Footer from '@/components/Footer'
export default {
  components: {
    // Header,
    Main,
    // Footer
  }
}
</script>

<style lang="less" scoped>
.home {
  background-color: #f5f5f5;
  min-height: 100vh;
}
</style>