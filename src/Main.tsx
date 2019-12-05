import React from 'react';
import { StyleSheet, View } from 'react-native';
import Login from './Login';
import Vote from './Vote';

interface MainProps {

}

const Main: React.FC<MainProps> = (props) => {
    console.log('main');

    const isLogged = 0;
    const view = isLogged ? <Vote xxx={123} /> : <Login abc='abcd' />;

    return (
        <View style={styles.container}>
            {view}
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