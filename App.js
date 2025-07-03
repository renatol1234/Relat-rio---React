import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainTabs from './navigation/MainTabs';

export default function App() {
  const [expenses, setExpenses] = useState([]);
  const [profile, setProfile] = useState({ name: '', email: '' });

  const addExpense = (expense) => {
    setExpenses(prev => [...prev, expense]);
  };

  const updateProfile = (newProfile) => {
    setProfile(newProfile);
  };

  return (
    <NavigationContainer>
      <MainTabs
        expenses={expenses}
        onAddExpense={addExpense}
        profile={profile}
        onUpdateProfile={updateProfile}
      />
    </NavigationContainer>
  );
}