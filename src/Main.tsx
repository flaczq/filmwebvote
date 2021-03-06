import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import Login from './Login';
import Vote from './Vote';

interface MainProps {

}

const Main: React.FC<MainProps> = (props) => {
    console.log('main');

    const [isLogged, setLogged] = useState(false);

    // useEffect(() => {
    //     fetch('https://facebook.github.io/react-native/movies.json')
    //         .then(resposne => resposne.json())
    //         .then(responseJson => {
    //             console.log(responseJson);
    //             setTimeout(() => {
    //                 setLogged(true);
    //             }, 1000);
    //         })
    //         .catch(error => {
    //             console.error(error);
    //         });
    // }, []);

    const view = () => (
        isLogged ? <Vote xxx={'a'} /> : <Login />
    );

    return (
        <View style={styles.container}>
            {view()}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: '1%',
        backgroundColor: '#ccc'
    }
});

export default Main;