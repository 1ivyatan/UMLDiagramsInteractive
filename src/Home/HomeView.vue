<template>
    <GuestLayout>
        <div class="min-h-screen bg-gray-50 py-8">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <!-- Header Section -->
                <div class="text-center mb-12">
                    <h1 class="text-4xl font-bold text-gray-900 mb-4">UML Diagrammas</h1>
                    <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                        Unified Modeling Language (UML) - standartizēta modelēšanas valoda programmatūras sistēmu aprakstīšanai
                    </p>
                </div>

                <!-- UML Information Section -->
                <div class="bg-white rounded-lg shadow-md p-8 mb-12">
                    <h2 class="text-3xl font-semibold text-gray-900 mb-6">Kas ir UML?</h2>
                    
                    <div class="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 class="text-xl font-semibold text-blue-700 mb-4">Galvenie principi</h3>
                            <ul class="space-y-3 text-gray-700">
                                <li class="flex items-start">
                                    <span class="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    <span>Standartizēta notācija modelēšanai</span>
                                </li>
                                <li class="flex items-start">
                                    <span class="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    <span>Sistēmas arhitektūras vizualizācija</span>
                                </li>
                                <li class="flex items-start">
                                    <span class="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    <span>Izstrādes procesu dokumentēšana</span>
                                </li>
                                <li class="flex items-start">
                                    <span class="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    <span>Komunikācija starp izstrādātājiem</span>
                                </li>
                            </ul>
                        </div>
                        
                        <div>
                            <h3 class="text-xl font-semibold text-green-700 mb-4">UML priekšrocības</h3>
                            <ul class="space-y-3 text-gray-700">
                                <li class="flex items-start">
                                    <span class="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    <span>Uzlabota sistēmas izpratne</span>
                                </li>
                                <li class="flex items-start">
                                    <span class="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    <span>Izstrādes sarežģītības samazināšana</span>
                                </li>
                                <li class="flex items-start">
                                    <span class="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    <span>Komponentu atkārtota izmantošana</span>
                                </li>
                                <li class="flex items-start">
                                    <span class="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    <span>Labāka projekta dokumentācija</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Comparison Table -->
                <div class="bg-white rounded-lg shadow-md overflow-hidden">
                    <div class="px-8 py-6 bg-gradient-to-r from-blue-600 to-purple-600">
                        <h2 class="text-3xl font-semibold text-white">UML diagrammu tipu salīdzinājums</h2>
                        <p class="text-blue-100 mt-2">Galvenās īpašības un lietojuma jomas</p>
                    </div>
                    
                    <div class="overflow-x-auto">
                        <table class="min-w-full divide-y divide-gray-200">
                            <thead class="bg-gray-50">
                                <tr>
                                    <th class="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Diagrammas tips
                                    </th>
                                    <th class="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Nolūks
                                    </th>
                                    <th class="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Sarežģītība
                                    </th>
                                    <th class="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Pielietojums
                                    </th>
                                    <th class="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Izstrādes posms
                                    </th>
                                </tr>
                            </thead>
                            <tbody class="bg-white divide-y divide-gray-200">
                                <tr class="hover:bg-gray-50 transition-colors">
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <div class="flex items-center">
                                            <span class="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
                                            <span class="text-sm font-medium text-gray-900">Klašu diagramma</span>
                                        </div>
                                    </td>
                                    <td class="px-6 py-4 text-sm text-gray-700">
                                        Klašu struktūra un to attiecības
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                            Vidēja
                                        </span>
                                    </td>
                                    <td class="px-6 py-4 text-sm text-gray-700">
                                        OOP projektēšana
                                    </td>
                                    <td class="px-6 py-4 text-sm text-gray-700">
                                        Projektēšana
                                    </td>
                                </tr>
                                
                                <tr class="hover:bg-gray-50 transition-colors">
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <div class="flex items-center">
                                            <span class="w-3 h-3 bg-purple-500 rounded-full mr-3"></span>
                                            <span class="text-sm font-medium text-gray-900">Secības diagramma</span>
                                        </div>
                                    </td>
                                    <td class="px-6 py-4 text-sm text-gray-700">
                                        Objektu mijiedarbība laikā
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                                            Augsta
                                        </span>
                                    </td>
                                    <td class="px-6 py-4 text-sm text-gray-700">
                                        Procesu modelēšana
                                    </td>
                                    <td class="px-6 py-4 text-sm text-gray-700">
                                        Analīze/Projektēšana
                                    </td>
                                </tr>
                                
                                <tr class="hover:bg-gray-50 transition-colors">
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <div class="flex items-center">
                                            <span class="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
                                            <span class="text-sm font-medium text-gray-900">Komponentu diagramma</span>
                                        </div>
                                    </td>
                                    <td class="px-6 py-4 text-sm text-gray-700">
                                        Sistēmas arhitektūra
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                            Vidēja
                                        </span>
                                    </td>
                                    <td class="px-6 py-4 text-sm text-gray-700">
                                        Sistēmas arhitektūra
                                    </td>
                                    <td class="px-6 py-4 text-sm text-gray-700">
                                        Projektēšana
                                    </td>
                                </tr>
                                
                                <tr class="hover:bg-gray-50 transition-colors">
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <div class="flex items-center">
                                            <span class="w-3 h-3 bg-red-500 rounded-full mr-3"></span>
                                            <span class="text-sm font-medium text-gray-900">Lietošanas gadījumu diagramma</span>
                                        </div>
                                    </td>
                                    <td class="px-6 py-4 text-sm text-gray-700">
                                        Funkcionālās prasības
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                                            Zema
                                        </span>
                                    </td>
                                    <td class="px-6 py-4 text-sm text-gray-700">
                                        Prasību ievākšana
                                    </td>
                                    <td class="px-6 py-4 text-sm text-gray-700">
                                        Analīze
                                    </td>
                                </tr>
                                
                                <tr class="hover:bg-gray-50 transition-colors">
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <div class="flex items-center">
                                            <span class="w-3 h-3 bg-yellow-500 rounded-full mr-3"></span>
                                            <span class="text-sm font-medium text-gray-900">Aktivitāšu diagramma</span>
                                        </div>
                                    </td>
                                    <td class="px-6 py-4 text-sm text-gray-700">
                                        Biznesa procesi un algoritmi
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                            Vidēja
                                        </span>
                                    </td>
                                    <td class="px-6 py-4 text-sm text-gray-700">
                                        Procesu modelēšana
                                    </td>
                                    <td class="px-6 py-4 text-sm text-gray-700">
                                        Analīze/Projektēšana
                                    </td>
                                </tr>
                                
                                <tr class="hover:bg-gray-50 transition-colors">
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <div class="flex items-center">
                                            <span class="w-3 h-3 bg-indigo-500 rounded-full mr-3"></span>
                                            <span class="text-sm font-medium text-gray-900">Izvietošanas diagramma</span>
                                        </div>
                                    </td>
                                    <td class="px-6 py-4 text-sm text-gray-700">
                                        Fiziskā arhitektūra
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                                            Augsta
                                        </span>
                                    </td>
                                    <td class="px-6 py-4 text-sm text-gray-700">
                                        Sistēmas izvietošana
                                    </td>
                                    <td class="px-6 py-4 text-sm text-gray-700">
                                        Realizācija
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <!-- Additional Info Cards -->
                <div class="grid md:grid-cols-3 gap-6 mt-12">
                    <div class="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
                        <h3 class="text-lg font-semibold text-gray-900 mb-3">Strukturālās diagrammas</h3>
                        <p class="text-gray-600 text-sm">
                            Parāda sistēmas statisko struktūru: klases, komponentus, paketes un to attiecības
                        </p>
                    </div>
                    
                    <div class="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
                        <h3 class="text-lg font-semibold text-gray-900 mb-3">Uzvedības diagrammas</h3>
                        <p class="text-gray-600 text-sm">
                            Demonstrē objektu dinamisko uzvedību: mijiedarbību, stāvokļus, aktivitātes
                        </p>
                    </div>
                    
                    <div class="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-500">
                        <h3 class="text-lg font-semibold text-gray-900 mb-3">Mijiedarbības diagrammas</h3>
                        <p class="text-gray-600 text-sm">
                            Specializētas uzvedības diagrammas objektu mijiedarbības modelēšanai
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </GuestLayout>
</template>

<script setup>
import GuestLayout from '@/Layouts/GuestLayout.vue';


</script>

<style scoped>


</style>