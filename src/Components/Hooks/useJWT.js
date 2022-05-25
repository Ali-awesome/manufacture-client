import { useEffect, useState } from 'react';
import axios from "axios";

const useJWT = (user) => {
    const [token, setToken] = useState('');
    useEffect(() => {
        const getToken = async () => {
            console.log(user);
            const email = user?.user?.email;
            if (email) {
                const { data } = await axios.post('https://glacial-castle-94530.herokuapp.com/login', { email });
                setToken(data.accessToken);
                localStorage.setItem('accessToken', data.accessToken);
            }
        }
        getToken();
    }, [user]);
    return [token];
};

export default useJWT;