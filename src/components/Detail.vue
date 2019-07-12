<template>
  <v-card dark>
    <v-card-title :primary-title="true" class="heading">{{policy.name}}</v-card-title>
    <v-card-title class="heading"><b><u>Purpose: </u></b> {{policy.purpose}} </v-card-title>
    <div class="mt-2"></div>
    <v-card-title class="heading"><b><u>Effective Date: </u></b> {{policy.effectiveDate}} </v-card-title>
    <div class="mt-2"></div>
    <v-card-title class="heading"><b><u>Active Policy: </u></b> {{isActive}} </v-card-title>
    <div class="mt-2"></div>
    <v-card-title class="heading"><b><u>Non Compliance: </u></b> {{policy.nonCompliamnce}} </v-card-title>
    <div class="mt-2"></div>
    <v-card-title class="heading"><b><u>Review Date: </u></b> {{policy.reviewDate}} </v-card-title>
    <div class="mt-2"></div>
    <v-card-title class="heading"><b><u>Owners: </u></b> {{owners}} </v-card-title>
  </v-card>
</template>
<script>
import { dataObj } from "../data";
export default {
  data: () => ({
    data: dataObj
  }),
  computed: {
    policy( ) {
      return this.search(this.$route.params.id, this.data);
    },
    isActive(){
        return this.policy.isActive?'Yes':'No'
    },
    owners(){
        var x=[];
        this.policy.owners.forEach(owner => {
            x.push(owner.name)
        });
        return x;
    }
  },
  methods: {
    search (nameKey, myArray) {
      for (var i = 0; i < myArray.length; i++) {
        if (myArray[i]._id === nameKey) {
          return myArray[i];
        }
      }
    }
  }
};
</script>

<style>
.heading {
  font-size: 15px;
}
.mt-2{
    margin-top: 2%
}
</style>
