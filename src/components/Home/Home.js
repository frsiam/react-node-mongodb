import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';

const Home = () => {
    // get form server api 
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/user')
            .then(res => res.json())
            .then(data => {
                setUsers(data)
            })
    }, [])
    // delete data form server 
    const handleUserDelete = id => {
        const proceed = window.confirm('Are you sure you want to delete?');
        if (proceed) {
            console.log(id)
            const url = `http://localhost:5000/user/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        console.log('deleted successfully')
                        const remaining = users.filter(user => user._id !== id);
                        setUsers(remaining);
                    }
                })
        }
    }
    return (
        <>
            <div className='container my-5'>
                <h1>Avaiable Users: {users.length}</h1>
                <ul className='my-2'>
                    {
                        users.map(user => <li className='my-2 mx-5 ms-2 border border-info p-2' key={user._id}>
                            {user.name}:: {user.email}
                            <Link to={`/update/${user._id}`}><button className="btn btn-success ms-3">Update User</button></Link>
                            <button onClick={() => handleUserDelete(user._id)} className="btn btn-danger ms-4">Delete User</button>
                        </li>)
                    }
                </ul>
            </div>
        </>
    );
};

export default Home;