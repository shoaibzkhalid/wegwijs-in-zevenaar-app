import { fetchBaseQuery, retry } from '@reduxjs/toolkit/dist/query'
import { API_URL } from './hooks/constants'

export const createBaseQuery = () =>
  retry(
    fetchBaseQuery({
      baseUrl: `${API_URL}`,
      prepareHeaders: (headers) => {
        headers.set('Accept', 'application/json')
        return headers
      },
    })
  )
