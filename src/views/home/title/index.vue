<template>
  <div
    class="content"
    data-aos="fade-up"
    data-aos-once="true"
  >
    <p>{{ title }}</p>
    <div class="line"></div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data() {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  text-align: center;
  p {
    height: 30px;
    line-height: 30px;
    font-size: 30px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: rgba(24, 144, 255, 1);
  }
  .line {
    width: 50px;
    height: 1px;
    border-top: 3px solid #1890ff;
    margin: 32px auto;
  }
}
</style>
