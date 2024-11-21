import React from 'react';
import { NavBar } from '../../widgets/User/NavBar'
import { EventSettingsForm } from '../../widgets/Product/EventSettingsForm';

export const EventSettingsPage = () => {
    return (
        <div >
            <NavBar />
            <EventSettingsForm />
        </div>
    )
}
export default EventSettingsPage;