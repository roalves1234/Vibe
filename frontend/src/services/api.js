import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8000',
})

export const ping = async () => {
  const { data } = await api.get('/health')
  return data
}

export default api
