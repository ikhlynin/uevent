import React from 'react';
// import { Link } from 'react-router-dom'
import { SortCategoru } from '../../widgets/Product/FormSortCat';
import { NavBar } from '../../widgets/User/NavBar'
import { ProductItemsCat2 } from '../../widgets/Product/EventItemCat/product-item-cat2';

// import "./style.css"

export const Productspage = () => {
    return (
        <div >
            <NavBar />
            <SortCategoru />
            <ProductItemsCat2 />
        </div>
    )
}
export default Productspage;