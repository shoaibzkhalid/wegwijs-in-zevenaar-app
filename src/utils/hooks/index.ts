import React, { useEffect } from 'react'
import { LocaleConfig } from 'react-native-calendars'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from 'store'
import { useGetCategoriesQuery, useGetGeneralQuery } from 'store/api'
import { setCurrentPage, setDrawer } from 'store/generalSlice'

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const useCategories = (selectedCategory) => {
  const { data, isLoading } = useGetCategoriesQuery({})
  const selectedCategories = data?.filter((category) => category.id === selectedCategory)[0]

  return { selectedCategories, isLoading }
}

export const useData = (query, value = '') => {
  const [items, setItems] = React.useState([])
  const page = useAppSelector((state) => state.general.currentPage)

  const queryParams = { key: value, page }
  const { data, ...keys } = query(queryParams)

  // console.log('data query', queryParams, data)

  React.useEffect(() => {
    if (page === 1) {
      setItems(data?.data)
    }
    setItems((prevState) => [...new Set(prevState?.concat([...data.data]))])
  }, [data])

  return { items, lp: data?.lastPage ?? 1, ...keys }
}

export const usePage = () => {
  const page = useAppSelector((state) => state.general.currentPage)
  const dispatch = useAppDispatch()

  useEffect(() => {
    return () => {
      dispatch(setCurrentPage(1))
    }
  }, [])

  const incPage = () => dispatch(setCurrentPage(page + 1))

  return { page, incPage }
}

export const useDrawer = () => {
  const dispatch = useAppDispatch()
  const drawerStatus = useAppSelector((state) => state.general.drawerStatus)
  const toggleDrawer = () => dispatch(setDrawer(!drawerStatus))
  const closeDrawer = () => dispatch(setDrawer(false))
  const openDrawer = () => dispatch(setDrawer(true))

  return {
    drawerStatus,
    toggleDrawer,
    closeDrawer,
    openDrawer,
  }
}

export const useGeneral = () => {
  const { data, isLoading } = useGetGeneralQuery({})

  const generalData = data ?? {}
  return { generalData, isLoading }
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

export const useSettings = () => {
  const appTheme = useAppSelector((state) => (state as any).settings)
  return { appTheme }
}
