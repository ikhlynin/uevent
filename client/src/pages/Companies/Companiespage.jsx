import React from 'react';

import { NavBar } from '../../widgets/User/NavBar'
import { MainCardCompany } from '../../widgets/Company/MainCardCompany';
import { ProductItemsCat } from '../../widgets/Product/EventItemCat';

export const CompaniesPage = () => {
    window.scrollTo(0, 0);



    return (
        <div >
            <NavBar />
            <MainCardCompany />
            <ProductItemsCat />
        </div>
    )
}
export default CompaniesPage;