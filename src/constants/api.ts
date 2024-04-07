export const BASE_API_URL = 'http://localhost:3000/api'

export const API_TODO = `${BASE_API_URL}/todo`
export const generateCurrentDateToDoEndpoint = (date: string) => `${API_TODO}/${date}`
export const generateToDoByIdEndpoint = (date: string, id: string) => `${API_TODO}/${date}/${id}`
