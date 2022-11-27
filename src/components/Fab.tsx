import React from 'react';
import {TouchableOpacity} from 'react-native';
import {
  Text,
  TouchableNativeFeedback,
  View,
  StyleSheet,
  Platform,
} from 'react-native';

interface Props {
  title: string;
  position?: 'br' | 'bl';
  onPress: () => void;
}

export const Fab = ({title, onPress, position = 'br'}: Props) => {
  const ios = () => {
    return (
      <>
        <View
          style={
            position == 'br' ? styles.fabLocationBR : styles.fabLocationBL
          }>
          <TouchableOpacity onPress={onPress}>
            <View style={styles.fab}>
              <Text style={styles.fabText}>{title}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </>
    );
  };
  const android = () => {
    return (
      <>
        <View
          style={
            position == 'br' ? styles.fabLocationBR : styles.fabLocationBL
          }>
          <TouchableNativeFeedback
            onPress={onPress}
            background={TouchableNativeFeedback.Ripple('black', false, 100)}>
            <View style={styles.fab}>
              <Text style={styles.fabText}>{title}</Text>
            </View>
          </TouchableNativeFeedback>
        </View>
      </>
    );
  };
  return (Platform.OS === 'ios')
  ? ios()
  : android()
};

const styles = StyleSheet.create({
  fabLocationBR: {
    position: 'absolute',
    bottom: 25,
    right: 25,
  },
  fabLocationBL: {
    position: 'absolute',
    bottom: 25,
    left: 25,
  },
  fab: {
    backgroundColor: '#5856D6',
    width: 60,
    height: 60,
    borderRadius: 100,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  fabText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    alignSelf: 'center',
  },
});
