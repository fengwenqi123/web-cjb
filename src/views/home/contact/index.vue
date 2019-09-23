<template>
  <div
    id="anchor-3"
    class="container"
  >
    <ititle :title="title" />
    <div class="main">
      <p
        v-for="(item,index) in list"
        :key="index"
        class="p1"
        data-aos="fade-up"
      >
        <span>{{ item.label }}</span>
        <span>{{ item.value }}</span>
      </p>
      <div
        class="code"
        data-aos="fade-up"
      >
        <div class="app">
          <div class="img">
            <img
              src="../../../assets/img/ewm.png"
              alt=""
            >
          </div>
          <p>扫一扫下载船佳宝APP</p>
        </div>
        <div class="gzh">
          <div class="img">
            <img
              src="../../../assets/img/gzh.png"
              alt=""
            >
          </div>
          <p>扫一扫关注微信公众号或微信搜索“船佳宝”</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ititle from '../title'
export default {
  components: {
    ititle
  },
  data() {
    return {
      title: '联系我们',
      list: [
        {
          label: '联系电话：',
          value: '400-826-0509'
        },
        {
          label: '官方微信：',
          value: 'cjb13516877489'
        },
        {
          label: '公司邮箱：',
          value: '1007557735@qq.com'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  padding-bottom: 108px;
  .main {
    padding-top: 50px;
    .p1 {
      text-align: center;
      margin-top: 28px;
      span {
        display: inline-block;
        font-size: 18px;
        font-weight: 400;
        color: rgba(51, 51, 51, 1);
      }
      span:nth-child(2) {
        font-size: 24px;
      }
    }
    .code {
      width: 550px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 80px auto;
      .app,
      .gzh {
        width: 210px;
        height: 170px;
        padding: 0 10px;
        text-align: center;
        .img {
          img {
            width: 170px;
            height: 170px;
          }
        }
        p {
          font-size: 18px;
          font-weight: bold;
          color: rgba(24, 144, 255, 1);
          line-height: 30px;
        }
      }
    }
  }
}
</style>
