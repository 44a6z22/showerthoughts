<template>
  <div class="home">
      
        <Loader v-if="isLoading" />
      <full-page ref="fullpage" :options="options" id="fullpage" v-else>
        
        <Card v-for="thought in thoughts" :key="thought.data.id" :thought='thought'/>

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
        licenseKey: 'YOUR_KEY_HEERE',
        menu: '#menu',
        anchors: ['page1', 'page2', 'page3'],
        sectionsColor: ['#41b883', '#ff5f45', '#0798ec']
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
            console.log(this.thoughts)
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
