<template>
  <nav>
    <router-link to="/list">List</router-link>
    <router-link to="/item">Item(画布组件)</router-link>
  </nav>
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
    margin-left: 16px;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
