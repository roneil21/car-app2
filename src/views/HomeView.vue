<template>
  <div id="app">
    <nav>
      <router-link to="/carpage">Create Car</router-link> |
      <router-link to="/manufacturer">Manufacturer</router-link>
      <router-link to="/color">Color</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style scoped>
a{
  text-decoration: none;
  margin-right: 20px;
  color: #fff;
  font-size: 18px;
}
a:hover{
  color: #C69749;
}
</style>