<template>
  <div class="container">
    <banner />
    <about />
    <service />
    <advantage />
    <contact />
    <foot />
  </div>
</template>

<script>
import banner from './banner'
import about from './about'
import service from './service'
import advantage from './advantage'
import contact from './contact'
import foot from './foot'
export default {
  components: {
    banner, about, service, advantage, contact, foot
  },
  data() {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 1920px;
}
</style>
