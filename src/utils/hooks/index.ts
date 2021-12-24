import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from 'store'
import { useGetCategoriesQuery, useGetOrganizationsQuery } from 'store/api'

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const useCategories = (selectedCategory) => {
  const { data } = useGetCategoriesQuery({})

  console.log('data', data)

  const selectedCategories = data?.filter((category) => category.id == selectedCategory)[0]

  return { selectedCategories }
}

export const useOrganizations = (categoryId) => {
  const { data } = useGetOrganizationsQuery(categoryId)

  const organizations = data ?? []

  return { organizations } as any
}

export const useSettings = () => {
  const appTheme = useAppSelector((state) => state.settings)

  return { appTheme }
}
