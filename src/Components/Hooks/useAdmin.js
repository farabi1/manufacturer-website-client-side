import { useEffect, useState } from "react"

const useAdmin = user => {
    const [admin, setAdmin] = useState(false);
    useEffect(() => {
        const email = user?.email;
        if (email) {
            fetch(`http://localhost:5000/admin/${email}`, {
                method: 'GET',
                headers: {
                    'content-type': 'application/json'
                }

            })
                .then(res => res.json())
                .then(data => {
                    console.log('data in use token ', data);
                    const accessToken = data.token;
                    localStorage.setItem('accessToken', accessToken);
                    setAdmin(data.admin);
                })
        }

    }, [user])
    return [admin]
}
export default useAdmin;