<template>
  <div
    id="anchor-2"
    class="container"
  >
    <ititle :title="title" />
    <div
      class="main"
      data-aos="fade-up"
    >
      <ul>
        <li
          v-for="(item,index) in list"
          :key="index"
          :class="[active===index?'activeLi':'']"
          @mouseenter="enter(index)"
          @mouseleave="leave()"
        >
          <div class="item">
            <img
              v-if="active===index"
              :src="item.clickImg"
              :alt="item.name"
            >
            <img
              v-else
              :src="item.img"
              :alt="item.name"
            >
          </div>
          <p>{{ item.name }}</p>
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
      title: '产品服务',
      list: [
        {
          name: '查船',
          img: require('@/assets/img/chachuan.png'),
          clickImg: require('@/assets/img/chachuan1.png')
        },
        {
          name: '保险',
          img: require('@/assets/img/baoxian.png'),
          clickImg: require('@/assets/img/baoxian1.png')
        },

        {
          name: '物流',
          img: require('@/assets/img/wuliu.png'),
          clickImg: require('@/assets/img/wuliu1.png')
        },
        {
          name: '补油',
          img: require('@/assets/img/buji.png'),
          clickImg: require('@/assets/img/buji1.png')
        },
        {
          name: '排污',
          img: require('@/assets/img/paiwu.png'),
          clickImg: require('@/assets/img/paiwu1.png')
        },
        {
          name: '快递',
          img: require('@/assets/img/kuaidi.png'),
          clickImg: require('@/assets/img/kuaidi1.png')
        }
      ],
      active: null
    }
  },
  methods: {
    enter(index) {
      this.active = index
    },
    leave() {
      this.active = null
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  background: rgba(245, 247, 250, 1);
  padding-top: 128px;
  padding-bottom: 100px;
  .main {
    ul {
      width: 960px;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      margin: 0 auto;
      li {
        width: 144px;
        margin-top: 76px;
        .item {
          width: 144px;
          height: 144px;
          background: rgba(255, 255, 255, 1);
          // box-shadow: 0px 0px 10px 0px rgba(24, 144, 255, 1);
          border-radius: 50%;
          line-height: 144px;
          text-align: center;
          img {
            width: 70px;
          }
        }
        p {
          margin-top: 30px;
          font-size: 16px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: rgba(51, 51, 51, 1);
          text-align: center;
        }
      }
      li:nth-child(2),
      li:nth-child(5) {
        margin: 76px 262px 0 262px;
      }
      .activeLi {
        .item {
          background: #1890ff;
          box-shadow: 0px 0px 10px 0px rgba(24, 144, 255, 1);
        }
      }
    }
  }
}
</style>
