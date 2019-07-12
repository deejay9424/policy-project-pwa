<template>
  <div class="home">
      <PolicyCard/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import PolicyCard from '@/components/PolicyCard.vue';

export default {
  name: 'home',
  components: {
    HelloWorld,PolicyCard
  }
}
</script>
