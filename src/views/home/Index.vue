<template>
  <div class="home">
    <header class="header">
      <h2>卡片集</h2>
      <el-button @click="addCardSet">新建卡片集</el-button>
    </header>
    <main class="card-set-list">
      <div v-for="{ deckName, coverUrl, id } in cardSetList" class="card-set"
        :style="{ backgroundImage: `url(${coverUrl})` }" :key="id" @click.self="openCardSet(id)">
        <span class="name" :class="{ bright: coverUrl }">{{ deckName }}</span>
        <el-dropdown trigger="click">
          <el-icon>
            <MoreFilled></MoreFilled>
          </el-icon>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item @click="deleteCardSet(id)">删除</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { MoreFilled } from '@element-plus/icons-vue';
import { onMounted, Ref, ref } from 'vue';
import { useRouter } from "vue-router";
import { addDeck, deleteDeck, getUserDecks, IDeck } from "@/api/deck";

/**
 * @description 卡片集列表
 */
const cardSetList: Ref<IDeck[]> = ref([])
/**
 * @description 获取用户卡片集列表
 */
const getCardSetList = async () => {
  try {
    const userDecks = await getUserDecks()
    cardSetList.value = userDecks.data
  } catch (error) {
    console.warn(error);
  }
}
onMounted(getCardSetList)

const loading = ref(false)
/**
 * @description 新增卡片集
 */
const addCardSet = async () => {
  try {
    loading.value = true
    const { data } = await addDeck({
      deckName: '标题',
      coverUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg2.niutuku.com%2Fdesk%2F1208%2F1354%2Fntk-1354-31810.jpg&refer=http%3A%2F%2Fimg2.niutuku.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1654003960&t=142e6358000d09b72b6b6d83b2c96450'
    })
    getCardSetList()
  } catch (error) {
    console.warn(error);
  }
  finally {
    loading.value = false
  }
}

/**
 * @description 删除卡片集
 */
const deleteCardSet = async (id: number) => {
  try {
    await deleteDeck(id)
    getCardSetList()
  } catch (error) {
    console.warn(error);
  }
}

const router = useRouter()
/**
 * @description 打开卡片集详情页
 */
const openCardSet = (id: number) => {
  router.push({ name: 'CardSet', params: { id } })
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>