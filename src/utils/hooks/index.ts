import { useEffect } from 'react'
import { LocaleConfig } from 'react-native-calendars'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from 'store'
import {
  useGetActivitiesByDateQuery,
  useGetActivitiesByTargetGrpQuery,
  useGetCategoriesQuery,
  useGetIdeasQuery,
  useGetNewsQuery,
  useGetOrganizationsQuery,
  useGetOrgBySearchValQuery,
} from 'store/api'
import { setDrawer } from 'store/generalSlice'

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const useCategories = (selectedCategory) => {
  const { data, isLoading } = useGetCategoriesQuery({})

  const selectedCategories = data?.filter((category) => category.id == selectedCategory)[0]

  return { selectedCategories, isLoading }
}

export const useOrganizations = (categoryId) => {
  const { data, isLoading } = useGetOrganizationsQuery(categoryId)

  const organizations = data ?? []

  return { organizations, isLoading } as any
}

export const useIdeas = () => {
  const { data } = useGetIdeasQuery({})

  const ideas = data ?? []

  return { ideas } as any
}

export const useSettings = () => {
  const appTheme = useAppSelector((state) => state.settings)

  return { appTheme }
}

export const useCalenderLocales = () => {
  useEffect(() => {
    LocaleConfig.locales.nl = {
      monthNames: [
        'Januari',
        'Februari',
        'Maart',
        'April',
        'Mei',
        'Juni',
        'Juli',
        'Augustus',
        'September',
        'Oktober',
        'November',
        'December',
      ],
      monthNamesShort: [
        'Jan',
        'Feb',
        'Mrt',
        'Apr',
        'Mei',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Okt',
        'Nov',
        'Dec',
      ],
      dayNames: [
        'Zondag',
        'Maandag',
        'Dinsdag',
        'Woensdag',
        'Donderdag',
        'Vrijdag',
        'Zaterdag',
      ],
      dayNamesShort: ['Zo', 'Ma', 'Di', 'Wo', 'Do', 'Vr', 'Za'],
    }
    LocaleConfig.defaultLocale = 'nl'
  }, [])
}

export const useActivities = (group) => {
  const { data } = useGetActivitiesByTargetGrpQuery(group)
  const activities = data ?? []
  return { activities } as any
}

export const useActivitiesByDate = (date) => {
  const { data } = useGetActivitiesByDateQuery(date ?? '')
  const activities = data ?? []
  return { activities } as any
}

export const useNews = () => {
  const { data } = useGetNewsQuery({})
  const news = data ?? []
  return { news } as any
}

export const useOrganizationsBySearchVal = (searchValue) => {
  const { data, isLoading } = useGetOrgBySearchValQuery(searchValue)
  const organizations = data ?? []
  return { organizations, isLoading } as any
}

export const useDrawer = () => {
  const dispatch = useAppDispatch()
  const drawerStatus = useAppSelector((state) => state.general.drawerStatus)
  const toggleDrawer = () => dispatch(setDrawer(!drawerStatus))
  const closeDrawer = () => dispatch(setDrawer(false))

  return {
    drawerStatus,
    toggleDrawer,
    closeDrawer,
  }
}
