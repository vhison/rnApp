import * as React from 'react'
import { View, StyleSheet } from 'react-native'
export function Divider() {
  return <View style={styles.divider} />
}
const styles = StyleSheet.create({
  divider: {
    height: 0.5,
    backgroundColor: '#ccc',
    marginVertical: 20,
    marginHorizontal: 20,
  },
})
