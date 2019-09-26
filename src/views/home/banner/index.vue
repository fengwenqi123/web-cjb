<template>
  <div
    id="anchor-0"
    class="container"
  >
    <div class="header">
      <div class="middle">
        <div
          class="title"
          data-aos="fade-down"
        >
          <div class="left">
            <div class="icon" />
            <div class="font">
              <p>船佳宝</p>
              <span>www.cjbe88.com</span>
            </div>
          </div>
          <div class="right">
            <ul>
              <li
                v-for="(item,index) in nav"
                :key="index"
              >
                <div class="item">
                  <a
                    href="javascript:void(0)"
                    @click="goAnchor('#anchor-'+index)"
                  >
                    {{ item.label }}
                  </a>

                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="main">
          <div
            class="left"
            data-aos="fade-right"
          >
            <div class="phone2" />
            <div class="phone1" />
          </div>
          <div
            class="right"
            data-aos="fade-left"
          >
            <div class="font">
              <div class="font1" />
              <div class="font2" />
            </div>
            <div class="download">
              <div class="download_left">
                <div class="ewm" />
                <p>扫码下载船佳宝APP</p>
              </div>
              <div class="download_right">
                <div
                  class="android"
                  @click="download"
                >
                  <svg-icon
                    class="svg"
                    icon-class="androids"
                  />
                  android版本下载
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      nav: [
        {
          label: '首页'
        }, {
          label: '关于我们'
        }, {
          label: '产品服务'
        }, {
          label: '联系我们'
        }
      ]
    }
  },
  methods: {
    goAnchor(selector) {
      var anchor = document.querySelector(selector)
      console.log(anchor)
      window.scrollTo(0, anchor.offsetTop)
    },
    download() {
      window.open('https://cjbe88.com/cjbapk/app-release.apk')
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
}
.header {
  height: 900px;
  background: url("../../../assets/img/banner.png") no-repeat;
  background-position: center;
  background-size: 2000px 900px;
  .middle {
    width: 1124px;
    margin: 0 auto;
    height: 900px;
    .title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 14px;
      .left {
        display: flex;
        align-items: center;
        .icon {
          width: 77px;
          height: 77px;
          background: url("../../../assets/img/cjb_icon.png");
          margin-right: 10px;
        }
        .font {
          p {
            height: 35px;
            font-size: 36px;
            font-family: DFPSongW9-GB;
            font-weight: 400;
            color: rgba(255, 255, 255, 1);
            margin-bottom: 10px;
          }
          span {
            height: 17px;
            font-size: 15px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: rgba(255, 255, 255, 1);
          }
        }
      }
      .right {
        ul {
          display: flex;
          justify-content: space-between;
          li {
            .item {
              cursor: pointer;
              padding: 0 30px;
              height: 22px;
              font-size: 22px;
              font-family: Microsoft YaHei;
              font-weight: 400;
              a {
                color: rgba(255, 255, 255, 1);
              }
            }
          }
        }
      }
    }
    .main {
      margin-top: 142px;
      display: flex;
      align-items: flex-end;
      margin-left: 200px;
      .left {
        width: 338px;
        display: flex;
        align-items: flex-end;
        .phone1 {
          margin-left: -460px;
          width: 255px;
          height: 521px;
          background: url("../../../assets/img/phone1.png");
          background-size: 100% 100%;
        }
        .phone2 {
          width: 290px;
          height: 595px;
          background: url("../../../assets/img/phone2.png");
          background-size: 100% 100%;
        }
      }
      .right {
        .font {
          .font1 {
            width: 406px;
            height: 100px;
            background: url("../../../assets/img/font1.png");
            background-size: 100% 100%;
          }
          .font2 {
            margin-left: 301px;
            width: 252px;
            height: 100px;
            background: url("../../../assets/img/font2.png");
            background-size: 100% 100%;
          }
        }
        .download {
          margin-top: 32px;
          display: flex;
          align-items: flex-end;
          .download_left {
            margin-right: 40px;
            .ewm {
              width: 170px;
              height: 170px;
              background: url("../../../assets/img/ewm.png");
              background-size: 100% 100%;
            }
            p {
              margin-top: 10px;
              height: 18px;
              font-size: 18px;
              font-family: Microsoft YaHei;
              font-weight: 400;
              color: rgba(255, 255, 255, 1);
            }
          }
          .download_right {
            .android {
              width: 242px;
              height: 72px;
              font-size: 24px;
              font-family: Microsoft YaHei;
              font-weight: bold;
              color: rgba(255, 255, 255, 1);
              border: 4px solid #fff;
              border-radius: 4px;
              line-height: 64px;
              text-align: center;
              cursor: pointer;
              .svg {
                font-size: 26px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
