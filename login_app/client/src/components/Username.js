import React from 'react';
import { Link } from 'react-router-dom';
import avatar from '../assets/profile.png';  // Correctly importing the avatar image
import styles from '../styles/Username.module.css';

export default function Username() {
    return (
        <div className="container mx-auto">
      <div className='flex justify-center items-center h-screen'>
        <div className={styles.glass}>

          <div className="title flex flex-col items-center">
            {/* <h4 className='text-5xl font-bold'>Hello Again!</h4> */}
            <h4 className='text-5xl font-bold'>SecureAuthX</h4>
            <span className='py-4 text-xl w-2/3 text-center text-gray-500'>
              Explore More by connecting with us.
                        </span>
                        <form className='py-1'>
                            <div className='profile flex justify-center py-4'>
                                {/* Correcting the avatar reference */}
                                <img src={avatar} className={styles.profile_img} alt="avatar"  />
                            </div>

                            <div className='textbox flex flex-col items-center gap-6'>
                                <input className= {styles.textbox}
                                 type='text' placeholder='Username'/>
                                <button className = {styles.btn}
                                type='submit'>Let's Go</button>
                            </div>

                            <div className='text-center py-4'>
                                <span className="text-gray-500">Not a Member? <Link className='text-red-500' to='/Register'>Register Now</Link></span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
