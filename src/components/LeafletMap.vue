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
var latlngs = [[59.41340157146741, 24.744678787725057],[59.413536687915695, 24.74478205277775],[59.41382056719739, 24.744119547188024],[59.413705923927765, 24.743963979073836]];
onMounted(() => {
    map = L.map(id).setView(center, zoom);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    var marker = L.marker([59.41364314293338, 24.744241587668338]).addTo(map);
    var polygon = L.polygon(latlngs, {color: 'red'}).addTo(map);
    map.fitBounds(polygon.getBounds());
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