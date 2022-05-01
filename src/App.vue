<template>
  <router-view></router-view>
</template>

<script setup lang="ts">
import { login } from '@/api/user';

login({ username: 'zy', password: '8dddu33787dy' }) // 登录
</script>

<style>
#app {}
</style>
