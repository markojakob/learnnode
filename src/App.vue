<script setup>

import { ref } from 'vue';

let message = ref('');
let items = ref(['Piim', 'Laua viin', 'Õlu', 'Sipsid']);

function addItem(){
    if(message.value.trim() !== ''){
        items.value.push(message.value.trim());
    }
    message.value = '';
}

</script>

<template>
    <div class="container mt-2">
        <div class="field has-addons">
            <div class="control">
                <input class="input" type="text" v-model="message" @keypress.enter="addItem">
            </div>
            <div class="control">
                <button class="button is-info" @click="addItem">
                    Search
                </button>
            </div>

            <div class="content">
                <h3>All items</h3>
                <ul>
                    <li v-for="item in items">{{ item }}</li>
                </ul>
            </div>
        </div>
    </div>        
</template>

<style></style>