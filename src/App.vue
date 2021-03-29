<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
html,body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    font-size: 12px;
    color: #333333;
    * {
        box-sizing: border-box;
    }
    a:hover,
    a:focus {
        outline: none;
    }
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    .page-title {
        height: 7rem;
        line-height: 7rem;
        padding-left: 2rem;
        font-size: 3.5rem;
    }
}
</style>
