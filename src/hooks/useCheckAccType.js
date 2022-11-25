import { useEffect, useState } from "react"

const useCheckAccType = (email) => {
    const [accType, setAccType] = useState('');
    const [isAccLoding, setIsAccLoading] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/users/accTypeCheck/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setAccType(data.accountType);
                    setIsAccLoading(false);
                })
        }
    }, [email])
    return [accType, isAccLoding]
}

export default useCheckAccType;