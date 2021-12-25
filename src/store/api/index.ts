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

    // GET GENERAL
    getGeneral: build.query({
      query: () => ({ url: `general` }),
    }),

    // GET ACTIVITIES BY TARGET GROUP
    getActivitiesByTargetGrp: build.query({
      query: (group) => ({ url: `activities?filter[target_group]=${group ?? ''}` }),
      transformResponse: (response: any) => response.data,
    }),

    getActivitiesByDate: build.query({
      query: (date) => ({ url: `activities?filter[date]=${date}` }),
      transformResponse: (response: any) => response.data,
    }),

    // GET ORGANIZATIONS
    getOrganizations: build.query({
      query: (categoryId) => ({ url: `organizations?filter[category]=${categoryId}` }),
      transformResponse: (response: any) => response.data,
    }),

    // GET IDEAS
    getIdeas: build.query({
      query: () => ({ url: `ideas` }),
      transformResponse: (response: any) => response.data,
    }),

    getOrgBySearchVal: build.query({
      query: (searchValue) => ({
        url: `organizations?filter[search]=${searchValue}`,
      }),
      transformResponse: (response: any) => response.data,
    }),

    // GET NEWS
    getNews: build.query({
      query: () => ({ url: `news-articles` }),
      transformResponse: (response: any) => response.data,
    }),
  }),
})

export const {
  useGetNewsQuery,
  useGetIdeasQuery,
  useGetActivitiesByDateQuery,
  useGetGeneralQuery,
  useGetCategoriesQuery,
  useGetOrganizationsQuery,
  useGetActivitiesByTargetGrpQuery,
  useGetOrgBySearchValQuery,
} = wegwijsApi
