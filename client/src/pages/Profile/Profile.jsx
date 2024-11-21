import React from 'react';
import { NavBar } from '../../widgets/User/NavBar'
import { Footer } from '../../widgets/User/Footer';
import { ProfileCard } from '../../widgets/User/ProfileCard/profile-card';

const Profile = () => {
    return (
        <div >
            <NavBar />
            <ProfileCard />
            <Footer />
        </div>
    )
}
export default Profile;