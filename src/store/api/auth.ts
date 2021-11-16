import { createApi } from '@reduxjs/toolkit/query/react'
import { createBaseQuery } from 'utils/auth'

export const generalApi = createApi({
  reducerPath: 'generalApi',
  baseQuery: createBaseQuery(),
  endpoints: (build) => ({
    getPromotions: build.query<any[], void | any>({
      query: (keywords) => {
        console.log('keywords', `getPromotions${keywords}`)
        return `getPromotions${keywords}`
      },
      transformResponse: (response: any) => {
        const res: PromotionResponse = {
          data: response.data,
          lastPage: response.last_page,
        }

        // console.log('res', res)
        return res as any
      },
    }),

    getAllPromotions: build.query<any[], void | any>({
      query: () => ({ url: `getPromotions` }),
    }),
  }),
})

export const { useGetPromotionsQuery, useGetAllPromotionsQuery } = generalApi
