<script setup>
import { ref } from 'vue'
import HomeIcon from '../assets/home.svg'
import PortfolioIcon from '../assets/portfolio.svg'
import UserIcon from '../assets/user.svg'
import ResumeIcon from '../assets/resume.svg'
import ContactIcon from '../assets/contact.svg'

const menuItems = [
  {
    icon: HomeIcon,
    title: 'home',
    route: '/'
  },
  {
    icon: PortfolioIcon,
    title: 'portfolio',
    route: '/portfolio'
  },
  {
    icon: UserIcon,
    title: 'about me',
    route: '/about'
  },
  {
    icon: ResumeIcon,
    title: 'resume',
    route: '/resume'
  },
  {
    icon: ContactIcon,
    title: 'contact',
    route: '/contact'
  }
]

function toggleMenu() {
  const menu = document.querySelector('.menu')
  menu.classList.toggle('active')
}
</script>

<template>
  <div class="header-container">
    <router-link class="name" to="/"> ZP | zaynepepin </router-link>
    <div class="nav">
      <router-link to="/">home</router-link>
      <router-link to="/portfolio">portfolio</router-link>
      <router-link to="/about">about me</router-link>
      <router-link to="/resume">resume</router-link>
      <router-link to="/contact">contact</router-link>
    </div>
    <div class="socials">
      <a href="https://www.linkedin.com/in/zayne-pepin-546a38220/" target="_blank">
        <img width="47px" src="../assets/linkedin-2.svg" alt="LinkedIn" />
      </a>
      <a href="https://github.com/zayniel" target="_blank">
        <img width="47px" src="../assets/github.svg" alt="GitHub" />
      </a>
    </div>
    <div class="menu-button">
      <img width="30px" src="../assets/menu-burger.svg" alt="Menu" @click="toggleMenu()" />
    </div>
  </div>
  <div class="menu">
    <div v-for="(item, index) in menuItems" :key="index">
      <div class="menu-item">
        <!--
        <img :src="item.icon" :alt="item.title" width="40px" />
        -->
        <router-link :to="item.route" @click="toggleMenu()">
          <div class="item-title">
            {{ item.title }}
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header-container {
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 2rem;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-bottom: 2rem;
  background-color: #fff;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  z-index: 99999;

  .name {
    font-family: 'Nova Cut';
    color: #444444;
    font-weight: 700;
    font-size: 30px;
    text-align: left;
    text-decoration: none;
    cursor: pointer;
  }

  .nav {
    font-family: 'Space Mono';
    display: flex;

    gap: 30px;
    font-size: 16px;
    width: 471px;

    a {
      text-decoration: none;
      color: #7a7a7a;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  .socials {
    display: flex;
    justify-content: flex-end;
    gap: 5px;
    width: 230px;
  }

  .menu-button {
    display: none;
  }
}

.menu {
  display: none;
}

@media only screen and (max-width: 1370px) {
  .header-container {
    justify-content: space-between;
    padding-left: 10vw;
    padding-right: 10vw;

    .nav {
      display: none;
    }

    .socials {
      display: none;
    }

    .menu-button {
      display: block;
      position: relative;
      top: 5px;
    }
  }

  .menu {
    position: fixed;
    top: 112px;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    padding-top: 50px;
    z-index: 3;
    background-color: #ebebeb;
    height: 100vh;
    transform: translateY(-100%); /* Initially hidden by moving out of view */
    transition: transform 0.5s ease-in-out; /* Smooth transition for toggling */

    .menu-item {
      display: flex;
      gap: 20px;
      align-items: center;

      .item-title {
        font-family: 'Space Mono';
        font-size: 22px;
      }

      a {
        text-decoration: none;
        color: #444444;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  .menu.active {
    transform: translateY(0); /* Slide into view */
  }
}
</style>
