<script setup>
import { ref } from 'vue';
import Tabs from './components/Tabs.vue';
import { RouterView } from 'vue-router';

</script>

<template>

    <Tabs></Tabs>
    <div class="container">
        <section class="section">
            <RouterView></RouterView>
        </section>
    </div>
</template>

<style></style>