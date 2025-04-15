<script setup>
function vibrate(){
    navigator.vibrate([200,600,300]);
}

function music(){
    navigator.vibrate([150,150,150,150,75,75,150,150,150,150,450])
}
</script>

<template>
    <button class="button is-primary" @click="vibrate">Vibrate</button>
    <button class="button is-primary" @click="music">Music</button>
</template>