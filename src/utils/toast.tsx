import { COLORS } from 'theme'

import React from 'react'
import Toast, { BaseToast } from 'react-native-toast-message'
export const toastConfig = {
  /* 
    overwrite 'success' type, 
    modifying the existing `BaseToast` component
  */
  success: ({ text1, props, ...rest }) => (
    <BaseToast
      {...rest}
      style={{ borderLeftColor: COLORS.primary }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 16,
        fontWeight: '400',
      }}
      text1={text1}
      text2={props.uuid}
      text1NumberOfLines={1}
      text2NumberOfLines={1}
      // trailingIcon={null}
    />
  ),
}

export const showToast = (title: string) => {
  Toast.show({
    position: 'bottom',
    type: 'success',
    text1: title,
    // visibilityTime: 3000,
    // autoHide: false,
  })
}
