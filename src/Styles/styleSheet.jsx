import {StyleSheet} from 'react-native';

const colors = {
  primary: '#2D3047',
  secondary: '#F2F2F2',
  tertiary: '#F2C94C',
  black: '#000000',
  white: '#FFFFFF',
  red: '#FF0000',
  green: '#00FF00',
  blue: '#0000FF',
  yellow: '#FFFF00',
  cyan: '#00FFFF',
  magenta: '#FF00FF',
  silver: '#C0C0C0',
  gray: '#808080',
  maroon: '#800000',
  olive: '#808000',
  purple: '#800080',
  teal: '#008080',
  navy: '#000080',
};

const styleSheet = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        width: '80%',
        height: 50,
        backgroundColor: colors.secondary,
        borderRadius: 15,
        padding: 10,
        marginBottom: 10,
    },
    addButton: {
        backgroundColor: colors.tertiary,
        height: 50,
        width: 50,
        borderRadius: 15,
        position: 'absolute',
        bottom: 20,
        right: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    submitButton: {
        backgroundColor: colors.tertiary,
        height: 50,
        width: 100,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,   
    },
    buttonText: {
        color: colors.black,
        fontSize: 20,
    },
});

module.exports = {
  colors,
  styleSheet,
};
