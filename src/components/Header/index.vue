<template>
  <div class="header">
    <div class="hd-main">
      <div class="hd-logo">伟轩</div>
      <div class="hd-nav">
        <a v-for="(item,index) in list"
           :class="Liang==index?'active':''"
           @click="GaoLiang(index)">{{item}}</a>
      </div>
      <div class="hd-login">
        <el-icon class="el-icon-search"
                 style="font-size:25px"></el-icon>
        <HdLoading></HdLoading>
      </div>
    </div>
  </div>
</template>

<script>
import HdLoading from './HdLoading'
export default {
  data() {
    return {
      list: ['首页', '时间旅途', '标签', '作品集', '友链', '闲言碎语', '关于'],
      navindex: 0,
      ModalText: 'Content of the modal',
      visible: true,
      confirmLoading: true,
    }
  },
  components: {
    HdLoading,
  },
  methods: {
    GaoLiang(index) {
      this.navindex = index
    },
    showModal() {
      this.visible = true;
    },
  },
  computed: {
    Liang() {
      return this.navindex
    }
  }
}
</script>
<style lang="less" scoped>
@import "@/assets/css/mixin.less";
.header {
  position: sticky;
  top: 0;
  background-color: @hd-color;
  box-shadow: rgba(0, 0, 0, 0.05) 0 1px 20px 1px;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  .hd-main {
    width: 1140px;
    display: flex;
    margin: 0 auto;
    align-items: center;
    .hd-logo {
      font-size: 20px;
      position: relative;
      color: @nav-logo;
      letter-spacing: 2px;
      &::after {
        content: "BLOG";
        letter-spacing: 0px;
        font-size: 12px;
        position: absolute;
        font-weight: 500;
      }
    }
    .hd-nav {
      display: flex;
      margin-left: 50px;
      flex: 1 1 0%;
      .active {
        color: @nav-color;
        &::after {
          transform: scaleX(1);
        }
      }
      a {
        color: gray;
        font-size: 16px;
        padding: 5px 4px 5px;
        margin: 0 20px;
        position: relative;
        .transfrom;
        &::after {
          content: "";
          position: absolute;
          bottom: -5px;
          width: 100%;
          height: 2px;
          left: 0;
          transform-origin: center center;
          transition: all 0.2s ease 0s;
          background-color: @nav-color;
          transform: scaleX(0);
        }
        &:hover {
          color: @nav-color;
        }
      }
    }
    .hd-login {
      display: flex;
      align-items: center;
      span {
        font-size: 14px;
        padding-left: 20px;
        color: gray;
        .transfrom;
        &:hover {
          color: @nav-color;
        }
      }
    }
  }
}
</style>