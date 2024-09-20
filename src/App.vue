<template>
  <TransitionRoot :show="true"
    enter="transition-all duration-500"
    enter-from="opacity-0"
    enter-to="opacity-100"
    leave="transition-all duration-500"
    leave-from="opacity-100"
    leave-to="opacity-0"
  >
    <div class="striped-background flex items-center justify-center h-screen">
      <div 
        class="stripe" 
        v-for="(frame, index) in frames" 
        :key="index"
        :style="{ left: `${index * (100 - offset)}%`, top: '0' }"
      ></div>
      <div class="bg-custom-mustard rounded-2xl p-8 text-center z-50">
        <h1 class="title text-custom-mustard text-6xl font-bold p-2 relative z-10">CAUTION</h1>
        <p class="text-black font-bold text-4xl mt-2">THIS WEBSITE IS</p>
        <p class="text-black text-2xl mt-1">UNDER CONSTRUCTION</p>
        <p class="text-black text-sm mt-4 p-2">Copyright &copy; Thanasis Lanaras, 2024</p>
      </div>
    </div>
  </TransitionRoot>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { TransitionRoot } from '@headlessui/vue';

const frames = ref<Array<number>>([0, 1, 2, 3, 4]); // Number of frames
const offset = 100 / frames.value.length; // Offset

const cycleFrames = () => {
  frames.value.push(frames.value.shift()!); 
  setTimeout(cycleFrames, 5000);
};

onMounted(() => {
  cycleFrames();
});
</script>

<style scoped>
.striped-background {
  position: relative;
  overflow: hidden;
  height: 100vh; /* Ensure it fills the screen */
}

.stripe {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  background: repeating-linear-gradient(
    45deg,
    rgb(255, 202, 0),
    rgb(255, 202, 0) 20px,
    black 20px,
    black 40px
  );
  animation: slide 5s linear infinite;
}

@keyframes slide {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}

.title {
  background: black;
}

</style>