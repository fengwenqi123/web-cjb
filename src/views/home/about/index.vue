<template>
  <div
    id="anchor-1"
    class="container"
  >
    <ititle :title="title" />
    <div
      class="main"
      data-aos="fade-up"
    >
      <div class="img">
        <img
          :src="content[active].img"
          alt="关于我们"
        >
      </div>
      <div class="value">
        <p>浙江船家宝科技有限公司</p>
        <div class="text">
          {{ content[active].value }}
        </div>
      </div>
      <div class="bar">
        <ul>
          <li
            v-for="(item,index) in content"
            :key="index"
            :class="[active===index?'activeLi':'']"
            @click="check(index)"
          >
            <div class="item">
              {{ item.label }}
            </div>
          </li>
        </ul>
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
      title: '关于我们',
      active: 0,
      content: [
        {
          img: require('@/assets/img/about.png'),
          label: '公司简介',
          value: ' 船家宝是一家专注于内河航运移动互联网应用、船舶信息服务、航运物流和港航大数据分析为核心的互联网公司。'
        },
        {
          img: require('@/assets/img/about.png'),
          label: '相关服务',
          value: '船佳宝是一款连接船舶、航运公司、货主、船代、货代、船员的移动互联网产品，重点致力于为用户提供航运信息、船舶位置查寻、水运物流服务、航运金融保险等相关服务。'
        },
        {
          img: require('@/assets/img/about.png'),
          label: '价值观',
          value: '船佳宝始终本着“客户第一、团队第二、诚信和谐、激情乐观”的核心价值观，不断探索和发展，努力实现船佳宝让航运生活更美好的发展愿景。'
        }
      ]
    }
  },
  methods: {
    check(index) {
      this.active = index
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  padding-top: 128px;
  padding-bottom: 160px;
  .main {
    width: 1200px;
    margin: 0 auto;
    margin-top: 108px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .img {
      width: 406px;
      height: 240px;
      background: #1890ff;
      img {
        width: 100%;
        height: 100%;
        margin: 22px 0 0 22px;
      }
    }
    .value {
      width: 336px;
      p {
        font-size: 20px;
        font-family: PingFang SC;
        font-weight: 500;
        color: rgba(51, 51, 51, 1);
      }
      .text {
        margin-top: 56px;
        font-size: 16px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: rgba(51, 51, 51, 1);
        letter-spacing: 1px;
        line-height: 22px;
      }
    }
    .bar {
      ul {
        li {
          cursor: pointer;
          width: 150px;
          height: 90px;
          background: rgba(78, 150, 218, 0.02);
          display: flex;
          justify-content: center;
          align-items: center;
          .item {
            font-size: 18px;
            font-family: PingFang SC;
            font-weight: 500;
            color: rgba(24, 144, 255, 1);
            letter-spacing: 2px;
          }
        }
        .activeLi {
          background: rgba(24, 144, 255, 0.05);
        }
      }
    }
  }
}
</style>
