import React from 'react';

const AddUser = () => {

    const handleAddUser = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;

        const user = {name, email};

        // send data to the server
        fetch('http://localhost:5000/user',{
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            console.log('success',data)
            alert('Successfully added a user')
            event.target.reset();
        })
    }
    return (
        <div className='mt-5'>
            <h1>Please Add User</h1>
            <form onSubmit={handleAddUser} className='border border-dark p-3 w-50 mx-auto my-5'>
                <div className="mb-3">
                    <input name='name' type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Name'/>
                </div>
                <div className="mb-3">
                    <input name='email' type="email" className="form-control" id="exampleInputPassword1" placeholder='Email'/>
                </div>
                <button type="submit" className="btn btn-primary">Add User</button>
            </form>
        </div>
    );
};

export default AddUser;