<template>
  <div class="main">
    <div class="content">
    </div>
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
  min-height: calc(100% - 240px);
  overflow: hidden;
  .content {
    width: calc(100% - 285px);
    margin-right: 25px;
    display: flex;
    flex-direction: column;
  }
}
</style>