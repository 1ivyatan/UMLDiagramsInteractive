


<style scoped>
/*
.drag-drop-container {
    position: relative;
    border: 1px solid black;
}

.component-container {
    width: 640px;
    height: 480px;
}

.drag-drop-component {
    position: absolute;
    border: 1px solid black;
    box-shadow: 4px 4px rgba(0, 0, 0, 0.5);
    padding: 5px 25px;
}

.drag-drop-component > .component-body {

}

.drag-drop-component > .component-title {
    font-size: small;
}

.drag-drop-component > .component-title::before {
    content: "<<";
}

.drag-drop-component > .component-title::after {
    content: ">>";
}
*/
</style>

<script setup>
    import GuestLayout from '@/Layouts/GuestLayout.vue';
    import DragDropToolbox from '@/Components/DragDropToolbox.vue';
</script>

<template>
    <GuestLayout>
        <DragDropToolbox
            width="640"
            height="480"
            id="customerBox"
        ></DragDropToolbox>
    </GuestLayout>
</template>
        <!--
        <DragDropToolbox id="customerDiagramToolbox">sdsds</DragDropToolbox>


        <div class="drag-drop-container component-container" id="customerDiagram">

            <div class="drag-drop-component">
                <div class="component-title">
                    Component
                </div>
                <div class="component-body">
                    Hahahaha
                </div>
            </div>

            <canvas></canvas>
        </div>

        <div class="drag-drop-toolbox" id="">

        </div>
    
<div>
    <div class="simple-page">
        <Container @drop="onDrop">
          <Draggable v-for="item in items" :key="item.id">
            <div class="draggable-item">
              {{item.data}}
            </div>
          </Draggable>
        </Container>
    </div>
  </div>
-->


<script>

/*
import DragDropToolbox from '/src/Components/DragDropToolbox.vue'


import { Container, Draggable } from "vue-dndrop";
import { applyDrag, generateItems } from "/src/lib/utils.js";


export default {
  name: "Simple",
  components: { Container, Draggable },
  data() {
    return {
      items: generateItems(50, i => ({ id: i, data: "Draggable " + i }))
    };
  },
  methods: {
    onDrop(dropResult) {
      this.items = applyDrag(this.items, dropResult);
    }
  }
};

    function setupDiagram(divId) {
        const div = document.getElementById(divId);
        const canvas = div.querySelector("canvas");

        canvas.width = div.clientWidth;
        canvas.height = div.clientHeight;
    }

    setupDiagram("customerDiagram");*/

</script>