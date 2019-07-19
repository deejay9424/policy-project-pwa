<template>
  <v-form v-model="formValid">
    <v-jsonschema-form
      v-if="schema"
      :schema="schema"
      :model="dataObject"
      :options="options"
      @error="showError"
      @change="showChange"
      @input="showInput"
    />
    <PolicyCard />
  </v-form>
</template>

<script>
import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import Draggable from "vuedraggable";
import axios from "axios";
import VueAxios from "vue-axios";
import Swatches from "vue-swatches";
import "vue-swatches/dist/vue-swatches.min.css";
import VJsonschemaForm from "@koumoul/vuetify-jsonschema-form";
import "@koumoul/vuetify-jsonschema-form/dist/main.css";
import { Sketch } from "vue-color";
import PolicyCard from "./PolicyCard";
import 'material-design-icons-iconfont/dist/material-design-icons.css'
Vue.use(Vuetify,{
  iconfont: 'mdi'
});
Vue.use(VueAxios, axios);

Vue.component("swatches", Swatches);
Vue.component("draggable", Draggable);
Vue.component("color-picker", Sketch);

export default {
  components: { VJsonschemaForm, PolicyCard },
  data() {
    return {
      schema: schemaData,
      dataObject: dataObj,
      formValid: false,
      options: {
        debug: false,
        disableAll: false,
        autoFoldObjects: true
      }
    };
  },
  methods: {
    showError(err) {
      window.alert(err);
    },
    showChange(e) {
      console.log('"change" event', e);
    },
    showInput(e) {
      console.log('"input" event', e);
    }
  }
};
</script>