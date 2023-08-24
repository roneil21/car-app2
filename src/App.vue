<template>
  <div>
    <div id="nav">
      <router-link v-if="authenticated" to="/login" @click.native="logout()" replace>Logout</router-link>
    </div>
    <router-view @authenticated="setAuthenticated" />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      authenticated: false, 
    }
  },
  mounted() {
    if (!this.authenticated) {
      this.$router.replace({ name: "login" }).catch(()=>{});
    }
  },
  methods: {
    setAuthenticated(status) {
      this.authenticated = status;
    },
    logout() {
      this.authenticated = false;
      
    }
  },
  computed: {
    adminAccess() {
      return this.$store.getters.getAccount
    }
  },

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&family=Poppins:wght@300;400;500;600;800&display=swap');

body {
  background: url('./assets/car.jpg') no-repeat center center fixed;
  width: 97%;
  height: 75vh;
  background-size: cover;
  font-family: Open Sans;
}
#nav{
  position: fixed;
  overflow: hidden;
  width: 100%;
}
a{
  float: right;
  color: #f2f2f2;
  text-align: center;
  padding: 14px;
  margin: 20px 30px;
  text-decoration: none;
  font-size: 20px;

}
a:hover{
  color: #C69749;
}

</style>