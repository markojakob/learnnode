<script setup>

import { ref } from 'vue';

let message = ref('');
let = ref(['Piim', 'Laua viin', 'Õlu', 'Krõpsud']);

function addItem(){
    if(message.value !== ''){
        items.value.push(message.value);
    }
    message.value = "";
}

</script>

<template>
    <div class="container mt-2">
        <div class="field has-addons">
                <div class="control">
                    <input class="input" v-model="message" @keypress.enter="addItem">
                </div>
                <div class="control">
                    <button class="button is-info" @click="addItem">
                        Search
                    </button>
                </div>
        
            <div>
                <ul>
                    <li>Piim</li>
                    <li>Laua viin</li>
                    <li>Õlu</li>
                    <li>Sipsid</li>
                </ul>  
        </div>   	
    <div>
</template>

<style>

</style>