import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

interface LoginProps {
    abc: string
}

const Login: React.FC<LoginProps> = (props) => {
    console.log('login');

    return (
        <View style={styles.container}>
            <Text>LOGIN</Text>
            <Button
                title={props.abc}
                onPress={() => console.log('logging')}
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
        backgroundColor: '#0ff'
    }
});

export default Login;