import React, { useState } from 'react'
import { Button, StyleSheet, Text, View, FlatList } from 'react-native'

import Header from './components/Header'

const App: React.FC = () => {
  return (
    <View style={styles.contariner}>
      <Header title="Header" />
      <Text>index.tsx</Text>
    </View>
  )
}

// styles
const styles = StyleSheet.create({
  contariner: {},
})

export default App
