<template>
  <div class="section ">
    <div class="Welcome-Page">
      <img class="logo" src="https://styles.redditmedia.com/t5_2szyo/styles/communityIcon_x3ag97t82z251.png?width=256&s=33531dceba6466953aadef3073f36cfc2e267175" alt="shower thoughts logo .">
      <h2> Welcome To ShowerThoughts SubReddit </h2>
    </div>
  </div>  
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200&display=swap');
.logo{
  height: 150px;
  border-radius: 300px; 
  border: 4px solid #ffffff; 
}
.Welcome-Page{
  font-family: 'Montserrat', sans-serif;
  color: #ffffff;
  height: 100%;
  display: flex; 
  flex-direction: column;
  justify-content: center;
  align-items: center;

}
.section{
  display: flex;
  justify-content: center;
  align-items: center;
}
@media only screen and (max-width: 720px) {
.logo{
  height: 80px;
}  
.Welcome-Page{
  font-size: 12px;
  
  padding-top: 70%;
}

}
</style>
