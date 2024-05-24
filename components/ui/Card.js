import { StyleSheet, View } from 'react-native';
import Colors from '../../constants/colors';

const Card = ({ children }) => {
    return (
        <View style={styles.card}>{children}</View>
    );
};

export default Card;

const styles = StyleSheet.create({
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        marginTop: 36,
        marginHorizontal: 24,
        borderRadius: 8,
        backgroundColor: Colors.primary800,
        elevation: 4,
        shadowColor: 'black',
        shadowRadius: 6,
        shadowOpacity: .25,
        shadowOffset: {
            width: 0,
            height: 2,
        },
    },
});
