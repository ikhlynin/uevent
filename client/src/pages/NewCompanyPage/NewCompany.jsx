import React from 'react';
import { NavBar } from '../../widgets/User/NavBar'
import { FormNewCompany } from '../../widgets/Company/NewCompanyEvent';


export const NewCompany = () => {
    return (
        <div >
            <NavBar />
            <FormNewCompany />
        </div>
    )
}
export default NewCompany;