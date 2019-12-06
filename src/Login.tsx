import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';
import * as Utils from './Utils';

interface LoginProps {

}

const Login: React.FC<LoginProps> = (props) => {
    console.log('login');

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [hiddenPassword, setHiddenPassword] = useState(true);
    const [headers, setHeaders] = useState({});

    const tryLogging = () => {
        if (!user.length || !password.length) {
            console.error('no user/password');
            return;
        }

        const method = `${Utils.METHODS.LOGIN} [${user},${password},1]`;

        fetch(`${Utils.FW_URL}`
            + `?methods=${method}%5Cn`
            + `&signature=${Utils.getSignature(method)}`
            + `&version=${Utils.VERSION}`
            + `&appId=${Utils.APPID}`, {
            method: 'POST'
            //BODY
        })
            .then(response => {
                //setHeaders(response.headers.get('Set-Cookie'));
                return response.text();
            })
            .then(parsed => {
                if (parsed.startsWith('ok')) {
                    console.log(parsed);
                } else {
                    console.error(parsed);
                }
            }).catch(error => {
                console.error(error);
            });
    };

    return (
        <View style={styles.container}>
            <Text>LOGIN</Text>
            <TextInput
                value={user}
                onChangeText={u => setUser(u)}
                placeholder='login'
            />
            <TextInput
                value={password}
                onChangeText={p => setPassword(p)}
                placeholder='password'
                secureTextEntry={hiddenPassword}
            />
            <Button
                title='<3'
                onPress={() => setHiddenPassword(!hiddenPassword)}
            />
            <Button
                title='zaloguj'
                onPress={() => tryLogging()}
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