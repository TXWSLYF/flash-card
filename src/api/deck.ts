import axiosInstance from ".";

/**
 * @description 获取用户卡片集列表
 */
export const getUserDecks = () => axiosInstance.get('/userDecks')

interface deckBody {
  deckName: string,
  deckDescription?: string
  coverUrl?: string
}
/**
 * @description 新增卡片集
 */
export const addDeck = (body: deckBody) => axiosInstance.post('/decks', body)

/**
 * @description 修改卡片集信息
 */
export const updateDeckInfo = (id: string, body: deckBody) => axiosInstance.put(`decks/${id}`, body)

/**
 * @description 删除卡片集
 */
export const deleteDeck = (id: string) => axiosInstance.delete(`decks/${id}`)