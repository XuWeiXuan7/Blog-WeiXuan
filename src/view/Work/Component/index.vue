<template>
  <div class="workChilden">
    <div class="workCont"
         v-for="(item,index) in workList"
         :key="index"
         :style="'background:url'+'('+item.url+')'+'center center/cover no-repeat'">
      <a href="#">
        <p class="title">仿网易云音乐</p>
        <p class="description">基于 React + redux 实现的仿网易云音乐，基本功能已实现</p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'workChilden',
  data() {
    return {
      workList: [
        { url: 'https://yimiciji.top/Fq4dHnPHvbi16kfCu-a-4IolcXEF', title: '网易云音乐', description: '基于 React + redux 实现的仿网易云音乐，基本功能已实现' },
        { url: 'https://yimiciji.top/Fv1qVzxMbsOgtJEwmNysDHz5mwWq', title: '小兔鲜儿购物网站', description: '基于 vite 构建，采用 Vue3 + TS 进行开发' },
        { url: 'https://yimiciji.top/FjVI5G5zA_MC5U1gy37Dw8HfIlsm', title: 'koa 练习项目', description: '基于 React + redux 实现的仿网易云音乐，基本功能已实现' },
        { url: 'https://yimiciji.top/FgdQWvW2zQJbQFkBo0Ryvdoii0dJ', title: '博客后台管理系统', description: '基于 Vue3 + TS + Element-plus 进行开发，实现了本站前台数据管理系统 (持续维护中，更多新功能，敬请期待 ...)' },
        { url: 'https://yimiciji.top/FkBO9QGQljNfo47MH0sfX7_UISJ1', title: '博客前台', description: '基于 React + TS + Antd 开发 (持续维护中，更多新功能，敬请期待 ...)' },
        { url: 'https://yimiciji.top/FioJt7ISDwNsrr7ymXMLkjUVgF34', title: '博客后端', description: '基于 Node.js + Express(后期采用 Nest 重写) + MySql 实现  (持续维护中，更多新功能，敬请期待 ...)' }
      ]
    }
  }
}
</script>

<style lang='less' scoped>
.workChilden {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  border-radius: 6px;
  .workCont {
    cursor: pointer;
    position: relative;
    width: 49%;
    height: 250px;
    border-radius: 10px;
    z-index: 1;
    color: rgb(255, 255, 255);
    padding: 0px 10px;
    background: url(https://yimiciji.top/Fq4dHnPHvbi16kfCu-a-4IolcXEF) center
      center / cover no-repeat;
    border: 1px solid rgb(238, 238, 238);
    transition: all 0.2s ease-in 0s;
    overflow: hidden;
    margin-bottom: 2%;
    &:hover {
      transform: scale(0.95);
      &::before {
        opacity: 1;
      }
    }
    &::before {
      position: absolute;
      inset: 0px;
      z-index: -1;
      content: "";
      transition: all 0.2s ease 0s;
      background-color: rgba(0, 0, 0, 0.5);
      opacity: 0;
    }
    &:hover {
      .title {
        opacity: 1;
        transform: translateY(50%);
      }
      .description {
        opacity: 1;
        bottom: -30px;
      }
    }
    a {
      display: flex;
      flex-direction: column;
      -webkit-box-pack: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      text-align: center;
      color: rgb(255, 255, 255);
      .title {
        font-size: 26px;
        font-weight: 700;
        transform: translateY(100%);
        margin-bottom: 10px;
        opacity: 0;
        transition: all 0.3s ease 0s;
      }
      .description {
        position: relative;
        font-size: 16px;
        transition: all 0.3s ease 0s;
        bottom: -50%;
        opacity: 0;
      }
    }
  }
}
</style>