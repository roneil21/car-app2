<template>
  <div id="links">
    <nav>
      <RouterLink to="/carpage">Create Car</RouterLink> |
      <RouterLink to="/manufacturer">Manufacturer</RouterLink>
      <RouterLink to="/color">Color</RouterLink>
    </nav>
    <RouterView />

    <h1>Create Your Dream Car</h1>
  </div>
</template>
  
<style scoped>
h1 {
  color: #C69749;
  padding: 10px;
  margin: 70px auto 10px 34%;
  display: flex;
  justify-content: center;
  position: relative;
  right: -2%;
}

a {
  position: relative;
  right: 30%;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 20px;
}

a:hover {
  color: #C69749;
}



</style>