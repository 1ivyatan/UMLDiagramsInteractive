<template>
<GuestLayout>
    <div class="flex w-full p-5">
        <div class="flex mt-5 flex-col w-auto min-w-40 pr-5 p-2 border-r-1 h-[84vh] gap-3 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 overflow-y-auto">
            <a href="#sakums" :class="activeA == 'sakums' ? 'text-green-500' : ''" @click="activeA = 'sakums'">Sākums</a>
            <a href="#apraksts" :class="activeA == 'apraksts' ? 'text-green-500' : ''" @click="activeA = 'apraksts'">Apraksts</a>
            <a href="#struktura" :class="activeA == 'struktura' ? 'text-green-500' : ''" @click="activeA = 'struktura'">Struktūra</a>
        </div>

        <div class="flex-3 p-2 ml-5 mt-10 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 overflow-y-auto h-[80vh]">
            <h1 class="text-3xl font-semibold" id="sakums">Sekvenču UML</h1>

            <p class="mt-3">
                Sekvences (sequence) diagrammas parāda, kā sistēmā norit operāciju apstrāde, ietverot laika aspektu un vizuāli atgādinot Ganta diagrammu. Tās atspoguļo objektu instanču savstarpējo mijiedarbību, kas balstīta uz Use case diagrammā aprakstītajiem notikumiem. Šāda diagramma skaidri demonstrē, kādā kārtībā un kā sistēmas notikumi tiek izpildīti.
            </p>
            
            <div id="struktura">
                <h2 class="border-b-1 mt-5 text-2xl">Struktūra</h2>
                <div class="mt-10 w-full flex justify-center">
                    <img src="@/assets/sequence.png" class=""></img>
                </div>

                <div class="pl-5 border-b-1 border-t-1 pt-5">
                    <h3 class="text-xl">Actor (Lietotājs)</h3>
                    <div class="flex gap-5 mb-3 mt-5  justify-start items-start">
                        <div class="w-50">
                            <img class="" src="@/assets/actor.png"></img>
                        </div>
                        <p class="w-auto">Actor (Lietotājs) ir diagrammas elements, kas pārstāv ārēju entītiju, piemēram, cilvēku vai sistēmu, kas mijiedarbojas ar sistēmu. Aktieris iniciē notikumus un saņem atbildes no sistēmas.</p>
                    </div>
                </div>

                <div class="pl-5 border-b-1 border-t-1 pt-5">
                    <h3 class="text-xl">Lifelines (Dziveslīnijas)</h3>
                    <div class="flex gap-5 mb-3 mt-5  justify-start items-start">
                        <div class="w-50">
                            <img class="" src="@/assets/lifelines2.png"></img>
                        </div>
                        <p class="w-auto">Lifeline (Dzīveslīnija) ir nosaukts elements, kas attēlo atsevišķu dalībnieku sekvenču diagrammā. Citiem vārdiem, katra instance diagrammā tiek attēlota ar dzīveslīniju.</p>
                    </div>
                </div>

                <div class="pl-5 border-b-1 border-t-1 pt-5">
                    <h3 class="text-xl">Messages (Ziņojumi)</h3>
                    <div class="flex gap-5 mb-3 mt-5  justify-start items-start">
                        <div class="w-80">
                            <img class="" src="@/assets/messages.png"></img>
                        </div>
                        <p class="w-auto">Messages (Ziņojumi) ir Saziņa starp objektiem tiek attēlota ar ziņojumiem. Tie uz dzīveslīnijas parādās noteiktā secībā. Ziņojumi diagrammā tiek attēloti ar bultiņām. Dzīveslīnijas un ziņojumi veido sekvenču diagrammas pamatu. Kopumā ziņojumus var iedalīt vairākās kategorijās:</p>
                    </div>
                </div>

                <div class="pl-5 border-b-1 border-t-1 pt-5">
                    <h3 class="text-xl">Synchronous messages (Sinhronie ziņojumi)</h3>
                    <div class="flex gap-5 mb-3 mt-5  justify-start items-start">
                        <div class="w-140">
                            <img class="" src="@/assets/synchro.png"></img>
                        </div>
                        <p class="w-auto">Synchronous messages (Sinhronie ziņojumi) – Sinhrons ziņojums gaida atbildi, pirms mijiedarbība var turpināties. Sūtītājs aptur savu darbību, līdz saņēmējs ir pilnībā apstrādājis ziņojumu. Tātad izsaucējs turpina tikai tad, kad ir pārliecināts, ka saņēmējs ir izpildījis iepriekšējo ziņojumu un ir saņemta atbilde. Objektorientētajā programmēšanā liela daļa izsaukumu ir tieši sinhroni. Lai attēlotu sinhronu ziņojumu, izmanto bultiņu ar aizpildītu uzgali.</p>
                    </div>
                </div>

                <div class="pl-5 border-b-1 border-t-1 pt-5">
                    <h3 class="text-xl">Asynchronous messages (Asinhronie ziņojumi)</h3>
                    <div class="flex gap-5 mb-3 mt-5  justify-start items-start">
                        <div class="w-90">
                            <img class="" src="@/assets/async.png"></img>
                        </div>
                        <p class="w-auto">Asinhronie ziņojumi (Asynchronous messages) – Asinhrons ziņojums negaida atbildi no saņēmēja. Mijiedarbība turpinās neatkarīgi no tā, vai saņēmējs jau ir apstrādājis iepriekšējo ziņojumu vai nē. Lai attēlotu asinhronu ziņojumu, izmanto bultiņu ar atvērtu (nepiepildītu) uzgali.</p>
                    </div>
                </div>
            </div>

        </div>

    </div>
</GuestLayout>

</template>

<script setup>
import GuestLayout from '@/Layouts/GuestLayout.vue';
import { ref } from 'vue';

const activeA = ref('sakums');
</script>