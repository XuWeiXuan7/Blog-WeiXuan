<template>
  <div class="transitionhd1">
    <el-collapse-transition>
      <div v-show="navisShow"
           class="transitionhd2">
        <div class="header">
          <div class="hd-main">
            <div class="hd-logo"><router-link to="/">伟轩</router-link></div>
            <div class="hd-nav">
              <router-link :to="item.href"
                           v-for="(item,index) in list"
                           :class="Liang==index?'active':''"
                           @click="GaoLiang(index)"
                           :key="index">{{item.tab}}</router-link>
            </div>
            <div class="hd-login">
              <el-icon class="el-icon-search"
                       style="font-size:25px"></el-icon>
              <HdLoading></HdLoading>
            </div>
          </div>
        </div>
      </div>
    </el-collapse-transition>
    <Top :class="navisShow?'animate__animated animate__fadeOutUpBig':'animate__animated animate__fadeInDownBig'"></Top>
  </div>
</template>

<script>
import Top from '@/components/Top'
import HdLoading from './HdLoading'
import Throttle from '@/utils/throttle'
export default {
  data() {
    return {
      list: [
        { tab: '首页', href: '/' },
        { tab: '时间旅途', href: '/time' },
        { tab: '标签', href: '/classification' }, { tab: '作品集', href: '/works' },
        { tab: '友链', href: '/friends' }, { tab: '闲言碎语', href: '/gossip' },
        { tab: '关于', href: '/about' }],
      navindex: 0,
      navisShow: true
    }
  },
  components: {
    HdLoading,
    Top
  },

  methods: {
    GaoLiang(index) {
      this.navindex = index
    },
    showModal() {
      this.visible = true;
    },
    isScroll() {
      const top = document.documentElement.scrollTop
      if (top > 90) {
        this.navisShow = false
      } else {
        this.navisShow = true
      }
    }
  },
  computed: {
    Liang() {
      return this.navindex
    }
  },
  mounted() {
    window.addEventListener('scroll', Throttle(this.isScroll, 100))
  },
  unmounted() {
    window.removeEventListener('scroll', this.isScroll)
  },
}
</script>
<style lang="less" scoped>
@import "@/assets/css/mixin.less";
.transitionhd1 {
  position: sticky;
  top: 0;
  z-index: 999;
}
.header {
  z-index: 999;
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