<template>
<v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span class="font-weight-light">Project Policy</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/table">Table</router-link>
    </v-toolbar>
    <div class="mt-10"></div>
    <router-view/>
  </v-app>
</template>
<script>
import store from './store';
import Datatable from './views/Datatable';
import VJsonschemaForm from './components/VJsonschemaForm';

export default {
  name: 'App',
  components: {
    
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.mt-10{
  margin-top:6%;
}
</style>
