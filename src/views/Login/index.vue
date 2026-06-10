<template>
  <LoginHeader/>
  <LoginMain/>
</template>

<script setup>

import LoginMain from '@/views/Login/components/Login-Main.vue'
import LoginHeader from '@/views/Login/components/Login-header.vue';
</script>

<style scoped>
:global(body) {
  height: 100vh;
  background: #f4f4f4;
}
</style>