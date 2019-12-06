import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import * as Utils from './Utils';

interface VoteProps {
    xxx: string
}

const Vote: React.FC<VoteProps> = (props) => {
    console.log('vote');

    const movieId = '568905';
    const method = `${Utils.METHODS.FILM_DESCRIPTION} [${movieId}]`;

    fetch(`${Utils.FW_URL}`
        + `?methods=${method}%5Cn`
        + `&signature=${Utils.getSignature(method)}`
        + `&version=${Utils.VERSION}`
        + `&appId=${Utils.APPID}`, {
        method: 'GET'
    })
        .then(response => response.text())
        .then(parsed => {
            if (parsed.startsWith('ok')) {
                console.log(parsed);
            } else {
                console.error(parsed);
            }
        }).catch(error => {
            console.error(error);
        });

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