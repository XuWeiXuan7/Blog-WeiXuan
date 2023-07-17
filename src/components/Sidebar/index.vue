<template>
  <div class="sidebar">
    <div class="sidebar-introduce">
      <div class="avatar">
        <span>
          <img src="../../../public/wzlogo.png"
               alt="">
        </span>
      </div>
      <div class="info">
        <div class="name">伟轩</div>
        <p>计算机科学与技术</p>
        <p><i class="el-icon-location-outline"></i>湖北 - 武汉</p>
        <p> <a href="#"
             target="_blank">后台管理系统</a></p>
        <p>前端: <a href="#">Vue2</a>+<a href="#">Js</a>+<a href="#">Element-ui</a>+<a href="#">antd</a></p>
        <p>后端: <a href="#">Node.js</a>+<a href="#">MySQL</a></p>
        <p>邮箱: <a href="#">xuweixuan777@163.com</a></p>
        <span class="typewriter">一名钻研前端的搬砖人</span>
        <div class="socialAccount">
          <span>社交账号</span>
        </div>
        <p class="relation">
          <a href="#">
            <a-icon type="qq" />
          </a>
          <a href="#">
            <a-icon type="wechat" />
          </a>
          <a href="#">
            <a-icon type="github" />
          </a>
          <a href="#">
            <a-icon type="google" />
          </a>
        </p>
      </div>
    </div>
    <Tally>
      <template v-slot:shezhi>
        <span>设置</span>
      </template>
      <template v-slot:neir>
        <div style="padding:10px 20px;height:50px">
          <el-switch v-model="value1"
                     inactive-text="音乐播放器">
          </el-switch>
        </div>
      </template>
    </Tally>
    <Install>
      <template v-slot:shezhi>
        <span>标签</span>
      </template>
      <template v-slot:neir>
        <div class="neir-tag">
          <el-tag>标签一</el-tag>
          <el-tag type="success">标签二</el-tag>
          <el-tag type="info">标签三</el-tag>
          <el-tag type="warning">标签四</el-tag>
          <el-tag type="danger">标签五</el-tag>
        </div>
      </template>
    </Install>
  </div>
</template>
<script>
import Tally from '@/components/Tally'
import Install from '@/components/Install'
export default {
  data() {
    return {
      value1: true,
      label: false,
      music: false
    }
  },
  methods: {

  },
  components: {
    Tally,
    Install
  }
}
</script>

<style lang="less" scoped>
.dottedLine {
  content: "";
  width: 60px;
  height: 17px;
  border-top: 1px solid rgba(0, 0, 0, 0.06);
  position: absolute;
}
.sidebar {
  width: 260px;
  .sidebar-introduce {
    border-radius: 5px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    .avatar {
      margin-top: 10px;
      span {
        display: inline-block;
        width: 50px;
        height: 50px;
        line-height: 50px;
        img {
          border-radius: 50%;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
    .info {
      cursor: pointer;
      font-weight: normal;
      letter-spacing: 0px;
      margin-top: 10px;
      text-align: center;
      .name {
        color: #1171ee;
      }
      a {
        color: #1171ee;
      }
      p {
        margin-bottom: 1em;
      }
      .typewriter {
        color: #1171ee;
        font-size: 12px;
        animation: typing 2s steps(var(--count)) infinite;
        animation-direction: alternate-reverse;
        white-space: nowrap;
        overflow: hidden;
        text-align: center;
        position: relative;
        display: inline-block;
        --count: 12;

        &::after {
          content: "";
          width: 12px;
          height: 2px;
          position: absolute;
          bottom: 0;
          right: 0;
          background-color: gray;
          animation: cursor 2s linear infinite;
        }
      }
      .socialAccount {
        margin: 10px 0px;
        font-size: 16px;
        position: relative;
        color: #1171ee;
        &::before {
          .dottedLine;
          left: 0;
          bottom: -4px;
        }
        &::after {
          .dottedLine;
          right: 0;
          bottom: -4px;
          position: absolute;
        }
      }
      .relation {
        display: flex;
        justify-content: space-between;
        a {
          font-size: 30px;
        }
      }
    }
  }
  .neir-tag {
    padding: 5px;
    .el-tag {
      text-align: center;
      margin: 5px;
      cursor: pointer;
    }
  }
}
@keyframes typing {
  0% {
    width: 0;
  }

  100% {
    width: calc(var(--count) * 12px);
  }
}
@keyframes cursor {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>