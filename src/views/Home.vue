<template>
  <div class="home">
      
      <Loader v-if="isLoading" />
      <full-page ref="fullpage" :options="options" id="fullpage" v-else>
        
        <Card v-for="thought in thoughts" :key="thought.data.id" :thought='thought.data'/>

      </full-page>
  </div>
</template>

<script>
// @ is an alias to /src
import Card from '@/components/Card.vue'
import Loader from '@/components/Loader.vue'

export default {
  name: 'Home',
   data() {
    return {
      isLoading: true,
      thoughts: [], 
      options: {
        menu: '#menu',
        sectionsColor: [
          '#4B7F52', 
          '#0A2463', 
          '#CCDDB7', 
          '#1098F7', 
          '#E03616', 
          '#FAD4D8',
          '#7CC6FE', 
          '#F49F0A', 
          '#999AC6', 
          '#B4ADEA',
          '#B287A3', 
          '#DABFFF', 
          '#D991BA',
          '#B5FED9', 
          '#D496A7',
          '#694F5D', 
          '#4A2040',
          '#A72608', 
          '#8B2635',
          '#F3A712',
          ]
      },
    }
  },
  components: {
    // HelloWorld
    Card, 
    Loader
  }, 
  methods:{
    getShowerThoughts: function () {
      this.$http.get("https://www.reddit.com/r/Showerthoughts.json?limit=20")
        .then( 
          response => {
            this.thoughts = response.data.data.children;
            this.thoughts.shift();
            this.thoughts.shift();
            this.isLoading = false; 
          }
        )
        .catch(
          err => {
            console.error(err);
          }
        );
    }
  },
  created: function(){
    this.getShowerThoughts();
  }
}
</script>

<style scoped>
  .home{
    height: 100%;
  }
</style>