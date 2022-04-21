import React from 'react';

const AddUser = () => {
    return (
        <div>
            <h1>Please Add User</h1>
            <form className='border border-dark p-3 w-50 mx-auto my-5'>
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