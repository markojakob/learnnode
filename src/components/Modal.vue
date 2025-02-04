<script setup>
defineProps(['active', 'url']);

const emit = defineEmits('close');
document.body.addEventListener('keydown', event => {

if (event.key = 'Escape'){
    modalActive.value = false;
}
});
</script>

<template>
    <div class="modal" :class="{ 'is-active': active }">
        <div class="modal-background" @click="$emit('close')"></div>
        <div class="modal-content">
            <slot></slot>
        </div>
        <button class="modal-close is-large"  @click="$emit('close')" aria-label="close"></button>
    </div>
</template>
