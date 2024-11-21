import React from 'react';
import { NavBar } from '../../widgets/User/NavBar'
import { FormCompany } from '../../widgets/Company/SettingCompanyForm';

export const SettingCompanyPage = () => {
    return (
        <div >
            <NavBar />
            <FormCompany />
        </div>
    )
}
export default SettingCompanyPage;