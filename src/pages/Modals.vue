<script setup>
import { ref } from 'vue';
import Modal from './components/Modal.vue';
import ImgModal from './ImgModal.vue';

let modalActive = ref(false);
let modalActive2 = ref(false);
let modalActive3 = ref(false);

</script>

<template>
    <div class="container">
        <section class="section">
            <button class="button is-dark" @click="modalActive = true">Modal Activate</button>
            <button class="button is-light" @click="modalActive2 = true">Modal Activate</button>
            <button class="button is-warning" @click="modalActive3 = true">Modal Activate</button>
        </section>
    </div>

    <ImgModal :active="modalActive" @close="modalActive = false" url="https://picsum.photos/seed/kala/200/300">
    </ImgModal>
    <Modal :active="modalActive3" @close="modalActive3 = false">
        <div class="notification is-primary">
            <button class="delete" @close="modalActive3 = false"></button>
            Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum
            dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta
            nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus
            diam, et dictum <a>felis venenatis</a> efficitur.
        </div>
    </Modal>
    <ImgModal :active="modalActive2" @close="modalActive2 = false" url="https://picsum.photos/seed/kurk/200/300">
    </ImgModal>

</template>

<style></style>
