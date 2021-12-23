import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from 'store'
import { useGetCategoriesQuery } from 'store/api'

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const useCategories = (selectedCategory) => {
  const { data, isLoading } = useGetCategoriesQuery({})

  console.log('data', data, isLoading)

  const selectedCategories = data?.filter((category) => category.id == selectedCategory)[0]

  return { selectedCategories }
}

export const useSettings = () => {
  const appTheme = useAppSelector((state) => state.settings)

  return { appTheme }
}
