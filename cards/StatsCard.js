import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const StatsCard = ({ icon, title, value, color }) => (
  <View style={styles.statsCard}>
    <Ionicons name={icon} size={24} color={color} />
    <Text style={styles.statsTitle}>{title}</Text>
    <Text style={[styles.statsValue, { color }]}>{value}</Text>
  </View>
);

const styles = StyleSheet.create({
  statsCard: {
    flex: 1,
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#F8F9FA',
    borderRadius: 10,
    marginHorizontal: 5,
  },
  statsTitle: {
    fontSize: 12,
    color: '#666',
    marginTop: 8,
    textAlign: 'center',
  },
  statsValue: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 4,
  },
});

export default StatsCard;