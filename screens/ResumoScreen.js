import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import Header from '../components/Header';
import FinancialSummary from '../cards/FinancialSummary';
import StatsCard from '../cards/StatsCard';
import ProgressBar from '../components/ProgressBar';
import Footer from '../components/Footer';
import { globalStyles } from '../styles/globalStyles';
import { COLORS } from '../utils/constants';

const ResumoScreen = ({ expenses, profile }) => {
  const totalIncome = expenses.filter(exp => exp.value > 0).reduce((sum, exp) => sum + exp.value, 0);
  const totalExpenses = expenses.filter(exp => exp.value < 0).reduce((sum, exp) => sum + Math.abs(exp.value), 0);
  const balance = totalIncome - totalExpenses;

  const expensesByCategory = expenses.reduce((acc, expense) => {
    if (expense.value < 0) {
      acc[expense.category] = (acc[expense.category] || 0) + Math.abs(expense.value);
    }
    return acc;
  }, {});

  const topCategory = Object.keys(expensesByCategory).reduce((a, b) => 
    expensesByCategory[a] > expensesByCategory[b] ? a : b, 
    Object.keys(expensesByCategory)[0]
  );

  return (
    <ScrollView style={globalStyles.container}>
      <Header title="Meu resumo Financeiro" />
      
      <View style={styles.welcomeSection}>
        <Text style={styles.welcomeText}>Olá, {profile.name || 'Usuário'}!</Text>
        <Text style={styles.welcomeSubtext}>Aqui está seu resumo financeiro</Text>
      </View>

      <FinancialSummary 
        totalIncome={totalIncome}
        totalExpenses={totalExpenses}
        balance={balance}
      />

      <View style={styles.statsSection}>
        <Text style={globalStyles.sectionTitle}>Estatísticas</Text>
        <View style={styles.statsRow}>
          <StatsCard 
            icon="trending-up" 
            title="Total de Transações" 
            value={expenses.length.toString()} 
            color={COLORS.primary} 
          />
          <StatsCard 
            icon="pie-chart" 
            title="Maior Categoria" 
            value={topCategory || 'N/A'} 
            color={COLORS.warning} 
          />
        </View>
        
        {balance > 0 && (
          <View style={styles.progressSection}>
            <Text style={styles.progressTitle}>Meta de Economia (70%)</Text>
            <ProgressBar progress={(balance / totalIncome) * 100} color={COLORS.success} />
            <Text style={styles.progressText}>
              {((balance / totalIncome) * 100).toFixed(1)}% da receita poupada
            </Text>
          </View>
        )}
      </View>

      <Footer />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  welcomeSection: {
    padding: 20,
    backgroundColor: COLORS.surface,
    marginBottom: 10,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.text,
  },
  welcomeSubtext: {
    fontSize: 16,
    color: COLORS.textSecondary,
    marginTop: 5,
  },
  statsSection: {
    backgroundColor: COLORS.surface,
    marginHorizontal: 20,
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  progressSection: {
    marginTop: 10,
  },
  progressTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: 10,
  },
  progressText: {
    fontSize: 14,
    color: COLORS.textSecondary,
    textAlign: 'center',
  },
});

export default ResumoScreen;