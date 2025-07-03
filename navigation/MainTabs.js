import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import ResumoScreen from '../screens/ResumoScreen';
import NovoGastoScreen from '../screens/NovoGastoScreen';
import HistoricoScreen from '../screens/HistoricoScreen';
import PerfilScreen from '../screens/PerfilScreen';

const Tab = createBottomTabNavigator();

const MainTabs = ({ expenses, onAddExpense, profile, onUpdateProfile }) => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#6200EE',
        tabBarInactiveTintColor: '#999',
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopWidth: 1,
          borderTopColor: '#E0E0E0',
          height: 60,
          paddingBottom: 8,
          paddingTop: 8,
        },
      }}
    >
      <Tab.Screen
        name="Resumo"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="pie-chart" size={size} color={color} />
          ),
        }}
      >
        {() => <ResumoScreen expenses={expenses} profile={profile} />}
      </Tab.Screen>
      
      <Tab.Screen
        name="Novo Gasto"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="add-circle" size={size} color={color} />
          ),
        }}
      >
        {() => <NovoGastoScreen onAddExpense={onAddExpense} />}
      </Tab.Screen>
      
      <Tab.Screen
        name="Histórico"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="list" size={size} color={color} />
          ),
        }}
      >
        {() => <HistoricoScreen expenses={expenses} />}
      </Tab.Screen>
      
      <Tab.Screen
        name="Perfil"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      >
        {() => <PerfilScreen profile={profile} onUpdateProfile={onUpdateProfile} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default MainTabs;