<template>
    <GuestLayout>
        
        <h1>Home View</h1>

    </GuestLayout>
</template>

<script setup>
import GuestLayout from '@/Layouts/GuestLayout.vue';
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

onMounted(() => {
    router.push('/sequence');
});


</script>

<style scoped>


</style>