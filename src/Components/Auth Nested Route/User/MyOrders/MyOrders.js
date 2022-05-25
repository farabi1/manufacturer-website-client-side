import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';

const MyOrders = () => {

    const [orders, setOrders] = useState([]);

    const [user] = useAuthState(auth)
    const navigate = useNavigate()

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/orders?customer=${user.email}`)
                .then(res => res.json())
                .then(data => { setOrders(data) })

        }
    }, [user])
    return (
        <div>
            <h1>My order List: {orders.length}</h1>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Product</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) =>
                                <tr key={index} >
                                    <th>{index + 1}</th>
                                    <td>{order.customerName}</td>
                                    <td>{order.customerMail}</td>
                                    <td>{order.purchase}</td>
                                    <td>{order.address}</td>
                                </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;