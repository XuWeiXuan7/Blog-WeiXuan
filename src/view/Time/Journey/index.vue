<template>
  <div class="Journey">
    <a-timeline mode="alternate"
                class="time">
      <a-timeline-item>
        <a-icon slot="dot"
                type="copy"
                style="font-size: 30px;" />
        <span style="font-size: 25px;">总共用20篇文章</span>
      </a-timeline-item>
      <a-timeline-item>博客相关信息介绍 2015-09-01</a-timeline-item>
      <a-timeline-item position="left">后台管理系统 - 权限管理 2022-08-09</a-timeline-item>
      <a-timeline-item>Java中的泛型 2022-08-12</a-timeline-item>
      <a-timeline-item>JS高级-面向对象 2022-08-16</a-timeline-item>
      <a-timeline-item>实现链式调用 2022-09-10</a-timeline-item>
      <a-timeline-item>nodejs操作mysql 2022-09-10</a-timeline-item>
      <a-timeline-item>mysql笔记 2022-09-10</a-timeline-item>
      <a-timeline-item>手写Promise 2022-09-11</a-timeline-item>
      <a-timeline-item>浏览器事件循环 2022-09-14</a-timeline-item>
      <a-timeline-item>
        <a-icon slot="dot"
                type="clock-circle-o"
                style="font-size: 16px;" />
        Technical testing 2015-09-01
      </a-timeline-item>
    </a-timeline>
    <a-pagination class="pagination"
                  v-model:current="current"
                  simple
                  :total="50" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: 1
    }
  },
}
</script>
      
<style lang="less" scoped>
.Journey {
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #fff;
  .time {
    display: flex;
    flex-direction: column;
    padding: 50px;
    height: 80%;
    background: #fff;
    /deep/.ant-timeline-item-content {
      font-size: 20px;
    }
  }
  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 35px;
    text-align: center;
  }
}
</style>