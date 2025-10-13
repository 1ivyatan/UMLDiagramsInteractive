<template>
<GuestLayout>
    <div class="flex w-full p-5 scroll-smooth" :class="smallScreen ? 'flex-col h-auto' : ''">
        <div class="flex mt-5 flex-col w-auto min-w-40 pr-5 p-2 border-r-1 h-[84vh] gap-3 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 overflow-y-auto" :class="smallScreen ? 'h-auto pl-7' : ''">
            <div v-if="!testStart" class="flex flex-col gap-3" :class="smallScreen ? 'flex-row overflow-x-auto w-full' : ''">
                <a href="#sakums" :class="activeA == 'sakums' ? 'text-green-500' : ''" @click="activeA = 'sakums'">Sākums</a>
                <a href="#struktura" :class="activeA == 'struktura' ? 'text-green-500' : ''" @click="activeA = 'struktura'">Struktūra</a>
                <a href="#test" :class="activeA == 'test' ? 'text-green-500' : ''" @click="activeA = 'test'">Tests</a>
            </div>
            <div v-else class="flex flex-col gap-3" :class="smallScreen ? 'flex-row overflow-x-auto w-full' : ''">
                <a class="text-xl" href="#test" @click="activeA = 'sakums'; testStart = false">Atpakaļ</a>
            </div>
        </div>

        <div class="flex-3 p-2 ml-5 mt-10 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 overflow-y-auto h-[80vh] scroll-smooth">
            <div v-if="!testStart">
            <h1 class="text-3xl font-semibold" id="sakums">Komponenšu UML</h1>

            <p class="mt-3">
                Komponenšu (component) diagrammas norāda sistēmas arhitektūru norādot tās struktūru kā komponentes un tās mijiedarbību. Šādā veidā vienkāršo kompleksās sistēmas un tās komponenšu mijiedarbību.
            </p>
            
            <div id="struktura">
                <h2 class="border-b-1 mt-5 text-2xl">Struktūra</h2>
                <div class="mt-10 w-full flex justify-center">
                    <img src="@/assets/compdiag.png" class=""></img>
                </div>

                <div class="pl-5 border-b-1 border-t-1 pt-5">
                    <h3 class="text-xl">Componente (komponente)</h3>
                    <div class="flex gap-5 mb-3 mt-5  justify-start items-start" :class="smallScreen ? 'flex-wrap items-center justify-center' : ''">
                        <div class="w-100">
                            <img class="" src="@/assets/component.png"></img>
                        </div>
                        <p class="w-auto">Norāda sistēmas modulārās daļas, kurā atrodas funkcionalitātes. Komponentes var nūt programmatūras klases, klašu kopas vai apakšsistēmas.</p>
                    </div>
                </div>

                <div class="pl-5 border-b-1 border-t-1 pt-5">
                    <h3 class="text-xl">Artifact (artifakti)</h3>
                    <div class="flex gap-5 mb-3 mt-5  justify-start items-start" :class="smallScreen ? 'flex-wrap items-center justify-center' : ''">
                        <div class="w-100">
                            <img class="" src="@/assets/artifact.png"></img>
                        </div>
                        <p class="w-auto">
                            Norāda failus vai datus, kuri tiks izmantoti mezglos, piemēram, komponentēs. Artifakti var norādīt mezglu sastāvu un kā faili un dati saista šos mezglus, piemēram, komponentes.
                        </p>
                    </div>
                </div>

                <div class="pl-5 border-b-1 border-t-1 pt-5">
                    <h3 class="text-xl">Interface (interfeiss)</h3>
                    <div class="flex gap-5 mb-3 mt-5  justify-start items-start" :class="smallScreen ? 'flex-wrap items-center justify-center' : ''">
                        <div class="w-50">
                            <img class="" src="@/assets/interface.png"></img>
                        </div>
                        <p class="w-auto">Norāda darbības, kurā komponente piedāvā vai ir nepieciešama. Rinķi norāda interfeisus un pusapļi norāda nepieciešamību savienojumam ar interfeisu. Piemēram, pasūtījuma komponenti var piesaistīt ar konta komponenti, taču strukturāli neatkarīgas. </p>
                    </div>
                </div>

                <div class="pl-5 border-b-1 border-t-1 pt-5">
                    <h3 class="text-xl">Association relationship (asociācijas saikne)</h3>
                    <div class="flex gap-5 mb-3 mt-5  justify-start items-start" :class="smallScreen ? 'flex-wrap items-center justify-center' : ''">
                        <div class="w-50">
                            <img class="" src="@/assets/relationship-association.png"></img>
                        </div>
                        <p class="w-auto">Norāda, ka mezgls, piemēram, komponente vai artifakts, ir saistīta ar norādīto mezglu. Piemēram, grāmatas komponente ir asociēta ar bibliotēkas komponenti, kuras ir cieši saistītas un grāmatas komponente ir pakļauta bibliotēkas komponenti.</p>
                    </div>
                </div>

                <div class="pl-5 border-b-1 border-t-1 pt-5">
                    <h3 class="text-xl">Dependency relationship (saikne)</h3>
                    <div class="flex gap-5 mb-3 mt-5  justify-start items-start" :class="smallScreen ? 'flex-wrap items-center justify-center' : ''">
                        <div class="w-50">
                            <img class="" src="@/assets/relationship-dependency.png"></img>
                        </div>
                        <p class="w-auto">Norāda, ka mezgls, piemēram, komponente vai artifakts, ir atkarīga no kādas komponentes. Piemēram, grāmatas komponente ir atkarīga no personas komponentes, piemēram, grāmatas komponentei norādot īpašnieku.</p>
                    </div>
                </div>

                <div class="pl-5 border-b-1 border-t-1 pt-5">
                    <h3 class="text-xl">Port (ports)</h3>
                    <div class="flex gap-5 mb-3 mt-5  justify-start items-start" :class="smallScreen ? 'flex-wrap items-center justify-center' : ''">
                        <div class="w-30">
                            <img class="" src="@/assets/port.png"></img>
                        </div>
                        <p class="w-auto">
                            Izceļ mijiedarbības punktus, kurās tiek izmantoti interfeisi.
                        </p>
                    </div>
                </div>

                <div class="pl-5 border-b-1 border-t-1 pt-5">
                    <h3 class="text-xl">Node (mezgls)</h3>
                    <div class="flex gap-5 mb-3 mt-5  justify-start items-start" :class="smallScreen ? 'flex-wrap items-center justify-center' : ''">
                        <div class="w-150">
                            <img class="" src="@/assets/node.png"></img>
                        </div>
                        <p class="w-auto">
                            Norāda vidi, kurā komponentes atrodas un tiek palaistas norādītā vidē un tās infrastruktūrā. Piemēram, kā tīmekļa serveris strukturā klienta un aizmugures puse tiek strukturēta, kādas komponentes atrodas nosacītās pusēs, piemēram, datubāzes un datu apstrādes komponente aizmugurē un lietotāja interfeisa komponente klienta pusē.
                        </p>
                    </div>
                </div>

            </div>

            <div id="test" class="mt-5 border-1 p-5 rounded shadow-md">
                <h2>Tests</h2>
                <p class="mt-3">Šajā sadaļā būs tests par komponenšu UML diagrammām.</p>
                <button @click="testStart = true" class="mt-3 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 cursor-pointer">Sākt</button>
            </div>

            </div>

            <ComponentsTest v-else></ComponentsTest>

        </div>


    </div>
</GuestLayout>

</template>

<script setup>
import GuestLayout from '@/Layouts/GuestLayout.vue';
import { onMounted, ref, watch } from 'vue';
import { useWindowSize } from '@vueuse/core'
import ComponentsTest from '@/Components/ComponentsTest.vue';

const { width, height } = useWindowSize();
const smallScreen = ref(false);

const testStart = ref(false);

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

const activeA = ref('sakums');
</script>

<style>
</style>