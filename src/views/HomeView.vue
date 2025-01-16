<script setup>
import ProjectCard from '../components/ProjectCard.vue'
</script>

<template>
  <div class="home-container">
    <div class="title-container">
      <div class="title">frontend developer.</div>
      <div class="subtitle">
        building modern and intuitive interfaces with a passion for design.
      </div>
      <div class="language-tags">
        <div class="tag color-1">html</div>
        <div class="tag color-2">css</div>
        <div class="tag color-3">react</div>
        <div class="tag color-1">javascript</div>
        <div class="tag color-2">vue</div>
      </div>
    </div>
    <div class="hero-container">
      <img src="../assets/hero-image.png" alt="Hero Image" class="hero-image" />
      <img src="../assets/ink-1.png" alt="Ink 1" class="ink-1" />
    </div>
  </div>
  <div class="latest-container">
    <div class="latest-title-container">
      <div class="latest-title">latest projects.</div>
      <router-link to="/portfolio" class="see-more">see more</router-link>
    </div>
    <div class="spacer" />
    <div class="project-cards">
      <router-link to="/portfolio">
        <ProjectCard>
          <template v-slot:title>skills dojo</template>
          <template v-slot:image>
            <img src="../assets/skills-dojo.png" alt="Project" />
          </template>
        </ProjectCard>
      </router-link>
      <router-link to="/portfolio#rse-recruitment">
        <ProjectCard>
          <template v-slot:title>rse recruitment</template>
          <template v-slot:image>
            <img width="220px" src="../assets/rse-logo.png" alt="Project" />
          </template>
        </ProjectCard>
      </router-link>
      <router-link to="/portfolio#nrg-reducer">
        <ProjectCard>
          <template v-slot:title>nrg reducer</template>
          <template v-slot:image>
            <img width="220px" src="../assets/pge-logo.png" alt="Project" />
          </template>
        </ProjectCard>
      </router-link>
    </div>
  </div>
  <!-- remove once mobile is ready 
  <div class="view">
    <div class="construction-container">
      <div class="title">mobile under construction</div>
      <div class="subtitle">check it out on desktop!</div>
    </div>
  </div>
  -->
</template>

<style lang="scss" scoped>
.home-container {
  display: flex;
  justify-content: center;
  align-items: center;

  .title-container {
    display: flex;
    flex-direction: column;
    gap: 30px;

    .title {
      font-family: 'Nova Cut';
      color: #444444;
      font-weight: 700;
      font-size: 54px;
      width: 480px;
    }

    .subtitle {
      font-family: 'Space Mono';
      color: #7a7a7a;
      font-size: 20px;
      width: 374px;
    }

    .language-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      width: 319px;
      cursor: default;

      .tag {
        color: white;
        font-family: 'Space Mono';
        font-size: 24px;
        padding: 8px 16px;
        border-radius: 8px;
        text-align: center;
        white-space: nowrap;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
        transition: background-color 0.3s ease;
      }

      .color-1 {
        background-color: #232323;
      }

      .color-2 {
        background-color: #353535;
      }

      .color-3 {
        background-color: #515151;
      }
    }
  }

  .hero-container {
    position: relative;
    overflow: hidden;
    // height: 600px;

    .hero-image {
      position: absolute;
      z-index: 2;
      top: 0;
      width: 506px;
    }

    .ink-1 {
      position: relative;
      z-index: 1;
      width: 650px;
    }
  }
}

// Desktop
@media only screen and (min-width: 1370px) {
  .hero-container {
    height: 600px;
  }

  .latest-container {
    display: flex;
    justify-content: center;
    // justify-content: space-around;
    height: 722px;
    // padding-left: 10rem;
    // padding-right: 10rem;
    overflow: hidden;
    position: relative;
    background-image: url('../assets/ink-2.png'), url('../assets/ink-2.png');
    background-position:
      left -300px center,
      right -300px center; /* Adjust based on image width */
    background-repeat: no-repeat;
    background-size: 634px auto; /* Adjust based on image size */

    .latest-title {
      font-family: 'Nova Cut';
      color: #444444;
      font-weight: bold;
      font-size: 50px;
      width: 480px;
    }

    .see-more {
      position: relative;
      right: 125px;
      font-family: 'Space Mono';
      color: #7a7a7a;
      font-size: 20px;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }

    .latest-title-container {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      top: 80px;
      height: 95px;
      line-height: 45px;
      z-index: 1;
    }

    .spacer {
      width: 650px;
    }

    .project-cards {
      position: absolute;
      display: flex;
      top: 250px;
      gap: 50px;

      a {
        text-decoration: none;
        color: #7a7a7a;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  .view {
    display: none;
  }
}

// Mobile
// Currently WIP so only show "under construction" message
@media only screen and (max-width: 1370px) {
  .home-container {
    flex-direction: column-reverse;
    overflow: hidden;
    gap: 30px;

    .title-container {
      max-width: 350px;
      position: relative;

      .title {
        font-size: 52px;
      }

      .subtitle {
        font-size: 19px;
      }
    }

    .hero-container {
      .hero-image {
        width: 300px;
      }

      .ink-1 {
        width: 320px;
      }
    }
  }

  .latest-container {
    gap: 20px;
    top: 40px;
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    .latest-title-container {
      display: flex;
      flex-direction: column;

      .latest-title {
        font-family: 'Nova Cut';
        color: #444444;
        font-weight: bold;
        font-size: 52px;
        max-width: 350px;
      }

      .see-more {
        position: relative;
        // right: 125px;
        font-family: 'Space Mono';
        color: #7a7a7a;
        font-size: 20px;
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }
    }

    .project-cards {
      display: flex;
      flex-direction: column;
      gap: 40px;
      margin-bottom: 50px;

      a {
        text-decoration: none;
        color: #7a7a7a;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  .view {
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
