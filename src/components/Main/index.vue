<template>
  <div class="main"
       v-cloak>
    <div class="content">
      <slot name="left"></slot>
    </div>
    <slot name="right"></slot>
  </div>
</template>

<script>
export default {

}
</script>
<style lang="less" scoped>
.main {
  display: flex;
  justify-content: space-between;
  width: 70%;
  margin: 20px auto;
  min-height: calc(100vh - 240px);
  overflow: hidden;
  .content {
    width: calc(100% - 285px);
    margin-right: 25px;
    display: flex;
    flex-direction: column;
  }
}
[v-cloak] {
  display: none;
}
</style>