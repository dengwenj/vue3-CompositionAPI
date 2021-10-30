<template>
  <Demo @dwj="dwj" name="xiaodeng" :age="21">
    <template v-slot:xd>
      <span>setup的参数</span>
    </template>
  </Demo>
</template>

<script>
import Demo from './components/Demo'
export default {
  setup(props) {
    function dwj(time) {
      console.log(time) // 1120
    }

    return {
      dwj,
    }
  },
  components: {
    Demo,
  },
}
</script>

<style></style>
