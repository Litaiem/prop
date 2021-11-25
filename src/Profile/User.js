import React from 'react';

const User = (data) => {
    return (
        <div className="user-container ">
            <h1>{data.fullname}</h1>
            <h2>{data.bio}</h2>
            <h2>{data.profession}</h2>
            
        </div>
    )
}

export default User
