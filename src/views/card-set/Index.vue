<template>
  <div class="card-set">
    <header class="header">
      <el-button :icon="ArrowLeftBold" @click="$router.push('/')"></el-button>
    </header>
    <el-input class="card-set-name-input" v-model="name" placeholder="请输入卡片集标题"></el-input>
    <div class="card-list">
      <div v-for="{ id, content } in cardList" :key="id" class="card">{{ content }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ArrowLeftBold } from '@element-plus/icons-vue'
import { ref } from 'vue';

const name = ref('')

const cardList = ref([
  { id: 1, content: 'cc' },
  { id: 2, content: 'xzdv' },
  { id: 3, content: 'zx' },
])
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>