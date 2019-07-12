<template>
  <div>
    <v-data-table :headers="headers" :items="dataSrc">
      <template v-slot:items="props">
        <td>
          <v-edit-dialog
            :return-value.sync="props.item.name"
            lazy
            @save="save"
            @cancel="cancel"
            @open="open"
            @close="close"
          >
            {{ props.item.name }}
            <template v-slot:input>
              <v-text-field
                v-model="props.item.name"
                :rules="[max25chars]"
                label="Edit"
                single-line
                counter
              ></v-text-field>
            </template>
          </v-edit-dialog>
        </td>
        <td class="text-xs-right">{{ props.item.effectiveDate }}</td>
        <td class="text-xs-right">{{ props.item.reviewDate }}</td>
        <td class="text-xs-right">{{ props.item.isActive }}</td>
      </template>
    </v-data-table>
  </div>
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
import { Sketch } from "vue-color";
import {dataObj} from "../data";
Vue.use(Vuetify);
Vue.use(VueAxios, axios);

Vue.component("swatches", Swatches);
Vue.component("draggable", Draggable);
Vue.component("color-picker", Sketch);
export default {
  data() {
    return {
      dataSrc:dataObj,
      snack: false,
      snackColor: "",
      snackText: "",
      max25chars: v => v.length <= 25 || "Input too long!",
      pagination: {},
      headers: [
        {
          text: "Name",
          align: "left",
          sortable: false,
          value: "name"
        },
        {
          text: "Effective Date",
          align: "left",
          sortable: false,
          value: "effectiveDate"
        },
        {
          text: "Review Date",
          align: "left",
          sortable: false,
          value: "reviewDate"
        },
        {
          text: "Active?",
          align: "left",
          sortable: false,
          value: "isActive"
        }
        ]
    };
  },
  methods: {
    save() {
      this.snack = true;
      this.snackColor = "success";
      this.snackText = "Data saved";
    },
    cancel() {
      this.snack = true;
      this.snackColor = "error";
      this.snackText = "Canceled";
    },
    open() {
      this.snack = true;
      this.snackColor = "info";
      this.snackText = "Dialog opened";
    },
    close() {
      
    }
  }
};
</script>