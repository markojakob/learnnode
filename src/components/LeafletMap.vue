<script setup>
import L from 'leaflet';
import { onMounted, useId, watch } from 'vue';
import 'leaflet/dist/leaflet.css';
import 'leaflet/dist/images/marker-icon-2x.png';
import 'leaflet/dist/images/marker-icon.png';
import 'leaflet/dist/images/marker-shadow.png';

const {center, zoom} =  defineProps(['center', 'zoom']);
const id = 'map-' + useId();
let map;
onMounted(() => {
    map = L.map(id).setView(center, zoom);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    var marker = L.marker([59.42681, 24.74352]).addTo(map);
});
watch(() => center, (center) => {
  map.panTo(center);
});
watch(() => zoom, (zoom) => {
  map.setZoom(zoom);
});
</script>
<template>
    <div :id="id"></div>
</template>
<style scoped>
div {
    height: 90vh;
}
</style>