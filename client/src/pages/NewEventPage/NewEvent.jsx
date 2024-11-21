import React from 'react';
import { NavBar } from '../../widgets/User/NavBar'
import { FormNewEvent } from '../../widgets/Company/NewCompanyEvent';

export const NewEvent = () => {
    return (
        <div >
            <NavBar />
            <FormNewEvent />
        </div>
    )
}
export default NewEvent;