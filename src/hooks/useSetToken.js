import { useState, useContext } from 'react';
import { useEffect } from 'react';
import { AuthContext } from '../contexts/UserContext';
import { toast } from 'react-hot-toast';

const useSetToken = (email) => {
    const [token, setToken] = useState('');
    const {logOut} = useContext(AuthContext);
    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/jwt?email=${email}`)
                .then(res => res.json())
                .then(data => {
                    if (data.accessToken) {
                        localStorage.setItem('accessToken', data.accessToken);
                        setToken(data.accessToken);
                    }
                    else{
                        logOut()
                        .then(()=>{
                            toast.error('Invalid Account')
                        })
                        .catch(err=>console.error(err))
                    }
                });
        }
    }, [email]);
    return [token];
};

export default useSetToken;