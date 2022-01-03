import React from 'react'
import { FlatList, ListRenderItem } from 'react-native'
import { Loader } from './Loader'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { usePage } from 'utils/hooks'

type Props = {
  isLoading: boolean
  isFetching?: boolean
  renderItem: ListRenderItem<any>
  data: readonly any[]
  lastPage: number
  ListHeaderComponent: any
}

export const CustomList = (props: Props) => {
  const { isLoading, renderItem, data, lastPage } = props
  const { isFetching, ListHeaderComponent } = props
  const { page, incPage } = usePage()

  // console.log('test', isLoading, isFetching)
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
      ListFooterComponent={() => (!isLoading && isFetching ? <Loader /> : null)}
    />
  )
}
