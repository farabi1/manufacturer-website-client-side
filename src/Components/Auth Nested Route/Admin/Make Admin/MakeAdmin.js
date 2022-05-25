import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../../Loading/Loading';
import UserList from './UserList';


const MakeAdmin = () => {


    const { data: users, isLoading } = useQuery('users', () => fetch('http://localhost:5000/users')
        .then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div>
            <h1> Total User : {users.length}</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>

                            <th>User</th>
                            <th>Appoint Admin</th>
                            <th>Remove User</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users.map(user => <UserList key={user._id}
                                user={user}
                            ></UserList>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MakeAdmin;