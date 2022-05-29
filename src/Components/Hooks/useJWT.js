import { useEffect, useState } from 'react';

const useJWT = (user) => {
    const [token, setToken] = useState('');
    useEffect(() => {
        const name = user?.displayName
        const email = user?.user?.email;
        const currentUser = { email: email, name: name };
        // console.log('from useJWT ', currentUser);
        if (email) {
            fetch(`http://localhost:5000/user/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                    const accessToken = data.token;
                    localStorage.setItem('accessToken', accessToken);
                    setToken(accessToken);
                })
        }

    }, [user]);
    return [token];
};

export default useJWT;