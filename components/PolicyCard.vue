<template>
  <v-container>
    <v-layout text-xs-center wrap>
      <div>
        <v-layout row wrap>
          <v-flex xs12 md6 lg4 v-for="policy in data" :key="policy._id">
            <nuxt-link :to="'Details/'+policy._id">
            <v-card class="card">
              <v-card-title :primary-title="true">{{policy.name}}</v-card-title>
              <div class="yellow-line"></div>
              <v-card-text>{{policy.purpose}}</v-card-text>
            </v-card>
            </nuxt-link>
          </v-flex>
        </v-layout>
        <div class="card-space"></div>
      </div>
    </v-layout>
  </v-container>
</template>

<script>
import { dataObj } from "../data/dataObj";
export default {
  data: () => ({
    data: dataObj
  })
};
</script>

<style>
.card {
  transition: background 0.5s ease;
  background: #f7f7f7;
  position: relative;
  padding: 10px 40px;
  cursor: pointer;
  margin: 2%;
}
.card:hover {
  background: #0086ad;
  color: white;
}
.yellow-line {
  border: solid 5px#F1C40F;
  max-width: 50%;
  height: 6px;
  margin-top: 20%;
  margin-bottom: 10%;
}
.card-space {
  padding-left: 5px;
  padding-right: 5px;
}
</style>
