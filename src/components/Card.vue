<template>
    <div class="section">
        <img src="https://styles.redditmedia.com/t5_2szyo/styles/communityIcon_x3ag97t82z251.png?width=256&s=33531dceba6466953aadef3073f36cfc2e267175" alt="shower thoughts logo .">
        Listing {{thought.data.id}} ...
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

