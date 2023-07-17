<template>
  <div class="sidebar">
    <div class="sidebar-set">
      <div class="accordingTo"
           @click="Switch">
        <a-icon type="tag" />
        <slot name="shezhi"></slot>
        <i class="el-icon-arrow-right right"
           v-show="!music"></i>
        <i class="el-icon-arrow-down right"
           v-show="music"></i>
      </div>
      <el-collapse-transition>
        <div class="hidden"
             v-show="music">
          <div class="hidden-box">
            <slot name="neir"></slot>
          </div>
        </div>
      </el-collapse-transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      label: false,
      music: false
    }
  },
  methods: {
    Switch() {
      this.music = !this.music
    }
  },
}
</script>

<style lang="less" scoped>
.sidebar {
  .sidebar-set {
    background-color: #fff;
    margin-top: 10px;
    border-radius: 5px;
    padding: 10px;
    position: relative;

    .accordingTo {
      cursor: pointer;
      display: flex;
      align-items: center;
      padding: 12px 40px 12px 16px;
      transition: 1s all;
      i {
        font-size: 18px;
      }
      span {
        margin-left: 10px;
      }
      .right {
        position: absolute;
        right: 30px;
      }
    }
    .hidden {
      display: flex;
      border-top: 1px solid rgba(0, 0, 0, 0.06);
    }
  }
  .bofq {
    position: fixed;
    background-color: pink;
  }
}
</style>