<template>
  <Main>
    <template v-slot:left>
      <Content></Content>
    </template>
    <template v-slot:right>
      <Sildbar></Sildbar>
    </template>
  </Main>
</template>

<script>
import Main from '@/components/Main'
import Content from './Content'
import Sildbar from '@/components/Sidebar'
export default {
  name: 'Home',
  components: {
    Content,
    Sildbar,
    Main
  }

}
</script>

<style lang="less">
</style>