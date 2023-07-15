<template>
  <div class="main">
    <Content></Content>
    <Sildbar></Sildbar>
  </div>
</template>

<script>
import Content from './Content'
import Sildbar from '@/components/Sidebar'
export default {
  components: {
    Content,
    Sildbar
  }
}
</script>

<style lang="less" scoped>
.main {
  display: flex;
  justify-content: space-between;
  width: 70%;
  margin: 15px auto;
}
</style>