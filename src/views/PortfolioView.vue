<script setup>
import PortfolioProject from '../components/PortfolioProject.vue'
</script>

<template>
  <div class="view">
    <PortfolioProject>
      <template v-slot:project-title>skills dojo.</template>
      <template v-slot:project-subtitle>lead frontend developer</template>
      <template v-slot:project-body
        >web application which leverages aws bedrock ai to fulfill various employee training roles.
        these roles include ask an expert, customer roleplay, and flashcards which all utilize
        generative ai to give employees a powerful learning tool and experience.</template
      >
      <template v-slot:project-content>
        <video controls width="100%">
          <source src="../assets/SkillsDojoDemo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </template>
      <template v-slot:link class="external-link">
        <a href="https://skillsdojo.24g.com" target="_blank">learn more &#x2197;</a>
      </template>
    </PortfolioProject>
    <div class="spacer" id="rse-recruitment" />
    <PortfolioProject>
      <template v-slot:project-title>rse recruitment.</template>
      <template v-slot:project-subtitle>designer, lone developer</template>
      <template v-slot:project-body>
        informational website for the robotic systems enterprise organization at michigan
        technological university. it's purpose is to give prospective student members information
        about the enterprise. the site is currently in use by rse as an official michigan tech
        hosted website! go huskies!
      </template>
      <template v-slot:project-content>
        <img src="../assets/rse.jpg" width="100%" />
      </template>
      <template v-slot:link class="external-link">
        <a href="https://rse-mtu.vercel.app" target="_blank">check it out &#x2197;</a>
      </template>
    </PortfolioProject>
    <div class="spacer" id="nrg-reducer" />
    <PortfolioProject>
      <template v-slot:project-title>nrg reducer.</template>
      <template v-slot:project-subtitle>frontend developer</template>
      <template v-slot:project-body>
        web application for pacific gas & electric customers that allows them to visualize their
        heat and electric consumption through readable graphical representations. the app shows
        trends and gives advice to the user on how to cut down their energy consumption.
      </template>
      <template v-slot:project-content>
        <img src="../assets/nrg-reducer.png" width="100%" />
      </template>
    </PortfolioProject>
  </div>
  <!-- remove once mobile is ready -->
  <div class="construction-view">
    <div class="construction-container">
      <div class="title">mobile under construction</div>
      <div class="subtitle">check it out on desktop!</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@media only screen and (min-width: 1370px) {
  .view {
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    align-items: center;

    .spacer {
      position: relative;
      top: -100px;
      height: 0;
    }

    .external-link {
      a {
        text-decoration: none;
        color: #444444;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  .construction-view {
    display: none;
  }
}

@media only screen and (max-width: 1370px) {
  .view {
    display: none;
  }

  .construction-view {
    display: flex;
    justify-content: center;
    align-items: center;

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
