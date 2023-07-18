<template>
  <Main>
    <template v-slot:left>
      <Classification></Classification>
    </template>
    <template v-slot:right>
      <Sidebar></Sidebar>
    </template>
  </Main>
</template>

<script>
import Main from '@/components/Main'
import Sidebar from '@/components/Sidebar'
import Classification from './Component/index.vue'
export default {
  naem: 'Classification',
  components: {
    Main,
    Sidebar,
    Classification
  }
}
</script>

<style>
</style>