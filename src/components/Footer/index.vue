<template>
  <div class="footer">
    <div class="ft-copy">
      Copyright © 2022
      <a href="#"
         target="_blank">伟轩</a>
    </div>
    <p>本站由<img src="./images/huawei.svg"
           alt="">提供服务支持</p>
    <p><a href="#"
         target="_blank">鄂ICPXXXXXXXXXXXX</a></p>
    <p>本站由<a href="https://cn.vuejs.org/"
         target="_blank">Vue</a>+ <a href="https://2x.antdv.com/"
         target="_blank">antd</a>强力驱动</p>
    <p>后端采用<a href="https://nodejs.org/en"
         target="_blank">Node.js</a>+<a href="https://www.mysql.com/"
         target="_blank">Mysql</a>数据库</p>
    <p>本站以坚持运行xx天xx小时xx分xx秒</p>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.footer {
  position: relative;
  bottom: 0px;
  height: 140px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.05) 0 1px 20px 1px;
  .ft-copy {
    a {
      color: #6294d4;
      &:hover {
        color: #0d56b6;
      }
    }
  }
  p {
    margin-bottom: 0px;
    img {
      width: 50px;
      margin: 0px 5px;
    }
    a {
      color: #1171ee;
    }
  }
}
</style>