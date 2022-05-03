<template>
    <el-form :model="formInline">
        <el-form-item label="username">
            <el-input v-model="formInline.username" placeholder="username" />
        </el-form-item>
        <el-form-item label="password">
            <el-input v-model="formInline.password" placeholder="password" />
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">Login</el-button>
        </el-form-item>
    </el-form>
</template>


<script setup lang="ts">
import { reactive } from 'vue'
import { login } from '@/api/user';
import { useRouter } from 'vue-router';

const router = useRouter()

const formInline = reactive({
    username: '',
    password: '',
})

const onSubmit = async () => {
    await login(formInline)
    router.replace('/')
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>