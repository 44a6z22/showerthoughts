<template>
  <div class="home">
      <full-page ref="fullpage" :options="options" id="fullpage">
        
        <Card v-for="i in 10" key="i" :thought='i'/>

      </full-page>
  </div>
</template>

<script>
// @ is an alias to /src
import Card from '@/components/Card.vue'

export default {
  name: 'Home',
   data() {
    return {
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
    Card
  }, 
}
</script>
