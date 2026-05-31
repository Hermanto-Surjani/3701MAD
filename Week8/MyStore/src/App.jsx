import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import BottomBar from './components/BottomBar';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
        <View style={styles.content}>
          {currentPage === 'home' ? (
            <HomePage />
          ) : (
            <CartPage onBack={() => setCurrentPage('home')} />
          )}
        </View>
        <SafeAreaView edges={['bottom']} style={styles.bottomSafe}>
          <BottomBar onCartPress={() => setCurrentPage('cart')} />
        </SafeAreaView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { flex: 1 },
  bottomSafe: { backgroundColor: '#333' },
});
