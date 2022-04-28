<script setup lang="ts">
import { ref } from 'vue'
import recordAudio from '../utils/recordAudio';

defineProps<{ msg: string }>()

const count = ref(0)
const isRecording = ref(false);
const stopRecordFun = ref<any>(null);

const handleClickStartRecord = async () => {
  const { start, stop } = await recordAudio();
  start();
  isRecording.value = true;
  stopRecordFun.value = stop;
  setTimeout(() => {
    stop()
  }, 2000)
}

const handleClickStopRecord = async () => {
  console.log(stopRecordFun.value)
  if (stopRecordFun.value) {
    const { audioBlob, audioUrl, play } = await stopRecordFun.value();
    console.log(audioBlob, audioUrl, play)
    play && play()
  }
  isRecording.value = false
  stopRecordFun.value = null
}
</script>

<template>
  <h1>{{ msg }}</h1>
  <button @click="handleClickStartRecord">开始录制</button>
  <span class="tips">
    {{
      isRecording ? '录制中' : '等待中'
    }}
  </span>
  <button @click="handleClickStopRecord">结束录制</button>

  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>See <code>README.md</code> for more information.</p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Docs
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
  </p>

  <button type="button" @click="count++">count is: {{ count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}

.tips {
  margin: 0 16px;
}
</style>
