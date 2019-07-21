<template>
  <div class="home">
      <PolicyCard/>
  </div>
</template>

<script>
// @ is an alias to /src
import PolicyCard from '@/components/PolicyCard.vue';

export default {
  name: 'home',
  components: {
    PolicyCard
  }
}
</script>
