<template>
  <div>
    <v-toolbar>
      <!-- Title -->
      <v-toolbar-title>Policies</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-dialog v-model="dialog" max-width="500px">
        <!-- Add Button -->
        <template v-slot:activator="{ on }">
          <v-btn color="primary" dark class="mb-2" v-on="on">New Policy</v-btn>
        </template>
        <!-- Dialog -->
        <v-card>
          <v-card-title>
            <span class="headline">{{ formTitle }}</span>
          </v-card-title>
          <!-- Dialog Form -->
          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.name" label="Policy name"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.effectiveDate" label="Effective Date"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.reviewDate" label="Review Date"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.isActive" label="Is Active?(true/false)"></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>
          <!-- Dialog Buttons -->
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click="closeDialog">Cancel</v-btn>
            <v-btn color="blue darken-1" flat @click="saveData">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-toolbar>
    <!-- Datatable -->
    <v-data-table :headers="headers" :items="dataSrc">
      <template v-slot:items="props">
        <td>
          <v-edit-dialog :return-value.sync="props.item.name" lazy @save="save" @cancel="cancel" @open="open" @close="close">
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
        <td>{{ props.item.effectiveDate }}</td>
        <td>{{ props.item.reviewDate }}</td>
        <td>{{ props.item.isActive }}</td>
        <!-- Edit/Delete Icons -->
        <td class="justify-center layout px-0">
          <v-icon small class="mr-2" @click="editItem(props.item)">
            edit
          </v-icon>
          <v-icon small @click="deleteItem(props.item)">
            delete
          </v-icon>
        </td>
      </template>
      <!-- Header Cells Tooltip -->
      <template slot="headerCell" slot-scope="props">
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <span v-on="on">{{ props.header.text }}</span>
          </template>
          <span>{{ props.header.text }}</span>
        </v-tooltip>
      </template>
      <!-- No Data -->
      <template v-slot:no-data>
        <v-alert :value="true" color="error" icon="warning">Sorry, nothing to display here :(</v-alert>
      </template>
    </v-data-table>
    <!-- Snackbar -->

    <v-snackbar v-model="snack" :timeout="3000" :color="snackColor">
      {{ snackText }}
      <v-btn flat @click="snack = false">Close</v-btn>
    </v-snackbar>
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
import { dataObj } from "../data";
Vue.use(Vuetify);
Vue.use(VueAxios, axios);

Vue.component("swatches", Swatches);
Vue.component("draggable", Draggable);
Vue.component("color-picker", Sketch);
export default {
  data() {
    return {
      // Snack
      snack: false,
      snackColor: "",
      snackText: "",
      // Data Source
      dataSrc: dataObj,
      // Table
      max25chars: v => v.length <= 25 || "Input too long!",
      pagination: {},
      headers: [
        {
          text: "Name",
          align: "left",
          sortable: true,
          value: "name"
        },
        {
          text: "Effective Date",
          align: "left",
          sortable: true,
          value: "effectiveDate"
        },
        {
          text: "Review Date",
          align: "left",
          sortable: true,
          value: "reviewDate"
        },
        {
          text: "Active?",
          align: "left",
          sortable: true,
          value: "isActive"
        },
        {
          text: "Actions",
          align: "center",
          sortable: false
        }
      ],
      // Dialog
      dialog: false,
      editedIndex: -1,
      editedItem: {
        name: "",
        effectiveDate: "",
        reviewDate: "",
        isActive: ""
      },
      defaultItem: {
        name: "",
        effectiveDate: "",
        reviewDate: "",
        isActive: ""
      }
    };
  },

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    }
  },

  methods: {
    initialize() {
      this.dataSrc = dataObj;
    },
    editItem(item) {
      this.editedIndex = this.dataSrc.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    deleteItem(item) {
      const index = this.dataSrc.indexOf(item);
      confirm("Are you sure you want to delete this item?") &&
        this.dataSrc.splice(index, 1);
    },
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
    closeDialog() {
      this.dialog = false;
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      }, 300);
    },
    saveData() {
      if (this.editedIndex > -1) {
        Object.assign(this.dataSrc[this.editedIndex], this.editedItem);
      } else {
        this.dataSrc.push(this.editedItem);
      }
      this.closeDialog();
    },
    close(){}
  }
};
</script>