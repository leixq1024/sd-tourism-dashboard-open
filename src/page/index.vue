<template>
  <main class="container">
    <!-- 顶部标题 -->
    <CHeader />
    <!-- 地图部分 -->
    <CMap />
    <!-- 左侧数据面板 -->
    <LeftPanel />
    <!-- 右侧数据面板 -->
    <RightPanel />
    <!-- 底部组件 -->
    <CFooter />
  </main>
</template>

<script setup lang="ts">
import CHeader from '@/components/CHeader.vue'
import CMap from '@/components/CMap.vue'
import LeftPanel from '@/components/leftPanel.vue'
import RightPanel from '@/components/rightPanel.vue'
import CFooter from '@/components/CFooter.vue'
import { onMounted } from 'vue'
import autofit from 'autofit.js'

onMounted(() => {
  autofit.init({
    el: 'body',
    dh: 1080,
    dw: 1920,
    resize: true
  })
})
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  width: 100%;
  height: 100%;
  background: url('@/assets/images/背景.png') no-repeat center center;
  background-size: 100% 100%;
}
</style>
