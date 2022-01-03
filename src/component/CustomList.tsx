import React from 'react'
import { FlatList, ListRenderItem } from 'react-native'
import { Loader } from './Loader'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { setCurrentPage } from 'store/generalSlice'
import { useAppDispatch, useAppSelector, usePage } from 'utils/hooks'
import { CenterAlignText } from 'theme/common.styles'

type Props = {
  isLoading: boolean
  isFetching?: boolean
  renderItem: ListRenderItem<any>
  data: readonly any[]
  lastPage: number
  ListHeaderComponent: any
}

export const CustomList = (props: Props) => {
  const { isLoading, renderItem, data, lastPage, ListHeaderComponent } = props
  const { isFetching } = props
  const { page, incPage } = usePage()
  useAppSelector

  const dispatch = useAppDispatch()

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      ListHeaderComponent={ListHeaderComponent}
      onEndReachedThreshold={0.1}
      ListEmptyComponent={() => isLoading && <Loader />}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={{ paddingBottom: hp(15) }}
      onEndReached={() => {
        if (page < lastPage) {
          incPage()
        }
      }}
      ListFooterComponent={() =>
        isFetching ? (
          <Loader />
        ) : (
          <CenterAlignText>Je hebt het einde van de lijst bereikt</CenterAlignText>
        )
      }
    />
  )
}
