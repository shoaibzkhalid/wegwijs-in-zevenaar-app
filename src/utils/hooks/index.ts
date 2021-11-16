import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from 'store'

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const useSettings = () => {
  const appTheme = useAppSelector((state) => state.settings)

  return { appTheme }
}
