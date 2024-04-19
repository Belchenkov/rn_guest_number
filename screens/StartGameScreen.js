import { View, TextInput, StyleSheet } from 'react-native';

import PrimaryButton from '../components/PrimaryButton';

const StartGameScreen = () => {
    return (
        <View style={styles.inputContainer}>
            <TextInput />
            <PrimaryButton>Reset</PrimaryButton>
            <PrimaryButton>Confirm</PrimaryButton>
        </View>
    );
};

export default StartGameScreen;

const styles = StyleSheet.create({
    inputContainer: {
        padding: 16,
        marginTop: 100,
        marginHorizontal: 24,
        borderRadius: 8,
        backgroundColor: '#72063c',
        elevation: 4,
        shadowColor: 'black',
        shadowRadius: 6,
        shadowOpacity: .25,
        shadowOffset: {
            width: 0,
            height: 2,
        },
    }
});
