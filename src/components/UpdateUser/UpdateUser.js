import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateUser = () => {
    const { id } = useParams();
    const [user, setUser] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/user/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setUser(data))
    }, [])
    const handleUpdateUser = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;

        const updatedUser = { name, email };

        // send data to the server
        const url = `http://localhost:5000/user/${id}`
        fetch(url, {
            method: 'put',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data)
                alert('Successfully Updated a user')
                event.target.reset();
            })
    }
    return (
        <div className='container my-5'>
            <h3>Update user: {user.name}</h3>
            <form onSubmit={handleUpdateUser} className='border border-dark p-3 w-50 mx-auto my-5'>
                <div className="mb-3">
                    <input name='name' type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Name' />
                </div>
                <div className="mb-3">
                    <input name='email' type="email" className="form-control" id="exampleInputPassword1" placeholder='Email' />
                </div>
                <button type="submit" className="btn btn-primary">Update User</button>
            </form>
        </div>
    );
};

export default UpdateUser;