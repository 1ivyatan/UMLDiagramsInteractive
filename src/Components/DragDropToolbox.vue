<script setup>
    defineProps(["width", "height", "id"]);

    //console.log(document.querySelector());
</script>

<template>
    <div
        v-bind:id="id"
        class="drag-drop-toolbox"
    >

        <canvas></canvas>
    </div>
    <p>{{ id }}</p>

</template>

<style scoped>
    .drag-drop-toolbox {
        border: 1px solid black;
    }
</style>