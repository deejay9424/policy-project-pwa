<template>
  <v-app id="nav">
    <v-toolbar app>
      <!-- App Title -->
      <v-toolbar-title class="headline text-uppercase">
        <span class="font-weight-light">Clarity-India</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn v-for="item in menu" :key="item.icon" :to="item.href" flat>{{ item.title }}</v-btn>
      </v-toolbar-items>
       <!-- Menu Items  -->
      <v-menu class="hidden-md-and-up">
        <v-toolbar-side-icon slot="activator"></v-toolbar-side-icon>
        <v-list>
          <v-list-tile v-for="item in menu" :key="item.icon" :to="item.href">
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>
    <div class="mt-10"></div>
    <!-- Different views -->
    <router-view />
  </v-app>
</template>
<script>
import store from "./store";
import Datatable from "./views/Datatable";
import VJsonschemaForm from "./components/VJsonschemaForm";
import VueNestable from "vue-nestable";
import Vue from "vue";

Vue.use(VueNestable);

export default {
  name: "App",
  components: {
    VueNestable
  },
  data() {
    return {
      menu: [
        { icon: "home", title: "Home" ,href:"/"},
        { icon: "info", title: "Table",href:"/table" },
        { icon: "warning", title: "List",href:"/draggable-list" },
        { icon: "a", title: "About",href:"/about" }
      ]
    };
  }
};
</script>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
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
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.mt-10 {
  margin-top: 10%;
}
</style>