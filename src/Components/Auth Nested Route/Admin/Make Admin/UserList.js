import React from 'react';

const UserList = ({ user }) => {
    const { email } = user;

    const appointAdmin = () => {
        fetch(`http://localhost:5000/users/admin/${email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })

    }
    return (
        <tr>

            <td>{email}</td>
            <td><button onClick={appointAdmin} className="btn btn-outline btn-success btn-sm">Make Admin</button></td>
            <td><button className="btn btn-outline btn-error btn-sm">Remove User</button></td>

        </tr>
    );
};

export default UserList;