import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

interface VoteProps {
    xxx: number
}

const Vote: React.FC<VoteProps> = (props) => {
    console.log('vote');

    return (
        <View style={styles.container}>
            <Text>VOTE</Text>
            <Button
                title={props.xxx.toString()}
                onPress={() => console.log('voting')}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#ff0'
    }
});

export default Vote;