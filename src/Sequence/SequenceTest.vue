<script setup>
import { ref, computed, watch } from "vue";

const questions = ref([
  { type: 'choice', text: "Kurš elements sekvences diagrammā pārstāv ārēju entītiju, kas mijiedarbojas ar sistēmu?", options: ["Actor (Lietotājs)", "Lifeline", "Message", "Fragment"], correct: 0 },
  { type: 'choice', text: "Ko attēlo Lifeline (Dzīveslīnija) diagrammā?", options: ["Atsevišķu dalībnieku instanci", "Ziņojuma secību", "Actor aktivitāti", "Fragmentu"], correct: 0 },
  { type: 'choice', text: "Kā tiek attēloti ziņojumi starp objektiem?", options: ["Ar taisnstūri", "Ar bultiņām uz dzīveslīnijām", "Ar punktētu līniju", "Ar aplīti"], correct: 1 },
  { type: 'choice', text: "Kurš ziņojuma veids gaida atbildi pirms turpināt mijiedarbību?", options: ["Synchronous messages (Sinhronie ziņojumi)", "Asynchronous messages", "Fragment messages", "Actor messages"], correct: 0 },
  { type: 'choice', text: "Kā tiek attēlots asinhrons ziņojums?", options: ["Ar bultiņu ar atvērtu (nepiepildītu) uzgali", "Ar bultiņu ar aizpildītu uzgali", "Ar punktētu līniju", "Ar taisnstūri"], correct: 0 },
  { type: 'choice', text: "Kādu funkciju pilda Actor (Lietotājs) diagrammā?", options: ["Iniciē notikumus un saņem atbildes", "Attēlo sistēmas metodes", "Skaita ziņojumus", "Nosaka fragmenta nosacījumus"], correct: 0 },
  { type: 'choice', text: "Ko veido dzīvslīnijas un ziņojumi kopā?", options: ["Sequence diagram pamatu", "Actor hierarhiju", "Fragmentu struktūru", "Asinhronu savienojumu"], correct: 0 },
  { type: 'choice', text: "Kā tiek attēlots, ka ziņojums negaida atbildi?", options: ["Ar asinhronu ziņojumu", "Ar sinhronu ziņojumu", "Ar Actor bultiņu", "Ar fragmenta rāmīti"], correct: 0 },
  { type: 'drag2', text: "Sakārto šos UML secības diagrammas elementus pēc to kategorijas" },
  { type: 'choice', text: "Kā tiek attēlots, ka ziņojums negaida atbildi?", options: ["Ar asinhronu ziņojumu", "Ar sinhronu ziņojumu", "Ar Actor bultiņu", "Ar fragmenta rāmīti"], correct: 0 },
]);

const currentIndex = ref(0);
const correctCount = ref(0);
const wrongCount = ref(0);
const finished = ref(false);

const selected = ref(null);
const isCorrect = ref(null);

const drag1Items = ref([]);
const drag1Checked = ref(false);
const drag1Correct = ref(false);


const drag2Items = ref(["Actor", "Lifeline", "Synchronous message", "Asynchronous message"]);
const drag2Categories = ["Ārējā entītija", "Dalībnieks diagrammā", "Ziņojums ar atbildi", "Ziņojums bez gaidīšanas atbildes"];
const drag2Assigned = ref({});
const drag2Checked = ref(false);
const drag2Correct = ref(false);
const hoverCategory = ref(null);

const percentage = computed(() => Math.round((correctCount.value / questions.value.length) * 100));
const progress = computed(() => Math.round(((currentIndex.value + 1) / questions.value.length) * 100));


function answerChoice(selectedIndex) {
  if (selected.value !== null) return;
  selected.value = selectedIndex;
  const currentQuestion = questions.value[currentIndex.value];

  if (selectedIndex === currentQuestion.correct) {
    isCorrect.value = true;
    correctCount.value++;
    setTimeout(() => nextQuestion(), 1000);
  } else {
    isCorrect.value = false;
    wrongCount.value++;
  }
}


function initDrag1() {
  const dragQuestion = questions.value[currentIndex.value];
  drag1Items.value = [...dragQuestion.correctOrder].sort(() => Math.random() - 0.5);
  drag1Checked.value = false;
  drag1Correct.value = false;
}

function checkDrag1() {
  drag1Checked.value = true;
  drag1Correct.value = drag1Items.value.every((val, idx) => val === questions.value[currentIndex.value].correctOrder[idx]);
  if (drag1Correct.value) {
    correctCount.value++;
    setTimeout(() => nextQuestion(), 1000);
  } else wrongCount.value++;
}


function dragOverCategory(category) {
  hoverCategory.value = category;
}
function dragLeaveCategory() {
  hoverCategory.value = null;
}
function dropDrag2(event, category) {
  const item = event.dataTransfer.getData("text/plain");
  drag2Assigned.value[category] = item;
  drag2Items.value = drag2Items.value.filter(i => i !== item);
  hoverCategory.value = null;
}
function checkDrag2() {
  drag2Checked.value = true;
  const correctMap = {
    "Ārējā entītija": "Actor",
    "Dalībnieks diagrammā": "Lifeline",
    "Ziņojums ar atbildi": "Synchronous message",
    "Ziņojums bez gaidīšanas atbildes": "Asynchronous message"
  };
  drag2Correct.value = Object.keys(correctMap).every(cat => drag2Assigned.value[cat] === correctMap[cat]);
  if (drag2Correct.value) correctCount.value++;
  else wrongCount.value++;
  if (drag2Correct.value) setTimeout(() => nextQuestion(), 1000);
}
function tryAgainDrag2() {
  drag2Checked.value = false;
  drag2Correct.value = false;
  drag2Items.value = ["Actor", "Lifeline", "Synchronous message", "Asynchronous message"];
  drag2Assigned.value = {};
}

function nextQuestion() {
  if (currentIndex.value < questions.value.length - 1) {
    currentIndex.value++;
    selected.value = null;
    isCorrect.value = null;
    if (questions.value[currentIndex.value].type === 'drag1') initDrag1();
    if (questions.value[currentIndex.value].type === 'drag2') tryAgainDrag2();
  } else {
    finished.value = true;
  }
}

function tryAgain() {
  selected.value = null;
  isCorrect.value = null;
  if (questions.value[currentIndex.value].type === 'drag1') initDrag1();
  if (questions.value[currentIndex.value].type === 'drag2') tryAgainDrag2();
}

function restartQuiz() {
  currentIndex.value = 0;
  correctCount.value = 0;
  wrongCount.value = 0;
  finished.value = false;
  selected.value = null;
  isCorrect.value = null;
  initDrag1();
  tryAgainDrag2();
}


watch(currentIndex, (newIndex) => {
  if (questions.value[newIndex].type === 'drag1') initDrag1();
  if (questions.value[newIndex].type === 'drag2') tryAgainDrag2();
}, { immediate: true });
</script>

<template>
  <div class="p-4 max-w-4xl mx-auto">
    <h2 class="text-2xl font-bold mb-4">UML Secības diagrammu tests</h2>


    <div class="w-full bg-gray-300 rounded-full h-4 mb-6 overflow-hidden">
      <div
        class="bg-blue-600 h-4 rounded-full transition-all duration-700 ease-in-out"
        :style="{ width: progress + '%' }"
      ></div>
    </div>
    <p class="mb-4 text-sm text-gray-700">Progres: {{ progress }}%</p>

    <div v-if="!finished">
      <p class="font-semibold mb-4">Jautājums {{ currentIndex + 1 }} no {{ questions.length }}:</p>
      <p class="mb-4">{{ questions[currentIndex].text }}</p>

      <div v-if="questions[currentIndex].type === 'choice'">
        <div v-for="(opt, oi) in questions[currentIndex].options" :key="oi" class="mb-2">
          <button
            @click="answerChoice(oi)"
            class="px-4 py-2 rounded w-full text-left transition-colors duration-300 cursor-pointer"
            :disabled="selected !== null"
            :class="[
              selected === oi
                ? isCorrect === true
                  ? 'bg-green-500 text-white'
                  : 'bg-red-500 text-white'
                : 'bg-gray-200 hover:bg-gray-300'
            ]"
          >
            {{ opt }}
          </button>
        </div>
        <div v-if="isCorrect === false" class="mt-4">
          <p class="text-red-600 font-bold">Nepareizi!</p>
          <button @click="tryAgain" class="mt-2 bg-blue-600 text-white px-4 py-2 rounded">Pamēģināt vēlreiz</button>
        </div>
      </div>

      <div v-else-if="questions[currentIndex].type === 'drag1'">
        <ul class="mb-4">
          <li
            v-for="(item, index) in drag1Items"
            :key="item"
            class="border p-2 mb-2 rounded cursor-move transition-colors duration-200 hover:bg-gray-200"
            draggable="true"
            @dragstart="event => event.dataTransfer.setData('text/plain', index)"
            @dragover.prevent
            @drop="event => {
              const from = event.dataTransfer.getData('text');
              const to = index;
              const temp = drag1Items[from];
              drag1Items[from] = drag1Items[to];
              drag1Items[to] = temp;
            }"
          >
            <span
              :class="drag1Checked
                ? (item === questions[currentIndex].correctOrder[index] ? 'text-green-600 font-bold' : 'text-red-600')
                : ''"
            >
              {{ item }}
            </span>
          </li>
        </ul>
        <button @click="checkDrag1" class="bg-blue-600 text-white px-4 py-2 rounded" :disabled="drag1Checked">Pārbaudīt</button>
        <p v-if="drag1Checked && drag1Correct" class="mt-2 text-green-700 font-bold">Pareizi!</p>
        <p v-else-if="drag1Checked && !drag1Correct" class="mt-2 text-red-700 font-bold">Nepareizi! Pamēģiniet vēlreiz.</p>
        <button v-if="drag1Checked && !drag1Correct" @click="tryAgain" class="mt-2 bg-blue-600 text-white px-4 py-2 rounded">Pamēģināt vēlreiz</button>
      </div>

      <div v-else-if="questions[currentIndex].type === 'drag2'" class="flex flex-col md:flex-row gap-4">
        <ul class="w-full md:w-1/3 border p-2 mb-2 md:mb-0">
          <li
            v-for="item in drag2Items"
            :key="item"
            draggable="true"
            @dragstart="event => event.dataTransfer.setData('text/plain', item)"
            class="border p-1 mb-1 rounded cursor-move bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
          >
            {{ item }}
          </li>
        </ul>

        <div class="w-full md:w-2/3 flex flex-col gap-2">
          <div
            v-for="category in drag2Categories"
            :key="category"
            class="border h-16 flex items-center justify-center rounded transition-colors duration-200"
            :class="hoverCategory === category ? 'bg-green-200 border-green-500' : 'bg-gray-50'"
            @dragover.prevent="dragOverCategory(category)"
            @dragleave="dragLeaveCategory"
            @drop="event => { dropDrag2(event, category); }"
          >
            <span>{{ drag2Assigned[category] || category }}</span>
          </div>
        </div>
      </div>
      <div class="flex flex-col items-start mt-4" v-if="questions[currentIndex].type === 'drag2'">
        <button class="mt-2 bg-blue-600 text-white px-4 py-2 rounded w-full md:w-auto" @click="checkDrag2" :disabled="drag2Checked">Pārbaudīt</button>
        <p v-if="drag2Checked && drag2Correct" class="text-green-600 mt-2 font-bold">Pareizi!</p>
        <p v-else-if="drag2Checked && !drag2Correct" class="text-red-600 mt-2 font-bold">Nepareizi! Pamēģiniet vēlreiz.</p>
        <button v-if="drag2Checked && !drag2Correct" @click="tryAgainDrag2" class="mt-2 bg-blue-600 text-white px-4 py-2 rounded">Pamēģināt vēlreiz</button>
      </div>
    </div>

    <div v-else>
      <h3 class="text-xl font-bold">Tests pabeigts!</h3>
      <p class="mt-1 text-red-700 font-semibold">Nepareizās atbildes: {{ wrongCount }}</p>
      <p class="mt-2">Kopā jautājumi: {{ questions.length }}</p>
    </div>
    <button @click="restartQuiz" class="mt-2 bg-blue-600 mt-10 text-white px-4 py-2 rounded cursor-pointer">Reset</button>
  </div>
</template>
