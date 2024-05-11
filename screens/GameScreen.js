import { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

import Title from '../components/ui/Title';
import NumberContainer from '../components/game/NumberContainer';

function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    return rndNum === exclude ? generateRandomBetween(min, max, exclude) : rndNum;
}

const GameScreen = ({ userNumber }) => {
    const initialGuess = generateRandomBetween(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);

    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <View>
                <Text>Higher or lower?</Text>
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
