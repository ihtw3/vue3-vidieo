<template>
  <van-tabs v-model:active="activeName">
    <van-tab title="推荐" name="recommend">
      <VideoRecommend />
    </van-tab>
    <van-tab title="评论" name="comment">
      <VideoComment />
    </van-tab>
  </van-tabs>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import VideoRecommend from '@/views/Video/components/video-recommend.vue'
import VideoComment from '@/views/Video/components/video-comment.vue'
const activeName = ref('recommend')
</script>