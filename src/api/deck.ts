import axiosInstance from ".";

export interface IDeck {
  id: number;
  userId: number | null;
  deckName?: string | null;
  deckDescription?: string | null;
  coverUrl?: string | null;
  createdAt: string;
  updatedAt: string;
}

/**
 * @description 获取用户卡片集列表
 */
export const getUserDecks = () => axiosInstance.get<IDeck[]>("/userDecks");

/**
 * @description 新增卡片集
 */
export const addDeck = (body: Partial<IDeck>) =>
  axiosInstance.post("/decks", body);

/**
 * @description 修改卡片集信息
 */
export const updateDeckInfo = (id: number, body: Partial<IDeck>) =>
  axiosInstance.put(`decks/${id}`, body);

/**
 * @description 删除卡片集
 */
export const deleteDeck = (id: number) => axiosInstance.delete(`decks/${id}`);
