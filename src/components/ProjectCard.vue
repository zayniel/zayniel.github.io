<script setup></script>

<template>
  <div class="container">
    <div class="project-title">
      <slot name="title"></slot>
    </div>
    <div class="project-card">
      <div class="project-image">
        <slot name="image"></slot>
      </div>
      <!--
  <div class="exit-to">
  <img
    width="77px"
    src="../assets/exit-to-app.svg" 
    alt="ExitTo" />
    </div>
  -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
}

.project-title {
  font-family: 'Space Mono';
  color: #444444;
  font-size: 20px;
}

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
