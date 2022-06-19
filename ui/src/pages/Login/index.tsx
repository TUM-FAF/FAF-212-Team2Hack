import React, {ChangeEvent, useCallback, useState} from 'react';
import {Box, Button, Input} from "@mui/material";
import axios, {AxiosResponse} from "axios";
import {API_URL} from "../../constants";

type Auth = {
    access_token: string;
}

const Login: React.FC = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [token, setToken] = useState<string>('');

    const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    }

    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    const handleOnLogin = useCallback(
        async () => {
            try {
                console.log(username, password)
                const result = await axios.post<Auth>(API_URL + 'login', {
                    username: username,
                    password: password
                })
                if (result) {
                    const config = {
                        headers: {
                            Authorization: `Bearer ${result.data.access_token}`
                        }
                    };
                    console.log(result);
                    const t = await axios.get(API_URL + 'profile', config);
                }
            } catch (e) {
                console.error(e);
            }
        },
        [username, password]);
    return (
        <Box display="flex" flexDirection="column" gap="4px">
            <Input onChange={handleUsernameChange}/>
            <Input onChange={handlePasswordChange}/>
            <Button onClick={handleOnLogin}>Login</Button>
        </Box>
    )
}

export default Login;