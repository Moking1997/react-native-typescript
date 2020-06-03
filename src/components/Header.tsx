import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

export interface Props {
  title: string
}

const App: React.FC<Props> = (props) => {
  const { title } = props
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}

// styles
const styles = StyleSheet.create({
  header: {
    paddingTop: 35,
    backgroundColor: '#7be',
    padding: 5,
  },
  text: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 30,
  },
})

export default App
