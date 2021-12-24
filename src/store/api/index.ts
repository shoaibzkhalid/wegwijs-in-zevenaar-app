import { createApi } from '@reduxjs/toolkit/query/react'
import { createBaseQuery } from 'utils/auth'

export const wegwijsApi = createApi({
  reducerPath: 'wegwijsApi',
  baseQuery: createBaseQuery(),
  endpoints: (build) => ({
    // GET CATEGORIES
    getCategories: build.query({
      query: () => ({ url: `categories` }),
      transformResponse: (response: any) => response.data,
    }),

    // GET IDEAS
    getIdeas: build.query({
      query: () => ({ url: `ideas` }),
    }),

    // GET GENERAL
    getGeneral: build.query({
      query: () => ({ url: `general` }),
    }),

    // GET ACTIVITIES
    getActivities: build.query({
      query: () => ({ url: `activities?filter[date]=` }),
    }),

    // GET ORGANIZATIONS
    getOrganizations: build.query({
      query: (categoryId) => ({ url: `organizations?filter[category]=${categoryId}` }),
      transformResponse: (response: any) => response.data,
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
