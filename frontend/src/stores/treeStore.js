import { create } from 'zustand'

const useTreeStore = create((set) => ({
  messages: [
    { role: 'assistant', content: 'Olá! Vamos construir sua árvore de conversa.' },
  ],
  addMessage: (message) => set((state) => ({ messages: [...state.messages, message] })),
}))

export default useTreeStore
