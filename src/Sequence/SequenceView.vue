<template>
<GuestLayout>
    <div class="min-h-screen bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <!-- Navigation -->
            <div v-if="!testStart" class="bg-white rounded-lg shadow-md mb-8 sticky top-4 z-10">
                <div class="flex overflow-x-auto p-4 gap-4" :class="smallScreen ? 'justify-center' : ''">
                    <button 
                        @click="activeA = 'sakums'" 
                        :class="activeA == 'sakums' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'"
                        class="px-6 py-2 rounded-lg font-medium transition-all whitespace-nowrap">
                        Sākums
                    </button>
                    <button 
                        @click="activeA = 'struktura'" 
                        :class="activeA == 'struktura' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'"
                        class="px-6 py-2 rounded-lg font-medium transition-all whitespace-nowrap">
                        Struktūra
                    </button>
                    <button 
                        @click="activeA = 'test'" 
                        :class="activeA == 'test' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'"
                        class="px-6 py-2 rounded-lg font-medium transition-all whitespace-nowrap">
                        Tests
                    </button>
                </div>
            </div>

            <!-- Back Button for Test -->
            <div v-else class="mb-8">
                <button 
                    @click="activeA = 'sakums'; testStart = false"
                    class="flex items-center gap-2 bg-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all text-gray-700 hover:text-blue-600">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                    </svg>
                    Atpakaļ
                </button>
            </div>

            <!-- Content -->
            <div v-if="!testStart" class="space-y-8">
                <!-- Introduction Section -->
                <div v-show="activeA === 'sakums'" class="bg-white rounded-lg shadow-md p-8" id="sakums">
                    <div class="text-center mb-8">
                        <h1 class="text-4xl font-bold text-gray-900 mb-4">Sekvenču UML diagrammas</h1>
                        <div class="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
                    </div>

                    <div class="max-w-4xl mx-auto">
                        <div class="bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
                            <p class="text-lg text-gray-700 leading-relaxed">
                                Sekvences (sequence) diagrammas parāda, kā sistēmā norit operāciju apstrāde, ietverot laika aspektu un vizuāli atgādinot Ganta diagrammu. Tās atspoguļo objektu instanču savstarpējo mijiedarbību, kas balstīta uz Use case diagrammā aprakstītajiem notikumiem. Šāda diagramma skaidri demonstrē, kādā kārtībā un kā sistēmas notikumi tiek izpildīti.
                            </p>
                        </div>

                        <div class="grid md:grid-cols-2 gap-8 mt-8">
                            <div class="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                                <div class="flex items-center mb-4">
                                    <div class="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                                    <h3 class="text-xl font-semibold text-gray-900">Galvenās īpašības</h3>
                                </div>
                                <ul class="space-y-3 text-gray-700">
                                    <li class="flex items-start">
                                        <span class="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                        <span>Laika dimensijas iekļaušana</span>
                                    </li>
                                    <li class="flex items-start">
                                        <span class="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                        <span>Objektu mijiedarbības vizualizācija</span>
                                    </li>
                                    <li class="flex items-start">
                                        <span class="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                        <span>Ziņojumu secības attēlošana</span>
                                    </li>
                                </ul>
                            </div>

                            <div class="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                                <div class="flex items-center mb-4">
                                    <div class="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                                    <h3 class="text-xl font-semibold text-gray-900">Lietojuma jomas</h3>
                                </div>
                                <ul class="space-y-3 text-gray-700">
                                    <li class="flex items-start">
                                        <span class="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                        <span>Sistēmu mijiedarbības analīze</span>
                                    </li>
                                    <li class="flex items-start">
                                        <span class="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                        <span>Algoritmu vizualizācija</span>
                                    </li>
                                    <li class="flex items-start">
                                        <span class="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                        <span>Procesu dokumentēšana</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Structure Section -->
                <div v-show="activeA === 'struktura'" class="bg-white rounded-lg shadow-md overflow-hidden" id="struktura">
                    <div class="px-8 py-6 bg-gradient-to-r from-purple-600 to-blue-600">
                        <h2 class="text-3xl font-semibold text-white">Sekvenču diagrammas struktūra</h2>
                        <p class="text-purple-100 mt-2">Galvenie komponenti un to funkcijas</p>
                    </div>
                    
                    <!-- Main diagram -->
                    <div class="p-8">
                        <div class="bg-gray-50 rounded-lg p-6 mb-8">
                            <h3 class="text-xl font-semibold text-gray-900 mb-4 text-center">Sekvenču diagrammas piemērs</h3>
                            <div class="flex justify-center">
                                <img src="@/assets/sequence.png" class="max-w-full h-auto rounded-lg shadow-md">
                            </div>
                        </div>

                        <!-- Components -->
                        <div class="space-y-6">
                            <!-- Actor -->
                            <div class="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                                <div class="flex items-center mb-4">
                                    <div class="w-4 h-4 bg-blue-500 rounded-full mr-3"></div>
                                    <h3 class="text-xl font-semibold text-gray-900">Actor (Lietotājs)</h3>
                                </div>
                                <div class="grid md:grid-cols-3 gap-6 items-start">
                                    <div class="flex justify-center">
                                        <div class="bg-gray-50 p-4 rounded-lg">
                                            <img class="max-w-full h-auto" src="@/assets/actor.png" alt="Actor">
                                        </div>
                                    </div>
                                    <div class="md:col-span-2">
                                        <p class="text-gray-700 leading-relaxed">
                                            Actor (Lietotājs) ir diagrammas elements, kas pārstāv ārēju entītiju, piemēram, cilvēku vai sistēmu, kas mijiedarbojas ar sistēmu. Aktieris iniciē notikumus un saņem atbildes no sistēmas.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <!-- Lifelines -->
                            <div class="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                                <div class="flex items-center mb-4">
                                    <div class="w-4 h-4 bg-green-500 rounded-full mr-3"></div>
                                    <h3 class="text-xl font-semibold text-gray-900">Lifelines (Dzīveslīnijas)</h3>
                                </div>
                                <div class="grid md:grid-cols-3 gap-6 items-start">
                                    <div class="flex justify-center">
                                        <div class="bg-gray-50 p-4 rounded-lg">
                                            <img class="max-w-full h-auto" src="@/assets/lifelines2.png" alt="Lifelines">
                                        </div>
                                    </div>
                                    <div class="md:col-span-2">
                                        <p class="text-gray-700 leading-relaxed">
                                            Lifeline (Dzīveslīnija) ir nosaukts elements, kas attēlo atsevišķu dalībnieku sekvenču diagrammā. Citiem vārdiem, katra instance diagrammā tiek attēlota ar dzīveslīniju.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <!-- Messages -->
                            <div class="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                                <div class="flex items-center mb-4">
                                    <div class="w-4 h-4 bg-purple-500 rounded-full mr-3"></div>
                                    <h3 class="text-xl font-semibold text-gray-900">Messages (Ziņojumi)</h3>
                                </div>
                                <div class="grid md:grid-cols-3 gap-6 items-start">
                                    <div class="flex justify-center">
                                        <div class="bg-gray-50 p-4 rounded-lg">
                                            <img class="max-w-full h-auto" src="@/assets/messages.png" alt="Messages">
                                        </div>
                                    </div>
                                    <div class="md:col-span-2">
                                        <p class="text-gray-700 leading-relaxed">
                                            Messages (Ziņojumi) ir Saziņa starp objektiem tiek attēlota ar ziņojumiem. Tie uz dzīveslīnijas parādās noteiktā secībā. Ziņojumi diagrammā tiek attēloti ar bultiņām. Dzīveslīnijas un ziņojumi veido sekvenču diagrammas pamatu. Kopumā ziņojumus var iedalīt vairākās kategorijās:
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <!-- Synchronous messages -->
                            <div class="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                                <div class="flex items-center mb-4">
                                    <div class="w-4 h-4 bg-red-500 rounded-full mr-3"></div>
                                    <h3 class="text-xl font-semibold text-gray-900">Synchronous messages (Sinhronie ziņojumi)</h3>
                                </div>
                                <div class="grid md:grid-cols-3 gap-6 items-start">
                                    <div class="flex justify-center">
                                        <div class="bg-gray-50 p-4 rounded-lg">
                                            <img class="max-w-full h-auto" src="@/assets/synchro.png" alt="Synchronous messages">
                                        </div>
                                    </div>
                                    <div class="md:col-span-2">
                                        <p class="text-gray-700 leading-relaxed">
                                            Synchronous messages (Sinhronie ziņojumi) – Sinhrons ziņojums gaida atbildi, pirms mijiedarbība var turpināties. Sūtītājs aptur savu darbību, līdz saņēmējs ir pilnībā apstrādājis ziņojumu. Tātad izsaucējs turpina tikai tad, kad ir pārliecināts, ka saņēmējs ir izpildījis iepriekšējo ziņojumu un ir saņemta atbilde. Objektorientētajā programmēšanā liela daļa izsaukumu ir tieši sinhroni. Lai attēlotu sinhronu ziņojumu, izmanto bultiņu ar aizpildītu uzgali.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <!-- Asynchronous messages -->
                            <div class="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                                <div class="flex items-center mb-4">
                                    <div class="w-4 h-4 bg-orange-500 rounded-full mr-3"></div>
                                    <h3 class="text-xl font-semibold text-gray-900">Asynchronous messages (Asinhronie ziņojumi)</h3>
                                </div>
                                <div class="grid md:grid-cols-3 gap-6 items-start">
                                    <div class="flex justify-center">
                                        <div class="bg-gray-50 p-4 rounded-lg">
                                            <img class="max-w-full h-auto" src="@/assets/async.png" alt="Asynchronous messages">
                                        </div>
                                    </div>
                                    <div class="md:col-span-2">
                                        <p class="text-gray-700 leading-relaxed">
                                            Asinhronie ziņojumi (Asynchronous messages) – Asinhrons ziņojums negaida atbildi no saņēmēja. Mijiedarbība turpinās neatkarīgi no tā, vai saņēmējs jau ir apstrādājis iepriekšējo ziņojumu vai nē. Lai attēlotu asinhronu ziņojumu, izmanto bultiņu ar atvērtu (nepiepildītu) uzgali.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Test Section -->
                <div v-show="activeA === 'test'" class="bg-white rounded-lg shadow-md p-8" id="test">
                    <div class="text-center mb-8">
                        <h2 class="text-3xl font-bold text-gray-900 mb-4">Sekvenču diagrammas tests</h2>
                        <div class="w-20 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto rounded-full"></div>
                    </div>
                    
                    <div class="max-w-2xl mx-auto text-center">
                        <div class="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-8 mb-8">
                            <div class="flex justify-center mb-4">
                                <div class="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                                    <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                </div>
                            </div>
                            <h3 class="text-xl font-semibold text-gray-900 mb-3">Pārbaudiet savas zināšanas!</h3>
                            <p class="text-gray-600 mb-6">
                                Šajā sadaļā būs tests par sekvenču UML diagrammām. Pārbaudiet, cik labi esat apguvuši materiālu.
                            </p>
                            <button 
                                @click="testStart = true" 
                                class="bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-blue-600 transition-all transform hover:scale-105 shadow-lg">
                                <span class="flex items-center gap-2">
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                    </svg>
                                    Sākt testu
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Test Component -->
            <div v-if="testStart">
                <SequenceTest></SequenceTest>
            </div>
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