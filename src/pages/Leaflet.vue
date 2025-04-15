<script setup>
import { ref } from 'vue';
import LeafletMap from '../components/LeafletMap.vue';
let center = ref([59.42681, 24.74352]);
let zoom = ref(19);
</script>

<template>
    <button class="button is-primary" @click="center=[58.42681, 24.74352]">Home</button>
    <input type="range" min="1" max="19" v-model="zoom">
    <LeafletMap :center="center" :zoom="zoom"></LeafletMap>
    <LeafletMap :center="[24.42681, 59.74352]" :zoom="19"></LeafletMap>
</template>