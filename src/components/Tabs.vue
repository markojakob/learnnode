<script setup>
import { RouterLink, useRoute, useRouter } from 'vue-router';




const router = useRouter();
const route = useRoute();
</script>

<template>
    <div class="tabs">
        <ul>
            <li v-for="(item, key) in $router.getRoutes()" :class="{ 'is-active': item.path === $route.path}">
                <RouterLink :to="item.path">{{ item.name }}</RouterLink>
            </li>
        </ul>
    </div>
</template>