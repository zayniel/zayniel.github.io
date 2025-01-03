<script setup></script>

<template>
  <div class="project-card">
    <div class="project-image">
      <slot />
    </div>
    <!--
  <div class="exit-to">
  <img
    width="77px"
    src="../assets/exit-to-app.svg" 
    alt="ExitTo" />
    </div>
  --></div>
</template>

<style lang="scss" scoped>
.project-card {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  :hover {
    transform: scale(1.2);
  }

  .project-image {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 300px;
    background: #e6e6e6;
    cursor: pointer;
    transition: transform 0.4s ease-in-out;

    :hover {
      transform: scale(1);
    }
  }

  .exit-to {
    position: relative;
    right: 30px;
    bottom: 38px;
    background-color: white;
  }
}
</style>
