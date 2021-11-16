import { fetchBaseQuery, retry } from '@reduxjs/toolkit/dist/query'
import { API_URL } from './hooks/constants'

export const createBaseQuery = () =>
  retry(
    fetchBaseQuery({
      baseUrl: `${API_URL}`,
      prepareHeaders: (headers, { getState }) => {
        // const token = (getState() as RootState).general.accessToken
        headers.set('Accept', 'application/json')

        // if (token) {
        //   headers.set('authorization', `Bearer 106|l24wjheh7H0w5uokSBn9cRR5X6AdIGp9jSslgpy3`)
        // }
        return headers
      },
    }),
    {
      // maxRetries: 5,
    }
  )
