<template>
  <Main>
    <template v-slot:left>
      <Journey></Journey>
    </template>
    <template v-slot:right>
      <Slidebar></Slidebar>
    </template>
  </Main>
</template>

<script>
import Main from '@/components/Main'
import Slidebar from '@/components/Sidebar'
import Journey from './Journey/index.vue'
export default {
  name: 'Time',
  components: {
    Main,
    Slidebar,
    Journey
  }
}
</script>
<style lang="less" scoped>
// .time {
//   height: calc(100vh - 200px);
// }
</style>