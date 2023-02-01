<template>
  <nav>
    <router-link to="/">Journal</router-link> |
    <router-link to="/contact">Contact</router-link> |
    <router-link to="/clavier">Clavier</router-link>
  </nav>
  <router-view/>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>

body {
  background-color: #171717;
  color: white;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #A95013;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #A95013;
}

nav a.router-link-exact-active {
  color: #f97316;
}
</style>
