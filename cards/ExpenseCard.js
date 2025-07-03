import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../utils/constants';

const ExpenseCard = ({ expense }) => (
  <View style={[styles.expenseCard, { borderLeftColor: expense.value >= 0 ? COLORS.success : COLORS.error }]}>
    <View style={styles.expenseCardContent}>
      <Text style={styles.expenseDescription}>{expense.description}</Text>
      <Text style={styles.expenseCategory}>{expense.category}</Text>
    </View>
    <Text style={[styles.expenseValue, { color: expense.value >= 0 ? COLORS.success : COLORS.error }]}>
      R$ {Math.abs(expense.value).toFixed(2)}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  expenseCard: {
    backgroundColor: COLORS.surface,
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderLeftWidth: 4,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  expenseCardContent: {
    flex: 1,
  },
  expenseDescription: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: 5,
  },
  expenseCategory: {
    fontSize: 14,
    color: COLORS.textSecondary,
  },
  expenseValue: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ExpenseCard;