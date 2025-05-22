<script setup>
import PortfolioProject from '../components/PortfolioProject.vue'
</script>

<template>
  <div class="view">
    <PortfolioProject>
      <template v-slot:project-title>skills dojo.</template>
      <template v-slot:project-subtitle>lead frontend developer / full stack</template>
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
      <template v-slot:project-subtitle>designer / frontend developer</template>
      <template v-slot:project-body>
        informational website for the robotic systems enterprise organization at michigan
        technological university. it's purpose is to give prospective student members information
        about the enterprise. the site is currently in use by rse as an official michigan tech
        hosted website! go huskies!
      </template>
      <template v-slot:project-content>
        <img class="project-content" src="../assets/rse.jpg" width="100%" />
      </template>
      <template v-slot:link class="external-link">
        <a href="https://rse-mtu.vercel.app" target="_blank">check it out &#x2197;</a>
      </template>
    </PortfolioProject>
    <div class="spacer" id="nrg-reducer" />
    <PortfolioProject>
      <template v-slot:project-title>nrg reducer.</template>
      <template v-slot:project-subtitle>designer / full stack developer</template>
      <template v-slot:project-body>
        web application for pacific gas & electric customers that allows them to visualize their
        heat and electric consumption through readable graphical representations. the app shows
        trends and gives advice to the user on how to cut down their energy consumption.
      </template>
      <template v-slot:project-content>
        <img class="project-content" src="../assets/nrg-reducer.png" width="100%" />
      </template>
    </PortfolioProject>
    <div class="spacer" id="mtu-scheduler" />
    <PortfolioProject>
      <template v-slot:project-title>mtu course scheduler.</template>
      <template v-slot:project-subtitle>designer / developer / scrum master</template>
      <template v-slot:project-body
        >simplified class scheduling web application designed to match michigan technological
        universities theme. this app gives students a system that assists in the selection of
        courses depending on their current year and degree requirements.</template
      >
      <template v-slot:project-content>
        <video controls width="100%">
          <source src="../assets/course-scheduler.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </template>
    </PortfolioProject>
    <div class="spacer" id="yams-site" />
    <PortfolioProject>
      <template v-slot:project-title>yams.</template>
      <template v-slot:project-subtitle>designer / frontend developer</template>
      <template v-slot:project-body>
        yams is the name used for team creation by my friends and i in multiplayer video games. this
        website is intended as a way to log and show off our statistics as well as highlights of our
        favorite / most played characters in each game.
      </template>
      <template v-slot:project-content>
        <img class="project-content" src="../assets/yams.jpg" width="100%" />
      </template>
      <template v-slot:link class="external-link">
        <a href="https://yams-six.vercel.app" target="_blank">check it out &#x2197;</a>
      </template>
    </PortfolioProject>
    <div class="spacer" id="karma-plushies" />
    <PortfolioProject>
      <template v-slot:project-title>karma plushies.</template>
      <template v-slot:project-subtitle>designer / frontend developer</template>
      <template v-slot:project-body>
        website used to promote and sell my girlfriend's custom handmade plushies!
      </template>
      <template v-slot:project-content>
        <img class="project-content" src="../assets/karma-plushies.jpg" width="100%" />
      </template>
      <template v-slot:link class="external-link">
        <a href="https://karma-plushies.vercel.app" target="_blank">check it out &#x2197;</a>
      </template>
    </PortfolioProject>
  </div>
</template>

<style lang="scss" scoped>
// Desktop (default)
.view {
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  padding-bottom: 80px;
  margin-top: 24px;

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

  .project-content {
    box-shadow:
      rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
      rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  }
}

.construction-view {
  display: none;
}

// Mobile
@media only screen and (max-width: 1370px) {
  .view {
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding-top: 20px;
    padding-bottom: 90px;
  }
  /*
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
  */
}
</style>
