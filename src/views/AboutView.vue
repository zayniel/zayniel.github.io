<script setup></script>

<template>
  <div class="view">
    <!--
    <div class="title-container">
      <div class="title">about me.</div>
    </div>
    -->
    <div class="construction-container">
      <div class="title">under construction</div>
      <div class="subtitle">check back later!</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@media only screen and (min-width: 1370px) {
  .view {
    display: flex;
    justify-content: center;
    align-items: center;

    .title {
      position: relative;
      display: flex;
      align-items: center;
      font-family: 'Nova Cut';
      font-size: 52px;
      font-weight: 700;
      color: #444444;
    }

    .construction-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 500px;

      .title {
        position: relative;
        display: flex;
        align-items: center;
        font-family: 'Nova Cut';
        font-size: 50px;
        font-weight: 700;
        color: #444444;
      }

      .subtitle {
        font-family: 'Space Mono';
        font-size: 30px;
        color: #4a4a4a;
      }
    }
  }
}

@media only screen and (max-width: 1370px) {
  .view {
    display: flex;
    justify-content: center;
    align-items: center;

    .title {
      font-family: 'Nova Cut';
      font-size: 25px;
      font-weight: 700;
      color: #444444;
    }

    .construction-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 500px;

      .title {
        font-family: 'Nova Cut';
        font-size: 25px;
        font-weight: 700;
        color: #444444;
      }

      .subtitle {
        font-family: 'Space Mono';
        font-size: 20px;
        color: #4a4a4a;
      }
    }
  }
}
</style>
