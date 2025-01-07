<script setup></script>

<template>
  <div class="container">
    <div class="project">
      <div class="project-info">
        <div class="header">
          <!-- slot these later -->
          <div class="title">skills dojo.</div>
          <div class="subtitle">role : lead frontend developer</div>
        </div>
        <div class="body">
          web application which leverages AWS Bedrock AI to fulfill various employee training roles.
          These roles include Ask an Expert, Customer Roleplay, and Flashcards which all utilize
          generative AI to give employees a powerful learning tool and experience.
        </div>
      </div>
      <div class="img-placeholder"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  height: 600px;
  justify-content: center;
  align-items: center;

  .project {
    display: flex;
    gap: 100px;
    justify-content: center;
    align-items: flex-start;

    .img-placeholder {
      width: 670px;
      height: 339px;
      background-color: black;
    }

    .project-info {
      display: flex;
      flex-direction: column;
      gap: 20px;

      .header {
        .title {
          font-family: 'Nova Cut';
          font-size: 54px;
          font-weight: 700;
          color: #444444;
        }

        .subtitle {
          font-family: 'Space Mono';
          font-size: 20px;
          color: #7a7a7a;
        }
      }

      .body {
        width: 367px;
        font-family: 'Space Mono';
        font-size: 20px;
        color: #7a7a7a;
      }
    }
  }
}
</style>
