import { createApi } from '@reduxjs/toolkit/query/react'
import { createBaseQuery } from 'utils/auth'

export const wegwijsApi = createApi({
  reducerPath: 'wegwijsApi',
  baseQuery: createBaseQuery(),
  endpoints: (build) => ({
    // GET GENERAL
    getGeneral: build.query({
      query: () => ({ url: `general` }),
    }),

    // GET CATEGORIES
    getCategories: build.query({
      query: () => ({ url: `categories` }),
      transformResponse: (response: any) => response.data,
    }),

    //----------------------------------------------------------------------------------
    // QUERIES WITH PARAMS

    // GET ORGANIZATIONS
    getOrganizations: build.query({
      query: ({ key, page }) => ({
        url: `organizations?filter[category]=${key}&page[number]=${page ?? 1}`,
      }),
      transformResponse: (response: any) => ({
        data: response.data,
        lastPage: response.meta.page.lastPage,
      }),
    }),

    // GET ACTIVITIES BY TARGET GROUP
    getActivitiesByTargetGrp: build.query({
      query: ({ key, page }) => ({
        url: `activities?filter[target_group]=${key ?? ''}&page[number]=${page ?? 1}`,
      }),
      transformResponse: (response: any) => ({
        data: response.data,
        lastPage: response.meta.page.lastPage,
      }),
    }),

    getActivitiesByDate: build.query({
      query: ({ key, page }) => ({
        url: `activities?filter[date]=${key}&page[number]=${page ?? 1}`,
      }),
      transformResponse: (response: any) => ({
        data: response.data,
        lastPage: response.meta.page.lastPage,
      }),
    }),

    getOrgBySearchVal: build.query({
      query: ({ key, page }) => ({
        url: `organizations?filter[search]=${key}&page[number]=${page ?? 1}`,
      }),
      transformResponse: (response: any) => ({
        data: response.data,
        lastPage: response.meta.page.lastPage,
      }),
    }),

    // GET IDEAS
    getIdeas: build.query({
      query: ({ page }) => ({ url: `ideas?page[number]=${page ?? 1}` }),
      transformResponse: (response: any) => ({
        data: response.data,
        lastPage: response.meta.page.lastPage,
      }),
    }),

    // GET NEWS
    getNews: build.query({
      query: ({ page }) => ({ url: `news-articles?page[number]=${page ?? 1}` }),
      transformResponse: (response: any) => ({
        data: response.data,
        lastPage: response.meta.page.lastPage,
      }),
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
