<template>
  <!-- <div class="content"> -->
  <div>
    <div class="ct-box">
      <div class="article"
           v-for="(item,index) in articleList"
           :key="index">
        <div class="box1">
          <div class="ac-cover">
            <img :src="item.articImg"
                 alt="文章图片"
                 class="animate__animated animate__zoomIn">
          </div>
          <div class="ac-content">
            <p class="thetitle">
              <span v-show="item.top">置顶</span>
              {{item.articTitle}}
            </p>
            <p class="description">
              {{item.articContent}}
            </p>
          </div>
        </div>
      </div>
    </div>
    <el-divider>没有更多文章了~标签👌</el-divider>
  </div>
  <!-- </div> -->
</template>

<script>

export default {
  data() {
    return {
      articleList: [
        {
          articImg: require('./images/aboutbg.png'),
          top: 1,
          articTitle: '博客相关信息介绍',
          articContent: ' 介绍了博客所运用的技术栈，以及现阶段存在的一些问题，以及日后的优化方向、准备添加的新功能的主要概述'
        }, {
          articImg: require('./images/aboutbg.png'),
          top: 0,
          articTitle: '博客相关信息介绍',
          articContent: ' 介绍了博客所运用的技术栈，以及现阶段存在的一些问题，以及日后的优化方向、准备添加的新功能的主要概述'
        }, {
          articImg: require('./images/aboutbg.png'),
          top: 0,
          articTitle: '博客相关信息介绍',
          articContent: ' 介绍了博客所运用的技术栈，以及现阶段存在的一些问题，以及日后的优化方向、准备添加的新功能的主要概述'
        }, {
          articImg: require('./images/aboutbg.png'),
          top: 0,
          articTitle: '博客相关信息介绍',
          articContent: ' 介绍了博客所运用的技术栈，以及现阶段存在的一些问题，以及日后的优化方向、准备添加的新功能的主要概述'
        },
        {
          articImg: require('./images/aboutbg.png'),
          top: 0,
          articTitle: '博客相关信息介绍',
          articContent: ' 介绍了博客所运用的技术栈，以及现阶段存在的一些问题，以及日后的优化方向、准备添加的新功能的主要概述'
        },
        {
          articImg: require('./images/aboutbg.png'),
          top: 0,
          articTitle: '博客相关信息介绍',
          articContent: ' 介绍了博客所运用的技术栈，以及现阶段存在的一些问题，以及日后的优化方向、准备添加的新功能的主要概述'
        },
        {
          articImg: require('./images/aboutbg.png'),
          top: 0,
          articTitle: '博客相关信息介绍',
          articContent: ' 介绍了博客所运用的技术栈，以及现阶段存在的一些问题，以及日后的优化方向、准备添加的新功能的主要概述'
        },
        {
          articImg: require('./images/aboutbg.png'),
          top: 0,
          articTitle: '博客相关信息介绍',
          articContent: ' 介绍了博客所运用的技术栈，以及现阶段存在的一些问题，以及日后的优化方向、准备添加的新功能的主要概述'
        }

      ],
      selBoolean: false
    }
  },
  mounted() {
    //骨架屏测试
    setTimeout(() => {
      this.selBoolean = true
    }, 2000);
  },
}
</script>

<style lang="less" scoped>
.ct-box {
  .article {
    .box1 {
      display: flex;
      background-color: #fff;
      border-radius: 6px;
      overflow: hidden;
      margin-bottom: 15px;
      transition: all 0.3s ease 0s;
      cursor: pointer;
      .ac-cover {
        width: 35%;
        height: 150px;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      &:hover {
        transform: translateY(-5px);
        box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.1);
      }
      .ac-content {
        display: flex;
        flex: 1 1 0%;
        flex-direction: column;
        padding: 10px;
        .thetitle {
          width: 90%;
          font-size: 18px;
        }
        span {
          background-image: -webkit-linear-gradient(
            0deg,
            #3ca5f6,
            #a86af9
          ) !important;
          border-radius: 0 6px 0 6px;
          color: #fff;
          display: inline-block;
          font-size: 12px;
          font-weight: 400;
          height: 20px;
          line-height: 20px;
          padding: 0 6px;
        }
        .description {
          color: #909399;
          margin-top: 6px;
        }
      }
    }
  }
}
/deep/ .el-divider__text {
  background-color: #f5f5f5;
}
</style> 