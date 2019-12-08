import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import * as Utils from './Utils';

interface VoteProps {
    xxx: string
}

const Vote: React.FC<VoteProps> = (props) => {
    console.log('vote');

    // const movieId = '568905';
    // const method = `${Utils.METHODS.FILM_DESCRIPTION} [${movieId}]`;

    // fetch(`${Utils.FW_URL}`
    //     + `?methods=${method}%5Cn`
    //     + `&signature=${Utils.getSignature(method)}`
    //     + `&version=${Utils.VERSION}`
    //     + `&appId=${Utils.APPID}`, {
    //     method: 'GET'
    // })
    //     .then(response => response.text())
    //     .then(parsed => {
    //         if (parsed.startsWith('ok')) {
    //             console.log(parsed);
    //         } else {
    //             console.error(parsed);
    //         }
    //     }).catch(error => {
    //         console.error(error);
    //     });
    fetch('https://www.filmweb.pl/rpc/userFilmRemoteService', {
        method: 'POST',
        body: '7|0|6|https://2.fwcdn.pl/gwt/voteJsActions/|C7EF60E52771F09E784BC47ADD91B466|filmweb.gwt.filmactivity.client.UserFilmRemoteService|setRate|J|I|1|2|3|4|2|5|6|CK5J|1|',
        headers: {
            'Content-Type': 'text/x-gwt-rpc',
            'Cookie': 'abc'
        }
    })
        .then(response => response.text())
        .then(parsed => {
            if (parsed.startsWith('ok')) {
                console.log('11', parsed);
            } else {
                console.error('22', parsed);
            }
        }).catch(error => {
            console.error('33', error);
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