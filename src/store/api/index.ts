import { createApi } from '@reduxjs/toolkit/query/react'
import { createBaseQuery } from 'utils/auth'

export const wegwijsApi = createApi({
  reducerPath: 'wegwijsApi',
  baseQuery: createBaseQuery(),
  endpoints: (build) => ({
    // GET CATEGORIES
    getCategories: build.query<any[], void | any>({
      query: () => ({ url: `categories` }),
      transformResponse: (response: any) => {
        console.log('response', response)
        return response.data ?? []
      },
    }),

    // GET IDEAS
    getIdeas: build.query<any[], void | any>({
      query: () => ({ url: `ideas` }),
    }),

    // GET GENERAL
    getGeneral: build.query<any[], void | any>({
      query: () => ({ url: `general` }),
    }),

    // GET ACTIVITIES
    getActivities: build.query<any[], void | any>({
      query: () => ({ url: `activities` }),
    }),

    // GET ORGANIZATIONS
    getOrganizations: build.query<any[], void | any>({
      query: () => ({ url: `organizations` }),
    }),
  }),
})

export const {
  useGetIdeasQuery,
  useGetActivitiesQuery,
  useGetGeneralQuery,
  useGetCategoriesQuery,
  useGetOrganizationsQuery,
} = wegwijsApi
