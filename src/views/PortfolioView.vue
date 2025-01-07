<script setup>
import PortfolioProject from '../components/PortfolioProject.vue'
</script>

<template>
  <div class="view">
    <PortfolioProject />
    <PortfolioProject />
  </div>
</template>

<style lang="scss" scoped>
.view {
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
  align-items: center;
}
</style>
