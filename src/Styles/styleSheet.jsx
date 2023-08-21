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
    heading: {
        color: colors.white,
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 10,
    },
    goalList: {
        flex: 1,
        padding: 10,
    },
    goalItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        backgroundColor: colors.secondary,
        borderRadius: 15,
        marginBottom: 10,
    },
    goalText: {
        color: colors.black,
        fontSize: 15,
        fontWeight: 'bold',
    },
    deleteButton: {
        height: 20,
        width: 20,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modal: {
        backgroundColor: colors.primary,
        borderWidth: 0.5,
        borderColor: colors.tertiary,
        borderRadius: 15,
        margin: 10,
        paddingVertical: 20,
        position: 'absolute',
        bottom: 0,
        width: '95%',
    },
    input: {
        width: '80%',
        height: 60,
        backgroundColor: colors.secondary,
        borderRadius: 15,
        padding: 10,
        marginVertical: 10
    },
    addButton: {
        backgroundColor: colors.tertiary,
        height: 50,
        width: 50,
        borderRadius: 15,
        position: 'absolute',
        bottom: 20,
        right: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    submitButton: {
        backgroundColor: colors.tertiary,
        height: 40,
        width: 80,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10, 
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
