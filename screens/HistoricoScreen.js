import React from 'react';
import { View, FlatList } from 'react-native';
import Header from '../components/Header';
import ExpenseCard from '../cards/ExpenseCard';
import EmptyState from '../components/EmptyState';
import Footer from '../components/Footer';
import { globalStyles } from '../styles/globalStyles';

const HistoricoScreen = ({ expenses }) => {
  const sortedExpenses = [...expenses].sort((a, b) => new Date(b.date) - new Date(a.date));

  const renderExpenseItem = ({ item }) => (
    <ExpenseCard expense={item} />
  );

  return (
    <View style={globalStyles.container}>
      <Header title="Histórico de Transações" />
      
      {expenses.length === 0 ? (
        <EmptyState 
          icon="receipt-outline"
          title="Nenhuma transação"
          subtitle="Adicione sua primeira transação na aba 'Novo Gasto'"
        />
      ) : (
        <FlatList
          data={sortedExpenses}
          renderItem={renderExpenseItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={globalStyles.listContainer}
          showsVerticalScrollIndicator={false}
        />
      )}
      
      <Footer />
    </View>
  );
};

export default HistoricoScreen;