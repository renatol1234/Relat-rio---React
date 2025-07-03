import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { COLORS } from '../utils/constants';

const Avatar = ({ imageUri, name, size = 80 }) => (
  <View style={[styles.avatarContainer, { width: size, height: size }]}>
    {imageUri ? (
      <Image source={{ uri: imageUri }} style={[styles.avatar, { width: size, height: size }]} />
    ) : (
      <View style={[styles.avatarPlaceholder, { width: size, height: size }]}>
        <Text style={styles.avatarText}>{name ? name.charAt(0).toUpperCase() : 'U'}</Text>
      </View>
    )}
  </View>
);

const styles = StyleSheet.create({
  avatarContainer: {
    borderRadius: 50,
    overflow: 'hidden',
    marginBottom: 15,
  },
  avatar: {
    borderRadius: 50,
  },
  avatarPlaceholder: {
    backgroundColor: COLORS.primary,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Avatar;