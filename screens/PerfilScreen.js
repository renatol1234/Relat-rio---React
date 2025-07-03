import React, { useState } from 'react';
import { ScrollView, View, Text, Alert, StyleSheet, Image } from 'react-native'; // Importe Image se Avatar for usá-lo
import Header from '../components/Header';
import Avatar from '../components/Avatar'; // Certifique-se de que este componente lida com 'imageUri'
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import MenuItem from '../ui/MenuItem';
import Footer from '../components/Footer';
import globalStyles from '../styles/globalStyles'; // Verifique se este caminho está correto e o objeto exportado

const PerfilScreen = ({ profile, onUpdateProfile }) => {
  // Inicializa os estados com os valores do profile ou strings vazias
  const [name, setName] = useState(profile?.name || '');
  const [email, setEmail] = useState(profile?.email || '');

  // Gera uma URL de avatar aleatória para demonstração
  const generateRandomAvatar = () => {
    const randomId = Math.floor(Math.random() * 1000);
    return `https://picsum.photos/seed/${randomId}/200/200`;
  };

  const handleSaveProfile = () => {
    // Validação básica dos campos
    if (!name.trim() || !email.trim()) { // .trim() para remover espaços em branco
      Alert.alert('Erro', 'Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    // Validação de formato de e-mail (opcional, mas recomendado)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert('Erro', 'Por favor, insira um e-mail válido.');
      return;
    }

    // Chama a função onUpdateProfile passada via props
    onUpdateProfile({ name, email });
    Alert.alert('Sucesso', 'Perfil atualizado com sucesso!');
  };

  return (
    <ScrollView style={globalStyles?.container || { flex: 1, backgroundColor: '#F5F5F5' }}>
      <Header title="Meu Perfil" />

      <View style={localStyles.profileContainer}>
        {/* O componente Avatar deve ser capaz de receber imageUri, name e size */}
        <Avatar
          imageUri={generateRandomAvatar()}
          name={name}
          size={120}
        />

        <Text style={localStyles.profileName}>{name || 'Usuário Padrão'}</Text>
        <Text style={localStyles.profileEmail}>{email || 'usuario@exemplo.com'}</Text>
      </View>

      <View style={globalStyles?.formContainer || localStyles.formSection}>
        <CustomInput
          label="Nome Completo"
          value={name}
          onChangeText={setName}
          placeholder="Digite seu nome"
        />

        <CustomInput
          label="E-mail"
          value={email}
          onChangeText={setEmail}
          placeholder="Digite seu e-mail"
          keyboardType="email-address" // Garante o teclado de e-mail
          autoCapitalize="none" // Evita capitalização automática para e-mail
        />

        <CustomButton
          title="Salvar Perfil"
          onPress={handleSaveProfile}
          icon="save" // Certifique-se de que seu CustomButton lida com ícones
        />
      </View>

      <View style={localStyles.menuSection}>
        {/* CORREÇÃO AQUI: 'styles' foi alterado para 'localStyles' */}
        <Text style={localStyles.sectionTitle}>Configurações</Text>
        <MenuItem
          icon="notifications-outline"
          title="Notificações"
          onPress={() => Alert.alert('Em breve', 'Funcionalidade em desenvolvimento')}
        />
        <MenuItem
          icon="shield-checkmark-outline"
          title="Privacidade"
          onPress={() => Alert.alert('Em breve', 'Funcionalidade em desenvolvimento')}
        />
        <MenuItem
          icon="help-circle-outline"
          title="Ajuda"
          onPress={() => Alert.alert('Em breve', 'Funcionalidade em desenvolvimento')}
        />
      </View>

      <Footer />
    </ScrollView>
  );
};

const localStyles = StyleSheet.create({
  profileContainer: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
    marginBottom: 20,
    shadowColor: '#000', // Sombra para dar profundidade
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
    marginHorizontal: 10, // Adicionado para não ficar colado nas bordas
    borderRadius: 10,
  },
  profileName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
    marginTop: 10, // Espaço após o avatar
  },
  profileEmail: {
    fontSize: 16,
    color: '#666',
  },
  // Novo estilo adicionado para corrigir o erro
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
    marginLeft: 5, // Pequeno recuo para alinhar com os itens
  },
  menuSection: {
    backgroundColor: '#fff',
    marginHorizontal: 10, // Harmonizado com profileContainer
    borderRadius: 10,
    padding: 15, // Um pouco menos de padding
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  // Adicionado um estilo para formContainer caso globalStyles não o tenha
  formSection: {
    backgroundColor: '#fff',
    marginHorizontal: 10,
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default PerfilScreen;