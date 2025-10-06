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
                    <img src="@/assets/sequence.png" class=""></img>
                </div>

                <div class="pl-5 border-b-1 border-t-1 pt-5">
                    <h3 class="text-xl">Actor (Lietotājs)</h3>
                    <div class="flex gap-5 mb-3 mt-5  justify-start items-start" :class="smallScreen ? 'flex-wrap items-center justify-center' : ''">
                        <div class="w-50">
                            <img class="" src="@/assets/actor.png"></img>
                        </div>
                        <p class="w-auto">Actor (Lietotājs) ir diagrammas elements, kas pārstāv ārēju entītiju, piemēram, cilvēku vai sistēmu, kas mijiedarbojas ar sistēmu. Aktieris iniciē notikumus un saņem atbildes no sistēmas.</p>
                    </div>
                </div>

                <div class="pl-5 border-b-1 border-t-1 pt-5">
                    <h3 class="text-xl">Lifelines (Dziveslīnijas)</h3>
                    <div class="flex gap-5 mb-3 mt-5  justify-start items-start" :class="smallScreen ? 'flex-wrap items-center justify-center' : ''">
                        <div class="w-50">
                            <img class="" src="@/assets/lifelines2.png"></img>
                        </div>
                        <p class="w-auto">Lifeline (Dzīveslīnija) ir nosaukts elements, kas attēlo atsevišķu dalībnieku sekvenču diagrammā. Citiem vārdiem, katra instance diagrammā tiek attēlota ar dzīveslīniju.</p>
                    </div>
                </div>

                <div class="pl-5 border-b-1 border-t-1 pt-5">
                    <h3 class="text-xl">Messages (Ziņojumi)</h3>
                    <div class="flex gap-5 mb-3 mt-5  justify-start items-start" :class="smallScreen ? 'flex-wrap items-center justify-center' : ''">
                        <div class="w-80">
                            <img class="" src="@/assets/messages.png"></img>
                        </div>
                        <p class="w-auto">Messages (Ziņojumi) ir Saziņa starp objektiem tiek attēlota ar ziņojumiem. Tie uz dzīveslīnijas parādās noteiktā secībā. Ziņojumi diagrammā tiek attēloti ar bultiņām. Dzīveslīnijas un ziņojumi veido sekvenču diagrammas pamatu. Kopumā ziņojumus var iedalīt vairākās kategorijās:</p>
                    </div>
                </div>

                <div class="pl-5 border-b-1 border-t-1 pt-5">
                    <h3 class="text-xl">Synchronous messages (Sinhronie ziņojumi)</h3>
                    <div class="flex gap-5 mb-3 mt-5  justify-start items-start" :class="smallScreen ? 'flex-wrap items-center justify-center' : ''">
                        <div class="w-140">
                            <img class="" src="@/assets/synchro.png"></img>
                        </div>
                        <p class="w-auto">Synchronous messages (Sinhronie ziņojumi) – Sinhrons ziņojums gaida atbildi, pirms mijiedarbība var turpināties. Sūtītājs aptur savu darbību, līdz saņēmējs ir pilnībā apstrādājis ziņojumu. Tātad izsaucējs turpina tikai tad, kad ir pārliecināts, ka saņēmējs ir izpildījis iepriekšējo ziņojumu un ir saņemta atbilde. Objektorientētajā programmēšanā liela daļa izsaukumu ir tieši sinhroni. Lai attēlotu sinhronu ziņojumu, izmanto bultiņu ar aizpildītu uzgali.</p>
                    </div>
                </div>

                <div class="pl-5 border-b-1 border-t-1 pt-5">
                    <h3 class="text-xl">Asynchronous messages (Asinhronie ziņojumi)</h3>
                    <div class="flex gap-5 mb-3 mt-5  justify-start items-start" :class="smallScreen ? 'flex-wrap items-center justify-center' : ''">
                        <div class="w-90">
                            <img class="" src="@/assets/async.png"></img>
                        </div>
                        <p class="w-auto">Asinhronie ziņojumi (Asynchronous messages) – Asinhrons ziņojums negaida atbildi no saņēmēja. Mijiedarbība turpinās neatkarīgi no tā, vai saņēmējs jau ir apstrādājis iepriekšējo ziņojumu vai nē. Lai attēlotu asinhronu ziņojumu, izmanto bultiņu ar atvērtu (nepiepildītu) uzgali.</p>
                    </div>
                </div>
            </div>

            <div id="test" class="mt-5 border-1 p-5 rounded shadow-md">
                <h2>Tests</h2>
                <p class="mt-3">Šajā sadaļā būs tests par sekvenču UML diagrammām.</p>
                <button @click="testStart = true" class="mt-3 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 cursor-pointer">Sākt</button>
            </div>

            </div>

            <SequenceTest v-else></SequenceTest>

        </div>


    </div>
</GuestLayout>

</template>

<script setup>
import GuestLayout from '@/Layouts/GuestLayout.vue';
import { onMounted, ref, watch } from 'vue';
import { useWindowSize } from '@vueuse/core'
import SequenceTest from '@/Sequence/SequenceTest.vue';

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