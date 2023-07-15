<template>
  <div class="content">
    <div class="article">
      <div class="ac-cover">
        <img src="./images/aboutbg.png"
             alt="">
      </div>
      <div class="ac-content">
        <p class="thetitle">
          <span>置顶</span>
          博客相关信息介绍
        </p>
        <p class="description">
          介绍了博客所运用的技术栈，以及现阶段存在的一些问题，以及日后的优化方向、准备添加的新功能的主要概述
        </p>
      </div>

    </div>
    <div class="article">
      <div class="ac-cover">
        <img src="./images/aboutbg.png"
             alt="">
      </div>
      <div class="ac-content">
        <p class="thetitle">
          <a-tag>置顶</a-tag>
          博客相关信息介绍
        </p>
        <p class="description">
          介绍了博客所运用的技术栈，以及现阶段存在的一些问题，以及日后的优化方向、准备添加的新功能的主要概述
        </p>
      </div>

    </div>
    <div class="article">
      <div class="ac-cover">
        <img src="./images/aboutbg.png"
             alt="">
      </div>
      <div class="ac-content">
        <p class="thetitle">
          <a-tag>置顶</a-tag>
          博客相关信息介绍
        </p>
        <p class="description">
          介绍了博客所运用的技术栈，以及现阶段存在的一些问题，以及日后的优化方向、准备添加的新功能的主要概述
        </p>
      </div>
    </div>
    <div class="article">
      <div class="ac-cover">
        <img src="./images/aboutbg.png"
             alt="">
      </div>
      <div class="ac-content">
        <p class="thetitle">
          <a-tag>置顶</a-tag>
          博客相关信息介绍
        </p>
        <p class="description">
          介绍了博客所运用的技术栈，以及现阶段存在的一些问题，以及日后的优化方向、准备添加的新功能的主要概述
        </p>
      </div>
    </div>
    <div class="article">
      <div class="ac-cover">
        <img src="./images/aboutbg.png"
             alt="">
      </div>
      <div class="ac-content">
        <p class="thetitle">
          <a-tag>置顶</a-tag>
          博客相关信息介绍
        </p>
        <p class="description">
          介绍了博客所运用的技术栈，以及现阶段存在的一些问题，以及日后的优化方向、准备添加的新功能的主要概述
        </p>
      </div>
    </div>
    <div class="article">
      <div class="ac-cover">
        <img src="./images/aboutbg.png"
             alt="">
      </div>
      <div class="ac-content">
        <p class="thetitle">
          <a-tag>置顶</a-tag>
          博客相关信息介绍
        </p>
        <p class="description">
          介绍了博客所运用的技术栈，以及现阶段存在的一些问题，以及日后的优化方向、准备添加的新功能的主要概述
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.content {
  width: calc(100% - 285px);
  margin-right: 25px;
  .article {
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
</style>