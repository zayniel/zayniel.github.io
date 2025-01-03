<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeaderComponent from './components/HeaderComponent.vue';
</script>

<template>
  <div class="page">
  <HeaderComponent />
  <RouterView v-slot="{ Component }">
    <component :is="Component" />
  </RouterView>
  </div>
</template>

<style scoped>
.page {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
}
</style>
