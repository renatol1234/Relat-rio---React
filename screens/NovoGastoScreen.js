import React, { useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import Header from '../components/Header';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import Footer from '../components/Footer';
import { globalStyles } from '../styles/globalStyles';
import { CATEGORIES, COLORS } from '../utils/constants';

const NovoGastoScreen = ({ onAddExpense }) => {
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const [category, setCategory] = useState('');
  const [isIncome, setIsIncome] = useState(false);

  const handleAddExpense = () => {
    if (!description || !value || !category) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos');
      return;
    }

    const numericValue = parseFloat(value);
    if (isNaN(numericValue)) {
      Alert.alert('Erro', 'Por favor, insira um valor válido');
      return;
    }

    const expense = {
      id: Date.now(),
      description,
      value: isIncome ? numericValue : -numericValue,
      category,
      date: new Date().toISOString(),
    };

    onAddExpense(expense);
    
    setDescription('');
    setValue('');
    setCategory('');
    setIsIncome(false);

    Alert.alert('Sucesso', 'Transação adicionada com sucesso!');
  };

  return (
    <ScrollView style={globalStyles.container}>
      <Header title="Nova Transação" />
      
      <View style={globalStyles.formContainer}>
        <View style={styles.toggleContainer}>
          <TouchableOpacity 
            style={[styles.toggleButton, !isIncome && styles.toggleActive]}
            onPress={() => setIsIncome(false)}
          >
            <Text style={[styles.toggleText, !isIncome && styles.toggleTextActive]}>Despesa</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.toggleButton, isIncome && styles.toggleActive]}
            onPress={() => setIsIncome(true)}
          >
            <Text style={[styles.toggleText, isIncome && styles.toggleTextActive]}>Receita</Text>
          </TouchableOpacity>
        </View>

        <CustomInput
          label="Descrição"
          value={description}
          onChangeText={setDescription}
          placeholder="Ex: Almoço no restaurante"
        />

        <CustomInput
          label="Valor"
          value={value}
          onChangeText={setValue}
          placeholder="0,00"
          keyboardType="numeric"
        />

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Categoria</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesContainer}>
            {CATEGORIES.map((cat) => (
              <TouchableOpacity
                key={cat}
                style={[styles.categoryItem, category === cat && styles.categoryItemSelected]}
                onPress={() => setCategory(cat)}
              >
                <Text style={[styles.categoryItemText, category === cat && styles.categoryItemTextSelected]}>
                  {cat}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <CustomButton
          title={`Adicionar ${isIncome ? 'Receita' : 'Despesa'}`}
          onPress={handleAddExpense}
          icon={isIncome ? "add-circle" : "remove-circle"}
          style={{ backgroundColor: isIncome ? COLORS.success : COLORS.error }}
        />
      </View>

      <Footer />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  toggleContainer: {
    flexDirection: 'row',
    backgroundColor: COLORS.border,
    borderRadius: 25,
    marginBottom: 20,
    padding: 4,
  },
  toggleButton: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 20,
  },
  toggleActive: {
    backgroundColor: COLORS.primary,
  },
  toggleText: {
    fontSize: 16,
    color: COLORS.textSecondary,
  },
  toggleTextActive: {
    color: '#fff',
    fontWeight: 'bold',
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: 8,
  },
  categoriesContainer: {
    marginTop: 10,
  },
  categoryItem: {
    backgroundColor: COLORS.surface,
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  categoryItemSelected: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },
  categoryItemText: {
    color: COLORS.textSecondary,
    fontSize: 14,
  },
  categoryItemTextSelected: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default NovoGastoScreen;