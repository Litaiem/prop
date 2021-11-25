import React from 'react';
import User from './User';




const Profile = ({users}) => {
    
    return (
        <div>
            {users.map(data)} =>(
            <User data={data} />   
            ))}
             
        </div>
    );
};

export default Profile;
