<template>
    <div class="w-full p-5 h-auto flex items-center justify-between shadow-md">
        <div class="flex items-center gap-3">
            <FileChartColumnIncreasing></FileChartColumnIncreasing>
            <RouterLink to="/" v-if="!smallScreen">UML Diagramas</RouterLink>
        </div>
        <div class="flex items-center gap-5">
            <RouterLink active-class="border-b-1" to="/components" class="ml-5">Komponenšu UML</RouterLink>
            <RouterLink active-class="border-b-1" to="/sequence" class="ml-5">Sekvenču UML</RouterLink>
        </div>
    </div>
</template>

<script setup>
import { FileChartColumnIncreasing } from 'lucide-vue-next';
import { useRoute } from 'vue-router';
import { ref, watch, onMounted } from 'vue';
import { useWindowSize } from '@vueuse/core'

const { width, height } = useWindowSize();
const smallScreen = ref(false);

onMounted(() => {
    if(width.value <= 868) {
        smallScreen.value = true;
    } else {
        smallScreen.value = false;
    }
});

watch(width, (newWidth) => {
    if(newWidth <= 868) {
        smallScreen.value = true;
    } else {
        smallScreen.value = false;
    }
});

const route = useRoute();
</script>