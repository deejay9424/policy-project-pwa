<template>
<div>
  <!-- Add Icon -->
  <v-layout align-center justify-space-around>
    <v-icon large color="blue darken-2">mdi-watch</v-icon>
  </v-layout>
    <h4>Drag items from one list to another</h4>
    
    <div class="side-by-side">
      <!-- List 1 -->
      <div class="side">
        <VueNestable v-model="nestableItems1" cross-list group="cross">
          <VueNestableHandle slot-scope="{item}" :item="item">{{item.text}}</VueNestableHandle>
        </VueNestable>
      </div>
      <!-- List 2 -->
      <div class="side no-br">
        <VueNestable v-model="nestableItems2" cross-list group="cross">
          <VueNestableHandle slot-scope="{item}" :item="item">{{item.text}}</VueNestableHandle>
        </VueNestable>
      </div>
    </div>
</div>
</template>

<script>
import "../assets/nestableItems.css";

export default {
  components: {},
  data() {
    return {
      nestableItems1: [
        {
          id: 0,
          text: "Andy"
        },
        {
          id: 1,
          text: "Andy"
        },
        {
          id: 2,
          text: "Andy"
        }
      ],
      nestableItems2: [
          {
          id: 3,
          text: "Lisa"
        },
        {
          id: 4,
          text: "Lisa"
        },
        {
          id: 5,
          text: "Lisa"
        }
      ]
    };
  },
  methods: {
    addListItem() {
      console.log('hi')
    } 
  }
  
};
</script>
<style scoped>
.side {
  display: inline-block;
  padding: 5%;
  border-right: 1px solid gray;
  height: 50%;
  max-height: 50%;
  overflow: auto;
}
.side-by-side{
  padding-top:1%;
}
.no-br{
  border:none;
}
</style>