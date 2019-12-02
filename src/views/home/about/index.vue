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
        <p>浙江亿船信息服务有限公司</p>
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
          value: '浙江亿船信息服务有限公司是一家专业从事智慧物联、软件开发、移动互联网应用和大数据分析的高科技企业。公司正积极致力于成为交通、港航、海事、物流等领域具有移动互联软件开发和大数据分析应用的专业化系统解决方案提供商。'
        },
        {
          img: require('@/assets/img/about.png'),
          label: '相关服务',
          value: '在软件开发、互联网应用、物联网应用、大数据应用等方面有着拥有非常丰富的研发应用经验，能准确有效的地获取到客户的需求，并通过自己的专业技能提出解决方案，为客户开发真正需要的产品。我们多次为政府机关及多家企事业单位提供智慧港航、智能交通、智慧海事、互联网应用、水运物流等领域技术支持和服务，得到了广大客户的认可。'
        },
        {
          img: require('@/assets/img/about.png'),
          label: '价值观',
          value: '面对市场的激烈竞争，我们深知责任和拼搏是我们事业成功的根本。“路漫漫其修远兮”，我们始终本着“以客户为中心”的指导思想，努力为亿船的发展不断探索。我们的努力，加上您的信任，定会让这支队伍成长为互联网界一颗璀璨的明珠。'
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
