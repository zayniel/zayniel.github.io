<script setup>
</script>

<template>
  <div class="header-container">
    <router-link class="name" to="/">

      ZP | zaynepepin

    </router-link>
    <div class="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/portfolio">Portfolio</router-link>
      <router-link to="/about">About Me</router-link>
      <router-link to="/resume">Resume</router-link>
      <router-link to="/contact">Contact</router-link>
    </div>
    <div class="socials">
      <a 
        href="https://www.linkedin.com/in/zayne-pepin-546a38220/" 
        target="_blank">
        <img 
          width="47px"
          src="../assets/linkedin-2.svg" 
          alt="LinkedIn" />
      </a>
      <a 
        href="https://github.com/zayniel" 
        target="_blank">
        <img 
          width="47px"
          src="../assets/github.svg" 
          alt="GitHub" />
      </a>
    </div>
  </div>
</template>

<style scoped>
.header-container {
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 2rem;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-bottom: 2rem;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.1);
}

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
</style>