import React from 'react';
import { NavBar } from '../../widgets/User/NavBar'
import { ProfileSettingsForm } from '../../widgets/User/ProfileSettingsForm/profile-settings-form';

export const ProfileSettingsPage = () => {
    return (
        <div >
            <NavBar />
            <ProfileSettingsForm />
        </div>
    )
}
export default ProfileSettingsPage;