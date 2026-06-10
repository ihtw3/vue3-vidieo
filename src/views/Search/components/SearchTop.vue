<template>
  <form action="/">
    <van-search
      v-model="value"
      show-action
      placeholder="请输入搜索关键词"
    />
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Toast, showToast } from 'vant'

const value = ref('')

showToast({
  message: '非常抱歉！！',
  position: 'top',
});
</script>

<style scoped>
::v-deep .van-search__action {
  color: #fb72a6;
}
</style>