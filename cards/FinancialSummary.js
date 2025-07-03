import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../utils/constants';

const FinancialSummary = ({ totalIncome, totalExpenses, balance }) => (
  <View style={styles.summaryContainer}>
    <View style={styles.summaryCard}>
      <Text style={styles.summaryLabel}>Receitas</Text>
      <Text style={[styles.summaryValue, { color: COLORS.success }]}>
        R$ {totalIncome.toFixed(2)}
      </Text>
    </View>
    <View style={styles.summaryCard}>
      <Text style={styles.summaryLabel}>Despesas</Text>
      <Text style={[styles.summaryValue, { color: COLORS.error }]}>
        R$ {totalExpenses.toFixed(2)}
      </Text>
    </View>
    <View style={[styles.summaryCard, { backgroundColor: balance >= 0 ? '#E8F5E8' : '#FFEBEE' }]}>
      <Text style={styles.summaryLabel}>Saldo</Text>
      <Text style={[styles.summaryValue, { color: balance >= 0 ? COLORS.success : COLORS.error }]}>
        R$ {balance.toFixed(2)}
      </Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  summaryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  summaryCard: {
    flex: 1,
    backgroundColor: COLORS.surface,
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 5,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  summaryLabel: {
    fontSize: 14,
    color: COLORS.textSecondary,
    marginBottom: 5,
  },
  summaryValue: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default FinancialSummary;