<template>
    <div class="section">
        
        <div class="data">
            <img class="logo" src="https://styles.redditmedia.com/t5_2szyo/styles/communityIcon_x3ag97t82z251.png?width=256&s=33531dceba6466953aadef3073f36cfc2e267175" alt="shower thoughts logo .">
            <h3 class="author"> Author : {{thought.author}} </h3>
            <p class="quote">
               “ {{thought.title}} ”
            </p>
            <div class="rate">
                <p class="comment">Comments : {{thought.num_comments}} </p>
                <p class="comment">Upvotes : {{thought.ups}} </p>
                <p class="comment">Awards :  {{thought.all_awardings.length }}</p>
            </div>

            <div class="awards" v-if="thought.all_awardings.length > 0">
                <img
                    v-for="award in thought.all_awardings" 
                    :key="award.id" 
                    :src="award.icon_url"
                    :height="award.resized_icons[1].height"
                    :width="award.resized_icons[1].width" 
                    alt="Award icon "
                    >
            </div>
        </div>
    </div>        
</template>

<script>
export default {
    name: "card", 
    data:{

    }, 
    props:["thought"]
}
</script>

<style  scoped>
    
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200&display=swap');
    
    .data{
        font-family: 'Montserrat', sans-serif;
        width: 100%;
        color:azure;
        padding: 4em 0em;
    }
    .data *{
        margin: 1em;
    }
    .data .quote{
        font-size: 3em;
        
        margin: 0em 4em;
    }
    .data .rate{
        display: flex;
        justify-content: center;
    }
    .data .awards{
        display: flex;
        justify-content: center;
    }



    @media only screen and (max-width: 1000px){
        .logo{
            height: 80px;
            padding: 0;
            margin: 0;
        }
        .data{
            padding: 3em 0em;
            font-family: 'Montserrat', sans-serif;
            width: 100%;
            color:azure;
            /* padding: 2em 0em; */
        }
        .data *{
            margin: .5em;
        }
        .data .quote{
            font-size: 1em;
            
            margin: 0em 2em;
        }
        .data .rate{
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        .data .awards{
            display: flex;
            justify-content: center;
        }
        
    }
</style>
