import { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Alert,
} from 'react-native';

import Title from '../components/ui/Title';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';

let minBoundary = 1;
let maxBoundary = 100;

function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    return rndNum === exclude ? generateRandomBetween(min, max, exclude) : rndNum;
}

const GameScreen = ({ userNumber }) => {
    const initialGuess = generateRandomBetween(minBoundary, maxBoundary, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);

    const nextGuessHandler = direction => {
        if ((direction === 'lower' && currentGuess < userNumber) || (direction === 'greater' && currentGuess > userNumber)) {
            Alert.alert("Don't lie!", 'You know that this is wrong...', {
                text: 'Sorry!',
                style: 'cancel',
            });
            return;
        }

        if (direction === 'lower') {
            maxBoundary = currentGuess;
        } else {
            minBoundary = currentGuess + 1;
        }

        const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(newRndNumber);
    };

    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <View>
                <Text>Higher or lower?</Text>
                <View>
                    <PrimaryButton onPress={() => nextGuessHandler('lower')}>-</PrimaryButton>
                    <PrimaryButton onPress={() => nextGuessHandler('greater')}>+</PrimaryButton>
                </View>
            </View>
            {/*<View>LOG ROUNDS</View>*/}
        </View>
    );
};

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
    },
});
