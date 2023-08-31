import React from 'react';
import './UserProfile.css';
import upIcon from '../images/UserProf.png';
import { Button } from 'bootstrap';
const UserProfile = () => {
    return (
        <div className='up-out-cont'>
            <div className='upc'>
                <div className='grad-up'></div>
                <div className='profile-down-up'>
                    <img src={upIcon} />
                    <div className='up-t'>Vishakha Kumari</div>
                    <div className='up-d'> <span style={{fontWeight:'bold'}}>Roll:</span> ABC0000WC<br/><span style={{fontWeight:'bold'}}>Contact No:</span> 9876543210<br/><span style={{fontWeight:'bold'}}>Email:</span> <a href='mailto:abc@test.com' style={{textDecoration:'none',color:'#ffa885'}}>abc@test.com</a></div>
                    <div className='up-d'> I'm a final year student pursuing B.Tech in Electronics and Communication Engineering.</div>
                </div>
                <div className='up-p-button'>
                    <a className='a-up-txt' href='mailto:abc@gmail.com'> Help</a>
                </div>
            </div>
        </div>
    );
}

export default UserProfile;
