import React from 'react';
import { View, StyleSheet } from 'react-native';
import { COLORS } from '../utils/constants';

const ProgressBar = ({ progress, color = COLORS.primary }) => (
  <View style={styles.progressContainer}>
    <View style={[styles.progressBar, { width: `${Math.min(progress, 100)}%`, backgroundColor: color }]} />
  </View>
);

const styles = StyleSheet.create({
  progressContainer: {
    height: 8,
    backgroundColor: COLORS.border,
    borderRadius: 4,
    marginBottom: 8,
  },
  progressBar: {
    height: '100%',
    borderRadius: 4,
  },
});

export default ProgressBar;