import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../utils/constants';

const MenuItem = ({ icon, title, onPress, value }) => (
  <TouchableOpacity style={styles.menuItem} onPress={onPress}>
    <View style={styles.menuItemLeft}>
      <Ionicons name={icon} size={24} color={COLORS.primary} />
      <Text style={styles.menuItemTitle}>{title}</Text>
    </View>
    {value && <Text style={styles.menuItemValue}>{value}</Text>}
    <Ionicons name="chevron-forward" size={20} color="#999" />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  menuItemLeft: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuItemTitle: {
    fontSize: 16,
    color: COLORS.text,
    marginLeft: 15,
  },
  menuItemValue: {
    fontSize: 14,
    color: COLORS.textSecondary,
    marginRight: 10,
  },
});

export default MenuItem;
