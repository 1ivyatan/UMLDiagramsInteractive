<script setup>
    import { onMounted, useSlots } from 'vue';

    const props = defineProps(["width", "height", "id"]);

    onMounted(() => {
        const component = document.getElementById(props.id);

        /* prepare canvas */
        const placeholderCanvas = component.querySelector(".placeholderCanvas");
        const canvas = placeholderCanvas.querySelector("canvas");

        placeholderCanvas.style.width = props.width + "px";
        placeholderCanvas.style.height = props.height + "px";

        canvas.width = props.width;
        canvas.height = props.height;

        /* go though slots */
        const slots = useSlots();

        slots.default().forEach(element => {
            console.log(element.innerHTML)
            
        });
    });
</script>

<template>
    <div
        v-bind:id="props.id"
        class="drag-drop-toolbox"
    >
        <div
            class="placeholderCanvas"
        >

            <canvas></canvas>
        </div>

        <div>
            <slot></slot>
        </div>
    </div>
    <p>{{ props.id }}</p>

</template>

<style scoped>
    .drag-drop-toolbox > .placeholderCanvas {
        position: relative;
        border: 1px solid black;
    }

    .drag-drop-toolbox > .placeholderCanvas > canvas {
    }

    
</style>