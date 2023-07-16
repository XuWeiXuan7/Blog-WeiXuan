<template>
  <div class="top">
    <div class="top-box"
         @click="goTop">
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goTop() {
      console.log(this);
      window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    }
  },
}
</script>

<style lang="less" scoped>
.top {
  position: absolute;
  right: 30px;
  top: 0;
  z-index: 999;
  position: fixed;
  top: 0;
  .top-box {
    width: 100px;
    height: 75vh;
    background: url("../../assets/images/top.png") no-repeat center bottom;
    transition: all 1s ease 0s;
    animation: 1s linear 0s infinite alternate none running slowAction;
  }
  @keyframes slowAction {
    0% {
      transform: translateY(0px);
    }
    25% {
      transform: translateY(-6px);
    }
    50% {
      transform: translateY(-10px);
    }
    75% {
      transform: translateY(-14px);
    }
    100% {
      transform: translateY(-18px);
    }
  }
}
</style>