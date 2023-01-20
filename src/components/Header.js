import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';

const Header = () =>
{

    const{user, logOut}=useContext(AuthContext);
    console.log('context', user)
    const handleSignOut=()=>{
        logOut()
        .then(()=>{
            //sign out successfully 
        })

        .catch((error) => 
        console.error(error));
    }

    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
                <Link  className="btn btn-ghost normal-case text-xl" to='/'>AWESOME AUTH</Link>
                {/* first link to root/home */ }
                <Link className="btn btn-ghost normal-case text-xl" to='/'>Home</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/orders'>Orders</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/login'>Log in</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/register'>Register</Link>
                {/* conditions. if the user is available then show the user name  */}

                {user?.email && <span> Welcome, {user.email}</span>}
                {
                    user?.email?
                    <button onClick={handleSignOut} className="btn btn-sm">Log Out</button>
                    : <Link to='/login' >
                        <button className='btn btn-sm'>LOG IN</button>
                    
                    </Link>
                
                }

            </div>

        </div>
    );
};

export default Header;