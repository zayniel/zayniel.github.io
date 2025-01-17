<script setup></script>

<template>
  <div class="container">
    <div class="project">
      <div class="project-info">
        <div class="header">
          <div class="title">
            <slot name="project-title"></slot>
          </div>
          <div class="subtitle">
            <slot name="project-subtitle"></slot>
          </div>
        </div>
        <div class="body">
          <slot name="project-body"></slot>
        </div>
      </div>
      <div class="project-content-container">
        <div class="image-container">
          <slot name="project-content"></slot>
        </div>
        <div class="external-link">
          <slot name="link"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
// Desktop (default)
.container {
  display: flex;
  height: 550px;
  justify-content: center;
  align-items: center;

  .project {
    display: flex;
    gap: 60px;
    justify-content: center;

    .image-container {
      width: 700px;
    }

    .project-info {
      display: flex;
      flex-direction: column;
      gap: 20px;
      width: 450px;

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

    .project-content-container {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      align-self: flex-end;

      .external-link {
        font-family: 'Space Mono';
        color: #444444;
        font-size: 20px;
      }
    }
  }
}

// Mobile
@media only screen and (max-width: 1370px) {
  .container {
    display: flex;
    height: auto;

    .project {
      flex-direction: column;
      gap: 20px;
      max-width: 350px;

      .project-info {
        width: auto;

        .header {
          .title {
            font-size: 52px;
          }

          .subtitle {
            font-size: 18px;
          }
        }

        .body {
          width: auto;
          font-size: 16px;
        }
      }

      .project-content-container {
        .image-container {
          max-width: 350px;
        }
      }
    }
  }
}
</style>
