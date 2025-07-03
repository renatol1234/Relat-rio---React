import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CategoryBadge = ({ category }) => (
  <View style={styles.categoryBadge}>
    <Text style={styles.categoryBadgeText}>{category}</Text>
  </View>
);

const styles = StyleSheet.create({
  categoryBadge: {
    backgroundColor: '#E3F2FD',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
  },
  categoryBadgeText: {
    color: '#1976D2',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default CategoryBadge;