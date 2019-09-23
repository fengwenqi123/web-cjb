<template>
  <div class="container">
    <ititle :title="title" />
    <div class="main">
      <ul>
        <li data-aos="zoom-in-left">
          <div class="item">
            <div class="img">
              <img
                src="../../../assets/img/advantage_img1.png"
                alt=""
              >
            </div>
            <div class="val">
              <div class="title">
                查船服务
              </div>
              <div class="text">
                查询船舶信息、船舶航行轨迹
              </div>
            </div>

          </div>
        </li>
        <li data-aos="zoom-in-right">
          <div class="item">
            <div class="val">
              <div class="title">
                快递服务
              </div>
              <div class="text">
                安全寄递 保价护航
              </div>
            </div>
            <div class="img">
              <img
                src="../../../assets/img/advantage_img2.png"
                alt=""
              >
            </div>
          </div>
        </li>
        <li data-aos="zoom-in-left">
          <div class="item">
            <div class="img">
              <img
                src="../../../assets/img/advantage_img3.png"
                alt=""
              >
            </div>
            <div class="val">
              <div class="title">
                保险服务
              </div>
              <div class="text">
                轻松投保 安全可靠 快速理赔 性价比高
              </div>
            </div>

          </div>
        </li>
      </ul>
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
      title: '船家宝优势'
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  padding: 128px 0 186px 0;
  .main {
    ul {
      width: 624px;
      margin: 0 auto;
      li {
        margin-top: 86px;
        .item {
          display: flex;
          align-items: center;
          .img {
            margin-right: 60px;
            width: 312px;
            height: 236px;
            img {
              width: 312px;
              height: 236px;
            }
          }
          .val {
            width: 312px;
            .title {
              font-size: 24px;
              font-weight: 400;
              color: rgba(51, 51, 51, 1);
            }
            .text {
              margin-top: 44px;
              font-size: 16px;
              font-weight: 400;
              color: rgba(102, 102, 102, 1);
            }
          }
        }
      }
      li:nth-child(2) {
        .item {
          .img {
            margin-right: 0px;
          }
          .val {
            text-align: right;
            margin-right: 60px;
          }
        }
      }
    }
  }
}
</style>
